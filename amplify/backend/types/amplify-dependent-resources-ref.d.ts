export type AmplifyDependentResourcesAttributes = {
  "api": {
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
    "mailchimp": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}