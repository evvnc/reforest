// BarreProgression.jsx
// Conservé pour compatibilité éventuelle.
// Dans la V2, la navigation principale est assurée par :
//   - La sidebar (desktop, dans MarcheCarbone.jsx)
//   - MobileNav (mobile, dans MarcheCarbone.jsx)
// Ce composant n'est plus utilisé directement dans MarcheCarbone
// mais reste disponible pour d'autres usages.

const parties = [
  { id: 1, label: 'Comprendre' },
  { id: 2, label: 'Mécanismes' },
  { id: 3, label: 'Synthèse' },
]

export default function BarreProgression({ partieActive, onPartieClick }) {
  return (
    <div className="sticky top-16 z-40 border-b border-white/10 bg-gray-950/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center">
          {parties.map((partie, i) => (
            <button
              key={partie.id}
              onClick={() => onPartieClick(partie.id)}
              className="flex items-center"
            >
              {/* Connecteur */}
              {i > 0 && (
                <div className={`h-px w-8 transition-colors ${
                  partieActive >= partie.id ? 'bg-green-400' : 'bg-white/20'
                }`} />
              )}

              {/* Partie */}
              <div className={`flex items-center gap-2 px-4 py-4 text-sm font-medium transition-all ${
                partieActive === partie.id
                  ? 'text-green-400'
                  : partieActive > partie.id
                  ? 'text-green-600'
                  : 'text-gray-500 hover:text-gray-300'
              }`}>
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-all ${
                  partieActive === partie.id
                    ? 'bg-green-400 text-gray-950'
                    : partieActive > partie.id
                    ? 'bg-green-800 text-green-400'
                    : 'bg-white/10 text-gray-500'
                }`}>
                  {partie.id}
                </span>
                <span className="hidden sm:inline">{partie.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
