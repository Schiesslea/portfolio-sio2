import { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import Modal from './shared/Modal';
import PdfViewer from './shared/PdfViewer';

const certifications = {
  cnil: [
    {
      title: 'Module 1 : Le RGPD et ses notions clés',
      path: '/assets/pdf/Certificat_module1.pdf'
    },
    {
      title: 'Module 2 : Les principes de la protection des données',
      path: '/assets/pdf/Certificat_module2.pdf'
    },
    {
      title: 'Module 3 : Les responsabilités des acteurs',
      path: '/assets/pdf/Certificat_module3.pdf'
    },
    {
      title: 'Module 4 : Le DPO et les outils de la conformité',
      path: '/assets/pdf/Certificat_module4.pdf'
    },
    {
      title: 'Module 5 : Les collectivités territoriales',
      path: '/assets/pdf/Certificat_module5.pdf'
    }
  ],
  anssi: [
    {
      title: 'Certification de l\'ANSSI',
      path: '/assets/pdf/Certificat_anssi.pdf'
    }
  ]
};

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('cnil');
  const [selectedCertificate, setSelectedCertificate] = useState<{title: string, path: string} | null>(null);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Mes Certifications</h2>
        
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('cnil')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'cnil'
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              MOOC de la CNIL
            </button>
            <button
              onClick={() => setActiveTab('anssi')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'anssi'
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              MOOC de l'ANSSI
            </button>
          </nav>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-white/10">
          <div className="space-y-6">
            {(activeTab === 'cnil' ? certifications.cnil : certifications.anssi).map((cert, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center p-4 border dark:border-gray-700 rounded-lg hover:shadow-md dark:hover:shadow-white/5 transition-all"
              >
                <h3 className="text-lg font-medium mb-4 sm:mb-0 text-gray-900 dark:text-white">{cert.title}</h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className="inline-flex items-center px-4 py-2 border border-black dark:border-white rounded-md text-sm font-medium text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Voir
                  </button>
                  <a
                    href={cert.path}
                    download
                    className="inline-flex items-center px-4 py-2 border border-black dark:border-white rounded-md text-sm font-medium text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        title={selectedCertificate?.title}
      >
        {selectedCertificate && (
          <PdfViewer url={selectedCertificate.path} />
        )}
      </Modal>
    </section>
  );
}