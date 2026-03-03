import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

export function QuotesPanel() {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
      author: "Abigail Adams"
    },
    {
      text: "The beautiful thing about learning is that nobody can take it away from you.",
      author: "B.B. King"
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-800">
      <div className="max-w-4xl mx-auto text-center text-white">
        <Quote className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <div className="min-h-[120px] flex flex-col justify-center">
          <p className="text-2xl md:text-3xl mb-4 italic transition-opacity duration-500">
            "{quotes[currentQuote].text}"
          </p>
          <p className="text-lg opacity-90">
            — {quotes[currentQuote].author}
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentQuote ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
