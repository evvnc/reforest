import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TreePine, Wheat, Wrench, Users, Briefcase, X, ExternalLink } from 'lucide-react'

// ─────────────────────────────────────────────
// DONNÉES DES PROGRAMMES
// ─────────────────────────────────────────────

const categories = [
  {
    key: 'reboisement',
    label: 'Reboisement industriel et PPP',
    icon: TreePine,
    color: '#2d6a4f',
    description: `Grandes plantations, concessions en forêts classées, partenariats public-privé.`,
    programmes: [
      {
        nom: 'PIF2',
        institution: 'Banque mondiale / MINEF',
        type: 'Subvention publique',
        montant: '148M USD',
        beneficiaires: 'Entreprises forestières, coopératives, PME agréées MINEF',
        description: `Restauration des forêts classées du Sud-Ouest et agroforesterie cacao. Période 2022–2029.`,
        eligibilite: [
          `Être une entreprise ou coopérative agréée par le MINEF`,
          `Intervenir dans les zones prioritaires du PIF2 (Haut-Sassandra, Cavally, etc.)`,
          `Disposer d'un plan de gestion forestière approuvé`,
          `Capacité technique à réaliser des travaux de reboisement ou d'agroforesterie`,
        ],
        contacts: [
          { label: 'MINEF — Direction des Eaux et Forêts', detail: 'Abidjan-Plateau, Cité Administrative' },
          { label: 'Site Banque mondiale', lien: 'https://www.worldbank.org' },
        ],
        sources: 'Banque mondiale, Project Appraisal Document PIF2, 2022',
      },
      {
        nom: 'Ligne de crédit SPREF',
        institution: 'Banque Européenne d\'Investissement (BEI)',
        type: 'Ligne de crédit',
        montant: 'Variable',
        beneficiaires: `Entreprises forestières, exploitants agréés, PME du secteur bois`,
        description: `Facilité de crédit pour le reboisement et l'exploitation forestière durable. Liée à la Stratégie de Préservation, de Réhabilitation et d'Extension des Forêts (SPREF).`,
        eligibilite: [
          `Être une entreprise formalisée (RCCM) dans le secteur forestier`,
          `Présenter un dossier de projet conforme aux normes SPREF`,
          `Démontrer une capacité de remboursement`,
          `Obtenir un avis favorable du MINEF`,
        ],
        contacts: [
          { label: 'BEI — Bureau Afrique de l\'Ouest', detail: 'Contacter via la SPREF / MINEF' },
          { label: 'Site BEI', lien: 'https://www.eib.org' },
        ],
        sources: 'Stratégie SPREF, Ministère des Eaux et Forêts, 2023',
      },
      {
        nom: 'SODEFOR PPP',
        institution: 'SODEFOR / Partenaires privés (Cargill, ENI, SIFCA)',
        type: 'Partenariat Public-Privé',
        montant: 'Variable selon forêt classée',
        beneficiaires: `Grandes entreprises privées, industriels du cacao et de l'huile de palme`,
        description: `Partenariats public-privé pour la gestion, la restauration et l'exploitation durable des forêts classées ivoiriennes. La SODEFOR concède la gestion à des entreprises privées en échange d'un plan de restauration.`,
        eligibilite: [
          `Être une entreprise de grande envergure (CA > 1 Md FCFA)`,
          `Disposer de capacités techniques et financières pour la restauration`,
          `Accepter les conditions du cahier des charges SODEFOR`,
          `Avoir une stratégie RSE ou forêt documentée`,
        ],
        contacts: [
          { label: 'SODEFOR — Direction Générale', detail: `Abidjan-Plateau, Immeuble SODEFOR` },
          { label: 'Site SODEFOR', lien: 'https://www.sodefor.ci' },
        ],
        sources: 'SODEFOR, Rapports annuels PPP, 2022–2024',
      },
      {
        nom: 'REDD+ privés',
        institution: 'Marché carbone volontaire (Verra, Gold Standard)',
        type: 'Crédit carbone / Financement carbone',
        montant: 'Variable (3–20 USD/crédit)',
        beneficiaires: `Propriétaires terriens, entreprises, coopératives avec forêts ou plantations`,
        description: `Financements via la vente de crédits carbone sur le marché volontaire. Nécessite une certification Verra VCS ou Gold Standard et une autorisation BMC.`,
        eligibilite: [
          `Disposer d'un titre foncier ou certificat foncier en règle`,
          `Superficie ≥ 5 ha (recommandé ≥ 50 ha pour la rentabilité)`,
          `Engagement sur 10 à 30 ans`,
          `Obtenir une autorisation préalable du Bureau du Marché Carbone (BMC)`,
        ],
        contacts: [
          { label: 'Bureau du Marché Carbone (BMC)', detail: `Ministère de l'Environnement, Abidjan-Plateau` },
        ],
        sources: 'BMC, Verra VCS Registry, Gold Standard',
        lienCarbone: true,
      },
    ],
  },
  {
    key: 'agroforesterie',
    label: 'Agroforesterie et cacao durable',
    icon: Wheat,
    color: '#d4a017',
    description: `Intégration d'arbres dans les systèmes agricoles, cacao durable, appui aux producteurs.`,
    programmes: [
      {
        nom: 'Cocoa Carbon+',
        institution: 'Conseil Café-Cacao',
        type: 'Subvention / Appui technique',
        montant: 'Variable',
        beneficiaires: `Coopératives cacaoyères, producteurs individuels`,
        description: `Programme visant à intégrer 100 millions d'arbres dans les plantations de cacao ivoiriennes. Lancé en 2026, il combine appui technique, plants gratuits et potentiel de crédits carbone.`,
        eligibilite: [
          `Être producteur de cacao enregistré auprès du Conseil Café-Cacao`,
          `Disposer d'une plantation de minimum 1 ha`,
          `S'engager à ne pas déforester`,
          `Participer aux sessions de formation agroforestière`,
        ],
        contacts: [
          { label: 'Conseil Café-Cacao', detail: 'Abidjan, Tour CCIA' },
          { label: 'Site officiel', lien: 'https://www.conseilcafecacao.ci' },
        ],
        sources: 'Conseil Café-Cacao, Rapport stratégique 2026',
      },
      {
        nom: 'ICF — Initiative Cacao et Forêts',
        institution: 'Nestlé, Cargill, Mars (secteur privé + gouvernement)',
        type: `Engagement privé / Financement d'impact`,
        montant: 'Variable',
        beneficiaires: `Producteurs de cacao, coopératives, entreprises de la filière`,
        description: `Initiative internationale visant à dissocier la production de cacao de la déforestation. Comprend des volets agroforesterie, traçabilité des parcelles, et financement de la transition.`,
        eligibilite: [
          `Être dans la chaîne d'approvisionnement cacao d'un partenaire ICF`,
          `Accepter la géolocalisation et traçabilité des parcelles`,
          `S'engager dans un plan de transition agroforestière`,
        ],
        contacts: [
          { label: 'ICF Secrétariat', lien: 'https://www.idhsustainabletrade.com' },
          { label: 'Nestlé Côte d\'Ivoire', detail: 'Abidjan' },
        ],
        sources: 'IDH Sustainable Trade Initiative, ICF Progress Reports',
      },
      {
        nom: 'AgriConnect',
        institution: 'BAD / Banque mondiale',
        type: 'Subvention / Prêt concessionnel',
        montant: 'Variable',
        beneficiaires: `Jeunes entrepreneurs, coopératives agricoles, PME agroforestières`,
        description: `Programme multi-bailleurs pour les jeunes entrepreneurs et coopératives agricoles. Volet spécifique agroforesterie pour 2026, avec appui à la structuration des filières durables.`,
        eligibilite: [
          `Avoir entre 18 et 40 ans (pour le volet jeunes)`,
          `Être enregistré comme coopérative ou entreprise formelle`,
          `Présenter un plan d'affaires viable`,
          `Opérer dans le secteur agricole ou forestier`,
        ],
        contacts: [
          { label: 'BAD — Département Agriculture', lien: 'https://www.afdb.org' },
          { label: 'Banque mondiale CI', lien: 'https://www.worldbank.org' },
        ],
        sources: 'BAD, Banque mondiale, fiches projets 2025–2026',
      },
      {
        nom: 'GCF PROMIRE',
        institution: 'FAO / Fonds Vert pour le Climat (GCF)',
        type: 'Subvention internationale',
        montant: '15M USD',
        beneficiaires: `Coopératives cacaoyères, communautés rurales, ONG locales`,
        description: `Conversion de cacaoyères dégradées en systèmes agroforestiers durables. Inclut la restauration des sols, la formation des producteurs et le renforcement des capacités institutionnelles.`,
        eligibilite: [
          `Être une coopérative ou ONG locale formalisée`,
          `Intervenir dans les zones de cacaoyères dégradées identifiées par le projet`,
          `Démontrer une capacité de mise en œuvre locale`,
          `S'engager sur la durabilité et le suivi des parcelles`,
        ],
        contacts: [
          { label: 'FAO Côte d\'Ivoire', detail: 'Abidjan, Cocody' },
          { label: 'Site GCF', lien: 'https://www.greenclimate.fund' },
        ],
        sources: 'FAO, GCF Project Portfolio, PROMIRE 2023',
      },
    ],
  },
  {
    key: 'technique',
    label: 'Exécution technique et prestations',
    icon: Wrench,
    color: '#457b9d',
    description: `Financement des entreprises locales : pépinières, travaux forestiers, études.`,
    programmes: [
      {
        nom: 'Agréments MINEF',
        institution: 'MINEF — Ministère des Eaux et Forêts',
        type: `Autorisation administrative (condition d'accès aux marchés)`,
        montant: 'Frais administratifs variables',
        beneficiaires: `Sylviculteurs, exploitants forestiers, pépiniéristes, bureaux d'études`,
        description: `Les agréments sylviculteurs et exploitants forestiers délivrés par le MINEF (Décret 2022-781) sont obligatoires pour soumissionner aux marchés publics forestiers, notamment dans le cadre du PIF2 et des PPP SODEFOR.`,
        eligibilite: [
          `Être une personne physique ou morale de droit ivoirien`,
          `Justifier d'une expérience technique dans le secteur forestier`,
          `Fournir les pièces du dossier d'agrément (RCCM, CV, références)`,
          `S'acquitter des frais de dossier au MINEF`,
        ],
        contacts: [
          { label: 'MINEF — Direction des Eaux et Forêts', detail: 'Cité Administrative, Abidjan-Plateau' },
        ],
        sources: 'Décret N° 2022-781, Journal Officiel de Côte d\'Ivoire',
      },
      {
        nom: 'PIF2 Prestataires',
        institution: 'MINEF / Banque mondiale',
        type: `Appels d'offres et manifestations d'intérêt`,
        montant: 'Variable selon lot',
        beneficiaires: `Pépiniéristes, entreprises de plantation, cabinets d'études environnementales`,
        description: `Dans le cadre du PIF2, le MINEF publie régulièrement des appels à manifestation d'intérêt pour les pépinières, les entreprises de plantation et de suivi forestier. Les prestataires sélectionnés interviennent dans les forêts classées du Sud-Ouest.`,
        eligibilite: [
          `Disposer d'un agrément MINEF en cours de validité`,
          `Avoir une capacité technique et matérielle démontrée`,
          `Répondre aux appels d'offres publiés sur le système de passation de marchés`,
          `Être en règle fiscale et sociale (attestation fiscale, CNPS)`,
        ],
        contacts: [
          { label: 'MINEF — Cellule PIF2', detail: `Abidjan, Cité Administrative` },
          { label: 'Système national de passation des marchés', lien: 'https://www.finances.gouv.ci' },
        ],
        sources: 'MINEF, Avis d\'appels à manifestations d\'intérêt PIF2, 2023–2024',
      },
      {
        nom: 'FNEC',
        institution: `Ministère de l'Environnement et du Développement Durable`,
        type: 'Subvention — Appels à projets',
        montant: '1 – 50M FCFA',
        beneficiaires: `PME, associations, ONG locales, groupements de producteurs`,
        description: `Le Fonds National pour l'Environnement et le Climat (FNEC) lance des appels à projets annuels pour financer des initiatives environnementales locales, dont le reboisement, la sensibilisation et la gestion durable des ressources naturelles.`,
        eligibilite: [
          `Être une ONG, association ou PME formalisée en Côte d'Ivoire`,
          `Présenter un projet à dimension environnementale ou climatique`,
          `Cofinancement partiel souvent exigé (apport propre 10–20 %)`,
          `Déposer un dossier complet lors des fenêtres d'appel à projets`,
        ],
        contacts: [
          { label: `Ministère de l'Environnement — FNEC`, detail: `Abidjan-Plateau` },
        ],
        sources: `Ministère de l'Environnement, Avis FNEC 2023`,
      },
    ],
  },
  {
    key: 'communautaire',
    label: 'Petits projets communautaires',
    icon: Users,
    color: '#52b788',
    description: `Initiatives portées par ONG, associations, villages et groupements locaux.`,
    programmes: [
      {
        nom: 'Adaptation Fund',
        institution: 'FIRCA / Fonds pour l\'Adaptation',
        type: 'Subvention internationale',
        montant: '19M USD (enveloppe globale)',
        beneficiaires: `Communautés rurales, organisations paysannes, ONG locales`,
        description: `Projets d'adaptation climatique pour les communautés rurales ivoiriennes, notamment dans le domaine de la gestion durable des terres, de la restauration des écosystèmes et de la résilience agricole.`,
        eligibilite: [
          `Être une organisation paysanne ou ONG formalisée`,
          `Intervenir dans des zones à risque climatique identifiées`,
          `Présenter un plan de projet participatif (implication communautaire)`,
          `Passer par l'Entité nationale accréditée (FIRCA)`,
        ],
        contacts: [
          { label: 'FIRCA', detail: 'Abidjan, Marcory' },
          { label: 'Fonds pour l\'Adaptation', lien: 'https://www.adaptation-fund.org' },
        ],
        sources: 'Fonds pour l\'Adaptation, FIRCA, Rapports 2022',
      },
      {
        nom: 'FCIL',
        institution: 'Ambassade du Canada en Côte d\'Ivoire',
        type: 'Subvention bilatérale',
        montant: '20 000 – 100 000 CAD',
        beneficiaires: `ONG locales, associations communautaires`,
        description: `Le Fonds Canadien d'Initiatives Locales (FCIL) finance des projets à impact local dans les domaines de l'environnement, de l'inclusion sociale et de l'action climatique. Cycles d'appels à projets annuels.`,
        eligibilite: [
          `Être une ONG ou association locale formalisée (statuts déposés)`,
          `Présenter un projet à dimension environnementale ou d'inclusion`,
          `Démontrer une gouvernance transparente (rapport d'activité, comptes)`,
          `Projet réalisable dans les 12 à 18 mois`,
        ],
        contacts: [
          { label: `Ambassade du Canada — Programme FCIL`, detail: `Abidjan, Cocody` },
          { label: 'Site Ambassade Canada', lien: 'https://www.canadainternational.gc.ca/cote_d_ivoire' },
        ],
        sources: `Ambassade du Canada, Appels à projets FCIL 2023–2025`,
      },
      {
        nom: 'Fondation SG CI',
        institution: 'Société Générale Côte d\'Ivoire',
        type: `Financement d'impact / RSE`,
        montant: 'Variable (appel institutionnel)',
        beneficiaires: `ONG locales, associations environnementales`,
        description: `La Fondation Société Générale CI publie des appels institutionnels à destination des ONG locales dans les domaines de l'environnement, de l'inclusion financière et de l'éducation.`,
        eligibilite: [
          `Être une ONG ou association enregistrée en Côte d'Ivoire`,
          `Avoir un historique de réalisation de projets vérifiable`,
          `Présenter un projet aligné avec les axes stratégiques de la Fondation`,
          `Fournir les justificatifs financiers et administratifs requis`,
        ],
        contacts: [
          { label: 'Fondation SG CI', detail: 'Abidjan, Plateau' },
          { label: 'Site SG CI', lien: 'https://www.societegenerale.ci' },
        ],
        sources: `Société Générale CI, Rapports RSE 2023–2024`,
      },
    ],
  },
  {
    key: 'entrepreneuriat',
    label: 'Entrepreneuriat et innovation',
    icon: Briefcase,
    color: '#f4a261',
    description: `Startups, jeunes entrepreneurs, PME innovantes dans la foresterie et l'agroforesterie.`,
    programmes: [
      {
        nom: 'I&P Afrique Entrepreneurs',
        institution: 'Investisseurs et Partenaires (I&P)',
        type: `Capital-investissement / Financement d'impact`,
        montant: 'Variable (50M – 500M FCFA)',
        beneficiaires: `PME et startups africaines en agroforesterie, cacao, foresterie durable`,
        description: `I&P investit en fonds propres dans des entreprises africaines à fort impact social et environnemental. Volet spécifique pour les entreprises d'agroforesterie cacao à impact communautaire.`,
        eligibilite: [
          `Être une PME formalisée avec un chiffre d'affaires existant`,
          `Démontrer un modèle économique viable et un impact social/environnemental mesurable`,
          `Être prêt à accueillir un investisseur minoritaire au capital`,
          `Opérer dans le secteur agroforestier ou forestier`,
        ],
        contacts: [
          { label: 'I&P — Bureau Afrique de l\'Ouest', lien: 'https://www.ietp.com' },
        ],
        sources: 'I&P, Portfolio Afrique, 2023',
      },
      {
        nom: 'Bamboo Capital Partners',
        institution: 'Bamboo Capital Partners',
        type: `Fonds d'impact / Dette et fonds propres`,
        montant: 'Variable',
        beneficiaires: `Entreprises agroforestières avec composante carbone, inclusion communautaire`,
        description: `Bamboo Capital investit dans des projets agroforestiers combinant monitoring carbone et implication des communautés locales. Présence croissante en Afrique de l'Ouest.`,
        eligibilite: [
          `Être une entreprise structurée avec gouvernance formelle`,
          `Présenter un projet intégrant des co-bénéfices carbone et sociaux`,
          `Avoir une stratégie de monitoring et reporting ESG`,
          `Capacité à générer des revenus carbone certifiés`,
        ],
        contacts: [
          { label: 'Bamboo Capital Partners', lien: 'https://www.bamboocp.com' },
        ],
        sources: 'Bamboo Capital, Impact Reports 2023–2024',
      },
      {
        nom: 'EcoSwiss / Reforestation Partners',
        institution: 'EcoSwiss / Partenaires internationaux',
        type: 'Financement carbone + co-investissement',
        montant: 'Variable',
        beneficiaires: `PME, entrepreneurs locaux avec parcelles en forêt secondaire`,
        description: `Petits projets de reboisement certifiés Verra en forêt secondaire. EcoSwiss accompagne les porteurs de projets depuis la certification jusqu'à la vente des crédits, en co-investissant dans certains cas.`,
        eligibilite: [
          `Disposer d'une parcelle en forêt secondaire dégradée (min. 10 ha)`,
          `Avoir un titre foncier ou certificat foncier`,
          `S'engager sur une durée de 20 à 30 ans`,
          `Accepter le partage des revenus carbone selon la convention`,
        ],
        contacts: [
          { label: 'EcoSwiss', lien: 'https://www.ecoswiss.org' },
        ],
        sources: 'EcoSwiss, Verra VCS Registry, 2023',
        lienCarbone: true,
      },
    ],
  },
]

