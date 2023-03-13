

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 * 
 * const key = "af5fd7622e09b69a3f30fd64f3778930-us14"
 */
const mailchimp_key = "af5fd7622e09b69a3f30fd64f3778930-us14"
const server_prefix = "us14"
const mailchimp = require("@mailchimp/mailchimp_marketing");
const listId = "fc4e154587";

mailchimp.setConfig({
    apiKey: mailchimp_key,
    server: server_prefix,
  });

//   const subscribingUser = {
//     firstName: "Prudence",
//     lastName: "McVankab",
//     email: "prudence.mcvankab@gmail.com"
//   };
//   async function run() {
//     const response = await mailchimp.ping.get();
//     console.log(response);
//   }
  
//   run();


exports.handler = async (event) => {
    const response = await mailchimp.lists.addListMember(listId, {
        email_address: event.email,
        status: "subscribed",
        merge_fields: {
          FNAME: event.firstName,
          LNAME: event.lastName
        }
      });
    
      console.log(
        `Successfully added contact as an audience member. The contact's id is ${
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
