import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

let client = new ApolloClient ({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache()
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
,
  document.getElementById('root')
);