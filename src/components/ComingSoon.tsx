import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';

const ComingSoon: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F4F4F4] font-sans text-[#1A1A1A] flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Elements for Premium Feel */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FFB600]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#1A1A1A]/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-2xl px-6 text-center">
                <div className="inline-flex items-center justify-center p-4 mb-8 bg-white/50 backdrop-blur-md rounded-full shadow-sm border border-white/60">
                    <Clock className="w-8 h-8 text-[#FFB600] animate-pulse" />
                </div>

                <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-[#1A1A1A]">
                    Solution en cours de <br />
                    <span className="font-bold">Développement</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 leading-relaxed">
                    Nos experts finalisent cette solution pour vous offrir une expérience d'excellence.
                    <span className="block mt-2 text-base text-gray-400">Disponible très prochainement.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="group flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded-lg hover:bg-[#FFB600] hover:text-[#1A1A1A] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Retour à l'accueil
                    </Link>

                    <Link
                        to="/contact"
                        className="flex items-center justify-center px-8 py-4 bg-white text-[#1A1A1A] border border-gray-200 font-bold rounded-lg hover:border-[#FFB600] hover:bg-gray-50 transition-all duration-300"
                    >
                        <Sparkles className="w-5 h-5 mr-2 text-[#FFB600]" />
                        Être notifié du lancement
                    </Link>
                </div>
            </div>

            {/* Footer text */}
            <div className="absolute bottom-8 left-0 w-full text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Silent Office. Innovation in progress.
            </div>
        </div>
    );
};

export default ComingSoon;
