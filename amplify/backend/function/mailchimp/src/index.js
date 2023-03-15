

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 * 
 * const key = "af5fd7622e09b69a3f30fd64f3778930-us14"
//  */
// const AWS = require('aws-sdk');const secretsManager = new AWS.SecretsManager();
const process = require('process');

const mailchimp_key =  process.env.MAILCHIMP_KEY
const server_prefix = "us14"
const mailchimp = require("@mailchimp/mailchimp_marketing");
const listId = "fc4e154587";

mailchimp.setConfig({
    apiKey: mailchimp_key,
    server: server_prefix,
  });



exports.handler = async (event) => {
  const { firstName, lastName, email } = JSON.parse(event.body);
  console.log("firstname: "+ firstName)
  console.log("lastname: "+lastName)
  console.log("lastname: "+email)
  console.log(mailchimp_key)
  console.log(process.env.MAILCHIMP_KEY)
  console.log(process.env.secrets)
  // console.log(process.env.staging)

    const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      });
    
      console.log(
        `Successfully added contact with id as ${
          response.id
        }.`  );
    
    
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