// ─────────────────────────────────────────────
// COMPOSANT POPUP
// ─────────────────────────────────────────────

function PopupProgramme({ programme, categorie, onClose }) {
  const navigate = useNavigate()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-gray-900 shadow-2xl"
        style={{ maxHeight: '85vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fixe */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: categorie.color }}
              >
                {categorie.label}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-400">
                {programme.type}
              </span>
            </div>
            <h2 className="mt-2 text-xl font-bold text-white">{programme.nom}</h2>
            <p className="text-sm text-gray-400">{programme.institution}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 rounded-lg p-2 text-gray-500 hover:bg-white/10 hover:text-white transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Contenu scrollable */}
        <div className="overflow-y-auto p-6 space-y-5" style={{ maxHeight: 'calc(85vh - 140px)' }}>

          {/* Montant + bénéficiaires */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">💰 Enveloppe</p>
              <p className="mt-1 text-lg font-bold text-green-400">{programme.montant}</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">👤 Bénéficiaires</p>
              <p className="mt-1 text-sm text-gray-300">{programme.beneficiaires}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Description</p>
            <p className="text-sm leading-relaxed text-gray-300">{programme.description}</p>
          </div>

          {/* Conditions d'éligibilité */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              ✅ Conditions d'éligibilité
            </p>
            <ul className="space-y-2">
              {programme.eligibilite.map((cond, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 flex-shrink-0 text-green-400">✅</span>
                  <span className="text-gray-300">{cond}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              📄 Contacts et liens utiles
            </p>
            <div className="space-y-2">
              {programme.contacts.map((contact, i) => (
                <div key={i} className="flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-white">{contact.label}</p>
                    {contact.detail && (
                      <p className="text-xs text-gray-500">{contact.detail}</p>
                    )}
                  </div>
                  {contact.lien && (
                    <a
                      href={contact.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-1 text-xs text-green-400 hover:text-green-300"
                    >
                      Ouvrir <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div className="rounded-lg bg-white/5 px-4 py-3">
            <p className="text-xs text-gray-500">
              <span className="font-semibold text-gray-400">Sources :</span> {programme.sources}
            </p>
          </div>

          {/* Lien vers marché carbone si applicable */}
          {programme.lienCarbone && (
            <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-4">
              <p className="text-sm text-green-300">
                🌿 Ce financement est lié au marché carbone.
              </p>
              <button
                onClick={() => { onClose(); navigate('/marche-carbone') }}
                className="mt-3 rounded-lg border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300 transition-all hover:bg-green-400/20"
              >
                Voir le parcours Marché Carbone →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// COMPOSANT CARTE PROGRAMME
// ─────────────────────────────────────────────

function CarteProgramme({ programme, categorie, onOuvrir }) {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20 hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-white">{programme.nom}</h3>
        <span
          className="flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
          style={{ backgroundColor: categorie.color }}
        >
          {programme.montant}
        </span>
      </div>
      <p className="mt-1 text-xs font-medium text-green-400">{programme.institution}</p>
      <p className="mt-1 text-xs text-amber-400/80">{programme.type}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{programme.description}</p>
      <div className="mt-3 border-t border-white/5 pt-3">
        <p className="text-xs text-gray-500">
          <span className="text-gray-400">👤</span> {programme.beneficiaires}
        </p>
      </div>
      <button
        onClick={() => onOuvrir(programme)}
        className="mt-4 w-full rounded-lg border border-white/10 bg-white/5 py-2 text-sm font-medium text-gray-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
      >
        En savoir plus
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────
// PAGE PRINCIPALE
// ─────────────────────────────────────────────

export default function Financements() {
  const [searchParams] = useSearchParams()
  const categorieInitiale = searchParams.get('categorie') || null

  const [activeKey, setActiveKey] = useState(categorieInitiale)
  const [programmeOuvert, setProgrammeOuvert] = useState(null)
  const navigate = useNavigate()

  const programmesAffiches = activeKey
    ? categories.filter(c => c.key === activeKey).flatMap(c =>
        c.programmes.map(p => ({ programme: p, categorie: c }))
      )
    : categories.flatMap(c =>
        c.programmes.map(p => ({ programme: p, categorie: c }))
      )

  const categorieActive = categories.find(c => c.key === activeKey) || null

  const getCategorieForProgramme = (prog) =>
    categories.find(c => c.programmes.some(p => p.nom === prog.nom))

  return (
    <div className="min-h-screen pt-16">
      <div className="mx-auto max-w-6xl px-4 py-12">

        {/* En-tête */}
        <div className="border-b border-white/5 pb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-green-400">
            Module Financement
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white">Financements Forestiers</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-400">
            {`Recensement de toutes les sources de financement disponibles pour les projets forestiers en Côte d'Ivoire. Classées par type d'activité, avec les conditions d'éligibilité et les contacts pour chaque programme.`}
          </p>

          {/* Compteur */}
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span>
              {programmesAffiches.length} programme{programmesAffiches.length > 1 ? 's' : ''} affiché{programmesAffiches.length > 1 ? 's' : ''}
            </span>
            {activeKey && (
              <button
                onClick={() => setActiveKey(null)}
                className="flex items-center gap-1 text-gray-500 hover:text-white transition-colors"
              >
                <X className="h-3 w-3" /> Supprimer le filtre
              </button>
            )}
          </div>
        </div>

        {/* Filtres catégories */}
        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Filtrer par type de projet
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveKey(activeKey === cat.key ? null : cat.key)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeKey === cat.key ? 'text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
                style={activeKey === cat.key ? { backgroundColor: cat.color } : {}}
              >
                <cat.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Description catégorie active */}
          {categorieActive && (
            <div
              className="mt-4 rounded-xl border p-4 text-sm text-gray-300"
              style={{ borderColor: categorieActive.color + '40', backgroundColor: categorieActive.color + '10' }}
            >
              <div className="flex items-center gap-2">
                <categorieActive.icon className="h-4 w-4 flex-shrink-0" style={{ color: categorieActive.color }} />
                <span>{categorieActive.description}</span>
              </div>
            </div>
          )}
        </div>

        {/* Grille des cartes */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programmesAffiches.map(({ programme, categorie }) => (
            <CarteProgramme
              key={programme.nom}
              programme={programme}
              categorie={categorie}
              onOuvrir={(p) => setProgrammeOuvert({ programme: p, categorie: getCategorieForProgramme(p) })}
            />
          ))}
        </div>

        {/* Bas de page — lien marché carbone */}
        <div className="mt-12 rounded-xl border border-green-400/20 bg-green-400/5 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-green-300">
                Votre projet peut générer des revenus carbone ?
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Découvrez comment mettre votre forêt sur le marché carbone — du NIP à la vente des crédits.
              </p>
            </div>
            <button
              onClick={() => navigate('/marche-carbone')}
              className="flex-shrink-0 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-500"
            >
              Voir le module Marché Carbone →
            </button>
          </div>
        </div>

      </div>

      {/* Popup */}
      {programmeOuvert && (
        <PopupProgramme
          programme={programmeOuvert.programme}
          categorie={programmeOuvert.categorie}
          onClose={() => setProgrammeOuvert(null)}
        />
      )}
    </div>
  )
}
