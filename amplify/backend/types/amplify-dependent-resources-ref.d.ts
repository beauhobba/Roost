export type AmplifyDependentResourcesAttributes = {
  "api": {
    "Contact": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "mailchimp": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "roost": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "function": {
    "Contact": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "mailchimp": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}