function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-800 to-gray-700 text-white pt-16 scroll-mt-16"
    >
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Sujit Shah</h2>
        <p className="text-xl md:text-2xl mb-6">Front-End Developer and problem solver</p>
        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-primary px-6 py-3 rounded-full hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
        >
          Let's Connect
        </button>
      </div>
    </section>
  );
}

export default Hero;