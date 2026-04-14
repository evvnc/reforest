import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BarreProgression from '../components/BarreProgression'
import BoutonCout from '../components/BoutonCout'

// ─────────────────────────────────────────────
// DONNÉES DES ZONES
// ─────────────────────────────────────────────

const zonesData = {
  1: {
    titre: "Comprendre le marché carbone",
    soustitre: "Les bases avant de vous lancer",
    intro: `Le marché carbone volontaire permet à des entreprises ou des États de compenser leurs émissions de CO₂ en achetant des crédits carbone générés par des projets qui absorbent ou évitent des émissions. En Côte d'Ivoire, ce mécanisme est supervisé par le Bureau du Marché Carbone (BMC), rattaché au Ministère de l'Environnement.`,
    blocs: [
      {
        icone: "🌿",
        titre: "Qu'est-ce qu'un crédit carbone ?",
        contenu: "Un crédit carbone = 1 tonne de CO₂ absorbée ou évitée. Un hectare de forêt tropicale bien gérée peut générer entre 5 et 15 crédits par an. Ces crédits sont certifiés par des standards internationaux (Verra, Gold Standard) et peuvent être vendus sur le marché volontaire.",
      },
      {
        icone: "🏛️",
        titre: `Les acteurs clés en Côte d'Ivoire`,
        contenu: null,
        acteurs: [
          {
            sigle: "BMC",
            nom: "Bureau du Marché Carbone",
            role: `Autorité nationale de régulation. Point d'entrée obligatoire pour tout projet carbone ivoirien. Délivre l'autorisation nationale (NIP).`,
          },
          {
            sigle: "Verra",
            nom: "Verified Carbon Standard",
            role: "Standard international le plus utilisé au monde. Certifie les projets selon le protocole VCS. Gère le registre public des crédits.",
          },
          {
            sigle: "Gold Standard",
            nom: "Gold Standard Foundation",
            role: "Standard alternatif à Verra, plus exigeant sur les co-bénéfices sociaux. Reconnue par de nombreuses ONG et institutions.",
          },
          {
            sigle: "VVB",
            nom: "Validation & Verification Body",
            role: `Auditeur tiers indépendant accrédité par Verra ou GS. Valide le PDD et vérifie les réductions d'émissions réelles.`,
          },
        ],
      },
      {
        icone: "📊",
        titre: "Types de projets éligibles",
        contenu: null,
        types: [
          { label: "Reboisement / Afforestation", eligible: true },
          { label: "Agroforesterie (cacao, café)", eligible: true },
          { label: "Gestion forestière améliorée (IFM)", eligible: true },
          { label: "Conservation (REDD+)", eligible: true },
          { label: "Agriculture intensive sans arbres", eligible: false },
          { label: "Projets < 1 ha ou < 5 ans", eligible: false },
        ],
      },
      {
        icone: "💡",
        titre: "So what — ce que ça change pour vous",
        contenu: `Si vous avez un terrain forestier ou une plantation d'au moins 5 ha avec une durée d'engagement de 10 ans minimum, vous pouvez potentiellement générer des revenus supplémentaires de 25 000 à 150 000 FCFA par hectare et par an en vendant vos crédits sur le marché volontaire. Ce revenu s'ajoute à vos revenus forestiers ou agricoles habituels.`,
        accent: true,
      },
    ],
  },

  2: {
    titre: "Se qualifier",
    soustitre: "Vérifiez votre éligibilité et obtenez votre NIP",
    intro: `Avant tout développement de projet, le BMC exige une pré-inscription nationale (NIP — Note d'Information Préliminaire). Cette étape gratuite vous permet de vérifier officiellement que votre projet respecte les critères ivoiriens et évite les doubles comptages.`,
    blocs: [
      {
        icone: "✅",
        titre: "Critères d'éligibilité — checklist",
        contenu: null,
        checklist: [
          { ok: true, texte: "Superficie ≥ 5 ha (recommandé ≥ 50 ha pour rentabilité)" },
          { ok: true, texte: "Titre foncier ou convention de gestion en règle (MINEF / SODEFOR)" },
          { ok: true, texte: `Durée d'engagement minimum 10 ans (idéalement 20–30 ans)` },
          { ok: true, texte: `Additivité : le projet n'aurait pas eu lieu sans financement carbone` },
          { ok: true, texte: "Pas de déforestation récente (< 5 ans) sur la zone" },
          { ok: false, texte: "Projet déjà financé par un autre mécanisme carbone — double comptage interdit" },
        ],
      },
      {
        icone: "📄",
        titre: "Constitution du dossier NIP",
        contenu: null,
        documents: [
          { doc: "Formulaire NIP", detail: "Téléchargeable sur le site du BMC", obligatoire: true },
          { doc: "Titre foncier ou attestation de possession", detail: "MINEF, Géomètre expert agréé", obligatoire: true },
          { doc: "Délimitation GPS de la zone", detail: "Fichier SHP ou KMZ, précision < 10 m", obligatoire: true },
          { doc: "Description technique du projet", detail: `Type d'activité, espèces, calendrier`, obligatoire: true },
          { doc: "Plan de gestion simplifié", detail: "Modalités de reboisement et suivi", obligatoire: false },
          { doc: "Identité du porteur de projet", detail: "CNI, RCCM si entreprise", obligatoire: true },
        ],
      },
      {
        icone: "👤",
        titre: "Contacts BMC — où déposer le dossier",
        contenu: null,
        contacts: [
          {
            entite: "Bureau du Marché Carbone (BMC)",
            adresse: `Ministère de l'Environnement, Abidjan-Plateau`,
            note: "Dépôt physique ou envoi par email. Délai de traitement : 2 à 4 semaines.",
          },
        ],
      },
      {
        icone: "💡",
        titre: "So what — ce que ça change pour vous",
        contenu: `Le NIP est le seul document qui vous protège contre un concurrent qui déposerait le même projet sur votre zone. C'est votre claim officiel. Le déposer tôt — même avant d'avoir un financement — est stratégique. La procédure est gratuite et prend moins d'un mois.`,
        accent: true,
      },
    ],
  },

  3: {
    titre: "Agir",
    soustitre: "Développer votre projet : du PDD à la validation",
    intro: `Une fois le NIP obtenu, vous entrez dans la phase technique du développement du projet. C'est la phase la plus longue et la plus coûteuse — mais c'est aussi celle où vous construisez la valeur financière de vos futurs crédits carbone.`,
    etapes: [
      {
        numero: "01",
        titre: "Sélectionner une méthodologie",
        duree: "2–4 semaines",
        description: `Chaque standard (Verra, GS) propose des méthodologies de calcul des réductions d'émissions. Le choix dépend de votre type de projet. En Côte d'Ivoire, les plus utilisées sont VM0047 (reboisement), AR-ACM0003 (boisement/reboisement), et VM0015 (agroforesterie).`,
        acteur: "Consultant carbone ou BMC",
        documents: [],
      },
      {
        numero: "02",
        titre: "Rédiger le PDD",
        duree: "3–6 mois",
        description: `Le Project Design Document (PDD) est le document central de votre projet. Il décrit en détail : la zone du projet, la méthodologie de calcul, le scénario de référence (baseline), le plan de monitoring, les co-bénéfices sociaux et environnementaux, et les risques de non-permanence.`,
        acteur: "Consultant carbone spécialisé",
        documents: [
          "Description détaillée du projet",
          "Baseline et scénario counterfactuel",
          "Plan de monitoring (fréquence, indicateurs)",
          "Évaluation des co-bénéfices (biodiversité, emploi)",
          "Plan de gestion du risque de reversions",
        ],
      },
      {
        numero: "03",
        titre: "Validation par un VVB",
        duree: "2–4 mois",
        description: `Un VVB (Validation & Verification Body) accrédité audite votre PDD. Il vérifie l'additivité, la solidité de la baseline, et la faisabilité du monitoring. Si tout est conforme, il émet un rapport de validation positif, obligatoire pour l'enregistrement.`,
        acteur: "VVB accrédité Verra ou Gold Standard",
        documents: [
          "Rapport de validation du VVB",
          "Réponses aux commentaires publics (période de 30 jours)",
        ],
      },
      {
        numero: "04",
        titre: "Enregistrement sur le registre",
        duree: "4–8 semaines",
        description: "Après validation, le projet est soumis à Verra ou Gold Standard pour enregistrement officiel. Un identifiant unique est attribué. Le projet devient public et les futurs crédits sont traçables sur le registre mondial.",
        acteur: "Verra / Gold Standard",
        documents: [
          "PDD final validé",
          "Rapport VVB de validation",
          "Autorisation nationale BMC",
        ],
      },
      {
        numero: "05",
        titre: "Monitoring et vérification périodique",
        duree: "Tous les 1–5 ans",
        description: `Une fois le projet lancé, vous devez mesurer régulièrement les absorptions réelles de CO₂ selon votre plan de monitoring. Ces données sont ensuite vérifiées par un VVB qui émet un rapport de vérification. Ce rapport déclenche l'émission des crédits carbone (issuance).`,
        acteur: "Équipe technique + VVB",
        documents: [
          "Rapport de monitoring",
          "Rapport de vérification VVB",
        ],
      },
    ],
    noteFinale: `⚠️ Cette phase nécessite un consultant carbone qualifié. Le BMC peut vous orienter vers des prestataires agréés en Côte d'Ivoire.`,
  },

  4: {
    titre: "Vendre vos crédits carbone",
    soustitre: "Monétiser vos efforts de conservation",
    intro: "Une fois vos crédits émis sur le registre Verra ou Gold Standard, vous pouvez les vendre. Le marché carbone volontaire ivoirien est en développement : les prix varient entre 3 et 20 USD par crédit selon la qualité, la certification et les co-bénéfices.",
    blocs: [
      {
        icone: "🔄",
        titre: "Les canaux de vente disponibles",
        contenu: null,
        canaux: [
          {
            nom: "Vente directe à un acheteur corporate",
            avantage: "Prix plus élevé (10–20 USD/t)",
            inconvenient: "Nécessite un réseau et des négociations",
            icone: "🤝",
          },
          {
            nom: "Courtier carbone spécialisé",
            avantage: `Accès à un portefeuille d'acheteurs`,
            inconvenient: "Commission 5–15% du prix de vente",
            icone: "💼",
          },
          {
            nom: "Plateforme Xpansiv / ACX",
            avantage: "Marché liquide, prix transparent",
            inconvenient: "Frais plateforme 1–5%, accès limité en Afrique",
            icone: "🌐",
          },
          {
            nom: "BMC — marché domestique ivoirien",
            avantage: "Cadre réglementaire local, en développement",
            inconvenient: "Marché encore peu liquide (2025–2026)",
            icone: "🏛️",
          },
        ],
      },
      {
        icone: "📈",
        titre: "Facteurs qui influencent le prix",
        contenu: null,
        facteurs: [
          { label: "Co-bénéfices certifiés (biodiversité, communautés)", impact: "+", detail: "Labels CCB, SD Vista augmentent le prix de 2–5 USD/t" },
          { label: "Standard de certification (Verra vs GS)", impact: "~", detail: "Gold Standard souvent mieux valorisé sur certains marchés" },
          { label: "Vintage récent (< 3 ans)", impact: "+", detail: "Les acheteurs préfèrent les crédits récents" },
          { label: "Projet en forêt tropicale africaine", impact: "+", detail: "Forte demande des entreprises européennes (CSRD)" },
          { label: "Projet < 500 ha sans VVB reconnu", impact: "–", detail: "Liquidité plus faible, prix discount possible" },
        ],
      },
      {
        icone: "💰",
        titre: "Simulation de revenus indicatifs",
        contenu: null,
        simulations: [
          { scenario: "50 ha de reboisement", credits: "500–750 t/an", prix: "5 USD/t", revenu: "2,5M – 3,75M FCFA/an" },
          { scenario: `200 ha d'agroforesterie cacao`, credits: "1 000–2 000 t/an", prix: "8 USD/t", revenu: "8M – 16M FCFA/an" },
          { scenario: `500 ha de forêt gérée (IFM)`, credits: "5 000–7 500 t/an", prix: "12 USD/t", revenu: "60M – 90M FCFA/an" },
        ],
      },
      {
        icone: "💡",
        titre: "So what — comment démarrer la vente",
        contenu: `La meilleure stratégie pour un premier projet ivoirien en 2025–2026 est de combiner un courtier local (pour la liquidité immédiate) et de déposer sur Xpansiv pour la visibilité internationale. Contactez le BMC pour connaître les acheteurs pré-enregistrés sur le marché domestique.`,
        accent: true,
      },
    ],
    liensModules: [
      { label: "🗺️ Voir les projets carbone sur la carte", route: "/cartographie" },
      { label: "💳 Trouver un financement pour lancer votre projet", route: "/financements" },
    ],
  },
}

