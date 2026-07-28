import ceo from "@/assets/uploads/ceo.jpeg";
import west from "@/assets/uploads/west.jpeg";
import survey1 from "@/assets/uploads/survey1.jpeg";
import outcrop1 from "@/assets/uploads/outcrop1.jpeg";
import outcrop2 from "@/assets/uploads/outcrop2.jpeg";
import quarry from "@/assets/uploads/quarry.jpeg";
import excavator from "@/assets/uploads/excavator.jpeg";
import mining from "@/assets/uploads/mining.jpeg";
import mill from "@/assets/uploads/mill.jpeg";
import equipment1 from "@/assets/uploads/equipment1.jpeg";
import equipment2 from "@/assets/uploads/equipment2.jpeg";

export const site = {
  name: "GeoDiscovery Geosciences",
  short: "GeoDiscovery",
  tagline: "Reading the earth. Guiding what's built on it.",
  description:
    "A team of geologists and applied geophysicists delivering borehole, land survey, mineral exploration and geotechnical services across the region.",
  email: "info@geodiscoverygeosciences.com",
  phone: "+234 803 406 5079",
  address: "Plot 493, Sam Tsumba Street, Off Femi Kila Street, Cadastral Zone One, Life Camp, Abuja, FCT, Nigeria",
  hours: "Mon – Fri · 9:00 – 18:00",
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  short: string;
  bio: string[];
  expertise: string[];
  education?: string[];
  email?: string;
};

export const team: TeamMember[] = [
  {
    id: "jude-steven-ejepu",
    name: "Dr. Jude Steven Ejepu, PhD",
    role: "CEO / Founder & Associate Professor",
    photo: ceo,
    short: "Applied geophysicist and mineral exploration specialist with over two decades of experience integrating geophysical, geochemical, and structural datasets to de-risk exploration across West Africa.",
    bio: [
      "Dr. Jude Ejepu is a geoscientist, applied geophysicist, and mineral exploration specialist with over two decades of combined academic and industry experience. As Founder and CEO of Geodiscovery Geosciences, he leads a consultancy delivering exploration strategies, resource evaluations, and geoscientific advisory services to clients across Nigeria, Ghana, Ethiopia, and Burkina Faso.",
      "His work centres on the integration of geophysical, geochemical, and structural datasets to reduce exploration risk and sharpen resource targeting, with particular focus on base and precious metals in structurally controlled mineralisation environments. Project experience spans gold and lithium exploration in Central and Northern Nigeria, lead-zinc studies in the Lower Benue Trough, geothermal system characterisation, and aeromagnetic and airborne gamma ray spectrometry interpretation for mineral targeting.",
      "In academia, Dr. Ejepu is Associate Professor in the Departments of Geology and Geophysics at the Federal University of Technology Minna (FUTMinna), where he has trained geoscientists at undergraduate, Masters, and PhD levels for more than thirteen years."
    ],
    expertise: [
      "Mineral exploration (Gold, Lithium, Base Metals)",
      "Integration of geophysical, geochemical & structural datasets",
      "Aeromagnetic & gamma-ray spectrometry interpretation",
      "Remote sensing & GIS (ArcGIS Pro, ENVI, Sentinel, Landsat)",
      "Geostatistics & resource evaluation (Leapfrog, Surfer)",
      "Exploration workflow management (Oasis Montaj, MATLAB, Python)"
    ],
    education: ["PhD, Geology", "MSc, Applied Geophysics", "BSc, Geology"],
  
    email: "jude@geodiscoverygeosciences.com"
  },
  {
    id: "adeshina-olanrewaju-jeremiah",
    name: "Adeshina Olanrewaju Jeremiah",
    role: "IT & Digital Systems Manager",
    photo: west,
    short:
      "Geoscience software engineer bridging field data, digital infrastructure and business operations.",
    bio: [
      "Adeshina Olanrewaju Jeremiah serves as the Geoscience Software Engineer of the company, overseeing the technological and digital infrastructure that supports business operations and growth.",
      "He designs and maintains the data pipelines, reporting systems and web platforms that turn field measurements into decisions clients can act on.",
      "His work sits at the intersection of geoscience workflows, cloud systems and product engineering.",
    ],
    expertise: [
      "Geoscience software",
      "Data pipelines",
      "Cloud infrastructure",
      "GIS platforms",
      "Product engineering",
    ],
    education: ["BSc, Computer Science"],
    email: "adeshina@geodiscoverygeosciences.com",
  },
];

export type Project = {
  id: string;
  title: string;
  client?: string;
  location: string;
  year: string;
  category: string;
  cover: string;
  gallery: string[];
  summary: string;
  description: string[];
  services: string[];
  outcomes?: string[];
};

