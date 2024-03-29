// https://csvjson.com/csv2json

var keywords = [
    "Aquaculture",    
    "Atmosphere",    
    "Air quality",    
    "Agriculture",    
    "Biodiversity",    
    "Bioenergy",    
    "Biofuel",    
    "Biomass",    
    "Biodegradable",    
    "Clean energy",    
    "Clean technology",    
    "Clean fuels",    
    "Clean hydrogen production",    
    "Climate",    
    "Climate change",    
    "Climate resilience",    
    "Climate action",    
    "Carbon",    
    "Carbon dioxide",    
    "Carbon footprint",    
    "Carbon neutral",    
    "Conservation jobs",    
    "Conservation",    
    "Climate-friendly",    
    "Compost",    
    "Corporate Social Responsibility (CSR)",    
    "Circular economy",    
    "Decarbonizing",    
    "Environment",    
    "Ecological",    
    "Energy",    
    "Energy jobs",    
    "Energy transition",    
    "Eco-friendly",    
    "Ecosystem",    
    "Environmentally conscious",    
    "Environmentally friendly",    
    "Environmental jobs",    
    "Environmental protection",    
    "Ethical",    
    "Earth conscious",    
    "Emissions",    
    "Eco-conscious",    
    "Eco-efficient",    
    "Economic growth",    
    "Eco-safe",    
    "Eco-aware",    
    "Eco-wise",    
    "Energy sector",    
    "Energy efficient",    
    "Economic sustainability",    
    "Forest management",    
    "Forest help",    
    "Fair trade",    
    "Fossil fuels",    
    "Green workers",    
    "Green jobs",    
    "Green collar",    
    "Global warming",    
    "Global energy sector",    
    "Geoengineering",    
    "Glaciers",    
    "Global temperature",    
    "Green building",    
    "Geothermal",    
    "Green education",    
    "Greening",    
    "Green diesel",    
    "Greenhouse gas",    
    "Green minded",    
    "Green-living",    
    "Green economy",    
    "Green industry",    
    "Green sector",    
    "Green transition",    
    "Green IT",    
    "Green tech",    
    "Green manufacturing",    
    "Green skills",    
    "Green businesses",    
    "Green infrastructure",    
    "Hydropower",    
    "Herbicide",    
    "Landfill gas",    
    "Low-impact",    
    "Low-carbon",    
    "Methane",    
    "Municipal waste",    
    "Net zero",    
    "Nature",    
    "Natural resources",    
    "Nature friendly",    
    "Net-zero economy",    
    "Organic",    
    "Ocean-friendly",    
    "Pollution",    
    "Preservation",    
    "Pesticide",    
    "Planet-friendly",    
    "Renewable",    
    "Renewable energy",    
    "Reforestation",    
    "Resource-efficient",    
    "Recycling",    
    "Sustainability",    
    "Solar",    
    "Silviculture",    
    "Single-use plastic",    
    "Sustainable jobs",    
    "Sustainable economy",    
    "Wind",    
    "Waste",    
    "Wildlife",    
    "Wildfire",    
    "Weather",    
    "Wind power",    
    "Waste reducing",    
    "Waste management",    
    "Zero waste",    
    "Green Jobs Internship Program",    
    "NRCan's Science & Technology Internship Program (STIP) – Green Jobs",    
    "Canada's Climate Action Incentive Fund (CAIF)",    
    "Sustainable Development Technology Canada (SDTC)",    
    "Natural Resources Canada",    
    "Careers in Energy",    
    "Sustainable jobs Plan",    
    "Smart Renewables and Electrification Pathways Program",    
    "Investing in Canada Infrastructure Program",    
    "Net-Zero Accelerator Initiative",    
    "Canada Infrastructure Bank",    
    "Energy Innovation Program (EIP)",    
    "Clean Fuels Fund",    
    "Orphan and Inactive Wells Program",    
    "Emissions Reduction Fund",    
    "Low Carbon Economy Fund",    
    "Canada Coal Transition Initiative",    
    "International Energy Agency's",    
    "Sectoral Workforce Solutions Program",    
    "Community Workforce Development Program",    
    "Union Training and Innovation Program",    
    "Canada's Indigenous Forestry Initiative (IFI)",    
    "NRCan's Indigenous Off-Diesel Initiative",    
    "Aquaculture",    
    "Atmosphère",    
    "Qualité de l'air",    
    "Agriculture",    
    "Biodiversité",    
    "Bioénergie",    
    "Biocarburant",    
    "Biomasse",    
    "Biodégradable",    
    "Énergie propre, énergie durable, énergie renouvelable,",    
    "Technologie propre",    
    "Carburants propres",    
    "Production d'hydrogène propre",    
    "Climat",    
    "Changement climatique",    
    "Résilience climatique",    
    "Action climatique",    
    "Carbone",    
    "Dioxyde de carbone",    
    "Empreinte carbone",    
    "Neutre en carbone, carboneutre",    
    "Emplois de conservation",    
    "Conservation",    
    "Respectueux du climat",    
    "Compost",    
    "Responsabilité Sociale des Entreprises (RSE)",    
    "Économie circulaire",    
    "Décarbonisation",    
    "Environnement",    
    "Écologique",    
    "Énergie",    
    "Emplois dans le secteur énergétique",    
    "Transition énergétique",    
    "Écologique",    
    "Écosystème",    
    "Conscient de l'environnement",    
    "Écologique",    
    "Emplois environnementaux",    
    "Protection environnementale",    
    "Éthique",    
    "Conscient de la Terre",    
    "Émissions",    
    "Écoresponsable",    
    "Écoefficace",    
    "Croissance économique",    
    "Respectueux de l'environnement, sùr, sécuritaire",    
    "Éco-responsable",    
    "Écologique",    
    "Secteur énergétique",    
    "Efficacité énergétique",    
    "Durabilité économique",    
    "Gestion forestière",    
    "Aide forestière",    
    "Commerce équitable",    
    "Combustibles fossiles",    
    "Travailleurs verts",    
    "Emplois verts",    
    "Col vert",    
    "Réchauffement climatique",    
    "Secteur énergétique mondial",    
    "Géoingénierie",    
    "Glaciers",    
    "Température globale",    
    "Bâtiment vert",    
    "Géothermie",    
    "Éducation verte",    
    "Verdissement",    
    "Diesel vert",    
    "Gaz à effet de serre",    
    "Esprit vert",    
    "Mode de vie écoresponsable",    
    "Économie verte",    
    "Industrie verte",    
    "Secteur vert",    
    "Transition verte",    
    "Informatique verte",    
    "Technologie verte",    
    "Fabrication verte",    
    "Compétences vertes",    
    "Entreprises vertes",    
    "Infrastructure verte",    
    "Hydroélectricité",    
    "Herbicide",    
    "Gaz de décharge",    
    "Faible impact",    
    "Faible teneur en carbone",    
    "Méthane",    
    "Déchets municipaux",    
    "Net zéro",    
    "Nature",    
    "Ressources naturelles",    
    "Écologique",    
    "Économie nette zéro",    
    "Organique",    
    "Respectueux de l'océan",    
    "Pollution",    
    "Préservation",    
    "Pesticide",    
    "Respectueux de la planète",    
    "Renouvelable",    
    "Énergie renouvelable",    
    "Reboisement",    
    "Économe en ressources",    
    "Recyclage",    
    "Durabilité",    
    "Solaire",    
    "Sylviculture",    
    "Plastique à usage unique",    
    "Emplois durables",    
    "Économie durable",    
    "Vent",    
    "Déchets",    
    "Faune",    
    "Feux de forêts",    
    "Météo",    
    "Énergie éolienne",    
    "Réduction des déchets",    
    "Gestion des déchets",    
    "Zéro déchet",    
    "Programme de stages et d'emplois verts",    
    "Programme de stages en sciences et technologie – Emplois verts",    
    "Fonds d'incitation à l'action pour le climat",    
    "Technologies du développement durable Canada",    
    "Ressources naturelles Canada",    
    "Carrières dans le secteur de l'énergie",    
    "Plan pour des emplois durables",    
    "Programme des énergies renouvelables intelligentes et de trajectoires d'électrification",    
    "Programme d'infrastructure Investir dans le Canada",    
    "Initiative Accélérateur net zéro",    
    "Banque de l'infrastructure du Canada",    
    "Programme d'innovation énergétique",    
    "Fonds pour les combustibles propres",    
    "Programme des puits orphelins et inactifs",    
    "Fonds de réduction des émissions",    
    "Le Fond pour une économie à faibles émissions de carbone",    
    "L'Initiative canadienne de transition pour l'industrie du charbon",    
    "Agence internationale de l'énergie",    
    "Programme de solutions pour la main d'œuvre sectorielle",    
    "Programme de développement de la main-d'œuvre des communautés",    
    "Programme pour la formation et l'innovation en milieu syndical",    
    "L'Initiative de foresterie autochtone du gouvernement du Canada",    
    "Initiative autochtone pour réduire la dépendance au diesel"
  ]