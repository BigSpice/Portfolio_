// @/app/api/subscribe/email/route.ts
import { WelcomeEmail } from '@/components/email-template';
import { WelcomeEmailV2 } from '@/components/email-templateV2';

import { Resend } from 'resend';
import { tempEmailDomains } from "@/constants";
import { rateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";


const resendApiKey = process.env.NODE_ENV === 'development' 
 ? process.env.RESEND_API_KEY_DEV
 : process.env.RESEND_API_KEY_PROD
 
const resend = new Resend(resendApiKey);
const EMAIL_I_USE = process.env.EMAIL_I_USE
 
export async function POST(request: Request) {
  try {


const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  const domain = email.split("@")[1].toLowerCase();
  return !tempEmailDomains.includes(domain);
};


 const headersList = await headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    // Apply rate limiting (2 requests per minute)
    const rateLimitResult = rateLimit(ip, 2, 60 * 1000);

    if (!rateLimitResult.success) {
      return Response.json(
        { message: "Too many requests, please try again later" },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(
              (rateLimitResult.resetAt - Date.now()) / 1000,
            ).toString(),
            "X-RateLimit-Limit": "5",
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": Math.ceil(
              rateLimitResult.resetAt / 1000,
            ).toString(),
          },
        },
      );
    }



const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return Response.json(
        { message: "Content-Type must be application/json" },
        { status: 415 },
      );
    }











    const  to  = EMAIL_I_USE;


    const { name, custemail, body } = await request.json();

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return Response.json(
        { message: "Name is required" },
        { status: 400 },
      );
    }

    if (!custemail || typeof custemail !== "string" || !validateEmail(custemail)) {
      return Response.json(
        {
          message:
            "Valid email is required. Temporary or disposable email addresses are not allowed.",
        },
        { status: 400 },
      );
    }

    if (
      !body ||
      typeof body !== "string" ||
      body.trim().length === 0
    ) {
      return Response.json(
        { message: "Message is required" },
        { status: 400 },
      );
    }












    if (!to) {
      return new Response('Email address is required', { status: 400 });
    }
    // This is required to use while developing
 
    
    const from ='jordandev@lothric.link' 

    const response = await resend.emails.send({
      from: `Portfolio Webpage <${from}>`,
      to,
      subject: 'Inquiry from a user!!!',
      react: WelcomeEmailV2({Name: name,customeremail: custemail, body: body }),
    });
 console.log(response);
    // Sometimes the resend function may succeed but email was not sent
    if (response.error) {
      console.error(response.error?.message)
      return new Response('Failed to send email', { status: 500 });
    }
 
    return new Response('Email sent successfully!', { status: 200 });
  } catch (error) {
    // Sometimes the resend function may fail
    console.error('Error sending email:', error);
    return new Response('Failed to send email', { status: 500 });
  }
}