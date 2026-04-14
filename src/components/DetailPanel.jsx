import { useNavigate } from 'react-router-dom'

const COULEURS = {
  'Forêt classée': '#2d6a4f',
  'Reboisement': '#95d5b2',
  'Agroforesterie': '#f4a261',
  'Exploitation forestière': '#e63946',
  'Crédit carbone': '#7b2d8b',
  'Inventaire forestier': '#457b9d',
}

const TYPE_VERS_CATEGORIE = {
  'Forêt classée': 'reboisement',
  'Reboisement': 'reboisement',
  'Agroforesterie': 'agroforesterie',
  'Exploitation forestière': 'technique',
  'Inventaire forestier': 'technique',
  'Crédit carbone': 'reboisement',
}

export default function DetailPanel({ zone }) {
  const navigate = useNavigate()

  if (!zone) {
    return (
      <aside className="hidden xl:flex w-72 flex-shrink-0 border-l border-white/10 bg-gray-900 p-4 items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-4xl">🗺️</div>
          <p className="mt-3 text-sm">Cliquez sur une zone pour voir les détails</p>
        </div>
      </aside>
    )
  }

  const p = zone.properties
  const couleur = COULEURS[p.PRJ_TYPE] || '#999'
  const categorie = TYPE_VERS_CATEGORIE[p.PRJ_TYPE] || 'reboisement'
  const estCarbone = p.PRJ_TYPE === 'Crédit carbone'

  const infos = [
    { label: 'Type', value: p.PRJ_TYPE },
    { label: 'Statut', value: p.PRJ_STATUT },
    { label: 'Porteur', value: p.PRJ_PORTEUR },
    { label: 'Entité', value: p.PRJ_ENTITE },
    { label: 'Superficie', value: p.PRJ_HA ? `${Math.round(p.PRJ_HA).toLocaleString('fr-FR')} ha` : '—' },
    { label: 'Financement', value: p.PRJ_FINANCEMENT },
    { label: 'Début', value: p.PRJ_DEBUT || '—' },
  ]

  return (
    <aside className="hidden xl:flex xl:flex-col w-72 flex-shrink-0 overflow-y-auto border-l border-white/10 bg-gray-900 p-4">

      {/* Badge type */}
      <span
        className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white w-fit"
        style={{ backgroundColor: couleur }}
      >
        {p.PRJ_TYPE}
      </span>

      {/* Nom */}
      <h3 className="mt-3 text-lg font-bold text-white">{p.NAME}</h3>

      {/* Description */}
      <p
        className="mt-3 text-xs text-gray-400 leading-relaxed border-l-4 pl-3 bg-white/5 py-2 rounded"
        style={{ borderColor: couleur }}
      >
        {p.PRJ_DESC}
      </p>

      {/* Infos */}
      <div className="mt-4 space-y-2">
        {infos.map(({ label, value }) => (
          <div key={label} className="flex justify-between text-xs">
            <span className="text-gray-400">{label}</span>
            <span className="text-white font-medium text-right max-w-[60%]">{value}</span>
          </div>
        ))}
      </div>

      {/* Projet parent */}
      {p.PRJ_PARENT && (
        <div className="mt-4 rounded-lg bg-green-900/20 p-3">
          <div className="text-xs text-gray-400">Projet parent</div>
          <div className="mt-0.5 text-sm font-medium text-green-400">{p.PRJ_PARENT}</div>
        </div>
      )}

      {/* Source */}
      <div className="mt-4 text-xs text-gray-500">
        Source: {p.PRJ_SOURCE}
      </div>

      {/* Séparateur */}
      <div className="mt-4 border-t border-white/10" />

      {/* Boutons inter-modules */}
      <div className="mt-4 space-y-2">

        {/* Lien vers Financements */}
        <button
          onClick={() => navigate(`/financements?categorie=${categorie}`)}
          className="w-full rounded-lg border border-green-500/30 bg-green-900/20 px-4 py-2.5 text-left text-xs font-medium text-green-400 hover:bg-green-900/40 transition-colors flex items-center justify-between"
        >
          <span>💰 Financer ce projet</span>
          <span>→</span>
        </button>

        {/* Lien vers Marché Carbone — uniquement pour les projets carbone */}
        {estCarbone && (
          <button
            onClick={() => navigate('/marche-carbone')}
            className="w-full rounded-lg border border-purple-500/30 bg-purple-900/20 px-4 py-2.5 text-left text-xs font-medium text-purple-400 hover:bg-purple-900/40 transition-colors flex items-center justify-between"
          >
            <span>🌿 Processus carbone</span>
            <span>→</span>
          </button>
        )}

      </div>

    </aside>
  )
}