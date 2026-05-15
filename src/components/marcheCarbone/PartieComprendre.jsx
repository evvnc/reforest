import { contenuComprendre } from '../../data/marcheCarboneData'

const {
  marcheCarbone,
  creditCarbone,
  engagements,
  acteurs,
  vueMecanismes,
  exigences,
  typesProjet,
  documentsClés,
} = contenuComprendre

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

function SectionHeader({ numero, titre, source }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-1">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-400/10 text-xs font-bold text-green-400">
          {numero}
        </span>
        <h3 className="text-xl font-bold text-white">{titre}</h3>
      </div>
      {source && (
        <p className="ml-10 text-xs text-gray-600 italic">{source}</p>
      )}
    </div>
  )
}

function Tableau({ colonnes, lignes, accentCol = 0 }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/3">
            {colonnes.map((col, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map((ligne, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
              {ligne.map((cell, j) => (
                <td key={j} className={`px-4 py-3 leading-snug ${
                  j === accentCol ? 'font-semibold text-white' : 'text-gray-400'
                }`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 1.1 – LE MARCHÉ CARBONE
// ─────────────────────────────────────────────────────────────

function Section11() {
  return (
    <SectionWrapper id="s1-1">
      <SectionHeader numero="1.1" titre={marcheCarbone.titre} />
      <div className="space-y-4">
        <div className="rounded-xl border border-white/10 bg-white/3 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-2">Définition</p>
          <p className="text-sm leading-relaxed text-gray-300">{marcheCarbone.definition}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/3 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-2">Pourquoi ce système existe</p>
          <p className="text-sm leading-relaxed text-gray-300">{marcheCarbone.pourquoi}</p>
        </div>
        <div className="rounded-xl border border-blue-400/15 bg-blue-400/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            🌍 Le cadre international — Accord de Paris
          </p>
          <p className="text-sm leading-relaxed text-gray-300 mb-2">{marcheCarbone.cadre.texte}</p>
          <p className="text-xs text-blue-400/70 italic">{marcheCarbone.cadre.note}</p>
        </div>
      </div>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 1.2 – LE CRÉDIT CARBONE
// ─────────────────────────────────────────────────────────────

function Section12() {
  return (
    <SectionWrapper id="s1-2">
      <SectionHeader numero="1.2" titre={creditCarbone.titre} />
      <div className="mb-5 rounded-xl border border-green-400/20 bg-green-400/5 px-5 py-4">
        <p className="text-base font-bold text-green-300">1 crédit carbone = 1 tonne de CO₂ absorbée ou évitée</p>
        <p className="mt-1 text-xs text-green-400/70">C'est l'unité de base de tout échange sur le marché carbone.</p>
      </div>
      <Tableau
        colonnes={['Concept', 'Explication']}
        lignes={creditCarbone.tableau.map(r => [r.concept, r.explication])}
      />
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 1.3 – ENGAGEMENTS CI / CDN 3.0
// ─────────────────────────────────────────────────────────────

function Section13() {
  return (
    <SectionWrapper id="s1-3">
      <SectionHeader numero="1.3" titre={engagements.titre} source={engagements.source} />
      <div className="space-y-4">
        <div className="rounded-xl border border-white/10 bg-white/3 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Qu'est-ce que la CDN ?</p>
          <p className="text-sm leading-relaxed text-gray-300">{engagements.definitionCDN}</p>
        </div>
        <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-5 flex items-center gap-4">
          <span className="text-3xl flex-shrink-0">🎯</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-1">Objectif CDN 3.0</p>
            <p className="text-sm font-semibold text-white">{engagements.objectif}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {engagements.decomposition.map((part, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/3 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{part.icone}</span>
                <p className="text-sm font-semibold text-white">{part.type}</p>
              </div>
              <p className="text-xs leading-relaxed text-gray-400">{part.description}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Conséquences pour les projets carbone</p>
          <div className="space-y-2">
            {engagements.consequencesProjet.map((c, i) => (
              <div key={i} className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${
                c.type === 'attention'
                  ? 'border-amber-400/20 bg-amber-400/5 text-amber-200'
                  : 'border-blue-400/15 bg-blue-400/5 text-blue-200'
              }`}>
                {c.type === 'attention' ? '⚠️' : 'ℹ️'} {c.regle}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 1.4 – LES ACTEURS
// ─────────────────────────────────────────────────────────────

function CarteActeur({ acteur, couleur }) {
  const cls = couleur === 'green'
    ? 'border-green-400/20 bg-green-400/3'
    : 'border-blue-400/20 bg-blue-400/3'
  const badgeCls = couleur === 'green'
    ? 'bg-green-400/10 text-green-400'
    : 'bg-blue-400/10 text-blue-400'

  return (
    <div className={`rounded-xl border p-4 ${cls}`}>
      <div className="flex items-start gap-3">
        <span className={`flex-shrink-0 rounded-lg px-2 py-1 text-xs font-bold ${badgeCls}`}>
          {acteur.sigle}
        </span>
        <div>
          <p className="text-sm font-semibold text-white leading-tight">{acteur.nom}</p>
          <p className="mt-1 text-xs leading-relaxed text-gray-400">{acteur.role}</p>
        </div>
      </div>
    </div>
  )
}

function Section14() {
  const nationaux = acteurs.liste.filter(a => a.niveau === 'national')
  const internationaux = acteurs.liste.filter(a => a.niveau === 'international')

  return (
    <SectionWrapper id="s1-4">
      <SectionHeader numero="1.4" titre={acteurs.titre} source={acteurs.source} />
      <div className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Acteurs nationaux ivoiriens</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {nationaux.map((a, i) => <CarteActeur key={i} acteur={a} couleur="green" />)}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Acteurs internationaux</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {internationaux.map((a, i) => <CarteActeur key={i} acteur={a} couleur="blue" />)}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 1.5 – VUE D'ENSEMBLE DES MÉCANISMES
// ─────────────────────────────────────────────────────────────

const badgeCat = {
  'Gouvernemental': 'bg-blue-400/10 text-blue-400',
  'Non-marché':     'bg-purple-400/10 text-purple-400',
  'Volontaire':     'bg-green-400/10 text-green-400',
}

function Section15() {
  return (
    <SectionWrapper id="s1-5">
      <SectionHeader numero="1.5" titre={vueMecanismes.titre} />
      <p className="text-sm text-gray-400 mb-5">{vueMecanismes.intro}</p>
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/3">
              {['Mécanisme', 'Catégorie', 'Principe', 'Pour qui'].map(col => (
                <th key={col} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vueMecanismes.tableau.map((row, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                <td className="px-4 py-3 font-semibold text-white whitespace-nowrap">{row.mecanisme}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badgeCat[row.categorie] || 'bg-white/10 text-gray-400'}`}>
                    {row.categorie}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-400 leading-snug">{row.principe}</td>
                <td className="px-4 py-3 text-gray-500 leading-snug text-xs">{row.pourQui}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-600 italic">
        → La Partie 2 détaille chaque mécanisme avec processus, documents et délais complets.
      </p>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 1.6 – EXIGENCES TRANSVERSALES
// ─────────────────────────────────────────────────────────────

function Section16() {
  return (
    <SectionWrapper id="s1-6">
      <SectionHeader numero="1.6" titre={exigences.titre} source={exigences.source} />
      <p className="text-sm leading-relaxed text-gray-300 mb-5">{exigences.intro}</p>
      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        {exigences.liste.map((e, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/3 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{e.icone}</span>
              <p className="text-sm font-semibold text-white">{e.titre}</p>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">{e.detail}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-red-400/15 bg-red-400/5 px-4 py-3">
        <p className="text-xs text-red-300">
          ⛔ L'absence d'un seul de ces critères dans le dossier suffit à bloquer la lettre
          de non-objection ou d'approbation du BMC.
        </p>
      </div>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 1.7 – TYPES DE PROJETS ÉLIGIBLES
// ─────────────────────────────────────────────────────────────

function Section17() {
  return (
    <SectionWrapper id="s1-7">
      <SectionHeader numero="1.7" titre={typesProjet.titre} source={typesProjet.source} />
      <div className="overflow-x-auto rounded-xl border border-white/10 mb-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/3">
              {['Type de projet', 'Éligible', 'Conditions'].map(col => (
                <th key={col} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {typesProjet.projets.map((p, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                <td className={`px-4 py-3 font-medium ${p.eligible ? 'text-white' : 'text-gray-500'}`}>
                  {p.label}
                </td>
                <td className="px-4 py-3 text-center text-base">{p.eligible ? '✅' : '❌'}</td>
                <td className={`px-4 py-3 text-xs leading-snug ${p.eligible ? 'text-gray-400' : 'text-gray-600'}`}>
                  {p.conditions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {typesProjet.notesImportantes.map((n, i) => (
          <div key={i} className="rounded-xl border border-amber-400/15 bg-amber-400/5 p-4">
            <p className="text-xs font-bold text-amber-400 mb-1">{n.terme}</p>
            <p className="text-xs leading-relaxed text-gray-400">{n.definition}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTION 1.8 – DOCUMENTS CLÉS
// ─────────────────────────────────────────────────────────────

const docCouleurs = {
  'Tous':                                    { border: 'border-green-400/20',  bg: 'bg-green-400/5',  badge: 'bg-green-400/10 text-green-400' },
  'Art. 6.2, Art. 6.4, MVC ajusté':         { border: 'border-blue-400/20',   bg: 'bg-blue-400/5',   badge: 'bg-blue-400/10 text-blue-400' },
  'MVC non-ajusté (Verra / Gold Standard)': { border: 'border-purple-400/20', bg: 'bg-purple-400/5', badge: 'bg-purple-400/10 text-purple-400' },
  'MVC non-ajusté, MVC ajusté':             { border: 'border-amber-400/20',  bg: 'bg-amber-400/5',  badge: 'bg-amber-400/10 text-amber-400' },
  'Tous sauf Art. 6.8':                     { border: 'border-white/15',      bg: 'bg-white/3',      badge: 'bg-white/10 text-gray-400' },
}

function Section18() {
  return (
    <SectionWrapper id="s1-8">
      <SectionHeader numero="1.8" titre={documentsClés.titre} source={documentsClés.source} />
      <p className="text-sm leading-relaxed text-gray-300 mb-5">{documentsClés.intro}</p>
      <div className="space-y-3">
        {documentsClés.liste.map((doc, i) => {
          const cls = docCouleurs[doc.mecanismes] || docCouleurs['Tous sauf Art. 6.8']
          return (
            <div key={i} className={`rounded-xl border p-4 ${cls.border} ${cls.bg}`}>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`rounded-lg px-2 py-0.5 text-xs font-bold ${cls.badge}`}>
                  {doc.sigle}
                </span>
                <span className="text-sm font-semibold text-white">{doc.nom}</span>
              </div>
              <p className="text-xs leading-relaxed text-gray-400 mb-3">{doc.description}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${cls.badge} ${cls.border}`}>
                  {doc.mecanismes}
                </span>
                <span className="text-xs text-gray-600 italic">{doc.etape}</span>
              </div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

// ─────────────────────────────────────────────────────────────
// MINI-NAV INTERNE
// ─────────────────────────────────────────────────────────────

const ANCRES = [
  { id: 's1-1', label: '1.1 Marché carbone' },
  { id: 's1-2', label: '1.2 Crédit carbone' },
  { id: 's1-3', label: '1.3 CDN Côte d\'Ivoire' },
  { id: 's1-4', label: '1.4 Acteurs' },
  { id: 's1-5', label: '1.5 Les 5 mécanismes' },
  { id: 's1-6', label: '1.6 Exigences' },
  { id: 's1-7', label: '1.7 Projets éligibles' },
  { id: 's1-8', label: '1.8 Documents clés' },
]

function MiniNav() {
  return (
    <div className="mb-10 overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 min-w-max pb-1">
        {ANCRES.map((a) => (
          <button
            key={a.id}
            onClick={() => document.getElementById(a.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="flex-shrink-0 rounded-lg border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-gray-400 hover:border-green-400/30 hover:text-green-400 transition-all"
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

export default function PartieComprendre() {
  return (
    <div className="px-6 py-10 lg:px-10 max-w-4xl">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-400">Partie 1</p>
        <h2 className="mt-1 text-3xl font-bold text-white">Comprendre</h2>
        <p className="mt-2 text-gray-400 max-w-2xl">
          Tout ce qu'il faut savoir sur le marché carbone avant de se lancer —
          concepts, cadre réglementaire, acteurs et documents clés en Côte d'Ivoire.
        </p>
      </div>
      <MiniNav />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <Section17 />
      <Section18 />
    </div>
  )
}
