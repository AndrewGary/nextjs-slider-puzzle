import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Settings from '../components/Settings'
import DifficultyContext from '../contexts/DifficultyContext'

export default function Home() {
  return (
    <DifficultyContext>
      <Settings />
    </DifficultyContext>
  )
}
