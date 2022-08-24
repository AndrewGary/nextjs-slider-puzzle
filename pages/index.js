import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Settings from '../components/Settings'
import SettingsContext from '../contexts/SettingsContext'

export default function Home() {
  return (
    <SettingsContext>
      <Settings />
    </SettingsContext>
  )
}
