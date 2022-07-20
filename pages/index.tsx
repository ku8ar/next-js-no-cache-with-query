import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link href="/dummy/1">/dummy/1</Link>
        </li>
        <li>
          <Link href={"/dummy/2?a=a"}>/dummy/2?a=a</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
