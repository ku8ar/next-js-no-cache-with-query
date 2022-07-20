import Router from 'next/router'
import NProgress from 'nprogress'
import React, { useEffect } from 'react'

import './style.css'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    NProgress.configure({ showSpinner: true })

    let timeout = null

    const handleRouteStart = (): void => {
      // defering nprogress by one event to be sure that there is async operation in router 
      timeout = setTimeout(() => NProgress.start(), 0)
    }
    const handleRouteDone = (): void => {
      clearTimeout(timeout)
      NProgress.done()
    }

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return (): void => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return <Component {...pageProps} />
}

export default App
