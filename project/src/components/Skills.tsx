import { Code2, Database, Shield } from 'lucide-react';

const skills = {
  development: [
    'PHP 8',
    'HTML5',
    'CSS3',
    'Symfony 6',
    'React',
    'React Native',
    'Bootstrap'
  ],
  database: [
    'SQL',
    'PL/SQL',
    'MySQL/MariaDB',
    'SQLServer'
  ],
  security: [
    'Sécurité appliquée au développement web',
    'Architecture MVC',
    'Git'
  ]
};

export default function Skills() {
  return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Compétences</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:shadow-xl dark:hover:shadow-white/10">
              <div className="flex items-center mb-6">
                <Code2 className="h-8 w-8 text-gray-900 dark:text-white mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Développement Web</h3>
              </div>
              <ul className="space-y-3">
                {skills.development.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:shadow-xl dark:hover:shadow-white/10">
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-gray-900 dark:text-white mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Base de données</h3>
              </div>
              <ul className="space-y-3">
                {skills.database.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:shadow-xl dark:hover:shadow-white/10">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-gray-900 dark:text-white mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Cybersécurité</h3>
              </div>
              <ul className="space-y-3">
                {skills.security.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
}