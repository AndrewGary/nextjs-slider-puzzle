import '../styles/globals.css'
import SettingsContext from '../contexts/SettingsContext'

function MyApp({ Component, pageProps }) {
  return <SettingsContext><Component {...pageProps} /></SettingsContext>
}

export default MyApp
