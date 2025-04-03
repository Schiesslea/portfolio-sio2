import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectHeader from '../components/shared/ProjectHeader';
import ImageCarousel from '../components/shared/ImageCarousel';
import Footer from '../components/Footer';

const images = [
    {
        src: '/assets/images/sanctions.png',
        alt: 'Page d\'accueil Sanctions'
    },
    {
        src: '/assets/images/sanctions-2.png',
        alt: 'Formulaire de création de sanction'
    },
    {
        src: '/assets/images/sanctions-3.png',
        alt: 'Import de fichier CSV'
    }
];

export default function Sanctions() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ProjectHeader
                title="Sanctions"
                description="Application de gestion des sanctions"
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
                        L'application de gestion des sanctions est un projet réalisé durant ma deuxième année de BTS SIO permettant aux enseignants
                        et à l'administration de suivre et gérer efficacement les sanctions des étudiants. Cette application facilite
                        le processus de création, de suivi et d'archivage des sanctions disciplinaires.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
                        Le système offre une interface intuitive pour créer des sanctions, importer des listes d'étudiants via CSV,
                        et gérer les promotions.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Fonctionnalités principales</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>Création et gestion des sanctions avec informations détaillées</li>
                        <li>Import de listes d'étudiants via fichiers CSV</li>
                        <li>Gestion des promotions et des classes</li>
                        <li>Système de suivi des sanctions par étudiant</li>
                        <li>Historique complet des sanctions</li>
                        <li>Export des données pour analyse</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-3 text-gray-900 dark:text-white">Architecture Technique du Projet</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                        <div className="space-y-2">
                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Front-end</h4>
                                <p className="text-gray-600 dark:text-gray-300">HTML et CSS (via Bootstrap) pour le design</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Back-end</h4>
                                <p className="text-gray-600 dark:text-gray-300">PHP pour le traitement des requêtes et la gestion des données.</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Base de données</h4>
                                <p className="text-gray-600 dark:text-gray-300">MariaDB</p>
                            </div>
                        </div>
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