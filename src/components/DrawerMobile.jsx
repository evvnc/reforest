import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const COULEURS = {
  'Parcs & Réserves': '#140152',
  'Agro-forêts':      '#f4a261',
  'Forêts Classées':  '#2d6a4f',
  'Projets Privés':   '#457b9d',
}

function InfoLigne({ label, value }) {
  if (!value || value === '—' || value === 0) return null
  return (
    <div className="flex justify-between text-xs">
      <span className="text-gray-400">{label}</span>
      <span className="text-white font-medium text-right max-w-[20%]">{value}</span>
    </div>
  )
}

function BoutonAction({ onClick, couleur, emoji, label }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors flex items-center justify-between"
      style={{
        border: `1px solid ${couleur}44`,
        backgroundColor: `${couleur}18`,
        color: couleur,
      }}
    >
      <span>{emoji} {label}</span>
      <span>→</span>
    </button>
  )
}

export default function DrawerMobile({ zone, onClose }) {
  const navigate = useNavigate()
  const ouvert = zone !== null

  useEffect(() => {
    document.body.style.overflow = ouvert ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [ouvert])

  if (!ouvert) return null

  const p = zone.properties
  const couleur = COULEURS[p.CATEGORIE] || '#999'
  const estOpportunite = p.STATUT_OP === 'Opportunité'

  const handleNav = (path) => {
    onClose()
    navigate(path)
  }

  return (
    <>
      {/* Fond semi-transparent */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998] xl:hidden"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] xl:hidden bg-gray-900 rounded-t-2xl border-t border-white/10 max-h-[80vh] overflow-y-auto">

        {/* Poignée */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="h-1 w-10 rounded-full bg-white/20" />
        </div>

        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
        >
          ×
        </button>

        {/* Contenu */}
        <div className="px-4 pb-8 pt-2">

          {/* Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ backgroundColor: couleur }}
            >
              {p.CATEGORIE}
            </span>
            {p.SOUS_CATEGORIE && (
              <span
                className="inline-block rounded-full px-2 py-1 text-xs font-semibold border"
                style={{ color: couleur, borderColor: couleur }}
              >
                {p.SOUS_CATEGORIE}
              </span>
            )}
            <span
              className="inline-block rounded-full px-2 py-1 text-xs font-semibold"
              style={{
                backgroundColor: estOpportunite ? '#facc1520' : '#86efac20',
                color: estOpportunite ? '#facc15' : '#86efac',
              }}
            >
              {estOpportunite ? '💡 Opportunité' : '✅ Actif'}
            </span>
          </div>

          {/* Nom */}
          <h3 className="mt-3 text-lg font-bold text-white leading-snug">{p.NAME}</h3>

          {/* Description */}
          <p
            className="mt-3 text-xs text-gray-400 leading-relaxed border-l-4 pl-3 bg-white/5 py-2 rounded"
            style={{ borderColor: couleur }}
          >
            {p.PRJ_DESC}
          </p>

          {/* Infos */}
          <div className="mt-4 space-y-2">
            <InfoLigne label="Superficie"     value={p.PRJ_HA ? `${Math.round(p.PRJ_HA).toLocaleString('fr-FR')} ha` : '—'} />
            <InfoLigne label="Entité"         value={p.PRJ_ENTITE} />
            <InfoLigne label="Financement"    value={p.PRJ_FINANCEMENT} />
            <InfoLigne label="Début"          value={p.PRJ_DEBUT || null} />
            <InfoLigne label="Fin prévue"     value={p.PRJ_FIN || null} />
            <InfoLigne label="Réf. juridique" value={p.REF_JURIDIQUE} />
          </div>

          {/* Bloc Opportunité */}
          {estOpportunite && (
            <div className="mt-4 rounded-lg bg-yellow-900/20 border border-yellow-500/30 p-3">
              <div className="text-xs font-semibold text-yellow-400 mb-1">
                💡 Zone libre d'investissement
              </div>
              <div className="text-xs text-gray-400">
                Aucun projet recensé. Zone éligible à un investissement privé ou PPP.
              </div>
            </div>
          )}

          {/* Séparateur */}
          <div className="mt-4 border-t border-white/10" />

          {/* Boutons d'action */}
          <div className="mt-4 space-y-2">

            {p.CATEGORIE === 'Parcs & Réserves' && (
              <BoutonAction
                onClick={() => handleNav('/marche-carbone')}
                couleur="#86efac"
                emoji="🌿"
                label="Explorer le mécanisme REDD+"
              />
            )}

            {p.CATEGORIE === 'Agro-forêts' && (
              <BoutonAction
                onClick={() => handleNav('/financements?categorie=agroforesterie')}
                couleur="#f4a261"
                emoji="🤝"
                label="Voir les financements cacao-forêt"
              />
            )}

            {p.CATEGORIE === 'Projets Privés' && (
              <BoutonAction
                onClick={() => handleNav('/financements?categorie=reboisement')}
                couleur="#457b9d"
                emoji="💰"
                label="Financer ce projet"
              />
            )}

            {p.CATEGORIE === 'Forêts Classées' && !estOpportunite && (
              <BoutonAction
                onClick={() => handleNav('/financements?categorie=reboisement')}
                couleur="#2d6a4f"
                emoji="📈"
                label="Voir le financement en cours"
              />
            )}

            {p.CATEGORIE === 'Forêts Classées' && estOpportunite && (
              <>
                <BoutonAction
                  onClick={() => handleNav('/financements?categorie=reboisement')}
                  couleur="#facc15"
                  emoji="🤝"
                  label="Proposer un PPP"
                />
                <BoutonAction
                  onClick={() => handleNav('/financements?categorie=technique')}
                  couleur="#facc15"
                  emoji="🔍"
                  label="Financer un inventaire"
                />
                <BoutonAction
                  onClick={() => handleNav('/marche-carbone')}
                  couleur="#facc15"
                  emoji="🌿"
                  label="Lancer un projet carbone"
                />
              </>
            )}

          </div>
        </div>
      </div>
    </>
  )
}