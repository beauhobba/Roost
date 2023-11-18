

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 * 
 * const key = "af5fd7622e09b69a3f30fd64f3778930-us14"
//  */
// const AWS = require('aws-sdk');const secretsManager = new AWS.SecretsManager();
const process = require('process');

const aws = require("aws-sdk");
const ses = new aws.SES({ region: "ap-southeast-2" });



exports.handler = async (event) => {
  const { firstName, lastName, email, subject, description} = JSON.parse(event.body);
  console.log("firstname: "+ firstName)
  console.log("lastname: "+lastName)
  console.log("email: "+email)
  console.log("subject: "+subject)
  console.log("description: "+description)


  const params = {
    Destination: {
      ToAddresses: ["roostcardgame@gmail.com"],
    },
		// Interpolate the data in the strings to send
    Message: {
      Body: {
        Text: { 
            Data: `Message from ${firstName} ${lastName}- ${email}:
            ${description}` 
        },
      },
      Subject: { Data: `${firstName} - ${subject}` },
    },
    Source: "roostcardgame@gmail.com",
  };

  await ses.sendEmail(params).promise();
  return {
    statusCode: 200,
//  Uncomment below to enable CORS requests
 headers: {
     "Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Headers": "*"
 }, 
    body: JSON.stringify('Sent Request'),
};
};

