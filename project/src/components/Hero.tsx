import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">Andy Schiesslé</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Développeur Full Stack Stagiaire</p>
          <div className="mt-8">
            <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 border border-black dark:border-white text-base font-medium rounded-md text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
            >
              En savoir plus
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
  );
}