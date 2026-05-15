import { contenuSynthese } from '../../data/marcheCarboneData'

const { tableau, profils, checklist } = contenuSynthese

// ─────────────────────────────────────────────────────────────
// COULEURS PAR MÉCANISME
// ─────────────────────────────────────────────────────────────

const couleurMec = {
  art62:       { badge: 'bg-blue-400/10 text-blue-400',   dot: 'bg-blue-400' },
  art64:       { badge: 'bg-blue-400/10 text-blue-400',   dot: 'bg-blue-400' },
  art68:       { badge: 'bg-purple-400/10 text-purple-400', dot: 'bg-purple-400' },
  mvcAjuste:   { badge: 'bg-amber-400/10 text-amber-400', dot: 'bg-amber-400' },
  mvcNonAjuste:{ badge: 'bg-green-400/10 text-green-400', dot: 'bg-green-400' },
}

const couleurProfil = {
  green:  { border: 'border-green-400/20',  bg: 'bg-green-400/5',  badge: 'bg-green-400/10 text-green-400' },
  blue:   { border: 'border-blue-400/20',   bg: 'bg-blue-400/5',   badge: 'bg-blue-400/10 text-blue-400' },
  purple: { border: 'border-purple-400/20', bg: 'bg-purple-400/5', badge: 'bg-purple-400/10 text-purple-400' },
  amber:  { border: 'border-amber-400/20',  bg: 'bg-amber-400/5',  badge: 'bg-amber-400/10 text-amber-400' },
}

function determineCouleurProfil(mecanisme) {
  if (mecanisme.includes('6.2') || mecanisme.includes('ajusté')) return 'blue'
  if (mecanisme.includes('6.8')) return 'purple'
  if (mecanisme.includes('non-ajusté')) return 'green'
  return 'amber'
}

// ─────────────────────────────────────────────────────────────
// SECTION HEADER
// ─────────────────────────────────────────────────────────────

function SectionHeader({ titre, sousTitre }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-white">{titre}</h3>
      {sousTitre && <p className="mt-1 text-sm text-gray-500">{sousTitre}</p>}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// TABLEAU COMPARATIF
// ─────────────────────────────────────────────────────────────

function TableauComparatif() {
  const { criteres, mecanismes: mecs } = tableau

  // Index des critères visuellement importants
  const complexiteIndex = criteres.indexOf('Complexité')
  const complexiteStyle = (val) => {
    if (val === 'Très élevée') return 'text-red-400 font-semibold'
    if (val === 'Élevée')      return 'text-amber-400 font-semibold'
    if (val === 'Modérée')     return 'text-yellow-400 font-semibold'
    if (val === 'Faible')      return 'text-green-400 font-semibold'
    return 'text-gray-400'
  }

  const ajustementIndex = criteres.indexOf('Ajustement CDN')
  const transfertIndex = criteres.indexOf('Crédits transférés')

  return (
    <div>
      <SectionHeader
        titre={tableau.titre}
        sousTitre="Faites défiler horizontalement pour voir tous les critères"
      />
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="text-sm" style={{ minWidth: '860px', width: '100%' }}>
          <thead>
            <tr className="border-b border-white/10 bg-white/3">
              <th className="sticky left-0 bg-gray-900 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 min-w-32 z-10">
                Critère
              </th>
              {mecs.map((m) => (
                <th key={m.id} className="px-4 py-3 text-left">
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${couleurMec[m.id]?.badge}`}>
                      {m.nom}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteres.map((critere, ci) => (
              <tr key={ci} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                <td className="sticky left-0 bg-gray-950 px-4 py-3 text-xs font-semibold text-gray-400 z-10 min-w-32 border-r border-white/5">
                  {critere}
                </td>
                {mecs.map((m) => {
                  const val = m.values[ci]
                  let cellCls = 'text-gray-400'
                  if (ci === complexiteIndex) cellCls = complexiteStyle(val)
                  if (ci === ajustementIndex) cellCls = val === 'Oui' ? 'text-amber-400 font-medium' : 'text-green-400 font-medium'
                  if (ci === transfertIndex)  cellCls = val === 'Non' ? 'text-gray-500' : 'text-white font-medium'

                  return (
                    <td key={m.id} className={`px-4 py-3 text-xs leading-snug ${cellCls}`}>
                      {val}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs italic text-gray-600">
        Délais indicatifs — peuvent varier selon la complexité du projet et les délais BMC en vigueur.
      </p>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// PROFILS TYPES
// ─────────────────────────────────────────────────────────────

function ProfilsTypes() {
  return (
    <div>
      <SectionHeader
        titre={profils.titre}
        sousTitre={profils.intro}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {profils.liste.map((p, i) => {
          const couleur = determineCouleurProfil(p.mecanisme)
          const cls = couleurProfil[couleur]
          return (
            <div key={i} className={`rounded-2xl border p-5 ${cls.border} ${cls.bg}`}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl flex-shrink-0">{p.icone}</span>
                <p className="text-sm font-bold text-white leading-snug">{p.profil}</p>
              </div>
              <div className="mb-3">
                <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${cls.badge}`}>
                  → {p.mecanisme}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-gray-400">{p.justification}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// CHECKLIST DÉCISIONNELLE
// ─────────────────────────────────────────────────────────────

function Checklist() {
  return (
    <div>
      <SectionHeader
        titre={checklist.titre}
        sousTitre="À parcourir avant de choisir votre mécanisme et de contacter le BMC."
      />
      <div className="space-y-3">
        {checklist.questions.map((q, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/3 px-4 py-4"
          >
            <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-green-400/30 bg-green-400/5 text-xs font-bold text-green-400">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-gray-300">{q}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-green-400/20 bg-green-400/5 px-5 py-4">
        <p className="text-sm text-green-200">
          ✅ Si vous avez répondu positivement aux 5 premières questions,
          votre projet est potentiellement éligible. Le BMC reste le seul
          interlocuteur officiel pour confirmer l'éligibilité.
        </p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// EXPORT PRINCIPAL
// ─────────────────────────────────────────────────────────────

export default function PartieSynthese() {
  return (
    <div className="px-6 py-10 lg:px-10 max-w-5xl">

      {/* En-tête */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-400">Partie 3</p>
        <h2 className="mt-1 text-3xl font-bold text-white">Synthèse</h2>
        <p className="mt-2 text-gray-400 max-w-2xl">
          Comparez les 5 mécanismes, identifiez celui qui correspond à votre profil
          et vérifiez votre éligibilité avant de contacter le BMC.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-14">
        <TableauComparatif />
        <ProfilsTypes />
        <Checklist />
      </div>

    </div>
  )
}
