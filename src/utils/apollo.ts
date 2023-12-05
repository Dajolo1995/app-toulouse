import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "./auth";
import { API_URL } from "../ViteConfg";



const link = createHttpLink({
    uri: `${API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

export default new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache(),
});
