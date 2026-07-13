import React from 'react';
import { FloatingTechIcons, type TechIcon } from './ui/floating-tech-icons';

// Les outils / technologies que nous maîtrisons.
// Logos répartis sur les bords pour laisser respirer la phrase centrale.
const techIcons: TechIcon[] = [
  { id: 1, src: '/logos/openai@2x.png', alt: 'OpenAI', className: 'top-[10%] left-[6%]' },
  { id: 2, src: '/logos/claude.svg', alt: 'Claude', className: 'top-[14%] left-[27%]' },
  { id: 3, src: '/logos/gemini.svg', alt: 'Google Gemini', className: 'top-[8%] left-[48%]' },
  { id: 4, src: '/logos/mistral.svg', alt: 'Mistral AI', className: 'top-[14%] right-[24%]' },
  { id: 5, src: '/logos/meta.svg', alt: 'Meta', className: 'top-[10%] right-[6%]' },
  { id: 6, src: '/logos/python@2x.png', alt: 'Python', className: 'top-[42%] left-[4%]' },
  { id: 7, src: '/logos/tensorflow.svg', alt: 'TensorFlow', className: 'top-[44%] left-[20%]' },
  { id: 8, src: '/logos/opencv@2x.png', alt: 'OpenCV', className: 'top-[44%] right-[20%]' },
  { id: 9, src: '/logos/N8n-logo-new.svg', alt: 'n8n', className: 'top-[42%] right-[4%]' },
  { id: 10, src: '/logos/Make_Logo.png', alt: 'Make', className: 'bottom-[10%] left-[6%]' },
  { id: 11, src: '/logos/aws@2x.png', alt: 'Amazon Web Services', className: 'bottom-[12%] left-[27%]' },
  { id: 12, src: '/logos/azure.svg', alt: 'Microsoft Azure', className: 'bottom-[8%] left-[48%]' },
  { id: 13, src: '/logos/google-cloud.svg', alt: 'Google Cloud', className: 'bottom-[12%] right-[24%]' },
  { id: 14, src: '/logos/Power-Automate-22.png', alt: 'Power Automate', className: 'bottom-[10%] right-[6%]' },
  { id: 15, src: '/logos/power-bi-microsoft-logo-png_seeklogo-400711.png', alt: 'Power BI', className: 'top-[68%] left-[14%]' },
];

const TechStackSection: React.FC = () => {
  return (
    <FloatingTechIcons
      icons={techIcons}
      title="Les meilleures technologies, orchestrées pour vous."
      aria-label="Technologies maîtrisées"
    />
  );
};

export default TechStackSection;
