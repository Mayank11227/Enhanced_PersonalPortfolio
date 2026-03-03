import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-4">Education</h2>
        <div className="w-20 h-1 bg-indigo-700 dark:bg-indigo-500 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border-l-4 border-indigo-700 dark:border-indigo-500 transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-700 dark:bg-indigo-600 text-white p-3 rounded-full">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5" />
                    <span>FS University, Agra</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span>Present</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Currently pursuing Bachelor of Computer Applications with a focus on modern 
                  web development technologies and programming fundamentals. Gaining comprehensive 
                  knowledge in software development, database management, and computer applications.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg transition-colors">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />
                    Key Areas of Study
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                    <li>• Web Development</li>
                    <li>• Data Structures</li>
                    <li>• Programming Languages</li>
                    <li>• Database Management</li>
                    <li>• Software Engineering</li>
                    <li>• Computer Networks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}