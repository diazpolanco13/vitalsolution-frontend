import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context'

//tener la configuracion de hacia donde nos vamos a conectar para obtener los datos 
const httpLink = createHttpLink({
    uri: 'https://sheltered-citadel-45701.herokuapp.com/' || 'http://localhost:4000/',
    fetch
});

//Agregar el token y pasarlo via header
const authLink = setContext((_, { headers }) => {
    
    //Obtener token del storage
    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }

});

//Conexion a apollo cliente
const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
});

export default client;