//const { SESClient } = require('@aws-sdk/client-ses');

import { SESClient } from '@aws-sdk/client-ses';

//const { fromIni } = require('@aws-sdk/credential-provider-node');
//import { fromIni } from '@aws-sdk/credential-provider-node';
//import credentialProviderNode from '@aws-sdk/credential-provider-node';
const { fromIni } = require('@aws-sdk/credential-provider-node');

const client = new SESClient({
  region: 'ap-southeast-3',
  credentials: fromIni({ profile: 'default' }) // Adjust if needed
})

const sendEmail = async () => {
  const params = {
    Destination: {
      ToAddresses: ['tank.kim@bccard-ap.com'],
    },
    Message: {
      Body: {
        Text: { Data: 'Hello from SES!' },
      },
      Subject: { Data: 'Test Email' },
    },
    Source: 'tank.kim@bccard-ap.com',
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await client.send(command);
    console.log('Email sent:', result);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

sendEmail();