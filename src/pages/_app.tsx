// @ts-nocheck
import '../styles/global.css'
import { useEffect, createContext, useState } from 'react'
import Layout from '@/components/Layout'

export const AuthContext = createContext()

function MyApp({ Component, pageProps }: any) {
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const fetchAccessToken = async () => {
      const res = await fetch('/api/oauth-token')
      const json = await res.json()
      setAccessToken(json.access_token)
    }
    fetchAccessToken()
  }, [])

  return (
    <AuthContext.Provider value={accessToken}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContext.Provider>
  )
}
export default MyApp
