import '../styles/globals.css'

import { AppProps } from 'next/app'
import { FC, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Header } from '../components/Home'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/hook-use-state
  const [queryClient] = useState(() => new QueryClient())
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}

export default MyApp
