function Skills({ skills }) {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center text-gray-900 dark:text-white hover:scale-105 transition-transform"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;