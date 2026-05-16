import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import FilterPanel from '../components/FilterPanel'
import DetailPanel from '../components/DetailPanel'
import MapView from '../components/MapView'
import DrawerMobile from '../components/DrawerMobile'

const FILTRES_INITIAUX = {
  'Parcs & Réserves': true,
  'Agro-forêts':      true,
  'Forêts Classées':  true,
  'Projets Privés':   true,
  'Actif':            true,
  'Opportunité':      true,
}
const TOTAL_FILTRES = Object.keys(FILTRES_INITIAUX).length

export default function Cartographie() {
  const navigate = useNavigate()
  const [geoData, setGeoData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [filtres, setFiltres] = useState(FILTRES_INITIAUX)
  const [zoneSelectionnee, setZoneSelectionnee] = useState(null)
  const [loading, setLoading] = useState(true)
  const [filterOpen, setFilterOpen] = useState(false)

  useEffect(() => {
    fetch('/reforest_data.geojson')
      .then(res => res.json())
      .then(data => {
        setGeoData(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!geoData) return
    const features = geoData.features.filter(f =>
      filtres[f.properties.CATEGORIE] && filtres[f.properties.STATUT_OP]
    )
    setFilteredData({ ...geoData, features })
  }, [filtres, geoData])

  const handleFiltreChange = (type) => {
    setFiltres(prev => ({ ...prev, [type]: !prev[type] }))
  }

  const filtresActifs = Object.values(filtres).filter(Boolean).length
  const filtresModifies = filtresActifs < TOTAL_FILTRES

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center pt-16 text-gray-400">
        Chargement de la carte...
      </div>
    )
  }

  return (
    <div className="flex h-screen pt-16">

      {/* Panneau filtre — caché sur mobile */}
      <div className="hidden sm:block">
        <FilterPanel
          filtres={filtres}
          onFiltreChange={handleFiltreChange}
          geoData={geoData}
        />
      </div>

      {/* Carte */}
      <div className="relative flex-1">

        {/* Bouton filtre mobile — sous les boutons zoom Leaflet */}
        <button
          onClick={() => setFilterOpen(prev => !prev)}
          title={filterOpen ? 'Masquer les filtres' : 'Afficher les filtres'}
          className="sm:hidden absolute flex items-center justify-center"
          style={{
            top: '80px', left: '10px', zIndex: 1001,
            width: '30px', height: '30px',
            background: 'white',
            border: '2px solid rgba(0,0,0,0.2)',
            borderRadius: '4px',
            cursor: 'pointer',
            color: filterOpen ? '#16a34a' : '#555',
          }}
        >
          <SlidersHorizontal size={15} />
          {filtresModifies && (
            <span style={{
              position: 'absolute', top: '-4px', right: '-4px',
              width: '8px', height: '8px',
              background: '#f59e0b', borderRadius: '50%',
              border: '1.5px solid white',
            }} />
          )}
        </button>

        {filteredData && (
          <MapView
            data={filteredData}
            onZoneClick={setZoneSelectionnee}
          />
        )}
      </div>

      {/* Overlay filtre mobile */}
      {filterOpen && (
        <div className="sm:hidden fixed inset-x-0 bottom-0 z-[2000]" style={{ top: '64px' }}>
          <div className="absolute inset-0 bg-black/60" onClick={() => setFilterOpen(false)} />
          <div className="relative flex h-full">
            <div className="relative overflow-y-auto shadow-2xl">
              <button
                onClick={() => setFilterOpen(false)}
                className="absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white transition-colors"
                style={{ width: '24px', height: '24px' }}
              >
                <X size={13} />
              </button>
              <FilterPanel filtres={filtres} onFiltreChange={handleFiltreChange} geoData={geoData} />
            </div>
          </div>
        </div>
      )}

      {/* Panneau détail — visible uniquement xl+ */}
      <DetailPanel zone={zoneSelectionnee} />

      {/* Drawer mobile — visible uniquement sous xl */}
      <DrawerMobile
        zone={zoneSelectionnee}
        onClose={() => setZoneSelectionnee(null)}
        onNavigate={(path) => navigate(path)}
      />

    </div>
  )
}