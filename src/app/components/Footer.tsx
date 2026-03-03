import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 mb-2">
          Made with <Heart className="w-5 h-5 text-red-500 fill-current" /> by Mayank Yadav
        </p>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Mayank Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}