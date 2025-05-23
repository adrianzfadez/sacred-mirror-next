export default function Home() {
  return (
    <>
      <Head>
        <title>Adrián Peña | Sacred Mirror</title>
        <meta
          name="description"
          content="Mentorship meets transformation. Adrián Peña helps men shift identity, purpose, and energy."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-black text-gold min-h-screen font-sans">
        <header className="text-center py-16 border-b border-gold">
          <h1 className="text-5xl font-bold tracking-wide">Adrián Peña</h1>
          <p className="text-lg mt-2 tracking-widest uppercase">
            Barber | Mentor | Sacred Mirror Movement
          </p>
        </header>

        <p className="text-center text-lg text-gold mt-4">
          Welcome to {process.env.NEXT_PUBLIC_SITE_NAME}
        </p>

        <section className="max-w-4xl mx-auto px-6 py-12 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="leading-relaxed text-lg">
              I’m a 16-year-old visionary. I cut more than hair—I cut fear, ego, and the story.
            </p>
            <a className="mt-4 inline-block bg-gold text-black font-bold py-3 px-6 rounded-full shadow hover:bg-black hover:text-gold transition">
              Apply Now
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Barbering</h2>
            <p className="leading-relaxed text-lg">Book a transformation—not just a cut.</p>
            <a className="mt-4 inline-block bg-gold text-black font-bold py-3 px-6 rounded-full shadow hover:bg-black hover:text-gold transition">
              Book a Cut ✂️
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Connect</h2>
            <p className="leading-relaxed text-lg">
              Follow my journey on{' '}
              <a href="https://instagram.com/adrianzfadez" className="underline text-blue-400" target="_blank">
                @adrianzfadez
              </a>
            </p>
            <p className="mt-6 text-sm">© {new Date().getFullYear()} Sacred Mirror Mentorship</p>
          </div>
        </section>
      </main>
    </>
  );
}
