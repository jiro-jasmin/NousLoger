import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'
import { useContext } from 'react';
import { UserContext } from '@/components/UserContext'

export default function Document() {

  const { isAuth, toggleAuth } = useContext(UserContext);

  return (
    <Html lang="en">

      <Head>
        <title>Locations, colocations dans toute la France | NousLoger.com</title>
        <meta name="description" content="Trouvez votre collocation de rêves n'importe où en France en un clic!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserContext.Provider value={{isAuth, toggleAuth}}>
        <body>
          <header className="h-12">
            <NavBar />
          </header>
          <Main />
          <footer>
            <Footer />
          </footer>
          <NextScript />
        </body>
      </UserContext.Provider>

    </Html>
  )
}
