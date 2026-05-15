// ============================================================
// marcheCarboneData.js
// Source de vérité unique pour tout le contenu du module
// Marché Carbone de ReForest.
//
// Sources documentaires :
//   - Manuel des procédures opérationnelles BMC (déc. 2024)
//   - CDN 3.0 Côte d'Ivoire (2025)
//   - Décret n°2021-674 du 03 nov. 2021 (Taï Park)
//   - AFOR – Procédures Certificat Foncier et Titre Foncier
//   - Code forestier ivoirien (2019)
// ============================================================


// ─────────────────────────────────────────────────────────────
// PARTIE 1 – COMPRENDRE
// ─────────────────────────────────────────────────────────────

export const contenuComprendre = {

  // 1.1 ── Le marché carbone dans le monde
  marcheCarbone: {
    id: '1.1',
    titre: 'Le marché carbone dans le monde',
    definition: `Un système économique qui permet de monétiser la réduction ou l'absorption
      des gaz à effet de serre. Chaque crédit carbone représente une tonne de CO₂ évitée
      ou séquestrée. Ces crédits sont achetés par des entreprises, des États ou des
      organisations pour compenser leurs propres émissions.`,
    pourquoi: `Rendre financièrement attractif le fait de polluer moins : un acteur qui réduit
      ses émissions peut vendre l'équivalent à un autre. À l'échelle mondiale, les marchés
      carbone sont un outil central de l'Accord de Paris (2015) et de son Article 6.`,
    cadre: {
      texte: `L'Article 6 de l'Accord de Paris autorise les pays à coopérer volontairement
        pour atteindre leurs Contributions Déterminées au niveau National (CDN).
        Il distingue trois approches principales selon la nature du mécanisme :
        marchés bilatéraux, mécanisme centralisé ONU et coopération non-marchande.`,
      note: `Le détail de chaque mécanisme est présenté dans la Partie 2 — Mécanismes Carbone.`,
    },
  },

  // 1.2 ── Le crédit carbone
  creditCarbone: {
    id: '1.2',
    titre: 'Le crédit carbone — définition concrète',
    intro: `1 crédit carbone = 1 tonne de CO₂ absorbée ou évitée. C'est l'unité de base
      de tout échange sur le marché carbone.`,
    tableau: [
      {
        concept: '1 crédit = 1 tonne de CO₂',
        explication: `Absorbée (reboisement, agroforesterie) ou évitée (énergie propre,
          gestion des déchets). Aucune tonne ne peut être comptée deux fois.`,
      },
      {
        concept: 'Génération',
        explication: `Sur une période définie (ex. 5 à 10 ans), mesurée selon un plan
          de monitoring approuvé par un standard international.`,
      },
      {
        concept: 'Certification',
        explication: `Par Verra (VCS), Gold Standard (GS), ou le mécanisme Article 6.4
          de l'ONU. Le standard certifie la méthodologie et la réalité des réductions.`,
      },
      {
        concept: 'Vente',
        explication: `Sur le marché volontaire (entreprises souhaitant compenser) ou
          le marché réglementé (Article 6 de l'Accord de Paris entre États).`,
      },
    ],
  },

  // 1.3 ── Les engagements de la CI
  engagements: {
    id: '1.3',
    titre: 'Les engagements de la Côte d\'Ivoire — CDN 3.0',
    definitionCDN: `La Contribution Déterminée au niveau National est la feuille de route
      climatique que chaque pays signataire de l'Accord de Paris dépose à l'ONU.
      Elle précise ses objectifs de réduction des émissions.`,
    objectif: `Réduire les émissions de 33,07 % d'ici 2035 par rapport au scénario
      Business As Usual (BAU).`,
    decomposition: [
      {
        type: 'Part inconditionnelle',
        description: `Engagements réalisés avec les moyens propres de la Côte d'Ivoire,
          indépendamment d'un soutien international.`,
        icone: '🇨🇮',
      },
      {
        type: 'Part conditionnelle',
        description: `Engagements supplémentaires soumis à l'obtention d'un soutien
          international en financement, technologie ou renforcement de capacités.`,
        icone: '🌍',
      },
    ],
    consequencesProjet: [
      {
        regle: `Un projet qui contribue à l'objectif inconditionnel de la CDN
          n'est pas éligible à la génération de crédits exportables (pas d'ajustement correspondant possible).`,
        type: 'attention',
      },
      {
        regle: `Seuls les projets allant au-delà de l'engagement inconditionnel — ou situés
          dans des secteurs non couverts par la CDN — peuvent être autorisés à exporter des crédits.`,
        type: 'info',
      },
      {
        regle: `La Côte d'Ivoire conserve sa souveraineté sur les crédits carbone générés
          sur son territoire. L'État transfère ce droit au porteur via une cession formalisée par le BMC.`,
        type: 'info',
      },
    ],
    source: 'CDN 3.0 Côte d\'Ivoire, p.16-17 (objectifs), p.38-41 (scénario BAU)',
  },

  // 1.4 ── Les acteurs du système ivoirien
  acteurs: {
    id: '1.4',
    titre: 'Les acteurs du système ivoirien',
    liste: [
      {
        sigle: 'BMC',
        nom: 'Bureau du Marché Carbone',
        role: `Autorité nationale de régulation. Point d'entrée obligatoire pour tout
          projet carbone en Côte d'Ivoire. Délivre les lettres d'éligibilité,
          de non-objection, d'approbation et d'autorisation.`,
        niveau: 'national',
      },
      {
        sigle: 'ST-BMC',
        nom: 'Secrétariat Technique du BMC',
        role: `Traite les dossiers au quotidien : évalue les NIP, tient le registre
          national carbone, prépare les rapports pour le Conseil de Supervision.`,
        niveau: 'national',
      },
      {
        sigle: 'CS-BMC',
        nom: 'Conseil de Supervision du BMC',
        role: `Valide les listes négatives d'activités, examine les recours des porteurs
          de projet, approuve les accords bilatéraux et les outils opérationnels.`,
        niveau: 'national',
      },
      {
        sigle: 'RNC',
        nom: 'Registre National Carbone',
        role: `Portefeuille public de tous les projets approuvés. Suit et enregistre
          les ITMOs (Article 6.2). Géré par le ST-BMC.`,
        niveau: 'national',
      },
      {
        sigle: 'CCNUCC',
        nom: 'Convention-Cadre des Nations Unies sur les Changements Climatiques',
        role: `Instance onusienne. Supervise le mécanisme de l'Article 6.4 via
          son Comité de Surveillance. Gère le cadre de transparence renforcé (ETF).`,
        niveau: 'international',
      },
      {
        sigle: 'VVB / EVV',
        nom: 'Validation & Verification Body',
        role: `Auditeur tiers indépendant accrédité par Verra, Gold Standard ou
          la CCNUCC. Valide le document de projet et vérifie les réductions réelles.`,
        niveau: 'international',
      },
      {
        sigle: 'Verra',
        nom: 'Verified Carbon Standard (VCS)',
        role: `Standard international le plus utilisé. Certifie les projets selon
          le protocole VCS. Gère le registre public des VCUs (crédits volontaires).`,
        niveau: 'international',
      },
      {
        sigle: 'GS',
        nom: 'Gold Standard Foundation',
        role: `Standard alternatif, plus exigeant sur les co-bénéfices sociaux et ODD.
          Particulièrement valorisé par les ONG et certains marchés européens.`,
        niveau: 'international',
      },
    ],
    source: 'Manuel opérationnel BMC p.6 (abréviations), p.17-19 (responsabilités)',
  },

  // 1.5 ── Vue d'ensemble des 5 mécanismes
  vueMecanismes: {
    id: '1.5',
    titre: 'Vue d\'ensemble des mécanismes',
    intro: `Cinq mécanismes distincts coexistent. Ils sont regroupés en trois catégories
      selon leur nature. La Partie 2 détaille chacun d'eux en profondeur.`,
    tableau: [
      {
        id: 'art62',
        mecanisme: 'Article 6.2',
        categorie: 'Gouvernemental',
        principe: 'Accord bilatéral entre États — transfert d\'ITMOs',
        pourQui: 'État ivoirien, prestataires techniques privés',
      },
      {
        id: 'art64',
        mecanisme: 'Article 6.4',
        categorie: 'Gouvernemental',
        principe: 'Mécanisme centralisé ONU, successeur du MDP — génère des A6.4ER',
        pourQui: 'État, entités publiques, prestataires techniques',
      },
      {
        id: 'art68',
        mecanisme: 'Article 6.8',
        categorie: 'Non-marché',
        principe: 'Coopération technique sans transfert de crédits',
        pourQui: 'ONG, institutions académiques, cabinets de formation',
      },
      {
        id: 'mvcAjuste',
        mecanisme: 'MVC ajusté',
        categorie: 'Volontaire',
        principe: 'Crédits Verra/GS avec ajustement correspondant — grands projets',
        pourQui: 'Porteurs privés de grande envergure (>500 ha typiquement)',
      },
      {
        id: 'mvcNonAjuste',
        mecanisme: 'MVC non-ajusté',
        categorie: 'Volontaire',
        principe: 'Voie classique du porteur privé — Verra/GS sans ajustement',
        pourQui: 'Tout porteur privé, ONG, coopérative, investisseur',
      },
    ],
  },

  // 1.6 ── Exigences transversales
  exigences: {
    id: '1.6',
    titre: 'Exigences transversales — obligatoires pour TOUS les projets',
    intro: `Quel que soit le mécanisme choisi, tout dossier soumis au BMC doit
      démontrer les quatre critères suivants. L'absence de l'un d'eux suffit
      à bloquer la lettre de non-objection ou d'approbation.`,
    liste: [
      {
        icone: '🤝',
        titre: 'Partage de bénéfices juste et équitable',
        detail: `Un mécanisme formalisé de redistribution des revenus carbone avec
          les communautés locales, selon les orientations du BMC. Évalué au cas par cas.`,
      },
      {
        icone: '🌿',
        titre: 'Sauvegardes environnementales et sociales',
        detail: `Absence de destruction d'écosystèmes sensibles, respect des droits
          fonciers des tiers, non-atteinte aux moyens de subsistance existants.`,
      },
      {
        icone: '♀️',
        titre: 'Inclusion du genre et des jeunes',
        detail: `La gouvernance et les retombées du projet doivent intégrer
          explicitement les femmes et les jeunes dans leur dispositif.`,
      },
      {
        icone: '🎯',
        titre: 'Alignement avec les priorités nationales',
        detail: `Le projet doit contribuer à la politique « zéro déforestation »,
          à la stratégie REDD+ ou aux objectifs de développement durable de la CI.`,
      },
    ],
    source: 'Manuel opérationnel BMC p.17 (principes d\'éligibilité), p.26 (priorités nationales)',
  },

  // 1.7 ── Types de projets éligibles
  typesProjet: {
    id: '1.7',
    titre: 'Types de projets éligibles',
    projets: [
      {
        label: 'Reboisement / Afforestation',
        eligible: true,
        conditions: '≥ 5 ha, durée ≥ 10 ans, additionnalité requise',
      },
      {
        label: 'Agroforesterie (cacao, café, hévéa)',
        eligible: true,
        conditions: 'Vérifier la conformité avec la stratégie « zéro déforestation »',
      },
      {
        label: 'Gestion forestière améliorée (IFM)',
        eligible: true,
        conditions: 'Prouver le maintien du stock carbone sur le long terme',
      },
      {
        label: 'Conservation (REDD+)',
        eligible: true,
        conditions: 'Accepté sous Verra (VM0048) — exigeant sur les risques de non-permanence',
      },
      {
        label: 'Agriculture intensive sans arbres',
        eligible: false,
        conditions: 'Non éligible — pas de séquestration additionnelle',
      },
      {
        label: 'Projets < 1 ha ou durée < 5 ans',
        eligible: false,
        conditions: 'Trop petits ou trop courts pour générer des crédits viables',
      },
    ],
    notesImportantes: [
      {
        terme: 'Additionnalité',
        definition: `Le projet n'aurait pas eu lieu sans la perspective de revenus carbone.
          C'est une condition sine qua non pour Art. 6.2, 6.4, MVC ajusté et MVC non-ajusté.`,
      },
      {
        terme: 'Permanence',
        definition: `Le carbone séquestré doit être stocké au minimum 20 à 30 ans.
          Les programmes prévoient des tampons (buffer) pour couvrir le risque de relâche
          (incendie, maladie). Ne s'applique pas à l'Article 6.8.`,
      },
    ],
    source: 'Manuel opérationnel BMC p.17 (additionnalité) ; CDN 3.0 p.60-61 (types de projets)',
  },

  // 1.8 ── Documents clés
  documentsClés: {
    id: '1.8',
    titre: 'Les documents clés du projet',
    intro: `Cinq documents structurent le cycle de vie d'un projet carbone en CI.
      Les connaître avant de se lancer évite des allers-retours coûteux avec le BMC.`,
    liste: [
      {
        sigle: 'NIP',
        nom: 'Note d\'Idée de Projet',
        mecanismes: 'Tous',
        description: `Premier dépôt obligatoire au BMC. Décrit sommairement le projet,
          sa zone, son type d'activité et la justification de l'additionnalité.
          Délai de réponse BMC : max. 1 mois. Gratuit.`,
        etape: 'Étape 1 de tout projet',
      },
      {
        sigle: 'MADD',
        nom: 'Mitigation Activity Design Document',
        mecanismes: 'Art. 6.2, Art. 6.4, MVC ajusté',
        description: `Document de conception selon les règles du BMC et de la CCNUCC.
          Décrit la méthodologie, le scénario de référence (baseline), le plan de monitoring,
          les co-bénéfices et le mécanisme de partage de bénéfices.`,
        etape: 'Après approbation de la NIP',
      },
      {
        sigle: 'PDD',
        nom: 'Project Design Document',
        mecanismes: 'MVC non-ajusté (Verra / Gold Standard)',
        description: `Document de conception selon les règles du standard choisi (Verra ou GS).
          Même logique que le MADD mais adapté aux exigences du programme carbone indépendant.
          Validé par un VVB accrédité Verra/GS.`,
        etape: 'Après lettre de non-objection BMC',
      },
      {
        sigle: 'ERPA',
        nom: 'Emission Reduction Purchase Agreement',
        mecanismes: 'MVC non-ajusté, MVC ajusté',
        description: `Contrat d'achat des réductions d'émissions entre le porteur de projet
          et l'acheteur (entreprise, courtier ou État). Négocié après validation du PDD/MADD.
          Durée typique de négociation : 3 à 18 mois.`,
        etape: 'Pendant ou après le développement du projet',
      },
      {
        sigle: 'Rapport VVB',
        nom: 'Rapport de validation / vérification',
        mecanismes: 'Tous sauf Art. 6.8',
        description: `Émis par un auditeur tiers indépendant. Le rapport de validation
          certifie la conception du projet. Le rapport de vérification confirme les réductions
          réelles mesurées. Les deux sont envoyés simultanément au porteur et au BMC.`,
        etape: 'Validation avant approbation / Vérification avant délivrance',
      },
    ],
    source: 'Manuel opérationnel BMC p.9-14 (cycle d\'activité)',
  },
}


