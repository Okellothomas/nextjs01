import styles from "./page.module.css"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
          <nav>About navbar</nav>
          <main>{ children }</main>
          <footer>About footer</footer>
      </>
  )
}
