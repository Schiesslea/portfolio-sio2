import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectHeader from '../components/shared/ProjectHeader';
import ImageCarousel from '../components/shared/ImageCarousel';
import Footer from '../components/Footer';

const images = [
    {
        src: '/assets/images/ma-video-editor.jpg',
        alt: 'Page d\'accueil MA VIDEO EDITOR'
    },
    {
        src: '/assets/images/ma-video-editor-2.jpg',
        alt: 'Page de création de compte'
    },
    {
        src: '/assets/images/ma-video-editor-3.jpg',
        alt: 'Page de devis'
    }
];

export default function MaVideoEditor() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ProjectHeader
                title="MA VIDEO EDITOR"
                description="Logiciel de montage photos et vidéos"
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
                        MA VIDEO EDITOR est un logiciel complet de montage photos et vidéos développé pour répondre aux besoins
                        des créateurs de contenu. Le projet offre une suite d'outils professionnels pour la retouche photo,
                        le montage vidéo et la création d'effets spéciaux, le tout dans une interface intuitive et moderne.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
                        Le logiciel propose différentes formules d'abonnement pour s'adapter aux besoins de chaque utilisateur,
                        du plan mensuel au plan perpétuel, permettant ainsi une grande flexibilité d'utilisation.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Fonctionnalités principales</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li>Module de retouche photo avancé</li>
                        <li>Outils de montage vidéo professionnels</li>
                        <li>Bibliothèque d'effets spéciaux</li>
                        <li>Système de gestion des projets</li>
                        <li>Export dans différents formats</li>
                        <li>Interface personnalisable</li>
                        <li>Support multi-langues</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Plans et tarification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Plan mensuel</h4>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white">9.99€</p>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">Par mois</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Plan annuel</h4>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white">99.99€</p>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">Par an</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Plan perpétuel</h4>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white">149.99€</p>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">Paiement unique</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-12 mb-3 text-gray-900 dark:text-white">Architecture Technique du Projet</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                        <div className="space-y-2">
                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Front-end</h4>
                                <p className="text-gray-600 dark:text-gray-300">React.js, TypeScript, Electron, TailwindCSS</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Back-end</h4>
                                <p className="text-gray-600 dark:text-gray-300">Node.js, Express.js, FFmpeg pour le traitement vidéo</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Base de données</h4>
                                <p className="text-gray-600 dark:text-gray-300">MongoDB pour les données utilisateurs et projets</p>
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