// ─────────────────────────────────────────────────────────────
// PARTIE 2 – LES MÉCANISMES CARBONE
// ─────────────────────────────────────────────────────────────

export const contenuMecanismes = {

  onglets: [
    { id: 'gouvernementaux', label: 'Mécanismes gouvernementaux', sous: 'Art. 6.2 & 6.4' },
    { id: 'nonmarche',       label: 'Non-marché',                 sous: 'Art. 6.8' },
    { id: 'volontaire',      label: 'Marché volontaire',          sous: 'MVC ajusté & non-ajusté' },
  ],

  mecanismes: {

    // ── ARTICLE 6.2 ──────────────────────────────────────────
    art62: {
      id: 'art62',
      onglet: 'gouvernementaux',
      numero: 'Article 6.2',
      titre: 'Coopération bilatérale entre États',
      badge: 'Gouvernemental',
      couleur: 'blue',
      definition: `Accord entre la Côte d'Ivoire et un autre État (ex. Suisse, Suède, Singapour)
        pour transférer des résultats d'atténuation internationaux (ITMOs).
        Les ITMOs sont comptabilisés dans la CDN du pays acheteur et
        déduits du bilan de la Côte d'Ivoire via un ajustement correspondant.`,
      source: 'Manuel opérationnel BMC p.21-22 (autorisation des approches coopératives)',

      cibles: [
        {
          profil: 'Porteur officiel',
          description: `L'État ivoirien, représenté par le Ministère de l'Environnement
            via le BMC. C'est lui qui signe l'accord bilatéral.`,
          acces: 'direct',
        },
        {
          profil: 'Prestataire technique privé',
          description: `Bureau d'études, cabinet de conseil carbone, développeur de projet
            ou investisseur qui conçoit, finance et opère le projet sous contrat avec l'État.
            Le partage des recettes est défini dans ce contrat.`,
          acces: 'indirect',
        },
      ],

      acteurs: [
        { sigle: 'BMC', role: 'Négocie et signe les accords bilatéraux' },
        { sigle: 'ST-BMC', role: 'Analyse les propositions, tient le registre' },
        { sigle: 'CS-BMC', role: 'Valide l\'accord, examine les recours' },
        { sigle: 'Ministre ENV', role: 'Signataire officiel des accords' },
        { sigle: 'VVB', role: 'Validation et vérification indépendante' },
        { sigle: 'Partenaire étranger', role: 'Pays acheteur des ITMOs' },
      ],

      processus: [
        { etape: '01', titre: 'Proposition d\'accord', duree: '—', desc: `Le partenaire étranger soumet une proposition d'approche coopérative au BMC.` },
        { etape: '02', titre: 'Analyse ST-BMC', duree: '1-2 mois', desc: `Analyse : principes, avantages, risques, clauses additionnelles éventuelles.` },
        { etape: '03', titre: 'Recommandation CS-BMC', duree: '2 semaines', desc: `Le Conseil de Supervision examine et formule sa recommandation.` },
        { etape: '04', titre: 'Signature accord bilatéral', duree: '2 semaines', desc: `Le Ministre chargé de l'Environnement signe l'accord ou le protocole d'accord.` },
        { etape: '05', titre: 'Dépôt de la NIP', duree: 'max. 1 mois (réponse BMC)', desc: `Le porteur de projet dépose la Note d'Idée de Projet et attend la lettre de confirmation d'éligibilité.` },
        { etape: '06', titre: 'Développement du MADD', duree: '3-6 mois', desc: `Rédaction du Mitigation Activity Design Document selon les exigences BMC/CCNUCC.` },
        { etape: '07', titre: 'Validation VVB', duree: '2-4 mois', desc: `Un VVB accrédité audite et valide le MADD. Le rapport est envoyé simultanément au porteur et au BMC.` },
        { etape: '08', titre: 'Approbation BMC', duree: 'max. 2 mois', desc: `Le BMC évalue le dossier complet, confirme la contribution au développement durable.` },
        { etape: '09', titre: 'Mise en œuvre & monitoring', duree: 'Continu', desc: `Démarrage du projet, suivi des réductions selon le plan de monitoring validé.` },
        { etape: '10', titre: 'Vérification VVB', duree: 'Tous 1-5 ans', desc: `Le VVB vérifie les réductions réelles et émet un rapport de vérification.` },
        { etape: '11', titre: 'Autorisation et délivrance ITMOs', duree: '3 jours (après dossier)', desc: `Lettre d'autorisation du Ministre. Les ITMOs sont créditées sur le compte du porteur dans le registre.` },
        { etape: '12', titre: 'Transfert international', duree: '—', desc: `Les ITMOs sont transférées au pays acheteur. La CI applique l'ajustement correspondant dans son bilan CDN.` },
      ],

      documents: [
        { doc: 'Note d\'Idée de Projet (NIP)', obligatoire: true, detail: 'Modèle BMC, justification additionnalité et développement durable' },
        { doc: 'MADD validé par VVB', obligatoire: true, detail: 'Document de conception selon les règles BMC/CCNUCC' },
        { doc: 'Rapport de validation VVB', obligatoire: true, detail: 'Envoyé simultanément au BMC et au porteur' },
        { doc: 'Justificatif partage de bénéfices', obligatoire: true, detail: 'Convention avec les communautés locales' },
        { doc: 'Analyse contribution ODD & sauvegardes E&S', obligatoire: true, detail: 'Critères du Cadre stratégique BMC' },
      ],

      lettres: [
        { type: 'Confirmation d\'éligibilité', moment: 'Après dépôt NIP (max. 1 mois)', description: 'Confirme que le projet peut générer des ITMOs éligibles au transfert.' },
        { type: 'Approbation', moment: 'Après validation MADD (max. 2 mois)', description: 'Le projet est officiellement approuvé et inscrit au registre.' },
        { type: 'Autorisation d\'utilisation des ITMOs', moment: 'Après vérification VVB', description: 'Autorisation de transférer les ITMOs au pays acheteur. Permet le « premier transfert ».' },
      ],

      couts: [
        'Frais de dépôt NIP (montant communiqué par le BMC)',
        'Frais d\'enregistrement et de gestion annuelle du projet (BMC)',
        'Frais de validation et vérification VVB (à la charge du porteur)',
        'Commission sur les recettes de vente des ITMOs (partage État / porteur)',
      ],

      revenus: {
        texte: `Vente directe à un gouvernement étranger. Prix négocié bilatéralement,
          typiquement entre 10 et 30 USD par tonne de CO₂ selon les accords.
          Le partage des recettes entre l'État et le prestataire privé est défini contractuellement.`,
        simulation: null,
      },

      risques: [
        { label: 'Négociation longue', detail: 'De 3 à 18 mois pour finaliser l\'accord bilatéral.' },
        { label: 'Engagement politique', detail: 'Un changement de gouvernement peut retarder ou remettre en cause l\'accord.' },
        { label: 'Ajustement correspondant obligatoire', detail: 'Réduit la marge de manœuvre de la CDN ivoirienne : chaque ITMO transféré est déduit du bilan national.' },
        { label: 'Complexité administrative', detail: 'Double niveau de validation : national (BMC) + international (CCNUCC pour certains accords).' },
      ],
    },


    // ── ARTICLE 6.4 ──────────────────────────────────────────
    art64: {
      id: 'art64',
      onglet: 'gouvernementaux',
      numero: 'Article 6.4',
      titre: 'Mécanisme centralisé des Nations Unies',
      badge: 'Gouvernemental',
      couleur: 'blue',
      definition: `Successeur du Mécanisme pour un Développement Propre (MDP). Les crédits
        générés sont appelés A6.4ER (Article 6.4 Emission Reductions). Contrairement à l'Art. 6.2,
        le Comité de Surveillance de la CCNUCC est l'autorité finale d'approbation —
        au-dessus du BMC.`,
      source: 'Manuel opérationnel BMC p.27-28 (approbation activités 6.4)',

      cibles: [
        {
          profil: 'Porteur officiel',
          description: 'L\'État ivoirien ou une entité publique habilitée par le BMC.',
          acces: 'direct',
        },
        {
          profil: 'Prestataire technique privé',
          description: `Cabinet d'études, consultant carbone ou investisseur concevant
            et opérant le projet pour le compte de l'État. Le cadre de rémunération
            est défini dans la convention avec le BMC.`,
          acces: 'indirect',
        },
      ],

      acteurs: [
        { sigle: 'BMC', role: 'Approbation nationale obligatoire avant soumission à l\'ONU' },
        { sigle: 'CS-CCNUCC', role: 'Comité de Surveillance article 6.4 — autorité finale' },
        { sigle: 'VVB (ONU)', role: 'VVB accrédité par la CCNUCC (pas seulement Verra/GS)' },
        { sigle: 'Registre 6.4', role: 'Registre centralisé CCNUCC pour les A6.4ER' },
        { sigle: 'ST-BMC', role: 'Instruction technique des dossiers' },
      ],

      processus: [
        { etape: '01', titre: 'Dépôt de la NIP au BMC', duree: 'max. 1 mois (réponse)', desc: 'Lettre de confirmation d\'éligibilité si le projet passe les critères.' },
        { etape: '02', titre: 'Développement du MADD', duree: '3-6 mois', desc: 'Selon les méthodologies approuvées par le Comité de Surveillance art. 6.4.' },
        { etape: '03', titre: 'Validation VVB accrédité ONU', duree: '2-4 mois', desc: 'L\'entité de validation doit être accréditée par la CCNUCC, pas seulement par Verra/GS.' },
        { etape: '04', titre: 'Approbation nationale BMC', duree: 'max. 2 mois', desc: 'Le BMC confirme la contribution au développement durable et signe l\'approbation nationale.' },
        { etape: '05', titre: 'Transmission au Comité 6.4', duree: 'Délai CCNUCC', desc: 'Le BMC transmet l\'approbation nationale + dossier au Comité de Surveillance de la CCNUCC.' },
        { etape: '06', titre: 'Enregistrement par le Comité 6.4', duree: 'Variable', desc: 'Le Comité enregistre le projet. Le projet est désormais inscrit dans le registre international.' },
        { etape: '07', titre: 'Mise en œuvre & monitoring', duree: 'Continu', desc: 'Démarrage, suivi des réductions selon le plan de monitoring validé.' },
        { etape: '08', titre: 'Vérification VVB', duree: 'Tous 1-5 ans', desc: 'Rapport de vérification envoyé au BMC et au Comité de Surveillance.' },
        { etape: '09', titre: 'Délivrance des A6.4ER', duree: '3 jours (après dossier)', desc: 'Le BMC soumet la demande de délivrance au Comité 6.4 qui émet les A6.4ER sur le registre.' },
      ],

      documents: [
        { doc: 'Note d\'Idée de Projet (NIP)', obligatoire: true, detail: 'Modèle BMC' },
        { doc: 'MADD (format 6.4)', obligatoire: true, detail: 'Template spécifique du Comité de Surveillance CCNUCC' },
        { doc: 'Rapport de validation VVB accrédité ONU', obligatoire: true, detail: 'VVB figurant sur la liste CCNUCC pour ce secteur' },
        { doc: 'Approbation nationale BMC', obligatoire: true, detail: 'Soumise au Comité 6.4 avec le dossier' },
        { doc: 'Justificatif contribution développement durable', obligatoire: true, detail: 'Conformément aux exigences décision 3/CMA.3' },
      ],

      lettres: [
        { type: 'Confirmation d\'éligibilité', moment: 'Après NIP (max. 1 mois)', description: 'Émise par le BMC, premier feu vert national.' },
        { type: 'Approbation nationale', moment: 'Après validation MADD (max. 2 mois)', description: 'Soumise au Comité de Surveillance de la CCNUCC. Obligatoire avant enregistrement ONU.' },
      ],

      couts: [
        'Frais de dépôt NIP et frais administratifs BMC',
        'Frais administratifs CCNUCC (part des recettes pour le Fonds Adaptation)',
        'Frais de validation/vérification VVB accrédité ONU',
        'Frais annuels de gestion registre',
      ],

      revenus: {
        texte: `Vente des A6.4ER sur le marché international via des courtiers spécialisés.
          Les A6.4ER sont acceptés par les États pour atteindre leurs CDN — c'est leur principal
          avantage par rapport aux VCUs du marché volontaire.`,
        simulation: null,
      },

      risques: [
        { label: 'Double validation', detail: 'Validation nationale (BMC) puis internationale (CCNUCC). Chaque niveau peut générer des allers-retours.' },
        { label: 'Délais très longs', detail: 'De 12 à 24 mois avant la première délivrance d\'A6.4ER.' },
        { label: 'Évolution réglementaire ONU', detail: 'Les règles du mécanisme 6.4 sont encore en cours de finalisation par la CCNUCC.' },
        { label: 'Ajustement correspondant', detail: 'Même contrainte que l\'Art. 6.2 sur le bilan CDN de la Côte d\'Ivoire.' },
      ],
    },


    // ── ARTICLE 6.8 ──────────────────────────────────────────
    art68: {
      id: 'art68',
      onglet: 'nonmarche',
      numero: 'Article 6.8',
      titre: 'Coopération technique non-marchande',
      badge: 'Non-marché',
      couleur: 'purple',
      definition: `Approche de coopération internationale sans transfert de crédits carbone.
        Exemples : transfert de technologie, formation, renforcement des capacités forestières,
        développement d'infrastructures vertes. Aucun crédit n'est généré ni vendu.`,
      source: 'Manuel opérationnel BMC p.31 (lettre de non-objection pour 6.8)',

      cibles: [
        {
          profil: 'ONG techniques et environnementales',
          description: 'Porteurs de programmes de renforcement des capacités ou de formation forestière.',
          acces: 'direct',
        },
        {
          profil: 'Institutions académiques et de recherche',
          description: 'Laboratoires, universités, instituts menant des projets de recherche appliquée sans visée commerciale.',
          acces: 'direct',
        },
        {
          profil: 'Cabinets de formation et bureaux d\'études',
          description: 'Acteurs apportant une solution technique non-monétaire dans le cadre d\'une coopération internationale.',
          acces: 'direct',
        },
        {
          profil: 'Collectivités locales et ministères techniques',
          description: 'Bénéficiaires de programmes de coopération financés par des agences de développement internationales.',
          acces: 'direct',
        },
      ],

      acteurs: [
        { sigle: 'BMC', role: 'Délivre la lettre de non-objection' },
        { sigle: 'ST-BMC', role: 'Évalue l\'alignement avec les priorités nationales' },
        { sigle: 'Partenaire international', role: 'Agence de coopération ou État partenaire finançant l\'activité' },
        { sigle: 'Bénéficiaire local', role: 'Collectivité, ministère technique ou communauté rurale' },
      ],

      processus: [
        { etape: '01', titre: 'Soumission note d\'intention', duree: '—', desc: 'Description de l\'activité de coopération envisagée, ses objectifs et son alignement avec la CDN.' },
        { etape: '02', titre: 'Évaluation BMC', duree: 'max. 2 mois', desc: 'Le BMC vérifie l\'alignement avec les priorités nationales (ex. CDN adaptation, PNA, stratégie REDD+).' },
        { etape: '03', titre: 'Lettre de non-objection', duree: '—', desc: 'Seule lettre délivrée — unique et définitive. Pas d\'approbation ni d\'autorisation ultérieure.' },
        { etape: '04', titre: 'Mise en œuvre', duree: 'Variable', desc: 'Aucun suivi carbone requis. L\'activité est mise en œuvre selon les modalités du partenariat.' },
      ],

      documents: [
        { doc: 'Formulaire de demande de non-objection', obligatoire: true, detail: 'Modèle BMC disponible sur le registre' },
        { doc: 'Description technique de l\'activité', obligatoire: true, detail: 'Objectifs, méthodologie, acteurs impliqués, bénéficiaires' },
        { doc: 'Preuve d\'alignement avec la CDN', obligatoire: true, detail: 'Ex. l\'activité correspond à une mesure du Plan National d\'Adaptation (PNA)' },
      ],

      lettres: [
        { type: 'Lettre de non-objection', moment: 'Après évaluation BMC (max. 2 mois)', description: 'Seule lettre requise. Pas de suivi ni d\'autorisation supplémentaire.' },
      ],

      couts: [
        'Frais de gestion BMC minimes (à confirmer)',
        'Coûts opérationnels du programme financés par le partenaire international',
      ],

      revenus: {
        texte: `Aucun crédit carbone généré — pas de revenu direct lié à la vente de crédits.
          L'intérêt pour un acteur privé est indirect : accès à des financements de programmes
          internationaux, développement de la visibilité institutionnelle, relations avec
          des agences de coopération pouvant ouvrir la voie à de futurs projets carbone.`,
        simulation: null,
      },

      risques: [
        { label: 'Aucune monétisation directe', detail: 'Le modèle économique repose entièrement sur le financement du partenaire, pas sur la vente de crédits.' },
        { label: 'Dépendance à un partenaire externe', detail: 'La pérennité de l\'activité est liée au maintien de l\'engagement du partenaire international.' },
        { label: 'Cadre réglementaire incomplet', detail: 'L\'article 6.8 est le mécanisme dont le cadre CCNUCC est le moins avancé. Des évolutions réglementaires sont attendues.' },
      ],
    },


    // ── MVC AJUSTÉ ───────────────────────────────────────────
    mvcAjuste: {
      id: 'mvcAjuste',
      onglet: 'volontaire',
      numero: 'MVC ajusté',
      titre: 'Marché Volontaire avec ajustement correspondant',
      badge: 'Volontaire',
      couleur: 'amber',
      definition: `Crédits certifiés par Verra ou Gold Standard, pour lesquels le gouvernement
        ivoirien applique un ajustement correspondant dans sa comptabilité CDN.
        Le volume de crédits vendu est officiellement cédé à l'acheteur et déduit
        du bilan de la Côte d'Ivoire. Réservé aux projets d'envergure.`,
      source: 'Manuel opérationnel BMC p.27 (approbation MVC ajusté), p.49 (ajustement correspondant)',

      cibles: [
        {
          profil: 'Porteur privé grand projet',
          description: `Entreprise, investisseur ou ONG portant un projet de grande envergure
            (typiquement > 500 ha) avec une forte exigence de « neutralité carbone »
            reconnue internationalement et compatible avec les objectifs CDN d'acheteurs étrangers.`,
          acces: 'direct',
        },
      ],

      acteurs: [
        { sigle: 'BMC', role: 'Approbation nationale et autorisation de l\'ajustement correspondant' },
        { sigle: 'Ministre ENV', role: 'Signe la lettre d\'approbation finale' },
        { sigle: 'Verra / GS', role: 'Standard certifiant les crédits (VCUs ou GS credits)' },
        { sigle: 'VVB', role: 'Validation et vérification accréditées Verra/GS' },
        { sigle: 'ST-BMC', role: 'Instruction technique' },
      ],

      processus: [
        { etape: '01', titre: 'Dépôt NIP au BMC', duree: 'max. 1 mois (réponse)', desc: 'Lettre de confirmation d\'éligibilité si le projet passe les critères BMC.' },
        { etape: '02', titre: 'Développement du MADD / PDD', duree: '3-6 mois', desc: 'Selon méthodologie Verra (ex. VM0047) ou GS. Le document suit à la fois les exigences BMC et du standard.' },
        { etape: '03', titre: 'Validation VVB accrédité Verra/GS', duree: '2-4 mois', desc: 'Rapport de validation envoyé simultanément au porteur et au BMC.' },
        { etape: '04', titre: 'Approbation BMC', duree: 'max. 2 mois', desc: 'Évaluation du dossier complet. Confirmation partage de bénéfices, sauvegardes E&S.' },
        { etape: '05', titre: 'Mise en œuvre & monitoring', duree: 'Continu', desc: 'Suivi des réductions selon le plan de monitoring validé.' },
        { etape: '06', titre: 'Vérification VVB', duree: 'Tous 1-5 ans', desc: 'Rapport de vérification transmis dans les 5 jours au BMC.' },
        { etape: '07', titre: 'Demande d\'autorisation & ajustement', duree: '10 jours (réponse BMC)', desc: 'Le BMC autorise l\'utilisation des crédits et applique l\'ajustement correspondant.' },
        { etape: '08', titre: 'Émission des crédits', duree: '—', desc: 'Le standard (Verra/GS) émet les VCUs ou GS credits sur le registre du porteur.' },
        { etape: '09', titre: 'Vente à l\'acheteur', duree: '—', desc: 'Les crédits « ajustés » peuvent être achetés par des entreprises pour couvrir leurs objectifs CDN (CSRD européen).' },
      ],

      documents: [
        { doc: 'Note d\'Idée de Projet (NIP)', obligatoire: true, detail: 'Modèle BMC' },
        { doc: 'MADD ou PDD validé par VVB', obligatoire: true, detail: 'Selon les exigences BMC et du standard choisi' },
        { doc: 'Rapport de validation VVB', obligatoire: true, detail: 'Envoyé simultanément au BMC et au porteur' },
        { doc: 'Justificatif partage de bénéfices', obligatoire: true, detail: 'Convention formalisée avec les communautés locales' },
        { doc: 'Rapport de vérification VVB', obligatoire: true, detail: 'Déclenche l\'émission des crédits' },
      ],

      lettres: [
        { type: 'Confirmation d\'éligibilité', moment: 'Après NIP (max. 1 mois)', description: 'Premier feu vert du BMC.' },
        { type: 'Approbation', moment: 'Après validation MADD/PDD (max. 2 mois)', description: 'Projet approuvé et inscrit au registre national.' },
        { type: 'Autorisation et ajustement correspondant', moment: 'Après vérification VVB', description: 'Lettre du Ministre autorisant l\'utilisation des crédits avec ajustement CDN.' },
      ],

      couts: [
        'Frais de dépôt NIP et frais administratifs BMC',
        'Frais de certification Verra/GS (enregistrement : 6 000 à 22 000 USD selon la taille du projet)',
        'Frais de validation et vérification VVB',
        'Commission potentielle de l\'État sur les recettes de vente',
      ],

      revenus: {
        texte: `Prix potentiellement plus élevé (10 à 20 USD/tCO₂) car les crédits « ajustés »
          sont acceptés par les entreprises pour leurs obligations CSRD européennes.
          Ces crédits sont rares et recherchés, ce qui soutient leur valeur de marché.`,
        simulation: null,
      },

      risques: [
        { label: 'Lourdeur administrative', detail: 'Comparable à l\'Art. 6.2 : double niveau de validation et de délais.' },
        { label: 'Sélectivité du BMC', detail: 'Peu de projets obtiennent l\'ajustement correspondant. Le BMC réserve cette option à des projets exemplaires et d\'envergure.' },
        { label: 'Coût de certification élevé', detail: 'Les frais Verra/GS pour un MVC ajusté sont significatifs et peuvent représenter une barrière pour les petits porteurs.' },
        { label: 'Ajustement CDN contraignant', detail: 'L\'État « cède » officiellement ces réductions d\'émissions — impact sur le bilan CDN ivoirien.' },
      ],
    },


    // ── MVC NON-AJUSTÉ ───────────────────────────────────────
    mvcNonAjuste: {
      id: 'mvcNonAjuste',
      onglet: 'volontaire',
      numero: 'MVC non-ajusté',
      titre: 'La voie du porteur privé — Marché Volontaire standard',
      badge: 'Volontaire',
      couleur: 'green',
      estPrincipal: true,
      definition: `Le chemin standard pour un projet carbone privé en Côte d'Ivoire.
        Certification Verra (VCS) ou Gold Standard, sans ajustement correspondant.
        Les crédits (VCUs) sont destinés au marché volontaire : des entreprises qui
        souhaitent compenser leurs émissions de façon volontaire. C'est le mécanisme
        le plus accessible et le plus adapté à un premier projet individuel.`,
      source: 'Manuel opérationnel BMC p.13-14 (exemple processus MVC non-ajusté), p.29-30 (lettres de non-objection et d\'approbation)',

      cibles: [
        {
          profil: 'Porteur privé individuel ou collectif',
          description: `Exploitant forestier, coopérative agricole, investisseur privé,
            propriétaire foncier disposant d'un terrain ≥ 5 ha et d'un horizon de 10 ans minimum.`,
          acces: 'direct',
        },
        {
          profil: 'ONG agissant pour son propre compte',
          description: 'Organisation qui développe et opère elle-même un projet de reboisement ou d\'agroforesterie.',
          acces: 'direct',
        },
        {
          profil: 'Bureau d\'études / prestataire carbone',
          description: 'Cabinet qui développe des projets pour le compte de clients (coopératives, communautés, investisseurs).',
          acces: 'direct',
        },
      ],

      acteurs: [
        { sigle: 'BMC', role: 'Délivre la non-objection puis l\'approbation finale' },
        { sigle: 'ST-BMC', role: 'Instruction des dossiers NIP et rapports de vérification' },
        { sigle: 'Verra / GS', role: 'Standard certifiant les crédits' },
        { sigle: 'VVB', role: 'Validation du PDD et vérification des réductions réelles' },
        { sigle: 'Acheteur final', role: 'Entreprise, courtier ou plateforme de trading' },
      ],

      processus: [
        {
          etape: '01',
          titre: 'Soumission de la Note d\'Idée de Projet (NIP)',
          duree: 'max. 1 mois (réponse BMC)',
          desc: `Dépôt par email au BMC du formulaire NIP incluant : justification
            de l'additionnalité, contribution au développement durable, mécanisme
            de partage de bénéfices proposé, délimitation GPS du terrain.
            Résultat : lettre de non-objection. Elle est valable jusqu'à l'obtention de l'approbation.`,
        },
        {
          etape: '02',
          titre: 'Développement et validation du projet (PDD)',
          duree: '5-10 mois',
          desc: `Rédaction du Project Design Document (PDD) selon la méthodologie Verra
            (ex. VM0047 reboisement, VM0015 agroforesterie) ou Gold Standard.
            Validation par un VVB accrédité par le standard choisi. Le VVB envoie
            son rapport simultanément au porteur et au BMC dans les 5 jours.`,
        },
        {
          etape: '03',
          titre: 'Mise en œuvre et monitoring',
          duree: 'Continu',
          desc: `Démarrage des activités sur le terrain. Suivi des réductions de CO₂
            selon le plan de monitoring validé dans le PDD. Collecte des données
            terrain pour la future vérification.`,
        },
        {
          etape: '04',
          titre: 'Vérification par un VVB',
          duree: 'Tous les 1-5 ans',
          desc: `Le VVB vérifie les réductions réelles de CO₂ sur la période de monitoring.
            Rapport de vérification transmis au BMC dans les 5 jours suivant sa réception
            par le porteur.`,
        },
        {
          etape: '05',
          titre: 'Approbation BMC et délivrance des crédits',
          duree: '10 jours (après rapport de vérification)',
          desc: `Le BMC évalue la conformité (partage de bénéfices, sauvegardes).
            Délivrance de la lettre d'approbation du Ministre de l'Environnement.
            Le porteur peut alors demander au standard (Verra/GS) d'émettre les VCUs
            sur son compte registre. Les crédits peuvent désormais être vendus.`,
        },
      ],

      négociation: {
        titre: 'Négociation des contrats (ERPA)',
        source: 'Manuel opérationnel BMC — Chapitre IX',
        intro: `Cette phase s'intercale entre l'approbation du PDD et la finalisation
          des accords avec les acheteurs. Elle est souvent sous-estimée.`,
        points: [
          'Durée typique : 3 à 18 mois selon la complexité',
          'Comité de négociation : conseils juridiques, financiers, représentants communautaires',
          'Formalisation obligatoire du mécanisme de partage de bénéfices (condition d\'approbation BMC)',
          'Rédaction et révision de l\'ERPA (Emission Reduction Purchase Agreement)',
          'Signature après approbation BMC et validation des accords par les autorités compétentes',
        ],
      },

      documents: [
        { doc: 'Note d\'Idée de Projet (NIP)', obligatoire: true, detail: 'Modèle BMC, justification additionnalité + partage de bénéfices' },
        { doc: 'PDD validé par VVB', obligatoire: true, detail: 'Selon méthodologie Verra ou Gold Standard' },
        { doc: 'Rapport de validation VVB', obligatoire: true, detail: 'Envoyé simultanément BMC et porteur' },
        { doc: 'Rapport de vérification VVB', obligatoire: true, detail: 'Déclenche la lettre d\'approbation BMC' },
        { doc: 'Justificatif partage de bénéfices', obligatoire: true, detail: 'Convention signée avec les communautés locales' },
        { doc: 'Délimitation GPS', obligatoire: true, detail: 'Fichier SHP ou KMZ, précision < 10 m' },
      ],

      lettres: [
        { type: 'Lettre de non-objection', moment: 'Après NIP (max. 1 mois)', description: 'Premier feu vert officiel. Valable jusqu\'à l\'approbation. Protège le porteur contre toute concurrence sur la même zone.' },
        { type: 'Lettre d\'approbation', moment: '10 jours après rapport de vérification', description: 'Indispensable pour vendre les crédits. Émise par le Ministre de l\'Environnement via le BMC.' },
      ],

      couts: [
        'Frais de dépôt NIP (montant communiqué par le BMC)',
        'Frais d\'enregistrement du projet au BMC',
        'Frais de validation et vérification VVB (à la charge du porteur)',
        'Frais annuels de gestion (peuvent être prélevés sur les crédits vendus)',
      ],

      revenus: {
        texte: `Revenus issus de la vente des VCUs sur le marché volontaire.
          Les prix varient selon la qualité du projet, les co-bénéfices certifiés
          et les canaux de vente. Taux de change utilisé : 1 USD = 600 FCFA.`,
        simulation: [
          { scenario: '50 ha de reboisement', creditsAn: '500 – 750 t', prixUSD: 5, revenuFCFA: '1,5 M – 2,25 M' },
          { scenario: '200 ha agroforesterie cacao', creditsAn: '1 000 – 2 000 t', prixUSD: 8, revenuFCFA: '4,8 M – 9,6 M' },
          { scenario: '500 ha forêt gérée (IFM)', creditsAn: '5 000 – 7 500 t', prixUSD: 12, revenuFCFA: '36 M – 54 M' },
        ],
        note: 'Estimations indicatives avant déduction des frais de certification et de gestion.',
        facteursPrix: [
          { label: 'Co-bénéfices certifiés (biodiversité, communautés)', impact: '+', detail: 'Labels CCB, SD Vista : +2 à 5 USD/t' },
          { label: 'Vintage récent (< 3 ans)', impact: '+', detail: 'Les acheteurs préfèrent les crédits récents' },
          { label: 'Projet forêt tropicale africaine', impact: '+', detail: 'Forte demande des entreprises européennes (CSRD)' },
          { label: 'Standard Gold Standard vs Verra', impact: '~', detail: 'GS souvent mieux valorisé sur certains marchés' },
          { label: 'Projet < 500 ha sans VVB reconnu', impact: '–', detail: 'Liquidité plus faible, décote possible' },
        ],
        canaux: [
          { nom: 'Vente directe à un acheteur corporate', avantage: 'Prix plus élevé (10-20 USD/t)', inconvenient: 'Nécessite un réseau de contacts établi', icone: '🤝' },
          { nom: 'Courtier carbone spécialisé', avantage: 'Accès à un portefeuille d\'acheteurs', inconvenient: 'Commission 5-15 % du prix de vente', icone: '💼' },
          { nom: 'Plateforme Xpansiv / ACX', avantage: 'Marché liquide, prix transparent', inconvenient: 'Frais 1-5 %, accès limité en Afrique', icone: '🌐' },
          { nom: 'Marché domestique BMC', avantage: 'Cadre réglementaire local, en développement', inconvenient: 'Marché encore peu liquide (2025-2026)', icone: '🏛️' },
        ],
      },

      risques: [
        { label: 'Non-approbation BMC', detail: 'Si le partage de bénéfices est jugé insuffisant ou si les sauvegardes ne sont pas respectées, le BMC peut refuser la lettre d\'approbation.' },
        { label: 'Chute des prix du carbone volontaire', detail: 'Le marché volontaire a connu une baisse significative entre 2023 et 2025. Les prix restent volatils.' },
        { label: 'Non-permanence', detail: 'Un incendie, une maladie ou une coupe illégale peut annuler des crédits déjà émis. Le buffer du standard (tampon de permanence) en absorbe une partie.' },
        { label: 'Délai de première délivrance', detail: 'Entre 12 et 18 mois en moyenne avant les premiers VCUs sur le compte. La trésorerie du projet doit absorber cette période.' },
      ],
    },
  },
}


