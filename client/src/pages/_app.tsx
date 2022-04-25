import '../styles/globals.css'

import CssBaseline from '@mui/material/CssBaseline'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '../app/store'
import { Header } from '../components/Home'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
<<<<<<< HEAD
    <Provider store={store}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </Provider>
=======
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
>>>>>>> master
  )
}

export default MyApp
