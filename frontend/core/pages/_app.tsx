import '../styles/globals.css'
import '../styles/font.css'
import '../styles/apply.css'

import { Provider } from 'react-redux'
import store from '../src/store'
import Layout from '../src/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store ={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp