import { Link, useLocation } from 'react-router-dom'
import { Map, Coins, Leaf } from 'lucide-react'

const navItems = [
  { to: '/cartographie', label: 'Cartographie', icon: Map },
  { to: '/financements', label: 'Financements', icon: Coins },
  { to: '/marche-carbone', label: 'Marché Carbone', icon: Leaf },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span>🌿</span>
          <span className="text-white">Re</span>
          <span className="text-green-400">Forest</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => {
            const isActive = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all
                  ${isActive 
                    ? 'bg-green-900/30 text-green-400' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{label}</span>
              </Link>
            )
          })}
        </nav>

      </div>
    </header>
  )
}