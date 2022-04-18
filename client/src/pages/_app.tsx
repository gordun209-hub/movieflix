import '../styles/globals.css'

import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '../app/store'
import { Header } from '../components/Home'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
