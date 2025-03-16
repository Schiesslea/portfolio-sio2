import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectHeader from '../components/shared/ProjectHeader';
import ImageCarousel from '../components/shared/ImageCarousel';
import Footer from '../components/Footer';

const images = [
  {
    src: '/assets/images/page_accueil_cinema.jpg',
    alt: 'Page d\'accueil BestMovie'
  },
  {
    src: '/assets/images/page_detail_cinema.jpg',
    alt: 'Page détail BestMovie'
  },
  {
    src: '/assets/images/page_ajouterfilm_cinema.jpg',
    alt: 'Page ajout de film BestMovie'
  }
];

export default function BestMovie() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ProjectHeader
        title="BestMovie"
        description="Application Web de gestion de sa cinémathèque"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ImageCarousel images={images} />

        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.3}}
            className="mt-16 prose prose-lg max-w-none dark:prose-invert"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Description du projet</h2>
          <p className="text-gray-600 dark:text-gray-300">
            BestMovie est une application web permettant de pouvoir gérer sa cinémathèque. C'est un projet réalisé
            pendant ma première
            année de BTS SIO en spécialité SLAM. Le but de ce projet était de créer un site qui est connecté à une base
            de données pour stocker
            les films, les commentaires ou encore les utilisateurs.
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Ce site a été réalisé avec Bootstrap, un framework front-end open-source. Il fournit une collection d'outils
            CSS et JavaScript
            qui permettent de pouvoir créer des sites rapidement et visuellement attrayants.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mt-8">
            Ce projet BestMovie m'a permis d'approfondir mes compétences en développement web et en gestion de bases de
            données.
            J'ai appris à concevoir une application complète avec des fonctionnalités d'inscription d'utilisateurs,
            d'ajout de contenu,
            et de gestion de données via des formulaires. En travaillant avec Bootstrap, j'ai pu maîtriser un framework
            front-end pour
            créer des interfaces utilisateur modernes et responsive.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Fonctionnalités principales</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>Lister ses films</li>
            <li>Formulaire pour créer un film</li>
            <li>Formulaire pour créer un commentaire avec un système de notation</li>
            <li>Possibilité de se créer un compte utilisateur et de se connecter</li>
          </ul>

          <h3 className="text-2xl font-bold mt-12 mb-3 text-gray-900 dark:text-white">Architecture Technique du
            Projet</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 ">
            <div className="space-y-2">
              <div>
                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Front-end</h4>
                <p className="text-gray-600 dark:text-gray-300">HTML et CSS (via Bootstrap) pour le design, avec JavaScript pour les fonctionnalités interactives.</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Back-end</h4>
                <p className="text-gray-600 dark:text-gray-300">PHP pour le traitement des requêtes et la gestion des données.</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Base de données</h4>
                <p className="text-gray-600 dark:text-gray-300">MySQL pour le stockage des informations relatives aux films, utilisateurs, et commentaires.</p>
              </div>
            </div>
          </div>


          <Link
              to="/"
              className="inline-flex items-center mt-12 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2"/>
            Retour aux projets
          </Link>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
}