

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from "react";

interface WelcomeEmailV2 {
  magicLink?: string;
    customeremail: string;
    body: string;
Name: string;
}
export const WelcomeEmailV2 = ({Name,body, customeremail }: WelcomeEmailV2) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>USER Details - Name: {Name}</Preview>
      <Container style={container}>
       
        <Heading style={heading}>CONTACT EMAIL: {customeremail}</Heading>
        <Section style={bodys}>
                 <Text style={paragraph}> Attached Message: <br /></Text>

          <Text style={paragraph}> 
           {body}
          </Text>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />- {Name}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
         2025 Jordan Kaweesa Muguluma
        </Text>
      </Container>
    </Body>
  </Html>
);


export default WelcomeEmailV2;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 25px 48px',
  backgroundImage: 'url("/static/raycast-bg.png")',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat, no-repeat',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
};

const bodys = {
  margin: '24px 0',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const link = {
  color: '#FF6363',
};

const hr = {
  borderColor: '#dddddd',
  marginTop: '48px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginLeft: '4px',
};