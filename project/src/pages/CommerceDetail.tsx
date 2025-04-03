import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectHeader from '../components/shared/ProjectHeader';
import ImageCarousel from '../components/shared/ImageCarousel';
import Footer from '../components/Footer';

const images = [
    {
        src: '/assets/images/commerce-detail.jpg',
        alt: 'Page détail commerce Client Roi'
    },
    {
        src: '/assets/images/commerce-detail-2.jpg',
        alt: 'Maquette de la page détail commerce'
    },
    {
        src: '/assets/images/commerce-detail-3.jpg',
        alt: 'Carte et informations du commerce'
    }
];

export default function CommerceDetail() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ProjectHeader
                title="Page détail commerce Client Roi"
                description="Page détaillée pour les commerçants adhérents"
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
                        L’intégration de la page détail des commerces sur Client Roi permet d'afficher une fiche complète pour chaque commerce inscrit sur la plateforme. Cette page détail regroupe diverses informations essentielles comme le nom du commerce, son adresse, ses catégories, ses contacts, ainsi que des éléments interactifs tels qu’une galerie d’images, une section d’avis et une carte Google Maps pour la localisation.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
                        Cette page a été développée en suivant un schéma de conception préalablement défini, garantissant une structure claire et intuitive, tout en respectant les besoins fonctionnels et ergonomiques du projet.          </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Fonctionnalités principales</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>Affichage des informations détaillées du commerce</li>
                        <li>Intégration d'une carte interactive pour localiser facilement le commerce</li>
                        <li>Galerie de photos du commerce</li>
                        <li>Affichage des horaires d'ouverture</li>
                        <li>Section dédiée aux offres promotionnelles et actualités</li>
                        <li>Liens vers les réseaux sociaux du commerçant</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-3 text-gray-900 dark:text-white">Architecture Technique du Projet</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                        <div className="space-y-2">
                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Front-end</h4>
                                <p className="text-gray-600 dark:text-gray-300">HTML et CSS : Structure et mise en forme de la page détail <br/>
                                    JavaScript : Intégration de la carte Google Maps et de la galerie d'images (Lightbox)
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Back-end</h4>
                                <p className="text-gray-600 dark:text-gray-300">PHP : Génération dynamique des contenus en fonction du commerce sélectionné</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Base de données</h4>
                                <p className="text-gray-600 dark:text-gray-300">MySQL, WordPress Database Schema, Meta Fields</p>
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-wrap gap-4 mt-12">
                        <a
                            href="https://clientroi.instawp.xyz/commercant/60th-faubourg-dole/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border border-black dark:border-white rounded-md text-base font-medium text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                        >
                            <ExternalLink className="h-5 w-5 mr-2" />
                            Voir un exemple
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