// ─────────────────────────────────────────────
// SOUS-COMPOSANTS
// ─────────────────────────────────────────────

function TagActeur({ sigle, nom, role }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 rounded-lg bg-green-400/10 px-2 py-1 text-xs font-bold text-green-400">
          {sigle}
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{nom}</p>
          <p className="mt-1 text-xs leading-relaxed text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

function CheckItem({ ok, texte }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <span className={`mt-0.5 flex-shrink-0 ${ok ? "text-green-400" : "text-red-400"}`}>
        {ok ? "✅" : "❌"}
      </span>
      <span className={ok ? "text-gray-300" : "text-gray-500 line-through"}>{texte}</span>
    </li>
  )
}

function DocRow({ doc, detail, obligatoire }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-white/5 py-2 text-sm">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 text-gray-400">📄</span>
        <div>
          <p className="font-medium text-white">{doc}</p>
          <p className="text-xs text-gray-500">{detail}</p>
        </div>
      </div>
      <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
        obligatoire ? "bg-amber-400/10 text-amber-400" : "bg-white/5 text-gray-500"
      }`}>
        {obligatoire ? "Obligatoire" : "Recommandé"}
      </span>
    </div>
  )
}

function EtapeAgir({ etape }) {
  const [ouvert, setOuvert] = useState(false)

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 transition-all hover:border-green-400/30">
      <button
        onClick={() => setOuvert(!ouvert)}
        className="flex w-full items-center gap-4 p-5 text-left"
      >
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-400/10 text-sm font-bold text-green-400">
          {etape.numero}
        </span>
        <div className="flex-1">
          <p className="font-semibold text-white">{etape.titre}</p>
          <p className="text-xs text-gray-500">
            ⏱ {etape.duree} · 👤 {etape.acteur}
          </p>
        </div>
        <span className={`text-gray-500 transition-transform ${ouvert ? "rotate-180" : ""}`}>▾</span>
      </button>

      {ouvert && (
        <div className="border-t border-white/5 px-5 pb-5 pt-4">
          <p className="text-sm leading-relaxed text-gray-300">{etape.description}</p>
          {etape.documents.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Documents requis
              </p>
              <ul className="space-y-1">
                {etape.documents.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-amber-400">📄</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────
// HELPERS PARTAGÉS
// ─────────────────────────────────────────────

function ZoneHeader({ titre, soustitre, intro }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-green-400">{soustitre}</p>
      <h2 className="mt-1 text-3xl font-bold text-white">{titre}</h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-400">{intro}</p>
    </div>
  )
}

function BlocContenu({ bloc }) {
  if (bloc.accent) {
    return (
      <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-5">
        <div className="flex items-start gap-3">
          <span className="text-xl">{bloc.icone}</span>
          <div>
            <p className="font-semibold text-green-300">{bloc.titre}</p>
            <p className="mt-1 text-sm leading-relaxed text-green-100/80">{bloc.contenu}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-xl">{bloc.icone}</span>
        <h3 className="font-semibold text-white">{bloc.titre}</h3>
      </div>

      {bloc.contenu && (
        <p className="text-sm leading-relaxed text-gray-300">{bloc.contenu}</p>
      )}

      {bloc.acteurs && (
        <div className="grid gap-3 sm:grid-cols-2">
          {bloc.acteurs.map((a) => (
            <TagActeur key={a.sigle} {...a} />
          ))}
        </div>
      )}

      {bloc.types && (
        <ul className="space-y-2">
          {bloc.types.map((t) => (
            <li key={t.label} className="flex items-center gap-2 text-sm">
              <span className={t.eligible ? "text-green-400" : "text-red-400"}>
                {t.eligible ? "✅" : "❌"}
              </span>
              <span className={t.eligible ? "text-gray-300" : "text-gray-500"}>{t.label}</span>
            </li>
          ))}
        </ul>
      )}

      {bloc.checklist && (
        <ul className="space-y-2">
          {bloc.checklist.map((c) => (
            <CheckItem key={c.texte} {...c} />
          ))}
        </ul>
      )}

      {bloc.documents && (
        <div className="divide-y divide-white/5">
          {bloc.documents.map((d) => (
            <DocRow key={d.doc} {...d} />
          ))}
        </div>
      )}

      {bloc.contacts && bloc.contacts.map((c) => (
        <div key={c.entite} className="rounded-lg border border-white/10 bg-white/5 p-3">
          <p className="font-medium text-white">👤 {c.entite}</p>
          <p className="mt-1 text-xs text-gray-400">📍 {c.adresse}</p>
          <p className="mt-1 text-xs text-amber-400">⚠️ {c.note}</p>
        </div>
      ))}

      {bloc.canaux && (
        <div className="grid gap-3 sm:grid-cols-2">
          {bloc.canaux.map((c) => (
            <div key={c.nom} className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">{c.icone}</span>
                <p className="text-sm font-semibold text-white">{c.nom}</p>
              </div>
              <p className="mt-2 text-xs text-green-400">✅ {c.avantage}</p>
              <p className="mt-1 text-xs text-gray-500">⚠️ {c.inconvenient}</p>
            </div>
          ))}
        </div>
      )}

      {bloc.facteurs && (
        <div className="space-y-2">
          {bloc.facteurs.map((f) => (
            <div key={f.label} className="flex items-start gap-3 text-sm">
              <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${
                f.impact === "+" ? "bg-green-400/10 text-green-400"
                : f.impact === "–" ? "bg-red-400/10 text-red-400"
                : "bg-white/5 text-gray-400"
              }`}>
                {f.impact === "+" ? "↑" : f.impact === "–" ? "↓" : "~"}
              </span>
              <div>
                <p className="font-medium text-gray-300">{f.label}</p>
                <p className="text-xs text-gray-500">{f.detail}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {bloc.simulations && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-gray-500">
                <th className="py-2 text-left font-medium">Scénario</th>
                <th className="py-2 text-right font-medium">Crédits/an</th>
                <th className="py-2 text-right font-medium">Prix moyen</th>
                <th className="py-2 text-right font-medium">Revenu estimé</th>
              </tr>
            </thead>
            <tbody>
              {bloc.simulations.map((s) => (
                <tr key={s.scenario} className="border-b border-white/5">
                  <td className="py-3 text-gray-300">{s.scenario}</td>
                  <td className="py-3 text-right text-gray-400">{s.credits}</td>
                  <td className="py-3 text-right text-gray-400">{s.prix}</td>
                  <td className="py-3 text-right font-semibold text-green-400">{s.revenu}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs italic text-gray-600">
            Estimations indicatives. Taux de change : 1 USD ≈ 600 FCFA.
          </p>
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────
// ZONES
// ─────────────────────────────────────────────

function Zone1() {
  const zone = zonesData[1]
  return (
    <div className="space-y-8">
      <ZoneHeader titre={zone.titre} soustitre={zone.soustitre} intro={zone.intro} />
      {zone.blocs.map((bloc, i) => (
        <BlocContenu key={i} bloc={bloc} />
      ))}
    </div>
  )
}

function Zone2() {
  const zone = zonesData[2]
  return (
    <div className="space-y-8">
      <ZoneHeader titre={zone.titre} soustitre={zone.soustitre} intro={zone.intro} />
      {zone.blocs.map((bloc, i) => (
        <BlocContenu key={i} bloc={bloc} />
      ))}
    </div>
  )
}

function Zone3() {
  const zone = zonesData[3]
  return (
    <div className="space-y-8">
      <ZoneHeader titre={zone.titre} soustitre={zone.soustitre} intro={zone.intro} />
      <div className="space-y-3">
        {zone.etapes.map((etape) => (
          <EtapeAgir key={etape.numero} etape={etape} />
        ))}
      </div>
      <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
        <p className="text-sm text-amber-300">{zone.noteFinale}</p>
      </div>
    </div>
  )
}

function Zone4() {
  const zone = zonesData[4]
  const navigate = useNavigate()
  return (
    <div className="space-y-8">
      <ZoneHeader titre={zone.titre} soustitre={zone.soustitre} intro={zone.intro} />
      {zone.blocs.map((bloc, i) => (
        <BlocContenu key={i} bloc={bloc} />
      ))}
      <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-5">
        <p className="mb-3 text-sm font-semibold text-green-400">Aller plus loin</p>
        <div className="flex flex-wrap gap-3">
          {zone.liensModules.map((lien) => (
            <button
              key={lien.route}
              onClick={() => navigate(lien.route)}
              className="rounded-lg border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300 transition-all hover:bg-green-400/20"
            >
              {lien.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// PAGE PRINCIPALE
// ─────────────────────────────────────────────

export default function MarcheCarbone() {
  const [zoneActive, setZoneActive] = useState(1)

  const zonesComposants = {
    1: <Zone1 />,
    2: <Zone2 />,
    3: <Zone3 />,
    4: <Zone4 />,
  }

  return (
    <div className="min-h-screen pt-16">
      <BarreProgression zoneActive={zoneActive} onZoneClick={setZoneActive} />

      {/* Hero */}
      <div className="border-b border-white/5 bg-gradient-to-b from-green-950/30 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-green-400">
            Module Marché Carbone
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white">
            Valoriser votre forêt sur le marché carbone
          </h1>
          <p className="mt-3 max-w-2xl text-gray-400">
            Un guide pas à pas pour comprendre, se qualifier, développer et vendre des crédits carbone
            en Côte d'Ivoire — du NIP au registre Verra.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { id: 1, label: "1 · Comprendre" },
              { id: 2, label: "2 · Se qualifier" },
              { id: 3, label: "3 · Agir" },
              { id: 4, label: "4 · Vendre" },
            ].map((z) => (
              <button
                key={z.id}
                onClick={() => setZoneActive(z.id)}
                className={`rounded-lg px-4 py-2 text-sm transition-all ${
                  zoneActive === z.id
                    ? "bg-green-600 font-semibold text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {z.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu zone active */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        {zonesComposants[zoneActive]}

        {/* Navigation bas de page */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <button
            onClick={() => setZoneActive((z) => Math.max(1, z - 1))}
            disabled={zoneActive === 1}
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-400 transition-all hover:bg-white/5 disabled:opacity-30"
          >
            ← Zone précédente
          </button>
          <span className="text-xs text-gray-600">Zone {zoneActive} / 4</span>
          <button
            onClick={() => setZoneActive((z) => Math.min(4, z + 1))}
            disabled={zoneActive === 4}
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-green-500 disabled:opacity-30"
          >
            Zone suivante →
          </button>
        </div>
      </div>

      <BoutonCout zoneActive={zoneActive} />
    </div>
  )
}
