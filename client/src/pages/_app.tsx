import '../styles/globals.css'

import { AppProps } from 'next/app'
import { FC, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}

export default MyApp
