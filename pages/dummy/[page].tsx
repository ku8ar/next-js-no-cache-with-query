import type { NextPage } from "next";
import Link from "next/link";

export const getStaticPaths = () => ({
  paths: [],
  fallback: 'blocking'
})

export const getStaticProps = async () => {
  await new Promise((r) => setTimeout(r, 2000))

  return { revalidate: 100, props: { x: +new Date() } }
}

const Home: NextPage = () => {
  return (
    <div>
      <h1>Dummy page</h1>
      <ul>
        <li>
          <Link href="/">Go to homepage</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
