import Head from 'next/head'
import Link from 'next/link'

function HomePage () {
  return (
    <>
      <Head>
        <title>Isindireya</title>
      </Head>
      <section>
        <h2>Welcome to Isindireya</h2>
        <p>
          Isindireya is designed to be a tool for your RPG world building.
          In it, you can create characters, places, events and set relations between them.
        </p>
        <p>Down below you will find links to each creation tool.</p>
        <div>
          <Link href={ '/characters' }> Character creator </Link>
        </div>
      </section>
    </>
  )
}

export { HomePage }
