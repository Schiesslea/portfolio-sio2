import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            © Andy Schiesslé | 2024
          </p>
          <a
            href="https://github.com/Schiesslea"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}