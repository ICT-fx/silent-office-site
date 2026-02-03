import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, Filter } from 'lucide-react';

const CareersPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');

    const jobTypes = ['CDI', 'CDD', 'Stage', 'Alternance', 'Freelance'];
    const locations = ['Paris', 'Lyon', 'Remote', 'Hybride'];
    const departments = ['Consulting', 'Data Science', 'RPA', 'Stratégie'];

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-light mb-6">Rejoignez Silent Office</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Construisez votre carrière dans un environnement innovant où l'intelligence artificielle
                        et l'automatisation transforment les entreprises.
                    </p>
                </div>

                {/* Filtres de recherche */}
                <div className="bg-[#F4F4F4] rounded-2xl p-8 mb-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Recherche par mot-clé */}
                        <div className="lg:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Rechercher
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Titre du poste, compétences..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#FFB600] focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        {/* Type de contrat */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Type de contrat
                            </label>
                            <div className="relative">
                                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <select
                                    value={jobType}
                                    onChange={(e) => setJobType(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#FFB600] focus:outline-none transition-colors appearance-none bg-white"
                                >
                                    <option value="">Tous</option>
                                    {jobTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Localisation */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Localisation
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <select
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#FFB600] focus:outline-none transition-colors appearance-none bg-white"
                                >
                                    <option value="">Tous</option>
                                    {locations.map((loc) => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Département */}
                        <div className="lg:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Département
                            </label>
                            <div className="relative">
                                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <select
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#FFB600] focus:outline-none transition-colors appearance-none bg-white"
                                >
                                    <option value="">Tous les départements</option>
                                    {departments.map((dept) => (
                                        <option key={dept} value={dept}>{dept}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Bouton de recherche */}
                        <div className="lg:col-span-2 flex items-end">
                            <button className="w-full bg-[#FFB600] text-[#1A1A1A] py-3 px-6 rounded-lg font-bold hover:bg-[#1A1A1A] hover:text-white transition-all">
                                Rechercher
                            </button>
                        </div>
                    </div>
                </div>

                {/* État vide - Aucune offre */}
                <div className="text-center py-20">
                    <div className="w-24 h-24 bg-[#F4F4F4] rounded-full flex items-center justify-center mx-auto mb-8">
                        <Briefcase size={48} className="text-gray-400" />
                    </div>
                    <h2 className="text-3xl font-light mb-4">Aucune offre disponible pour le moment</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Nous n'avons actuellement aucune position ouverte, mais nous sommes toujours à la recherche
                        de talents exceptionnels. N'hésitez pas à nous envoyer votre candidature spontanée.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/contact"
                            className="bg-[#FFB600] text-[#1A1A1A] px-8 py-4 rounded-lg font-bold hover:bg-[#1A1A1A] hover:text-white transition-all"
                        >
                            Candidature spontanée
                        </a>
                        <a
                            href="mailto:careers@silentoffice.org"
                            className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-lg font-bold hover:bg-[#1A1A1A] hover:text-white transition-all"
                        >
                            Nous contacter
                        </a>
                    </div>
                </div>

                {/* Section Pourquoi nous rejoindre */}
                <div className="mt-24 grid md:grid-cols-3 gap-8">
                    <div className="bg-[#F4F4F4] rounded-2xl p-8">
                        <div className="w-12 h-12 bg-[#FFB600] rounded-full flex items-center justify-center mb-6">
                            <Clock size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Flexibilité</h3>
                        <p className="text-gray-600">
                            Télétravail partiel, horaires flexibles et équilibre vie professionnelle/personnelle.
                        </p>
                    </div>

                    <div className="bg-[#F4F4F4] rounded-2xl p-8">
                        <div className="w-12 h-12 bg-[#FFB600] rounded-full flex items-center justify-center mb-6">
                            <Briefcase size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Projets innovants</h3>
                        <p className="text-gray-600">
                            Travaillez sur des projets d'IA et d'automatisation à fort impact pour des clients prestigieux.
                        </p>
                    </div>

                    <div className="bg-[#F4F4F4] rounded-2xl p-8">
                        <div className="w-12 h-12 bg-[#FFB600] rounded-full flex items-center justify-center mb-6">
                            <Search size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Formation continue</h3>
                        <p className="text-gray-600">
                            Accès à des formations, certifications et conférences pour développer vos compétences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
