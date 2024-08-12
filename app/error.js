"use client";

import { Main } from "next/document";
import React from "react";

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>{error ? String(error) : "An unknown error occurred"}</p>
    </main>
  );
};

export default Error;
