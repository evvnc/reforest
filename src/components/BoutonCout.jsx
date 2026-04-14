import { useState } from 'react'

const couts = {
  1: [
    { label: 'Liasse foncière (formulaire)', montant: '10 000 FCFA' },
    { label: 'Honoraires géomètre-expert', montant: '150 000 – 500 000 FCFA' },
    { label: 'Frais de publication JO', montant: 'Variable' },
  ],
  2: [
    { label: 'Préparation du dossier NIP', montant: 'Gratuit (auto)' },
    { label: 'Frais de dossier BMC', montant: 'À confirmer au BMC' },
    { label: 'Consultant carbone (optionnel)', montant: '500 000 – 2M FCFA' },
  ],
  3: [
    { label: 'Consultant carbone (PDD)', montant: '6.5M – 33M FCFA' },
    { label: 'Audit de validation (VVB)', montant: '5M – 15M FCFA' },
    { label: 'Frais standard (Verra/GS)', montant: 'Variable selon volume' },
  ],
  4: [
    { label: 'Commission courtier', montant: '5 – 15% du prix de vente' },
    { label: 'Taxe BMC sur transaction', montant: 'À confirmer au BMC' },
    { label: 'Frais plateforme (Xpansiv)', montant: '1 – 5%' },
  ],
}

export default function BoutonCout({ zoneActive }) {
  const [ouvert, setOuvert] = useState(false)
  const coutsZone = couts[zoneActive] || []

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Info-bulle */}
      {ouvert && (
        <div className="mb-3 w-72 rounded-xl border border-white/10 bg-gray-900 p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-bold text-white">
              Coûts — Zone {zoneActive}
            </h4>
            <button
              onClick={() => setOuvert(false)}
              className="text-gray-500 hover:text-white text-lg leading-none"
            >
              ×
            </button>
          </div>
          <div className="space-y-2">
            {coutsZone.map((c) => (
              <div key={c.label} className="flex items-start justify-between gap-2 text-xs">
                <span className="text-gray-400">{c.label}</span>
                <span className="text-right font-medium text-green-400 flex-shrink-0">
                  {c.montant}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-500 italic">
            Montants indicatifs. Contactez le BMC ou les prestataires pour des devis précis.
          </p>
        </div>
      )}

      {/* Bouton rond */}
      <button
        onClick={() => setOuvert(!ouvert)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-500 transition-all hover:scale-105"
        title="Voir les coûts de cette étape"
      >
        <span className="text-xl">💰</span>
      </button>
    </div>
  )
}