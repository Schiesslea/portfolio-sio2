import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectHeader from '../components/shared/ProjectHeader';
import ImageCarousel from '../components/shared/ImageCarousel';
import Footer from '../components/Footer';

const images = [
  {
    src: '/assets/images/page accueil semaine 3 part1.PNG',
    alt: 'Page d\'accueil CapWithStyle'
  },
  {
    src: '/assets/images/page boutique semaine 3.PNG',
    alt: 'Page boutique CapWithStyle'
  },
  {
    src: '/assets/images/page detail produit semaine3 part1.PNG',
    alt: 'Page détail produit CapWithStyle'
  }
];

export default function CapWithStyle() {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ProjectHeader
            title="CapWithStyle"
            description="Site e-commerce de vente de casquettes"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ImageCarousel images={images} />

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 prose prose-lg max-w-none dark:prose-invert"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Description du projet</h2>
            <p className="text-gray-600 dark:text-gray-300">
              CapWithStyle est un site e-commerce spécialisé dans la vente de casquettes personnalisées lors de mon stage de
              première année chez VISAGE THOMAS. Le projet avait pour objectif de créer une plateforme où les utilisateurs
              peuvent consulter un catalogue de produits, choisir leurs modèles préférés, et passer commande en ligne.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Le site est construit en utilisant des technologies modernes comme HTML5, CSS3, et PHP pour le côté serveur.
              Un système de gestion des utilisateurs et des produits a été mis en place, avec une base de données MySQL pour
              stocker les informations.
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Fonctionnalités principales</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>Catalogue de produits avec filtres de recherche</li>
              <li>Panier d'achat avec gestion dynamique des articles</li>
              <li>Système d'inscription et de connexion pour les utilisateurs</li>
              <li>Design responsive pour une utilisation sur mobile et desktop</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12 mb-3 text-gray-900 dark:text-white">Architecture Technique du Projet</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
              <div className="space-y-2">
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Front-end</h4>
                  <p className="text-gray-600 dark:text-gray-300">WordPress avec Divi pour la conception et la gestion des pages.<br/>
                    HTML, CSS et JavaScript pour les ajustements personnalisés du design et des animations.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Back-end</h4>
                  <p className="text-gray-600 dark:text-gray-300">WooCommerce pour la gestion du catalogue de produits et du processus de commande.<br/>
                    Contact Form 7 pour la gestion des formulaires de contact et de demande d’information.<br/>
                    Extensions complémentaires (NitroPack, MailPoet, CusRev...) pour optimiser la performance, l’email marketing et les avis clients.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Base de données</h4>
                  <p className="text-gray-600 dark:text-gray-300">MySQL (WordPress Database) pour le stockage des informations des produits, commandes, utilisateurs et paramètres du site.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <a
                  href="https://capwithstyle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-black dark:border-white rounded-md text-base font-medium text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Visiter le site
              </a>
            </div>

            <Link
                to="/"
                className="inline-flex items-center mt-12 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour aux projets
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
  );
}