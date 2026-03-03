import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
    const projects = [
        {
            title: 'Love Calculator',
            description: 'A fun application to calculate the compatibility percentage between two names.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/Mayank11227',
            demo: '#',
        },
        {
            title: 'Astrology App',
            description: 'An app that provides daily horoscopes and astrological insights based on zodiac signs.',
            tags: ['React', 'API Integration', 'CSS'],
            github: 'https://github.com/Mayank11227',
            demo: '#',
        },
        {
            title: 'Quiz App',
            description: 'Interactive quiz application with multiple categories and a scoring system.',
            tags: ['JavaScript', 'HTML5', 'CSS3'],
            github: 'https://github.com/Mayank11227',
            demo: '#',
        },
        {
            title: 'Clicker Project',
            description: 'An engaging web-based incremental tapping game with upgrades and achievements.',
            tags: ['React', 'Tailwind CSS', 'State Management'],
            github: 'https://github.com/Mayank11227',
            demo: '#',
        },
        {
            title: 'Live Clock',
            description: 'A beautifully styled real-time digital clock with custom themes and animations.',
            tags: ['JavaScript', 'DOM Manipulation'],
            github: 'https://github.com/Mayank11227',
            demo: '#',
        },
        {
            title: 'Income Tax Calculator',
            description: 'A financial tool to compute estimated income tax based on current tax slabs.',
            tags: ['React', 'TypeScript', 'Tailwind CSS'],
            github: 'https://github.com/Mayank11227',
            demo: '#',
        },
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl text-center mb-4">My Projects</h2>
                <div className="w-20 h-1 bg-indigo-700 dark:bg-indigo-500 mx-auto mb-12"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 flex flex-col h-full"
                        >
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors ml-auto"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
