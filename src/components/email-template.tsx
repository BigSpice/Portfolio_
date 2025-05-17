
import { Body, Html, Text } from "@react-email/components";
import * as React from "react";
 
interface WelcomeEmailProps {
  customeremail: string;
    body: string;
Name: string;
}
 
export const WelcomeEmail = ({Name,body, customeremail }: WelcomeEmailProps) => (
  <Html>
    <Body>
      <Text>Welcome!</Text>
      <Text>User{Name} as sent an email as: {customeremail} with the message</Text>
      <Text>{body}</Text>
    </Body> 
  </Html>
);
 
export default WelcomeEmail;


