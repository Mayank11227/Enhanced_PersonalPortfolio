import { User, MapPin, GraduationCap, Code } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-4">About Me</h2>
        <div className="w-20 h-1 bg-indigo-700 dark:bg-indigo-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md transition-colors">
            <h3 className="text-2xl mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="w-6 h-6 text-indigo-700 dark:text-indigo-400 mt-1" />
                <div>
                  <p className="font-semibold">Name</p>
                  <p className="text-gray-600 dark:text-gray-400">Mayank Yadav</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-indigo-700 dark:text-indigo-400 mt-1" />
                <div>
                  <p className="font-semibold">Education</p>
                  <p className="text-gray-600 dark:text-gray-400">BCA (Bachelor of Computer Applications)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-indigo-700 dark:text-indigo-400 mt-1" />
                <div>
                  <p className="font-semibold">University</p>
                  <p className="text-gray-600 dark:text-gray-400">FS University, Agra</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="w-6 h-6 text-indigo-700 dark:text-indigo-400 mt-1" />
                <div>
                  <p className="font-semibold">Focus</p>
                  <p className="text-gray-600 dark:text-gray-400">Web Development & Programming</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md transition-colors">
            <h3 className="text-2xl mb-6">What I Do</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a dedicated BCA student with a passion for creating innovative web solutions. 
              My journey in computer applications has equipped me with strong programming fundamentals 
              and modern web development skills.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I specialize in building responsive, user-friendly websites and applications using 
              the latest technologies. From frontend development with React to programming in C++ 
              and C, I enjoy tackling challenges across the full spectrum of software development.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I'm constantly learning and staying updated with industry trends to deliver 
              high-quality solutions. I believe in writing clean, efficient code and creating 
              experiences that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}