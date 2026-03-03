import { Github, Linkedin, Mail, Download, BookOpen, Code2, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
const profileImage = '/profile.jpg';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 transition-colors overflow-hidden relative">
      {/* Background Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl mb-4 font-bold">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Mayank Yadav
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
            BCA Student | Web Developer | Programmer
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
            I'm a passionate BCA student at FS University, Agra, specializing in web development
            and programming. I build modern, responsive web applications and solve complex problems
            with code.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="bg-indigo-700 dark:bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 dark:hover:bg-indigo-700 transition-colors flex items-center gap-2 font-medium"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <button className="border-2 border-indigo-700 dark:border-indigo-500 text-indigo-700 dark:text-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors flex items-center gap-2 font-medium">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            <a
              href="https://github.com/Mayank11227"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:border-indigo-700 dark:hover:border-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-y-b42929356"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:border-indigo-700 dark:hover:border-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mayank1112227@gmail.com"
              className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:border-indigo-700 dark:hover:border-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        <div className="order-1 md:order-2 flex justify-center mt-12 md:mt-0">
          <div className="relative">
            {/* Studious Floating Animations */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -top-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-indigo-100 dark:border-indigo-900 z-20 text-indigo-600 dark:text-indigo-400"
            >
              <Code2 className="w-8 h-8" />
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
              className="absolute top-24 -right-12 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-purple-100 dark:border-purple-900 z-20 text-purple-600 dark:text-purple-400 flex flex-col items-center justify-center"
            >
              <BookOpen className="w-8 h-8" />
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '0.5s' }}
              className="absolute -bottom-8 left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-amber-100 dark:border-amber-900 z-20 text-amber-500"
            >
              <Lightbulb className="w-8 h-8" />
            </motion.div>

            {/* Glowing Ring Effect */}
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl z-10"
            >
              <img
                src={profileImage}
                alt="Mayank Yadav"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-700 to-purple-600 dark:from-indigo-600 dark:to-purple-500 text-white px-6 py-3 rounded-lg shadow-xl z-20 border border-white/20"
            >
              <p className="font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-green-400 absolute"></span>
                <span className="ml-2">Available for Work</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}