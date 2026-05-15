import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, GitBranch, BarChart2, Lock, X, ArrowRight, ChevronRight } from 'lucide-react'
import PartieComprendre from '../components/marcheCarbone/PartieComprendre'
import PartieMecanismes from '../components/marcheCarbone/PartieMecanismes'
import PartieSynthese from '../components/marcheCarbone/PartieSynthese'
import { contenuFoncier } from '../data/marcheCarboneData'

// ─────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────

const PARTIES = [
  {
    id: 1,
    label: 'Comprendre',
    sousTitre: 'Concepts & cadre',
    icone: BookOpen,
    description: 'Crédit carbone, CDN, acteurs, documents clés',
  },
  {
    id: 2,
    label: 'Mécanismes',
    sousTitre: '5 voies détaillées',
    icone: GitBranch,
    description: 'Art. 6.2, 6.4, 6.8, MVC ajusté, MVC non-ajusté',
  },
  {
    id: 3,
    label: 'Synthèse',
    sousTitre: 'Comparer & décider',
    icone: BarChart2,
    description: 'Tableau comparatif, profils types, checklist',
  },
]

// ─────────────────────────────────────────────────────────────
// PAGE PRINCIPALE
// ─────────────────────────────────────────────────────────────

export default function MarcheCarbone() {
  const [partieActive, setPartieActive] = useState(1)
  const [popupFoncier, setPopupFoncier] = useState(false)
  const navigate = useNavigate()

  const composants = {
    1: <PartieComprendre />,
    2: <PartieMecanismes />,
    3: <PartieSynthese onNavigate={setPartieActive} />,
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-16 lg:flex">

      {/* ── SIDEBAR DESKTOP ────────────────────────────────── */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:top-16 lg:left-0 lg:bottom-0 lg:w-60 lg:z-40 border-r border-white/8 bg-gray-950">

        {/* En-tête module */}
        <div className="px-5 py-6 border-b border-white/8">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-1">
            Module
          </p>
          <h2 className="text-base font-bold text-white leading-tight">
            Marché Carbone
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Côte d'Ivoire — Guide complet
          </p>
        </div>

        {/* Navigation des parties */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {PARTIES.map((partie) => {
            const Icon = partie.icone
            const actif = partieActive === partie.id
            return (
              <button
                key={partie.id}
                onClick={() => setPartieActive(partie.id)}
                className={`w-full flex items-start gap-3 rounded-xl px-3 py-3 text-left transition-all group ${
                  actif
                    ? 'bg-green-400/10 border border-green-400/20'
                    : 'hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  actif ? 'bg-green-400/20 text-green-400' : 'bg-white/5 text-gray-500 group-hover:text-gray-300'
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className={`text-sm font-semibold leading-tight transition-colors ${
                    actif ? 'text-green-400' : 'text-gray-300'
                  }`}>
                    {partie.label}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500 leading-tight truncate">
                    {partie.sousTitre}
                  </p>
                </div>
                {actif && <ChevronRight className="flex-shrink-0 h-3.5 w-3.5 text-green-400 ml-auto mt-0.5" />}
              </button>
            )
          })}
        </nav>

        {/* Bouton Sécurisation foncière */}
        <div className="px-3 py-4 border-t border-white/8">
          <button
            onClick={() => setPopupFoncier(true)}
            className="w-full flex items-center gap-3 rounded-xl px-3 py-3 border border-amber-400/20 bg-amber-400/5 text-left transition-all hover:bg-amber-400/10 group"
          >
            <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
              <Lock className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-amber-300 leading-tight">
                Sécurisation foncière
              </p>
              <p className="mt-0.5 text-xs text-amber-400/60 leading-tight">
                Prérequis incontournable
              </p>
            </div>
            <ArrowRight className="flex-shrink-0 h-3.5 w-3.5 text-amber-400/60 group-hover:text-amber-400 transition-colors" />
          </button>
        </div>
      </aside>

      {/* ── ZONE PRINCIPALE ────────────────────────────────── */}
      <div className="flex-1 lg:ml-60 flex flex-col min-w-0">

        {/* Navigation mobile (sticky sous le header) */}
        <MobileNav
          parties={PARTIES}
          partieActive={partieActive}
          onPartieClick={setPartieActive}
          onFoncierClick={() => setPopupFoncier(true)}
        />

        {/* Contenu de la partie active */}
        <main className="flex-1">
          {composants[partieActive]}
        </main>

      </div>

      {/* ── POPUP SÉCURISATION FONCIÈRE ────────────────────── */}
      {popupFoncier && (
        <PopupFoncier
          onClose={() => setPopupFoncier(false)}
          onVoirPlus={() => {
            setPopupFoncier(false)
            navigate('/securisation-fonciere')
          }}
        />
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// NAVIGATION MOBILE
// ─────────────────────────────────────────────────────────────

function MobileNav({ parties, partieActive, onPartieClick, onFoncierClick }) {
  return (
    <div className="lg:hidden sticky top-16 z-30 border-b border-white/8 bg-gray-950/95 backdrop-blur-xl">
      <div className="flex items-center">
        {/* Tabs des 3 parties */}
        <div className="flex flex-1 overflow-x-auto scrollbar-hide">
          {parties.map((partie) => {
            const Icon = partie.icone
            const actif = partieActive === partie.id
            return (
              <button
                key={partie.id}
                onClick={() => onPartieClick(partie.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3.5 text-sm font-medium border-b-2 transition-all ${
                  actif
                    ? 'border-green-400 text-green-400'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{partie.label}</span>
              </button>
            )
          })}
        </div>

        {/* Bouton foncier compact */}
        <button
          onClick={onFoncierClick}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-3.5 border-l border-white/8 text-amber-400 hover:bg-amber-400/5 transition-colors"
          title="Sécurisation foncière"
        >
          <Lock className="h-4 w-4" />
          <span className="text-xs font-medium hidden sm:inline">Foncier</span>
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// POPUP SÉCURISATION FONCIÈRE
// ─────────────────────────────────────────────────────────────

function PopupFoncier({ onClose, onVoirPlus }) {
  const { apercu } = contenuFoncier

  const couleurValide = (v) => {
    if (v === true)      return 'text-green-400'
    if (v === 'partiel') return 'text-amber-400'
    return 'text-red-400'
  }

  const iconeValide = (v) => {
    if (v === true)      return '✅'
    if (v === 'partiel') return '⚠️'
    return '❌'
  }

  const badgeNiveau = (v) => {
    if (v === 'Idéal')        return 'bg-green-400/10 text-green-400'
    if (v === 'Accepté')      return 'bg-blue-400/10 text-blue-400'
    if (v === 'Conditionnel') return 'bg-amber-400/10 text-amber-400'
    return 'bg-red-400/10 text-red-400'
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panneau popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="pointer-events-auto w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-amber-400/20 bg-gray-900 shadow-2xl shadow-black/50 animate-popup"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'popupIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both' }}
        >

          {/* En-tête popup */}
          <div className="flex items-start justify-between px-6 py-5 border-b border-white/8 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10">
                <Lock className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">{apercu.titre}</h2>
                <p className="text-xs text-amber-400/80">{apercu.sousTitre}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Corps scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

            {/* Intro */}
            <p className="text-sm leading-relaxed text-gray-300">{apercu.intro}</p>

            {/* Parcours */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Le parcours foncier
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                {apercu.parcours.map((etape, i) => (
                  <div key={i} className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-1 flex-1">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-lg">
                      {etape.icone}
                    </div>
                    <div className="sm:text-center min-w-0">
                      <p className="text-xs font-semibold text-white leading-tight">{etape.etape}</p>
                      <p className="text-xs text-gray-500 leading-tight">{etape.detail}</p>
                    </div>
                    {i < apercu.parcours.length - 1 && (
                      <div className="hidden sm:block text-gray-600 text-xs mt-1">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Types de droits */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Types de droits reconnus
              </p>
              <div className="space-y-2">
                {apercu.typesReconnus.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/3 px-3 py-2"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="flex-shrink-0 text-sm">{iconeValide(t.valide)}</span>
                      <span className={`text-sm font-medium truncate ${couleurValide(t.valide)}`}>
                        {t.doc}
                      </span>
                    </div>
                    <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${badgeNiveau(t.niveau)}`}>
                      {t.niveau}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="rounded-xl border border-amber-400/15 bg-amber-400/5 px-4 py-3">
              <p className="text-xs text-amber-300 leading-relaxed">
                ⚠️ La cession des droits carbone par l'État (via le BMC) est une étape
                distincte, obligatoire avant tout dépôt de Note d'Idée de Projet.
                Le guide complet détaille la procédure pas à pas.
              </p>
            </div>
          </div>

          {/* Pied de popup */}
          <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-white/8 flex-shrink-0">
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Fermer
            </button>
            <button
              onClick={onVoirPlus}
              className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-gray-950 transition-all hover:bg-amber-400 active:scale-95"
            >
              Voir le guide complet
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Animation keyframe inline */}
      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  )
}
