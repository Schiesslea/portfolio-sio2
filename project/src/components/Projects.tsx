import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'CapWithStyle',
    description: 'Site e-commerce de vente de casquettes',
    image: '/assets/images/page accueil semaine 3 part1.PNG',
    link: 'https://capwithstyle.com/',
    path: '/projects/capwithstyle',
    details: 'Un site e-commerce spécialisé dans la vente de casquettes personnalisées...'
  },
  {
    title: 'BestMovie',
    description: 'Application Web de gestion de sa cinémathèque',
    image: '/assets/images/page_accueil_cinema.jpg',
    path: '/projects/bestmovie',
    details: 'Une application web permettant de gérer sa collection de films...'
  }
];

export default function Projects() {
  const handleProjectClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Mes Projets</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-white/10"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                    <div className="flex space-x-4">
                      {project.link && (
                          <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                          >
                            <ExternalLink className="h-5 w-5 mr-2" />
                            Voir le site
                          </a>
                      )}
                      <Link
                          to={project.path}
                          onClick={handleProjectClick}
                          className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      >
                        <ArrowRight className="h-5 w-5 mr-2" />
                        Détails
                      </Link>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}