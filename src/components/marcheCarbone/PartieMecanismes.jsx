import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { contenuMecanismes } from '../../data/marcheCarboneData'

const { onglets, mecanismes } = contenuMecanismes

// ─────────────────────────────────────────────────────────────
// CONFIG COULEURS PAR MÉCANISME
// ─────────────────────────────────────────────────────────────

const theme = {
  blue: {
    badge:   'bg-blue-400/10 text-blue-400',
    border:  'border-blue-400/20',
    bg:      'bg-blue-400/5',
    accent:  'text-blue-400',
    btn:     'bg-blue-400/10 hover:bg-blue-400/20 text-blue-300',
    step:    'bg-blue-400/10 text-blue-400',
  },
  purple: {
    badge:   'bg-purple-400/10 text-purple-400',
    border:  'border-purple-400/20',
    bg:      'bg-purple-400/5',
    accent:  'text-purple-400',
    btn:     'bg-purple-400/10 hover:bg-purple-400/20 text-purple-300',
    step:    'bg-purple-400/10 text-purple-400',
  },
  amber: {
    badge:   'bg-amber-400/10 text-amber-400',
    border:  'border-amber-400/20',
    bg:      'bg-amber-400/5',
    accent:  'text-amber-400',
    btn:     'bg-amber-400/10 hover:bg-amber-400/20 text-amber-300',
    step:    'bg-amber-400/10 text-amber-400',
  },
  green: {
    badge:   'bg-green-400/10 text-green-400',
    border:  'border-green-400/20',
    bg:      'bg-green-400/5',
    accent:  'text-green-400',
    btn:     'bg-green-400/10 hover:bg-green-400/20 text-green-300',
    step:    'bg-green-400/10 text-green-400',
  },
}

// ─────────────────────────────────────────────────────────────
// SOUS-COMPOSANTS GÉNÉRIQUES
// ─────────────────────────────────────────────────────────────

