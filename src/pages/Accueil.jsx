import { Link } from 'react-router-dom'
import { Map, Coins, Leaf } from 'lucide-react'

const stats = [
  { value: '249', label: 'zones cartographiees' },
  { value: '231', label: 'forets classees' },
  { value: '20+', label: 'sources de financement' },
  { value: '6', label: 'etapes vers le carbone' },
]

const modules = [
  {
    icon: Map,
    badge: 'Geospatial',
    title: 'Cartographie Forestiere',
    description: "Visualisez les 249 zones forestieres de Cote d'Ivoire.",
    to: '/cartographie',
  },
  {
    icon: Coins,
    badge: 'Finance',
    title: 'Financements Forestiers',
    description: "Explorez les programmes de financement disponibles.",
    to: '/financements',
  },
  {
    icon: Leaf,
    badge: 'Carbone',
    title: 'Marche Carbone',
    description: "Comprenez le processus de certification carbone en 6 etapes.",
    to: '/marche-carbone',
  },
]

export default function Accueil() {
  return (
    <div className="min-h-screen pt-16">

      <section className="py-24 text-center px-4">
        <h1 className="text-7xl font-bold tracking-tight">
          Re<span className="text-green-400">Forest</span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
          La plateforme de reference pour l'information forestiere en Cote d'Ivoire
        </p>
        <p className="mt-3 text-sm text-amber-400">
          De 16 millions d'hectares en 1960 a 3 millions en 2015
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/cartographie"
            className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold hover:bg-green-500 transition-colors"
          >
            <Map className="h-4 w-4" />
            Explorer la carte
          </Link>
          <Link
            to="/marche-carbone"
            className="flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-6 py-3 text-sm font-semibold text-amber-400 hover:bg-amber-500/20 transition-colors"
          >
            <Leaf className="h-4 w-4" />
            Marche carbone
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 max-w-2xl mx-auto sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-3xl font-bold text-green-400">{s.value}</div>
              <div className="mt-1 text-xs text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {modules.map((mod) => (
            <Link
              key={mod.title}
              to={mod.to}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-green-900/30 p-2.5">
                  <mod.icon className="h-6 w-6 text-green-400" />
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-gray-400">
                  {mod.badge}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold">{mod.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{mod.description}</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}