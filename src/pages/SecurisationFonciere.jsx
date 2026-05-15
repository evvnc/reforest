import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { contenuFoncier } from '../data/marcheCarboneData'

const { complet } = contenuFoncier

// ─────────────────────────────────────────────────────────────
// COMPOSANTS PARTAGÉS
// ─────────────────────────────────────────────────────────────

function SectionWrapper({ id, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-white/5 pb-12 mb-12 last:border-0 last:mb-0">
      {children}
    </section>
  )
}

function SectionHeader({ titre, intro }) {
  return (
    <div className="mb-5">
      <h3 className="text-xl font-bold text-white mb-2">{titre}</h3>
      {intro && <p className="text-sm leading-relaxed text-gray-400">{intro}</p>}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION — POURQUOI LE FONCIER EST INCONTOURNABLE
// ─────────────────────────────────────────────────────────────

function SectionPourquoi() {
  const s = complet.sections.find(s => s.id === 'pourquoi')
  return (
    <SectionWrapper id="f-pourquoi">
      <SectionHeader titre={s.titre} />
      <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
        <p className="text-sm leading-relaxed text-gray-300">{s.contenu}</p>
      </div>
      <p className="mt-3 text-xs italic text-gray-600">{s.source}</p>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION — TYPES DE DROITS RECONNUS
// ─────────────────────────────────────────────────────────────

const valeurStyle = {
  optimal:     { icon: '✅', badge: 'bg-green-400/10 text-green-400',  text: 'text-white' },
  bon:         { icon: '✅', badge: 'bg-blue-400/10 text-blue-400',    text: 'text-white' },
  conditionnel:{ icon: '⚠️', badge: 'bg-amber-400/10 text-amber-400', text: 'text-gray-300' },
  invalide:    { icon: '❌', badge: 'bg-red-400/10 text-red-400',      text: 'text-gray-500' },
}

function SectionTypes() {
  const s = complet.sections.find(s => s.id === 'types')
  return (
    <SectionWrapper id="f-types">
      <SectionHeader titre={s.titre} />
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-sm" style={{ minWidth: '640px' }}>
          <thead>
            <tr className="border-b border-white/10 bg-white/3">
              {['Document', 'Délivré par', 'Statut juridique', 'Valeur projet carbone'].map(col => (
                <th key={col} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.tableau.map((row, i) => {
              const st = valeurStyle[row.valeurProjet] || valeurStyle.invalide
              return (
                <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className={`px-4 py-3 font-semibold leading-snug ${st.text}`}>
                    {st.icon} {row.doc}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400 leading-snug">{row.delivre}</td>
                  <td className="px-4 py-3 text-xs text-gray-400 leading-snug">{row.statut}</td>
                  <td className="px-4 py-3">
                    <div>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${st.badge}`}>
                        {row.valeurProjet === 'optimal' ? 'Idéal'
                          : row.valeurProjet === 'bon' ? 'Accepté'
                          : row.valeurProjet === 'conditionnel' ? 'Conditionnel'
                          : 'Non recevable'}
                      </span>
                      {row.note && (
                        <p className="mt-1 text-xs text-gray-600">{row.note}</p>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs italic text-gray-600">{s.source}</p>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION — PARCOURS CERTIFICAT FONCIER (AFOR)
// ─────────────────────────────────────────────────────────────

function SectionParcoursCF() {
  const s = complet.sections.find(s => s.id === 'parcours-cf')
  return (
    <SectionWrapper id="f-parcours-cf">
      <SectionHeader titre={s.titre} intro={s.intro} />

      {/* Étapes */}
      <div className="space-y-3 mb-5">
        {s.etapes.map((e, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center flex-shrink-0">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10 text-xs font-bold text-amber-400">
                {e.num}
              </span>
              {i < s.etapes.length - 1 && (
                <div className="w-px flex-1 mt-1 bg-white/10 min-h-4" />
              )}
            </div>
            <div className="pb-3 min-w-0">
              <p className="text-sm font-semibold text-white mb-1">{e.titre}</p>
              <p className="text-xs leading-relaxed text-gray-400">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Durée estimée */}
      <div className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 flex items-center gap-3">
        <span className="text-xl flex-shrink-0">⏱</span>
        <div>
          <p className="text-xs font-semibold text-white">Durée estimée</p>
          <p className="text-xs text-gray-400">{s.dureeEstimee}</p>
        </div>
      </div>
      <p className="mt-2 text-xs italic text-gray-600">{s.source}</p>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION — DU CF AU TITRE FONCIER
// ─────────────────────────────────────────────────────────────

function SectionParcoursTF() {
  const s = complet.sections.find(s => s.id === 'parcours-tf')
  return (
    <SectionWrapper id="f-parcours-tf">
      <SectionHeader titre={s.titre} intro={s.intro} />

      <div className="overflow-x-auto rounded-xl border border-white/10 mb-4">
        <div className="divide-y divide-white/5">
          {s.dossier.map((item, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3">
              <span className="flex-shrink-0 text-gray-500 mt-0.5">📄</span>
              <p className="text-sm text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-red-400/15 bg-red-400/5 px-4 py-3">
        <p className="text-xs text-red-300">⛔ {s.attention}</p>
      </div>
      <p className="mt-2 text-xs italic text-gray-600">{s.source}</p>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION — DROITS CARBONE & CESSION
// ─────────────────────────────────────────────────────────────

function SectionDroitsCarbone() {
  const s = complet.sections.find(s => s.id === 'droits-carbone')
  return (
    <SectionWrapper id="f-droits-carbone">
      <SectionHeader titre={s.titre} intro={s.intro} />
      <div className="space-y-3">
        <div className="rounded-xl border border-blue-400/15 bg-blue-400/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">Principe</p>
          <p className="text-sm leading-relaxed text-gray-300">{s.principe}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/3 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Référence légale & exemple concret
          </p>
          <p className="text-sm leading-relaxed text-gray-400">{s.refLegale}</p>
        </div>
      </div>
      <p className="mt-3 text-xs italic text-gray-600">{s.source}</p>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION — PLAN D'ACTION
// ─────────────────────────────────────────────────────────────

function SectionPlanAction() {
  const s = complet.sections.find(s => s.id === 'plan-action')
  return (
    <SectionWrapper id="f-plan-action">
      <SectionHeader titre={s.titre} />
      <div className="space-y-3">
        {s.etapes.map((e, i) => (
          <div key={i} className="flex gap-4 rounded-xl border border-white/10 bg-white/3 p-4">
            <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-400/10 text-xs font-bold text-green-400">
              {e.num}
            </span>
            <div>
              <p className="text-sm font-semibold text-white mb-1">{e.titre}</p>
              <p className="text-xs leading-relaxed text-gray-400">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION — CONTACT AFOR
// ─────────────────────────────────────────────────────────────

function SectionContact() {
  const s = complet.sections.find(s => s.id === 'contact')
  return (
    <SectionWrapper id="f-contact">
      <SectionHeader titre={s.titre} />
      <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
        <div className="mb-4">
          <p className="text-lg font-bold text-white">{s.entite}</p>
          <p className="text-xs text-amber-400/70">{s.decret}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-3 text-sm">
            <span className="flex-shrink-0 text-amber-400">📍</span>
            <p className="text-gray-300">{s.adresse}</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex-shrink-0 text-amber-400">✉️</span>
            <a href={`mailto:${s.email}`} className="text-amber-300 hover:text-amber-200 transition-colors">
              {s.email}
            </a>
          </div>
          {s.tel.map((t, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="flex-shrink-0 text-amber-400">📞</span>
              <a href={`tel:${t.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                {t}
              </a>
            </div>
          ))}
          <div className="flex items-center gap-3 text-sm">
            <span className="flex-shrink-0 text-amber-400">🌐</span>
            <a
              href={`https://${s.site}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-200 transition-colors"
            >
              {s.site}
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// MINI-NAV INTERNE
// ─────────────────────────────────────────────────────────────

const ANCRES = [
  { id: 'f-pourquoi',      label: 'Pourquoi c\'est incontournable' },
  { id: 'f-types',         label: 'Types de droits' },
  { id: 'f-parcours-cf',   label: 'Certificat Foncier (AFOR)' },
  { id: 'f-parcours-tf',   label: 'Titre Foncier' },
  { id: 'f-droits-carbone',label: 'Droits carbone & cession' },
  { id: 'f-plan-action',   label: 'Plan d\'action' },
  { id: 'f-contact',       label: 'Contact AFOR' },
]

function MiniNav() {
  return (
    <div className="mb-10 overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 min-w-max pb-1">
        {ANCRES.map((a) => (
          <button
            key={a.id}
            onClick={() => document.getElementById(a.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="flex-shrink-0 rounded-lg border border-amber-400/20 bg-amber-400/5 px-3 py-1.5 text-xs text-amber-400/80 hover:border-amber-400/40 hover:text-amber-300 transition-all"
          >
            {a.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// EXPORT PRINCIPAL
// ─────────────────────────────────────────────────────────────

export default function SecurisationFonciere() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-950 pt-16">
      <div className="mx-auto max-w-4xl px-6 py-10">

        {/* Retour */}
        <button
          onClick={() => navigate('/marche-carbone')}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Retour au Marché Carbone
        </button>

        {/* En-tête */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-full bg-amber-400/10 px-3 py-0.5 text-xs font-bold text-amber-400">
              Sous-module
            </span>
            <span className="text-xs text-gray-600">Module Marché Carbone</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Sécurisation foncière</h1>
          <p className="mt-2 text-gray-400 max-w-2xl">
            En Côte d'Ivoire, aucun projet carbone ne peut être enregistré sans
            preuve de maîtrise foncière. Ce guide couvre les droits reconnus,
            les procédures AFOR et la cession des droits carbone par l'État.
          </p>
        </div>

        {/* Mini-nav */}
        <MiniNav />

        {/* Sections */}
        <SectionPourquoi />
        <SectionTypes />
        <SectionParcoursCF />
        <SectionParcoursTF />
        <SectionDroitsCarbone />
        <SectionPlanAction />
        <SectionContact />

      </div>
    </div>
  )
}
