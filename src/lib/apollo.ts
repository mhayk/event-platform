import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-west-2.graphcms.com/v2/cl4q4i3wf2ng501xxepr7dtbk/master",
  cache: new InMemoryCache(),
});