// ─────────────────────────────────────────────────────────────
// PARTIE 3 – SYNTHÈSE
// ─────────────────────────────────────────────────────────────

export const contenuSynthese = {

  tableau: {
    titre: 'Tableau comparatif des 5 mécanismes',
    criteres: ['Catégorie', 'Porteur éligible', 'Lettre BMC principale', 'Crédits transférés', 'Ajustement CDN', 'Standard', 'Délai 1ers crédits', 'Complexité'],
    mecanismes: [
      {
        id: 'art62',
        nom: 'Art. 6.2',
        values: ['Gouvernemental', 'État (via BMC)', 'Autorisation ITMO', 'Oui (ITMOs)', 'Oui', 'Accord bilatéral', '18-30 mois', 'Très élevée'],
        couleur: 'blue',
      },
      {
        id: 'art64',
        nom: 'Art. 6.4',
        values: ['Gouvernemental', 'État (via BMC)', 'Approbation nationale', 'Oui (A6.4ER)', 'Oui', 'Règles CCNUCC', '24-36 mois', 'Élevée'],
        couleur: 'blue',
      },
      {
        id: 'art68',
        nom: 'Art. 6.8',
        values: ['Non-marché', 'ONG, académie, collectivité', 'Non-objection', 'Non', 'Non', 'Aucun', '2-4 mois (lettre)', 'Faible'],
        couleur: 'purple',
      },
      {
        id: 'mvcAjuste',
        nom: 'MVC ajusté',
        values: ['Volontaire', 'Privé grand projet', 'Approbation + ajustement', 'Oui (VCU/GS)', 'Oui', 'Verra / GS', '18-24 mois', 'Élevée'],
        couleur: 'amber',
      },
      {
        id: 'mvcNonAjuste',
        nom: 'MVC non-ajusté',
        values: ['Volontaire', 'Privé, ONG, coopérative', 'Non-objection → Approbation', 'Oui (VCU/GS)', 'Non', 'Verra / GS', '12-18 mois', 'Modérée'],
        couleur: 'green',
      },
    ],
  },

  profils: {
    titre: 'Qui est concerné par quel mécanisme ?',
    intro: 'Cinq profils types pour s\'y retrouver selon son statut et ses objectifs.',
    liste: [
      {
        icone: '🌳',
        profil: 'Investisseur privé avec terrain (> 50 ha)',
        mecanisme: 'MVC non-ajusté (Verra)',
        couleur: 'green',
        justification: 'Processus éprouvé, délai raisonnable, rentabilité démontrée, pas de contrainte d\'ajustement CDN.',
      },
      {
        icone: '📐',
        profil: 'Bureau d\'études environnemental',
        mecanisme: 'MVC non-ajusté (prestataire)',
        couleur: 'green',
        justification: 'Peut développer des projets pour des clients (coopératives, communautés, investisseurs) et percevoir des honoraires ou une part des crédits.',
      },
      {
        icone: '🤲',
        profil: 'ONG technique (reboisement, formation)',
        mecanisme: 'MVC non-ajusté ou Art. 6.8',
        couleur: 'purple',
        justification: 'MVC non-ajusté si l\'ONG veut vendre des crédits pour auto-financer ses activités. Art. 6.8 si l\'objectif est une coopération technique sans revenu direct.',
      },
      {
        icone: '🎓',
        profil: 'Institution académique / de recherche',
        mecanisme: 'Art. 6.8',
        couleur: 'purple',
        justification: 'Idéal pour des projets de recherche appliquée, de formation ou de renforcement des capacités sans visée commerciale.',
      },
      {
        icone: '🏛️',
        profil: 'État / Collectivité locale / Ministère',
        mecanisme: 'Art. 6.2 ou MVC ajusté',
        couleur: 'blue',
        justification: 'Pour des projets d\'envergure nationale, avec négociation internationale ou exigence d\'un ajustement correspondant reconnu par les acheteurs étrangers.',
      },
    ],
  },

  checklist: {
    titre: 'Checklist avant de choisir son mécanisme',
    questions: [
      'Mon projet est-il situé en Côte d\'Ivoire et respecte-t-il les critères d\'éligibilité (≥ 5 ha, durée ≥ 10 ans) ?',
      'Mon projet est-il additionnel — n\'aurait-il pas eu lieu sans les revenus carbone ?',
      'Ai-je un droit foncier ou une convention de gestion valide (titre foncier, certificat foncier AFOR, contrat MINEF/SODEFOR) ?',
      'Ai-je identifié un mécanisme de partage de bénéfices avec les communautés locales ?',
      'Quels sont mes objectifs : vendre des crédits (→ MVC non-ajusté), promouvoir une coopération technique (→ Art. 6.8) ou travailler avec un État étranger (→ Art. 6.2) ?',
      'Quel est mon budget pour les frais de certification, de validation VVB et de gestion BMC ?',
    ],
  },
}


