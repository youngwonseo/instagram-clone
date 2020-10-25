import '../styles/globals.css'
import { AppProps } from "next/app";
import { useApollo } from '../lib/client';
import { ApolloProvider } from '@apollo/client';
import Layout from '../components/Layout';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;