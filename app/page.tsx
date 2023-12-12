import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <nav>The Home Navbar</nav>
    <main className={styles.main}>
      {children}
      </main>
      <Link href="/about"> The About Page</Link>
    <footer>The footer Navbar</footer>
    </>
  )
}
