const TYPES = [
  { key: 'Forêt classée', color: '#2d6a4f' },
  { key: 'Reboisement', color: '#95d5b2' },
  { key: 'Agroforesterie', color: '#f4a261' },
  { key: 'Exploitation forestière', color: '#e63946' },
  { key: 'Crédit carbone', color: '#7b2d8b' },
  { key: 'Inventaire forestier', color: '#457b9d' },
]

export default function FilterPanel({ filtres, onFiltreChange, geoData }) {

  // Calcul des stats à partir des données brutes
  const statsParType = TYPES.reduce((acc, { key }) => {
    const zones = geoData?.features?.filter(f => f.properties.PRJ_TYPE === key) || []
    const superficie = zones.reduce((sum, f) => sum + (f.properties.PRJ_HA || 0), 0)
    acc[key] = { count: zones.length, superficie }
    return acc
  }, {})

  const totalZonesVisibles = TYPES
    .filter(({ key }) => filtres[key])
    .reduce((sum, { key }) => sum + statsParType[key].count, 0)

  const totalHaVisibles = TYPES
    .filter(({ key }) => filtres[key])
    .reduce((sum, { key }) => sum + statsParType[key].superficie, 0)

  const formatHa = (ha) => {
    if (ha >= 1000000) return `${(ha / 1000000).toFixed(1)}M ha`
    if (ha >= 1000) return `${(ha / 1000).toFixed(0)}k ha`
    return `${Math.round(ha)} ha`
  }

  return (
    <aside className="w-56 flex-shrink-0 overflow-y-auto border-r border-white/10 bg-gray-900 p-4">

      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
        Filtrer par type
      </h3>

      <div className="mt-4 space-y-1">
        {TYPES.map(({ key, color }) => {
          const stats = statsParType[key]
          return (
            <label
              key={key}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-white/5 transition-colors"
            >
              <input
                type="checkbox"
                checked={filtres[key] || false}
                onChange={() => onFiltreChange(key)}
                className="sr-only"
              />
              <span
                className="h-3.5 w-3.5 rounded-sm border-2 flex-shrink-0 transition-all"
                style={{
                  backgroundColor: filtres[key] ? color : 'transparent',
                  borderColor: color,
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-300 leading-tight">{key}</div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {stats.count} zone{stats.count > 1 ? 's' : ''} · {formatHa(stats.superficie)}
                </div>
              </div>
            </label>
          )
        })}
      </div>

      {/* Stats totales */}
      <div className="mt-4 border-t border-white/10 pt-4 space-y-3">

        <div>
          <div className="text-xs text-gray-400">Zones affichées</div>
          <div className="mt-0.5 text-2xl font-bold text-green-400">{totalZonesVisibles}</div>
        </div>

        <div>
          <div className="text-xs text-gray-400">Superficie totale</div>
          <div className="mt-0.5 text-lg font-bold text-amber-400">{formatHa(totalHaVisibles)}</div>
        </div>

        {/* Bouton tout sélectionner / tout désélectionner */}
        <button
          onClick={() => {
            const tousActifs = TYPES.every(({ key }) => filtres[key])
            TYPES.forEach(({ key }) => {
              if (tousActifs ? true : !filtres[key]) onFiltreChange(key)
            })
          }}
          className="w-full rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          {TYPES.every(({ key }) => filtres[key]) ? 'Tout désélectionner' : 'Tout sélectionner'}
        </button>

      </div>
    </aside>
  )
}