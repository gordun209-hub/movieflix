import '../styles/globals.css'

import CssBaseline from '@mui/material/CssBaseline'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { Header } from '@/components/Home'

import { store } from '../app/store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
