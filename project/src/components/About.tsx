import { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import Modal from './shared/Modal';
import PdfViewer from './shared/PdfViewer';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">À propos de moi</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Passionné par le développement web et les nouvelles technologies, je suis actuellement en deuxième
                année de BTS SIO avec une spécialisation en développement d'applications (SLAM). Mon parcours m'a
                permis de me familiariser avec des technologies variées, notamment PHP, Symfony, MySQL, ainsi que des
                outils de gestion de projets comme Scrum.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Loisirs/Hobbies</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Lorsque j'ai du temps libre, j'aime beaucoup lire des livres (roman, manga, webtoon) et jouer à des
                  jeux de stratégies comme Team Fight Tactics.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Futur</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Après l'obtention de mon diplôme en BTS SIO, je souhaiterais faire une licence professionnelle à
                  Dijon : Licence pro mention métiers de l'informatique : applications web.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.323398466728!2d6.041964576073272!3d47.264266111555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d62cef531198d%3A0x97cd6a871a81cd73!2sLyc%C3%A9e%20Louis%20Pergaud!5e1!3m2!1sfr!2sfr!4v1728652328130!5m2!1sfr!2sfr"
                  className="w-full h-[300px] rounded-lg shadow-lg"
                  allowFullScreen
                  loading="lazy"
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 border border-black dark:border-white text-base font-medium rounded-md text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Voir le CV
                </button>

                <a
                    href="/assets/pdf/SCHIESSLE Andy.pdf"
                    download
                    className="inline-flex items-center justify-center px-6 py-3 border border-black dark:border-white text-base font-medium rounded-md text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger le CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Mon CV"
        >
          <PdfViewer url="/assets/pdf/SCHIESSLE Andy.pdf" />
        </Modal>
      </section>
  );
}