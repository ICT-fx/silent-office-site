
import React from 'react';
import { Mail, MapPin, Linkedin, ArrowRight, Instagram, Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutionsList } from '../data/solutions';
import { useContactForm } from '../hooks/useContactForm';
import { CONTACT_EMAIL, COMPANY_ADDRESS_LINES } from '../config/booking';
import { SOCIAL_PROFILES } from '../seo/siteMeta';

/**
 * Pictogrammes des réseaux. TikTok est dessiné à la main : lucide-react n'en
 * fournit pas, et les marques propriétaires n'y ont pas leur place.
 */
const SOCIAL_ICONS: Record<string, React.FC> = {
  LinkedIn: () => <Linkedin size={18} />,
  Instagram: () => <Instagram size={18} />,
  TikTok: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[18px] h-[18px]"
      aria-hidden
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ),
};

const Footer: React.FC = () => {
  const { status, error, formRef, handleSubmit, reset } = useContactForm('Pied de page');

  return (
    <footer className="bg-[#262626] text-white py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">

          {/* Column 1: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Le vrai logo, comme dans le Header : le frangipanier en moulinet.
                Ce bloc portait un carré vert pivoté dessiné en CSS, hérité d'avant
                le rebranding — une marque qui n'est pas celle de Flowera. */}
            <div className="flex items-center gap-2.5 mb-6">
              <img
                src="/flowera-logo.png"
                alt=""
                aria-hidden
                draggable={false}
                className="w-8 h-8 object-contain select-none flex-shrink-0"
              />
              <span className="text-lg font-bold tracking-tight text-white">
                FLOW<span className="font-light">ERA</span>
              </span>
            </div>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#027333] mt-0.5 flex-shrink-0" />
                <span>
                  {COMPANY_ADDRESS_LINES.map((line, i) => (
                    <React.Fragment key={line}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#027333]" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors break-all">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>

            {/* Icônes 18px, mais cible tactile 44px : au doigt, le pictogramme
                seul est trop petit pour être visé de façon fiable. Le retrait
                négatif garde l'alignement optique sur la colonne.

                Les URL viennent de `SOCIAL_PROFILES`, que le JSON-LD déclare
                aussi en `sameAs` : un profil ajouté ici est immédiatement
                connu des moteurs. L'icône X a été retirée, faute de compte.
                `rel="me"` confirme la réciprocité site ↔ profil. */}
            <div className="flex gap-0.5 pt-1 -ml-3">
              {SOCIAL_PROFILES.map(({ name, url }) => {
                const Icon = SOCIAL_ICONS[name];
                return (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="p-3 inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-gray-500 hover:text-[#027333] transition-colors"
                    title={name}
                    aria-label={`Flowera sur ${name}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Solutions links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm mb-4 text-[#027333] uppercase tracking-wider">Solutions</h4>
            {/* Liens empilés serrés : au doigt, 17px de hauteur de ligne font
                manquer la cible d'un lien sur deux. `inline-block` + padding
                ouvre chaque rangée sans changer la densité visuelle du bloc. */}
            <ul className="space-y-1 text-sm text-gray-400">
              {solutionsList.map((solution) => (
                <li key={solution.slug}>
                  <Link to={`/solutions/${solution.slug}`} className="inline-block py-1.5 lg:py-0 hover:text-[#027333] transition-colors">
                    {solution.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Compact Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#2A2A2A] rounded-2xl p-6 shadow-xl border border-white/5">
            {/* En colonne sous 640px : côte à côte, « Réponse sous 24h »
                s'écrasait sur deux lignes contre le titre. */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
              <h2 className="text-lg font-light text-white">Un message à faire passer ?</h2>
              <span className="text-xs text-gray-500 whitespace-nowrap">Réponse sous 24h</span>
            </div>

            {status === 'success' ? (
              <div className="flex items-start gap-3 py-4" role="status">
                <Check size={20} className="text-[#027333] mt-0.5 flex-shrink-0" aria-hidden />
                <div>
                  <p className="text-sm text-white font-semibold">Message reçu.</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Un accusé de réception vient de partir vers votre boîte. Nous revenons vers vous rapidement.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-3 text-sm text-gray-400 underline underline-offset-2 hover:text-white transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                {/* Piège à robots : hors flux et hors tabulation. */}
                <div className="absolute w-px h-px -left-[9999px] overflow-hidden" aria-hidden>
                  <label htmlFor="footer-website">Ne pas remplir</label>
                  <input id="footer-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="footer-name" className="sr-only">Nom</label>
                    <input
                      id="footer-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Nom"
                      className="w-full bg-[#262626] border border-gray-700 rounded-md px-3 py-2 text-sm focus:border-[#027333] outline-none transition-colors text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="footer-email" className="sr-only">E-mail</label>
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Email"
                      className="w-full bg-[#262626] border border-gray-700 rounded-md px-3 py-2 text-sm focus:border-[#027333] outline-none transition-colors text-white"
                    />
                  </div>
                </div>

                <label htmlFor="footer-message" className="sr-only">Votre message</label>
                <textarea
                  id="footer-message"
                  name="message"
                  required
                  rows={2}
                  placeholder="Votre message..."
                  className="w-full bg-[#262626] border border-gray-700 rounded-md px-3 py-2 text-sm focus:border-[#027333] outline-none transition-colors text-white resize-none"
                ></textarea>

                {status === 'error' && error && (
                  <p role="alert" className="text-sm text-[#F0A8A8]">
                    {error}{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-semibold">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-white text-[#262626] px-4 py-2.5 text-sm font-bold hover:bg-[#027333] hover:text-white transition-all flex items-center justify-center rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800 text-[10px] uppercase tracking-widest text-gray-600">
          <p>© 2026 Flowera Consulting. Tous droits réservés.</p>
          {/* Pages légales pas encore écrites. Volontairement des <span> et non
              des <Link to="#"> : React Router résout « # » vers le chemin
              courant, ce qui créait sur chaque page trois liens internes vers
              elle-même, ancrés « Mentions Légales », « Confidentialité » et
              « Cookies ». Google lit l'ancre comme une description de la
              destination. Repasser en <Link> quand les pages existeront. */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-1 md:mt-0">
            <span className="inline-block py-2 md:py-0">Mentions Légales</span>
            <span className="inline-block py-2 md:py-0">Confidentialité</span>
            <span className="inline-block py-2 md:py-0">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
