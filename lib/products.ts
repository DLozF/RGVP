export interface Product {
  name: string
  slug: string
  category: string
  weight: string
  purity: string
  description: string
  image: string
  coa: string | null
  detailedDescription: string
  specifications: {
    label: string
    value: string
  }[]
  scientificSpecs?: {
    aminoAcidSequence?: string
    molecularFormula?: string
    casNumber?: string
    molecularWeight?: string
  }
  researchApplications: string[]
  storageConditions: string
  shelfLife: string
  format?: "Lyophilized" | "Liquid"
}

export const products: Product[] = [
  {
    name: "BPC-157",
    slug: "bpc-157",
    category: "Pentadecapeptide",
    weight: "1503.74 g/mol",
    purity: "99.8%",
    description: "A 15-amino acid peptide fragment derived from human gastric juice protein for laboratory research.",
    image: "/images/products/bpc-157.jpeg",
    coa: "/images/coa/bpc-157-coa.png",
    detailedDescription: "BPC-157 is a pentadecapeptide composed of 15 amino acids. It is a partial sequence of body protection compound (BPC) that is discovered in and isolated from human gastric juice. This synthetic peptide has been extensively studied for its potential effects on various biological processes in laboratory settings.",
    specifications: [
      { label: "Molecular Weight", value: "1503.74 g/mol" },
      { label: "Sequence", value: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val" },
      { label: "Purity (HPLC)", value: "≥99.8%" },
      { label: "Format", value: "Lyophilized powder" },
      { label: "Solubility", value: "Water, saline solution" },
    ],
    researchApplications: [
      "Tissue repair and regeneration studies",
      "Gastrointestinal research",
      "Wound healing mechanism investigation",
      "Angiogenesis pathway analysis",
      "Inflammatory response studies",
    ],
    storageConditions: "-20°C, protected from light",
    shelfLife: "24 months when stored properly",
  },
  {
    name: "Retatrutide",
    slug: "retatrutide",
    category: "Triple Hormone Receptor Agonist",
    weight: "5145.74 g/mol",
    purity: "99.8%",
    description: "A synthetic peptide that targets GIP, GLP-1, and glucagon receptors for investigative metabolic research.",
    image: "/images/products/retatrutide.jpeg",
    coa: "/images/coa/retatrutide-coa.png",
    detailedDescription: "Retatrutide is a novel triple agonist peptide that simultaneously activates the glucose-dependent insulinotropic polypeptide (GIP), glucagon-like peptide-1 (GLP-1), and glucagon receptors. This unique mechanism makes it a valuable tool for metabolic research and understanding multi-hormonal receptor interactions.",
    specifications: [
      { label: "Molecular Weight", value: "5145.74 g/mol" },
      { label: "Target Receptors", value: "GIP, GLP-1, Glucagon" },
      { label: "Purity (HPLC)", value: "≥99.8%" },
      { label: "Format", value: "Lyophilized powder" },
      { label: "Solubility", value: "Sterile water, PBS" },
    ],
    scientificSpecs: {
      aminoAcidSequence: "Modified 39-AA peptide sequence",
      molecularFormula: "C₂₂₁H₃₅₀N₅₆O₆₇S",
      casNumber: "2374560-18-9",
      molecularWeight: "5145.74 g/mol",
    },
    researchApplications: [
      "Metabolic pathway investigation",
      "Multi-receptor agonism studies",
      "Glucose homeostasis research",
      "Energy expenditure analysis",
      "Incretin hormone mechanism studies",
    ],
    storageConditions: "-20°C, protected from light",
    shelfLife: "24 months when stored properly",
  },
  {
    name: "GHK-Cu",
    slug: "ghk-cu",
    category: "Copper Peptide Complex",
    weight: "742.29 g/mol",
    purity: "99.8%",
    description: "Copper peptide complex with glycine, histidine, and lysine amino acids for tissue regeneration and wound healing research.",
    image: "/images/products/ghk-cu.jpg",
    coa: null,
    detailedDescription: "GHK-Cu (Glycyl-L-Histidyl-L-Lysine Copper) is a naturally occurring copper peptide complex found in human plasma, saliva, and urine. This tripeptide binds copper ions with high affinity and has been extensively studied for its role in tissue regeneration, wound healing, and skin remodeling. GHK-Cu levels decline with age, making it a subject of interest in aging research.",
    specifications: [
      { label: "Molecular Weight", value: "742.29 g/mol" },
      { label: "Sequence", value: "Gly-His-Lys-Cu" },
      { label: "Purity (HPLC)", value: "≥99.8%" },
      { label: "Format", value: "Lyophilized powder" },
      { label: "Solubility", value: "Water, bacteriostatic water" },
    ],
    scientificSpecs: {
      aminoAcidSequence: "Gly-His-Lys",
      molecularFormula: "C₁₄H₂₄CuN₆O₄",
      casNumber: "89030-95-5",
      molecularWeight: "742.29 g/mol",
    },
    researchApplications: [
      "Tissue regeneration and wound healing studies",
      "Collagen synthesis and skin remodeling research",
      "Angiogenesis and blood vessel formation studies",
      "Anti-inflammatory response investigations",
      "Hair follicle growth and follicular research",
    ],
    storageConditions: "-20°C, protected from light",
    shelfLife: "24 months when stored properly",
  },
  {
    name: "Ipamorelin",
    slug: "ipamorelin",
    category: "Growth Hormone Secretagogue",
    weight: "711.85 g/mol",
    purity: "99.9%",
    description: "Selective pentapeptide ghrelin receptor agonist for growth hormone secretion pathway studies.",
    image: "/images/products/ipamorelin.jpeg",
    coa: "/images/coa/ipamorelin-coa.png",
    detailedDescription: "Ipamorelin is a selective growth hormone secretagogue and ghrelin receptor agonist. Unlike other growth hormone secretagogues, Ipamorelin is highly selective and does not significantly affect cortisol, ACTH, prolactin, or aldosterone levels in research models, making it valuable for targeted GH pathway research.",
    specifications: [
      { label: "Molecular Weight", value: "711.85 g/mol" },
      { label: "Sequence", value: "Aib-His-D-2-Nal-D-Phe-Lys-NH2" },
      { label: "Purity (HPLC)", value: "≥99.9%" },
      { label: "Format", value: "Lyophilized powder" },
      { label: "Solubility", value: "Water, bacteriostatic water" },
    ],
    researchApplications: [
      "Ghrelin receptor activation studies",
      "Selective GH secretion research",
      "Pituitary function investigation",
      "Receptor selectivity analysis",
      "Peptide-receptor binding studies",
    ],
    storageConditions: "-20°C, protected from light and moisture",
    shelfLife: "24 months when stored properly",
  },
  {
    name: "Bacteriostatic Water",
    slug: "bacteriostatic-water",
    category: "Sterile Diluent",
    weight: "18.02 g/mol",
    purity: "USP Grade",
    description: "Sterile water for injection containing 0.9% benzyl alcohol as a bacteriostatic preservative for peptide reconstitution.",
    image: "/images/products/BAC.png",
    coa: null,
    detailedDescription: "Bacteriostatic Water for Injection is sterile water containing 0.9% (9 mg/mL) of benzyl alcohol added as a bacteriostatic preservative. It is intended for use as a diluent in the preparation of parenteral solutions, most commonly for reconstituting lyophilized peptide compounds for laboratory research purposes.",
    specifications: [
      { label: "Composition", value: "Sterile water + 0.9% benzyl alcohol" },
      { label: "Volume", value: "30 mL multi-dose vial" },
      { label: "Grade", value: "USP Pharmaceutical Grade" },
      { label: "pH Range", value: "4.5 - 7.0" },
      { label: "Sterility", value: "Confirmed by USP <71>" },
      { label: "Endotoxin", value: "<0.5 EU/mL" },
    ],
    researchApplications: [
      "Peptide reconstitution and dilution",
      "Laboratory solution preparation",
      "Multi-dose parenteral formulations",
      "Research compound solubilization",
      "In-vitro experimental preparations",
    ],
    storageConditions: "Room temperature (15-25°C), avoid freezing",
    shelfLife: "36 months when stored properly",
    format: "Liquid",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug)
}