function RubriqueHeader({ label, couleur }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${theme[couleur]?.accent || 'text-gray-400'}`}>
      {label}
    </p>
  )
}

function Accordion({ titre, couleur, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const t = theme[couleur] || theme.green

  return (
    <div className={`rounded-xl border ${t.border} overflow-hidden`}>
      <button
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${t.bg} hover:opacity-90`}
      >
        <span className={`text-sm font-semibold ${t.accent}`}>{titre}</span>
        {open
          ? <ChevronUp className={`h-4 w-4 flex-shrink-0 ${t.accent}`} />
          : <ChevronDown className={`h-4 w-4 flex-shrink-0 ${t.accent}`} />
        }
      </button>
      {open && (
        <div className="px-4 py-4 bg-white/2 border-t border-white/5">
          {children}
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// RUBRIQUES
// ─────────────────────────────────────────────────────────────

function RubriqueCibles({ cibles, couleur }) {
  const t = theme[couleur] || theme.green
  return (
    <div>
      <RubriqueHeader label="À qui s'adresse ce mécanisme" couleur={couleur} />
      <div className="space-y-2">
        {cibles.map((c, i) => (
          <div key={i} className={`rounded-xl border p-4 ${t.border} ${t.bg}`}>
            <div className="flex items-start gap-2 mb-1">
              <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${t.badge}`}>
                {c.acces === 'direct' ? 'Direct' : 'Indirect'}
              </span>
              <p className="text-sm font-semibold text-white">{c.profil}</p>
            </div>
            <p className="ml-0 text-xs leading-relaxed text-gray-400 mt-1">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function RubriqueActeurs({ acteurs: liste, couleur }) {
  const t = theme[couleur] || theme.green
  return (
    <div>
      <RubriqueHeader label="Acteurs impliqués" couleur={couleur} />
      <div className="space-y-2">
        {liste.map((a, i) => (
          <div key={i} className="flex items-start gap-3 rounded-lg border border-white/8 bg-white/3 px-3 py-2">
            <span className={`flex-shrink-0 rounded-md px-1.5 py-0.5 text-xs font-bold ${t.badge}`}>
              {a.sigle}
            </span>
            <p className="text-xs leading-snug text-gray-400">{a.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function RubriqueProcessus({ processus, couleur }) {
  const t = theme[couleur] || theme.green
  return (
    <Accordion titre={`Processus — ${processus.length} étapes`} couleur={couleur} defaultOpen>
      <div className="space-y-3">
        {processus.map((p, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center flex-shrink-0">
              <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${t.step}`}>
                {p.etape}
              </span>
              {i < processus.length - 1 && (
                <div className="w-px flex-1 mt-1 bg-white/10 min-h-3" />
              )}
            </div>
            <div className="pb-3 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <p className="text-sm font-semibold text-white">{p.titre}</p>
                {p.duree && p.duree !== '—' && (
                  <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-xs text-gray-500">
                    ⏱ {p.duree}
                  </span>
                )}
              </div>
              <p className="text-xs leading-relaxed text-gray-400">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Accordion>
  )
}

function RubriqueDocuments({ documents, couleur }) {
  return (
    <Accordion titre="Documents requis" couleur={couleur}>
      <div className="space-y-2">
        {documents.map((d, i) => (
          <div key={i} className="flex items-start justify-between gap-3 border-b border-white/5 pb-2 last:border-0 last:pb-0">
            <div className="flex items-start gap-2 min-w-0">
              <span className="flex-shrink-0 text-gray-500 mt-0.5">📄</span>
              <div>
                <p className="text-sm font-medium text-white leading-tight">{d.doc}</p>
                <p className="text-xs text-gray-500 mt-0.5">{d.detail}</p>
              </div>
            </div>
            <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
              d.obligatoire
                ? 'bg-amber-400/10 text-amber-400'
                : 'bg-white/5 text-gray-500'
            }`}>
              {d.obligatoire ? 'Obligatoire' : 'Recommandé'}
            </span>
          </div>
        ))}
      </div>
    </Accordion>
  )
}

function RubriqueLettres({ lettres, couleur }) {
  const t = theme[couleur] || theme.green
  return (
    <Accordion titre="Lettres délivrées par le BMC" couleur={couleur}>
      <div className="space-y-3">
        {lettres.map((l, i) => (
          <div key={i} className={`rounded-xl border p-4 ${t.border} ${t.bg}`}>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`rounded-lg px-2 py-0.5 text-xs font-bold ${t.badge}`}>
                {i + 1}
              </span>
              <p className="text-sm font-semibold text-white">{l.type}</p>
            </div>
            <p className="text-xs text-gray-400 mb-1">{l.description}</p>
            <p className={`text-xs font-medium ${t.accent}`}>⏱ {l.moment}</p>
          </div>
        ))}
      </div>
    </Accordion>
  )
}

function RubriqueCouts({ couts, couleur }) {
  return (
    <div>
      <RubriqueHeader label="Coûts & frais" couleur={couleur} />
      <ul className="space-y-1.5">
        {couts.map((c, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
            <span className="flex-shrink-0 text-gray-600 mt-0.5">•</span>
            {c}
          </li>
        ))}
      </ul>
    </div>
  )
}

function RubriqueRisques({ risques, couleur }) {
  return (
    <div>
      <RubriqueHeader label="Risques & points de vigilance" couleur={couleur} />
      <div className="space-y-2">
        {risques.map((r, i) => (
          <div key={i} className="rounded-lg border border-red-400/15 bg-red-400/5 px-3 py-2">
            <p className="text-xs font-semibold text-red-300 mb-0.5">⚠ {r.label}</p>
            <p className="text-xs text-gray-500 leading-snug">{r.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function RubriqueRevenus({ revenus, couleur }) {
  const t = theme[couleur] || theme.green

  return (
    <div>
      <RubriqueHeader label="Revenus potentiels" couleur={couleur} />
      <p className="text-xs leading-relaxed text-gray-400 mb-3">{revenus.texte}</p>

      {/* Simulation (MVC non-ajusté) */}
      {revenus.simulation && (
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Simulations indicatives
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/3">
                  {['Scénario', 'Crédits/an', 'Prix moyen', 'Revenu brut/an'].map(col => (
                    <th key={col} className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {revenus.simulation.map((s, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="px-3 py-2.5 text-gray-300">{s.scenario}</td>
                    <td className="px-3 py-2.5 text-gray-400">{s.creditsAn}</td>
                    <td className="px-3 py-2.5 text-gray-400">{s.prixUSD} USD/t</td>
                    <td className={`px-3 py-2.5 font-semibold ${t.accent}`}>{s.revenuFCFA} FCFA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-1.5 text-xs italic text-gray-600">{revenus.note} — 1 USD ≈ 600 FCFA</p>
        </div>
      )}

      {/* Facteurs de prix */}
      {revenus.facteursPrix && (
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Facteurs qui influencent le prix
          </p>
          <div className="space-y-2">
            {revenus.facteursPrix.map((f, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <span className={`flex-shrink-0 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold ${
                  f.impact === '+' ? 'bg-green-400/10 text-green-400'
                  : f.impact === '–' ? 'bg-red-400/10 text-red-400'
                  : 'bg-white/5 text-gray-400'
                }`}>
                  {f.impact === '+' ? '↑' : f.impact === '–' ? '↓' : '~'}
                </span>
                <div>
                  <p className="font-medium text-gray-300">{f.label}</p>
                  <p className="text-gray-500">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Canaux de vente */}
      {revenus.canaux && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Canaux de vente disponibles
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {revenus.canaux.map((c, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-white/3 p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-lg">{c.icone}</span>
                  <p className="text-xs font-semibold text-white">{c.nom}</p>
                </div>
                <p className="text-xs text-green-400 mb-0.5">✅ {c.avantage}</p>
                <p className="text-xs text-gray-500">⚠️ {c.inconvenient}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function RubriqueNegociation({ negociation, couleur }) {
  if (!negociation) return null
  const t = theme[couleur] || theme.green
  return (
    <Accordion titre={negociation.titre} couleur={couleur}>
      <p className="text-xs text-gray-400 mb-3 leading-relaxed">{negociation.intro}</p>
      <ul className="space-y-1.5">
        {negociation.points.map((p, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
            <span className={`flex-shrink-0 font-bold mt-0.5 ${t.accent}`}>→</span>
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-gray-600 italic">Source : {negociation.source}</p>
    </Accordion>
  )
}

// ─────────────────────────────────────────────────────────────
// CARTE MÉCANISME COMPLÈTE
// ─────────────────────────────────────────────────────────────

function CarteMecanisme({ mec }) {
  const t = theme[mec.couleur] || theme.green

  return (
    <div className={`rounded-2xl border ${t.border} overflow-hidden mb-8`}>

      {/* En-tête mécanisme */}
      <div className={`px-6 py-5 ${t.bg} border-b ${t.border}`}>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${t.badge}`}>
            {mec.badge}
          </span>
          {mec.estPrincipal && (
            <span className="rounded-full bg-green-400 text-gray-950 px-3 py-0.5 text-xs font-bold">
              ⭐ Recommandé — porteur privé
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white">{mec.numero}</h3>
        <p className={`text-sm font-medium mt-0.5 ${t.accent}`}>{mec.titre}</p>
      </div>

      {/* Corps */}
      <div className="px-6 py-6 space-y-6">

        {/* Définition */}
        <div>
          <RubriqueHeader label="Définition" couleur={mec.couleur} />
          <p className="text-sm leading-relaxed text-gray-300">{mec.definition}</p>
          {mec.source && (
            <p className="mt-2 text-xs italic text-gray-600">{mec.source}</p>
          )}
        </div>

        {/* Cibles + Acteurs en grille */}
        <div className="grid lg:grid-cols-2 gap-5">
          <RubriqueCibles cibles={mec.cibles} couleur={mec.couleur} />
          <RubriqueActeurs acteurs={mec.acteurs} couleur={mec.couleur} />
        </div>

        {/* Processus */}
        <RubriqueProcessus processus={mec.processus} couleur={mec.couleur} />

        {/* Documents */}
        <RubriqueDocuments documents={mec.documents} couleur={mec.couleur} />

        {/* Lettres BMC */}
        <RubriqueLettres lettres={mec.lettres} couleur={mec.couleur} />

        {/* Négociation (MVC non-ajusté) */}
        {mec.négociation && (
          <RubriqueNegociation negociation={mec.négociation} couleur={mec.couleur} />
        )}

        {/* Coûts + Revenus + Risques */}
        <div className="grid lg:grid-cols-3 gap-5">
          <RubriqueCouts couts={mec.couts} couleur={mec.couleur} />
          <div className="lg:col-span-2">
            <RubriqueRevenus revenus={mec.revenus} couleur={mec.couleur} />
          </div>
        </div>

        <RubriqueRisques risques={mec.risques} couleur={mec.couleur} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// NAVIGATION PAR ONGLETS
// ─────────────────────────────────────────────────────────────

function OngletNav({ ongletActif, onOngletClick }) {
  return (
    <div className="flex gap-1 mb-8 overflow-x-auto scrollbar-hide border-b border-white/10">
      {onglets.map((o) => {
        const actif = ongletActif === o.id
        return (
          <button
            key={o.id}
            onClick={() => onOngletClick(o.id)}
            className={`flex-shrink-0 flex flex-col px-4 py-3 border-b-2 transition-all text-left ${
              actif
                ? 'border-green-400 text-white'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            <span className="text-sm font-semibold">{o.label}</span>
            <span className="text-xs text-gray-600">{o.sous}</span>
          </button>
        )
      })}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// CONTENU PAR ONGLET
// ─────────────────────────────────────────────────────────────

const mecParOnglet = {
  gouvernementaux: [mecanismes.art62, mecanismes.art64],
  nonmarche:       [mecanismes.art68],
  volontaire:      [mecanismes.mvcAjuste, mecanismes.mvcNonAjuste],
}

const introOnglet = {
  gouvernementaux: `Ces mécanismes sont portés par l'État ivoirien via le BMC.
    Les acteurs privés peuvent y participer en tant que prestataires techniques
    (développeurs de projets, bureaux d'études, consultants) sous contrat avec l'État.`,
  nonmarche: `L'Article 6.8 ne génère aucun crédit carbone. C'est un cadre de coopération
    technique internationale sans transfert de résultats d'atténuation.
    Idéal pour les ONG, institutions académiques et bureaux de formation.`,
  volontaire: `Les mécanismes de marché volontaire permettent à des acteurs privés de
    certifier et vendre des crédits carbone via des standards internationaux (Verra, Gold Standard).
    C'est la voie la plus accessible pour un porteur de projet individuel en Côte d'Ivoire.`,
}

// ─────────────────────────────────────────────────────────────
// EXPORT PRINCIPAL
// ─────────────────────────────────────────────────────────────

export default function PartieMecanismes() {
  const [ongletActif, setOngletActif] = useState('gouvernementaux')

  return (
    <div className="px-6 py-10 lg:px-10 max-w-5xl">

      {/* En-tête de partie */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-400">Partie 2</p>
        <h2 className="mt-1 text-3xl font-bold text-white">Les mécanismes carbone</h2>
        <p className="mt-2 text-gray-400 max-w-2xl">
          Cinq mécanismes, trois catégories — processus complets, documents requis,
          délais officiels, coûts et revenus pour chaque voie.
        </p>
      </div>

      {/* Navigation onglets */}
      <OngletNav ongletActif={ongletActif} onOngletClick={setOngletActif} />

      {/* Intro onglet actif */}
      <div className="mb-6 rounded-xl border border-white/10 bg-white/3 px-5 py-4">
        <p className="text-sm leading-relaxed text-gray-300">
          {introOnglet[ongletActif]}
        </p>
      </div>

      {/* Mécanismes de l'onglet actif */}
      {mecParOnglet[ongletActif].map((mec) => (
        <CarteMecanisme key={mec.id} mec={mec} />
      ))}

    </div>
  )
}
