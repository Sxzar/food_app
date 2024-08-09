import Link from "next/link";
import React from "react";

const Meals = () => {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
      <p>
        <Link href="/meals/first-post">First Post</Link>
      </p>
      <p>
        <Link href="/meals/second-post">Second Post</Link>
      </p>
    </main>
  );
};

export default Meals;
