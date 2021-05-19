import React from 'react';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Pay API</title>
        <meta name="description" content="Frontend mentors challenge" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <section>
          <h1>Next App</h1>
        </section>
      </main>
    </div>
  );
}
