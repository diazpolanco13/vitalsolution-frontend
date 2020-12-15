import '../styles/styles.css';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import client from '../config/apollo'
import PedidosState from '../context/pedidos/PedidosState'
import 'react-alice-carousel/lib/alice-carousel.css';



function MyApp({ Component, pageProps }) {

  return (

    <>
        <Head>
        <title>Vital Solucion Store - Te damos vida</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="apple-mobile-web-app-title" content="Vital Solution"/>
            <meta name="application-name" content="Vital Solution"/>
            <meta name="msapplication-TileColor" content="#00a300"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ApolloProvider client={client}>
        <PedidosState>
          <Component {...pageProps} />    
        </PedidosState>
      </ApolloProvider>
    </>
  )
}

export default MyApp
