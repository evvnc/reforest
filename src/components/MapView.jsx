import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const COULEURS = {
  'Forêt classée': '#2d6a4f',
  'Reboisement': '#95d5b2',
  'Agroforesterie': '#f4a261',
  'Exploitation forestière': '#e63946',
  'Crédit carbone': '#7b2d8b',
  'Inventaire forestier': '#457b9d',
}

const FONDS = {
  sombre: {
    label: '🌙 Sombre',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; CartoDB',
  },
  standard: {
    label: '🗺️ Standard',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; OpenStreetMap',
  },
  satellite: {
    label: '🛰️ Satellite',
    url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Satellite',
  },
}

export default function MapView({ data, onZoneClick }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const geoLayerRef = useRef(null)
  const tileLayerRef = useRef(null)
  const [fondActif, setFondActif] = useState('sombre')

  // Initialisation de la carte
  useEffect(() => {
    if (mapInstanceRef.current) return

    mapInstanceRef.current = L.map(mapRef.current, {
      center: [7.5, -5.5],
      zoom: 7,
      minZoom: 6,
      maxZoom: 14,
    })

    tileLayerRef.current = L.tileLayer(FONDS.sombre.url, {
      attribution: FONDS.sombre.attribution,
    }).addTo(mapInstanceRef.current)

    fetch('/masque_CIV.geojson')
      .then(res => res.json())
      .then(masque => {
        L.geoJSON(masque, {
          style: {
            fillColor: '#0f172a',
            fillOpacity: 0.6,
            color: '#ffffff',
            weight: 1.5,
          },
          interactive: false,
        }).addTo(mapInstanceRef.current)
      })
      .catch(() => {})
  }, [])

  // Changement de fond de carte
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return
    const fond = FONDS[fondActif]
    tileLayerRef.current.setUrl(fond.url)
  }, [fondActif])

  // Mise à jour des polygones
  useEffect(() => {
    if (!mapInstanceRef.current || !data) return

    if (geoLayerRef.current) {
      geoLayerRef.current.remove()
    }

    geoLayerRef.current = L.geoJSON(data, {
      style: (feature) => ({
        fillColor: COULEURS[feature.properties.PRJ_TYPE] || '#999',
        fillOpacity: 0.65,
        color: 'white',
        weight: 1,
      }),
      onEachFeature: (feature, layer) => {
        const p = feature.properties
        const couleur = COULEURS[p.PRJ_TYPE] || '#999'

        layer.bindTooltip(
          `<strong>${p.PRJ_NOM}</strong><br/>
           <span style="color:${couleur}">${p.PRJ_TYPE}</span>`,
          { sticky: true, opacity: 0.95 }
        )

        layer.on('mouseover', () => {
          layer.setStyle({ fillOpacity: 0.9, weight: 2.5 })
        })
        layer.on('mouseout', () => {
          layer.setStyle({ fillOpacity: 0.65, weight: 1 })
        })
        layer.on('click', () => {
          onZoneClick(feature)
        })
      },
    }).addTo(mapInstanceRef.current)
  }, [data, onZoneClick])

  return (
    <div className="relative h-full w-full">

      {/* Carte */}
      <div ref={mapRef} style={{ height: '100%', width: '100%' }} />

      {/* Sélecteur de fond */}
      <div
        style={{ position: 'absolute', bottom: '24px', left: '16px', zIndex: 9999 }}
        className="flex gap-1 rounded-xl border border-white/10 bg-gray-900/90 p-1"
      >
        {Object.entries(FONDS).map(([key, fond]) => (
          <button
            key={key}
            onClick={() => setFondActif(key)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              fondActif === key
                ? 'bg-green-600 text-white'
                : 'text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {fond.label}
          </button>
        ))}
      </div>

    </div>
  )
}