export const projects: Project[] = [
  {
    id: "borehole-survey-central-region",
    title: "Borehole & Groundwater Survey",
    client: "Regional Water Authority",
    location: "Central Region",
    year: "2025",
    category: "Hydrogeology",
    cover: survey1,
    gallery: [survey1, equipment1, equipment2],
    summary:
      "Vertical electrical sounding and borehole siting for a rural water supply programme.",
    description: [
      "GeoDiscovery deployed integrated resistivity and VES surveys to locate high-yield aquifers across a mixed basement and sedimentary terrain.",
      "Field teams collected and processed profiles at each proposed community site, cross-checking anomalies with structural mapping before recommending drilling depths.",
      "The deliverable was a ranked shortlist of borehole locations, each with predicted yield, screen depth and drilling risk.",
    ],
    services: ["VES resistivity", "Borehole siting", "Aquifer characterisation", "Drilling supervision"],
    outcomes: ["12 successful boreholes", "Average yield above target", "Zero dry wells on recommended sites"],
  },
  {
    id: "mineral-exploration-northern-belt",
    title: "Mineral Exploration Programme",
    client: "Private mining group",
    location: "Northern Mineral Belt",
    year: "2025",
    category: "Exploration",
    cover: mining,
    gallery: [mining, excavator, outcrop2],
    summary:
      "Reconnaissance to trench-scale exploration of a base-metal prospect across a 40 km² licence.",
    description: [
      "The team combined remote-sensing lineament analysis with ground truthing to define priority targets on the licence.",
      "Follow-up work included pit and trench logging, systematic soil geochemistry, and structural mapping of outcropping mineralised zones.",
      "Results were compiled into a target-ranking report used to plan the client's drilling campaign.",
    ],
    services: ["Remote sensing", "Geological mapping", "Soil geochemistry", "Target generation"],
    outcomes: ["6 drill-ready targets defined", "Structural model delivered", "Phase-2 drilling approved"],
  },
  {
    id: "quarry-geotechnical-assessment",
    title: "Quarry Geotechnical Assessment",
    client: "Aggregates operator",
    location: "South-western zone",
    year: "2024",
    category: "Geotechnical",
    cover: quarry,
    gallery: [quarry, excavator, outcrop1],
    summary:
      "Pit-slope stability and reserve verification for an active hard-rock aggregates quarry.",
    description: [
      "Structural mapping of the working faces, joint-set analysis and kinematic checks informed a revised bench geometry for safer extraction.",
      "Volumetric estimation used drone survey combined with density testing on representative core samples.",
      "The updated life-of-mine plan extended the operating horizon while tightening slope-monitoring protocols.",
    ],
    services: ["Slope stability", "Structural mapping", "Reserve estimation", "Drone survey"],
  },
  {
    id: "land-survey-industrial-site",
    title: "Industrial Site Land Survey",
    client: "Infrastructure developer",
    location: "Coastal corridor",
    year: "2024",
    category: "Land Survey",
    cover: outcrop1,
    gallery: [outcrop1, outcrop2, survey1],
    summary:
      "Topographic and cadastral survey supporting design of a new industrial facility.",
    description: [
      "High-resolution GNSS control, drone photogrammetry and ground survey were combined to produce a certified base map for the design team.",
      "Boundary reconciliation resolved a long-standing overlap with adjacent titles, unlocking permitting.",
      "Deliverables included contour maps, a 3D terrain model and a full cadastral report.",
    ],
    services: ["GNSS control", "Drone photogrammetry", "Cadastral survey", "3D terrain modelling"],
  },
  {
    id: "processing-mill-feasibility",
    title: "Small-Scale Processing Mill Feasibility",
    client: "Cooperative miners",
    location: "Mining district",
    year: "2024",
    category: "Advisory",
    cover: mill,
    gallery: [mill, mining, excavator],
    summary:
      "Feasibility, sample testing and layout for a modular ore-processing mill.",
    description: [
      "The team characterised feed material from three artisanal sites, ran comparative recovery tests and specified an appropriate mill configuration.",
      "A phased capital plan matched the cooperative's cashflow while leaving room for later capacity upgrades.",
      "The final report has been used to secure development financing.",
    ],
    services: ["Feed characterisation", "Metallurgical testing", "Plant layout", "Financial modelling"],
  },
  {
    id: "geoelectric-imaging-campus",
    title: "Geoelectric Imaging for Campus Expansion",
    client: "Tertiary institution",
    location: "Middle belt",
    year: "2023",
    category: "Geophysics",
    cover: equipment1,
    gallery: [equipment1, equipment2, survey1],
    summary:
      "2D geoelectric imaging to map subsurface conditions for a new academic block.",
    description: [
      "Multi-electrode resistivity profiles were run across the proposed building footprint to identify soft zones and shallow bedrock.",
      "Results directly informed foundation depth and helped avoid a buried utility corridor that legacy plans had missed.",
      "The client used the report as a permit-ready geotechnical input.",
    ],
    services: ["2D resistivity imaging", "Foundation advisory", "Report preparation"],
  },
];

export const services = [
  {
    title: "Borehole & Groundwater",
    body: "Siting, VES surveys, drilling supervision and aquifer testing for reliable water supply.",
  },
  {
    title: "Land & Cadastral Survey",
    body: "GNSS control, drone photogrammetry, contour mapping and boundary reconciliation.",
  },
  {
    title: "Mineral Exploration",
    body: "Remote sensing, mapping, geochemistry and target generation on greenfield and brownfield licences.",
  },
  {
    title: "Geotechnical Studies",
    body: "Foundation investigations, slope stability and site characterisation for buildings and infrastructure.",
  },
  {
    title: "Geophysical Imaging",
    body: "2D/3D resistivity, VES, seismic refraction and integrated interpretation.",
  },
  {
    title: "GIS & Remote Sensing",
    body: "Spatial analysis, satellite and drone-derived products for planning and monitoring.",
  },
];

export const homeGallery = [outcrop1, quarry, excavator, mining, mill, equipment2];
export const heroImage = outcrop2;
export const aboutImage = survey1;