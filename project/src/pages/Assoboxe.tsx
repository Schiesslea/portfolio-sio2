
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectHeader from '../components/shared/ProjectHeader';
import ImageCarousel from '../components/shared/ImageCarousel';
import Footer from '../components/Footer';

const images = [
    {
        src: '/assets/images/assoboxe.jpg',
        alt: 'Page d\'accueil Assoboxe'
    },
    {
        src: '/assets/images/assoboxe-2.jpg',
        alt: 'Section des cours de boxe'
    },
    {
        src: '/assets/images/assoboxe-3.jpg',
        alt: 'Section à propos du club'
    }
];

export default function Assoboxe() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ProjectHeader
                title="Assoboxe"
                description="Site web pour un club de boxe"
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
                        Assoboxe est un site web moderne conçu pour un club de boxe local. Le projet avait pour objectif de créer une
                        présence en ligne attrayante et fonctionnelle pour le club, permettant aux visiteurs de découvrir les différents
                        cours proposés, les horaires, et de s'inscrire facilement.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
                        Ma part dans ce projet a été de trouver le design et de le reproduire pour ce site. Je ne me suis pas occupé de
                        travailler sur les fonctionnalité comme l'inscription depuis le site.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Fonctionnalités principales</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>Présentation des différents types de cours et du club</li>
                        <li>Site responsive</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-3 text-gray-900 dark:text-white">Architecture Technique du Projet</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                        <div className="space-y-2">
                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Front-end</h4>
                                <p className="text-gray-600 dark:text-gray-300">Elementor pour la réalisation de la page du site.</p>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-12">
                        <a
                            href="https://assoboxe.instawp.xyz/"
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