// ─────────────────────────────────────────────────────────────
// SOUS-MODULE – SÉCURISATION FONCIÈRE
// ─────────────────────────────────────────────────────────────

export const contenuFoncier = {

  // Aperçu affiché dans la pop-up
  apercu: {
    titre: 'Sécurisation foncière',
    sousTitre: 'Prérequis incontournable à tout projet carbone',
    intro: `En Côte d'Ivoire, le droit d'exploiter le carbone d'un terrain suit le droit
      d'usage ou de propriété sur ce terrain. Aucun projet carbone (hors Art. 6.8)
      ne peut être enregistré au BMC sans preuve de maîtrise foncière.`,
    parcours: [
      { etape: 'Droits coutumiers', detail: 'Reconnus et constatés officiellement', icone: '🌾' },
      { etape: 'Certificat Foncier', detail: 'Délivré par l\'AFOR après enquête du Sous-préfet', icone: '📋' },
      { etape: 'Titre Foncier', detail: 'Définitif, irrévocable, inattaquable', icone: '📜' },
      { etape: 'Cession droits carbone', detail: 'Par le BMC — condition préalable à la NIP', icone: '✍️' },
    ],
    typesReconnus: [
      { doc: 'Titre Foncier', valide: true, niveau: 'Idéal' },
      { doc: 'Certificat Foncier (AFOR)', valide: true, niveau: 'Accepté' },
      { doc: 'Convention MINEF / SODEFOR', valide: true, niveau: 'Accepté' },
      { doc: 'Contrat de métayage formalisé', valide: 'partiel', niveau: 'Conditionnel' },
      { doc: 'Bail verbal / Promesse de vente', valide: false, niveau: 'Non recevable' },
    ],
  },

  // Contenu complet de la page /securisation-fonciere
  complet: {
    sections: [

      {
        id: 'pourquoi',
        titre: 'Pourquoi le foncier est incontournable',
        contenu: `En Côte d'Ivoire, les crédits carbone appartiennent à l'État
          par principe de souveraineté (loi n°2019-675 portant Code forestier).
          L'État transfère ce droit au porteur de projet par une cession formelle
          via le BMC — mais cette cession ne peut avoir lieu que si le porteur
          justifie d'un droit d'exploitation ou de propriété sur la terre concernée.
          Sans titre, pas de cession. Sans cession, pas de NIP recevable.`,
        source: 'Manuel opérationnel BMC p.28 (attribution des droits carbone)',
      },

      {
        id: 'types',
        titre: 'Types de droits reconnus et leur valeur',
        tableau: [
          {
            doc: 'Titre Foncier',
            delivre: 'AFOR (après immatriculation)',
            statut: 'Propriété pleine, définitive, irrévocable et inattaquable',
            valeurProjet: 'optimal',
            note: 'Obtenu en immatriculant un Certificat Foncier au livre foncier.',
          },
          {
            doc: 'Certificat Foncier',
            delivre: 'AFOR (enquête du Sous-préfet)',
            statut: 'Droits coutumiers constatés officiellement — étape intermédiaire vers le TF',
            valeurProjet: 'bon',
            note: 'Décret n°2019-266 du 27 mars 2019. Transmissible et cessible.',
          },
          {
            doc: 'Convention de gestion (MINEF/SODEFOR)',
            delivre: 'MINEF ou SODEFOR',
            statut: 'Droit d\'usage sur forêt classée — propriété reste à l\'État',
            valeurProjet: 'bon',
            note: 'Pour les forêts classées. Le porteur gère mais ne possède pas.',
          },
          {
            doc: 'Contrat de métayage formalisé',
            delivre: 'Entre particuliers (notarié)',
            statut: 'Usage délégué par le propriétaire à l\'exploitant',
            valeurProjet: 'conditionnel',
            note: 'Accepté si le propriétaire signe une renonciation explicite aux droits carbone.',
          },
          {
            doc: 'Bail verbal / Promesse de vente',
            delivre: '—',
            statut: 'Aucune valeur juridique reconnue',
            valeurProjet: 'invalide',
            note: 'Non recevable par le BMC.',
          },
        ],
        source: 'AFOR — Procédures Certificat Foncier et Titre Foncier (www.afor.ci)',
      },

      {
        id: 'parcours-cf',
        titre: 'Obtenir un Certificat Foncier — la procédure AFOR',
        intro: `Pour un terrain rural coutumier, le Certificat Foncier est l'acte
          administratif qui constate officiellement les droits du demandeur.
          Procédure définie par le décret n°2019-266 du 27 mars 2019.`,
        etapes: [
          { num: '01', titre: 'Demande d\'enquête', desc: 'Formulaire adressé au Sous-préfet (Président du CSPGFR). Disponible dans la liasse foncière AFOR (10 000 FCFA).' },
          { num: '02', titre: 'Désignation commissaire-enquêteur', desc: 'L\'AFOR désigne un commissaire. Le Sous-préfet déclare l\'ouverture officielle de l\'enquête.' },
          { num: '03', titre: 'Réalisation de l\'enquête', desc: 'Le demandeur ouvre les layons, choisit un géomètre-expert agréé. Constat des limites avec voisins limitrophes.' },
          { num: '04', titre: 'Publicité des résultats', desc: 'Affichage dans le village. Période de publicité d\'1 mois. Registre des accords et oppositions ouvert.' },
          { num: '05', titre: 'Approbation (CVGFR)', desc: 'Le Comité Villageois de Gestion Foncière Rurale signe le constat d\'existence de droits coutumiers.' },
          { num: '06', titre: 'Validation (CSPGFR)', desc: 'Le Comité Sous-Préfectoral valide. Le Sous-préfet transmet le dossier à l\'AFOR.' },
          { num: '07', titre: 'Signature & publication JO', desc: 'L\'AFOR prépare le CF signé par le Préfet de Département. Publication au Journal Officiel. Un exemplaire remis au bénéficiaire.' },
        ],
        dureeEstimee: '6 à 12 mois selon la localité et la complexité du terrain',
        source: 'AFOR — www.afor.ci/procedures/certificat-foncier',
      },

      {
        id: 'parcours-tf',
        titre: 'Du Certificat Foncier au Titre Foncier — l\'immatriculation',
        intro: `Le Titre Foncier est le document définitif, irrévocable et inattaquable.
          Il s'obtient en immatriculant le Certificat Foncier au livre foncier via l\'AFOR.`,
        dossier: [
          'Requête d\'immatriculation (dans la liasse foncière)',
          'Original ou copie certifiée conforme du Certificat Foncier',
          'Photocopie de la CNI du demandeur',
          'Dossier technique du géomètre-expert agréé (1 calque + 16 copies du plan)',
          'Fichier numérique : SHP, DWG, PDF du plan et CSV des bornes',
          'Publication du Certificat Foncier au Journal Officiel',
        ],
        attention: 'Aucune cession (vente ou don) n\'est possible pendant la procédure d\'immatriculation.',
        source: 'AFOR — www.afor.ci/procedures/titre-foncier',
      },

      {
        id: 'droits-carbone',
        titre: 'La cession des droits carbone par l\'État',
        intro: `Une fois le titre ou le certificat foncier obtenu, une étape supplémentaire
          est requise avant tout dépôt de NIP : la cession formelle du droit d'exploitation
          carbone par l'État au porteur de projet.`,
        principe: `Les crédits carbone appartiennent à l'État de Côte d'Ivoire
          (principe de souveraineté sur les ressources naturelles). L'État peut
          les transférer à tout individu justifiant d'un droit d'exploitation ou
          de propriété sur la terre concernée, à des conditions définies au préalable.`,
        refLegale: `Cette cession se matérialise dans le cadre du processus BMC,
          à l'occasion du dépôt de la NIP. Le décret n°2021-674 du 03 novembre 2021
          en est un exemple concret : il autorise la cession de 10 millions de tonnes
          de crédits carbone issus du Parc National de Taï au Fonds Carbone du FCPF.
          Ce décret illustre le mécanisme de cession étatique — pas un cadre général.`,
        source: 'Manuel opérationnel BMC p.28 (para. 64) ; Décret n°2021-674 du 03/11/2021',
      },

      {
        id: 'plan-action',
        titre: 'Plan d\'action en 4 étapes',
        etapes: [
          { num: '01', titre: 'Identifier le statut de son terrain', desc: 'Domaine privé de l\'État, domaine rural, forêt classée ou terroir villageois. Contacter la mairie ou la sous-préfecture pour obtenir le statut cadastral.' },
          { num: '02', titre: 'Obtenir l\'acte de base', desc: 'Engager la procédure AFOR (Certificat Foncier si terrain coutumier) ou demander une convention de gestion (MINEF/SODEFOR si forêt classée). Délimiter précisément le périmètre (fichier GPS SHP/KMZ).' },
          { num: '03', titre: 'Préparer la cession des droits carbone', desc: 'Avant le dépôt de la NIP, informer le BMC de l\'intention de développer un projet carbone et obtenir une lettre d\'intention de cession des droits carbone.' },
          { num: '04', titre: 'Joindre la cession au dossier NIP', desc: 'L\'acte foncier + la lettre d\'intention de cession constituent les pièces justificatives foncières obligatoires du dossier NIP.' },
        ],
      },

      {
        id: 'contact',
        titre: 'Contact AFOR',
        entite: 'Agence Foncière Rurale (AFOR)',
        decret: 'Créée par le Décret N°2016-590 du 03 août 2016',
        adresse: 'Abidjan, Cocody-Angré 7è Tranche, Quartier Zinsou 1, Rue L 183',
        email: 'infos@afor.ci',
        tel: ['+225 07 98 73 73 98', '+225 27 22 50 51 71'],
        site: 'www.afor.ci',
      },
    ],
  },
}
