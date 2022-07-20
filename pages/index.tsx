import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Clicking on a link with query causes an additional request to Next before redirection</h1>
      <ul>
        <li>
          <Link href="/dummy/1">/dummy/1</Link>
        </li>
        <li>
          <Link href={"/dummy/2?a=a"}>/dummy/2?a=a [broken cache hit]</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
