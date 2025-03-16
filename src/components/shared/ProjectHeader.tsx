import { motion } from 'framer-motion';

interface ProjectHeaderProps {
  title: string;
  description: string;
}

export default function ProjectHeader({ title, description }: ProjectHeaderProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">{description}</p>
      </motion.div>
    </div>
  );
}