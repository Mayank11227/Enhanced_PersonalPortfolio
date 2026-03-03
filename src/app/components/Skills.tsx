export function Skills() {
  const skills = [
    { name: 'HTML', level: 90, color: 'bg-orange-500' },
    { name: 'CSS', level: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
    { name: 'React', level: 75, color: 'bg-cyan-500' },
    { name: 'C++', level: 85, color: 'bg-purple-500' },
    { name: 'C Programming', level: 80, color: 'bg-indigo-500' },
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      icon: '🎨',
    },
    {
      title: 'Programming Languages',
      skills: ['C++', 'C Programming', 'JavaScript'],
      icon: '💻',
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'VS Code', 'Responsive Design', 'Problem Solving'],
      icon: '🛠️',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-indigo-700 dark:bg-indigo-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-8">Skill Categories</h3>
            <div className="space-y-6">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-indigo-700 dark:border-indigo-500 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{category.icon}</span>
                    <h4 className="text-xl font-semibold">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-800 dark:to-purple-800 text-white p-8 rounded-lg text-center transition-colors">
          <h3 className="text-2xl mb-4">Always Learning, Always Growing</h3>
          <p className="text-lg">
            Committed to continuous improvement and staying updated with the latest technologies
          </p>
        </div>
      </div>
    </section>
  );
}