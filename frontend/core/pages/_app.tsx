import '../styles/font.css'
import '../styles/apply.css'
import '../styles/globals.css'

import { Provider } from 'react-redux'
import store from '../src/Redux/store'
import Layout from '../src/layout/Layout'
import {QueryClient, QueryClientProvider} from 'react-query'

function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client= {queryClient}>
      <Provider store ={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp