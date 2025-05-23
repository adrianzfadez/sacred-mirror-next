
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrián Peña | Sacred Mirror</title>
        <meta name="description" content="Mentorship meets transformation. Adrián Peña helps men shift identity, purpose, and energy through sacred conversation and clean cuts." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-black text-gold min-h-screen font-sans">
        <header className="text-center py-16 border-b border-gold">
          <h1 className="text-5xl font-bold tracking-wide">Adrián Peña</h1>
          <p className="text-lg mt-2 tracking-widest uppercase">Barber | Mentor | Sacred Mirror Movement</p>
        </header>

        <section className="max-w-4xl mx-auto px-6 py-12 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="leading-relaxed text-lg">I’m a 16-year-old visionary. I cut more than hair—I cut fear, ego, and the stories that hold people back.</p>
            <a className="mt-4 inline-block bg-gold text-black font-bold py-3 px-6 rounded-full shadow hover:bg-black hover:text-gold border-2 border-gold transition" href="https://forms.gle/XQwnDFrjzrPEqs6C9" target="_blank">Apply Now</a>
          </div>
        </section>

        <footer className="text-center text-sm py-8 border-t border-gold mt-8 font-light">
          <p>© 2025 Sacred Mirror Mentorship</p>
        </footer>
      </main>
    </>
  )
}
