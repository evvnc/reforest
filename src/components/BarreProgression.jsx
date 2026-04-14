const zones = [
    { id: 1, label: 'Comprendre' },
    { id: 2, label: 'Se qualifier' },
    { id: 3, label: 'Agir' },
    { id: 4, label: 'Vendre' },
  ]
  
  export default function BarreProgression({ zoneActive, onZoneClick }) {
    return (
      <div className="sticky top-16 z-40 border-b border-white/10 bg-gray-950/90 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center">
            {zones.map((zone, i) => (
              <button
                key={zone.id}
                onClick={() => onZoneClick(zone.id)}
                className="flex items-center"
              >
                {/* Connecteur */}
                {i > 0 && (
                  <div className={`h-px w-8 transition-colors ${
                    zoneActive >= zone.id ? 'bg-green-400' : 'bg-white/20'
                  }`} />
                )}
  
                {/* Zone */}
                <div className={`flex items-center gap-2 px-4 py-4 text-sm font-medium transition-all ${
                  zoneActive === zone.id
                    ? 'text-green-400'
                    : zoneActive > zone.id
                    ? 'text-green-600'
                    : 'text-gray-500 hover:text-gray-300'
                }`}>
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    zoneActive === zone.id
                      ? 'bg-green-400 text-gray-950'
                      : zoneActive > zone.id
                      ? 'bg-green-800 text-green-400'
                      : 'bg-white/10 text-gray-500'
                  }`}>
                    {zone.id}
                  </span>
                  <span className="hidden sm:inline">{zone.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }