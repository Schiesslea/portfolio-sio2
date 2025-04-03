import { Rss, BookOpen, Share2, Shield, Code2, PenTool as Tool } from 'lucide-react';

const sources = [
    {
        title: 'Veille sur la Cybersécurité',
        description: 'Suivi des dernières menaces et bonnes pratiques en sécurité informatique',
        tools: ['ANSSI', 'Zataz', 'Security Affairs'],
        icon: Shield
    },
    {
        title: 'Développement Web',
        description: 'Actualités sur les frameworks et nouvelles technologies web',
        tools: ['Dev.to', 'Medium', 'Smashing Magazine'],
        icon: Code2
    },
    {
        title: 'Outils et Méthodes',
        description: 'Découverte des nouveaux outils et méthodologies de développement',
        tools: ['GitHub Blog', 'ProductHunt', 'Hacker News'],
        icon: Tool
    }
];

export default function TechWatch() {
    return (
        <section id="tech-watch" className="min-h-screen py-20 bg-white dark:bg-gray-900 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Veille Technologique
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sources.map((source, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:shadow-xl dark:hover:shadow-white/10"
                        >
                            <div className="flex items-center mb-6">
                                <source.icon className="h-8 w-8 text-gray-900 dark:text-white mr-3" />
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {source.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                {source.description}
                            </p>
                            <div className="space-y-2">
                                <h4 className="font-medium text-gray-900 dark:text-white">Sources principales :</h4>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                                    {source.tools.map((tool, toolIndex) => (
                                        <li key={toolIndex}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Ma veille technologique est un processus continu qui me permet de rester à jour sur les dernières
                        évolutions du secteur informatique. Je combine différentes sources d'information et outils pour
                        maintenir mes connaissances à jour et anticiper les futures tendances du marché.
                    </p>
                </div>
            </div>
        </section>
    );
}