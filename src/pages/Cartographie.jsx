import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FilterPanel from '../components/FilterPanel'
import DetailPanel from '../components/DetailPanel'
import MapView from '../components/MapView'
import DrawerMobile from '../components/DrawerMobile'

const FILTRES_INITIAUX = {
  'Forêt classée': true,
  'Reboisement': true,
  'Agroforesterie': true,
  'Exploitation forestière': true,
  'Crédit carbone': true,
  'Inventaire forestier': true,
}

export default function Cartographie() {
  const navigate = useNavigate()
  const [geoData, setGeoData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [filtres, setFiltres] = useState(FILTRES_INITIAUX)
  const [zoneSelectionnee, setZoneSelectionnee] = useState(null)
  const [loading, setLoading] = useState(true)

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
    const features = geoData.features.filter(f => filtres[f.properties.PRJ_TYPE])
    setFilteredData({ ...geoData, features })
  }, [filtres, geoData])

  const handleFiltreChange = (type) => {
    setFiltres(prev => ({ ...prev, [type]: !prev[type] }))
  }

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
      <div className="flex-1">
        {filteredData && (
          <MapView
            data={filteredData}
            onZoneClick={setZoneSelectionnee}
          />
        )}
      </div>

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