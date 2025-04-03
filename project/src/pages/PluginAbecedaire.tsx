import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectHeader from '../components/shared/ProjectHeader';
import ImageCarousel from '../components/shared/ImageCarousel';
import Footer from '../components/Footer';

const images = [
    {
        src: '/assets/images/abecedaire-plugin.jpg',
        alt: 'Page d\'accueil Plugin abécédaire'
    },
    {
        src: '/assets/images/abecedaire-plugin-2.jpg',
        alt: 'Recherche par lettre Plugin abécédaire'
    },
    {
        src: '/assets/images/abecedaire-plugin-3.jpg',
        alt: 'Fiche commerçant Plugin abécédaire'
    }
];

export default function PluginAbecedaire() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ProjectHeader
                title="Plugin abécédaire"
                description="Plugin WordPress pour Client Roi"
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
                        Le Plugin abécédaire est une extension WordPress développée pour Client Roi, une fédération de commerçants.
                        Ce plugin permet de créer un répertoire alphabétique des commerçants adhérents à la fédération, offrant ainsi
                        une visibilité accrue aux commerces locaux et facilitant la recherche pour les utilisateurs.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
                        L’objectif principal du plugin est d’offrir une interface intuitive qui s’adapte aux préférences des utilisateurs
                        en intégrant un système de filtrage par ville synchronisé avec le menu principal du site. Lorsqu’un utilisateur sélectionne une ville,
                        l’abécédaire ajuste automatiquement la liste des commerces en affichant uniquement ceux correspondant à cette localisation.
                        Ce plugin fonctionne seulement avec les commerces provenant d'un autre plugin qui se nomme Agile Store Locator.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Fonctionnalités principales</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>Navigation alphabétique intuitive</li>
                        <li>Filtrage des commerçants par ville</li>
                        <li>Mise à jour dynamique du titre de la page en fonction de la ville sélectionnée</li>
                        <li>Conservation des préférences de ville grâce au stockage local</li>
                        <li>Design responsive adapté à tous les appareils</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-3 text-gray-900 dark:text-white">Architecture Technique du Projet</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                        <div className="space-y-2">
                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Front-end</h4>
                                <p className="text-gray-600 dark:text-gray-300">HTML et CSS pour la mise en page et le style des éléments interactifs <br/>
                                    JavaScript pour la synchronisation dynamique des filtres et la gestion des interactions utilisateur</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Back-end</h4>
                                <p className="text-gray-600 dark:text-gray-300">PHP pour générer dynamiquement la liste des commerces et gérer les requêtes de filtrage</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Base de données</h4>
                                <p className="text-gray-600 dark:text-gray-300">AdminerEvo pour stocker les informations des commerces, y compris leur nom, leur ville et leur catégorie</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-12">
                        <a
                            href="https://clientroi.instawp.xyz/abecedaire-commercants-client-roi/"
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