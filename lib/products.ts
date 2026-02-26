export interface Product {
  name: string
  slug: string
  category: string
  weight: string
  purity: string
  price: number
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
    name: "Wolverine Stack",
    slug: "wolverine-stack",
    category: "Synergistic Healing Peptide Blend",
    weight: "1503.74 / 885.05 g/mol",
    purity: "99.8%",
    price: 65,
    description: "A synergistic 5mg/5mg peptide blend combining BPC-157 and TB-500 for enhanced tissue repair and recovery research.",
    image: "/images/products/wolverine.png",
    coa: null,
    detailedDescription: "Wolverine Stack is a powerful synergistic blend combining BPC-157 (a 15-amino acid pentadecapeptide derived from body protection compound) and TB-500 (a synthetic fragment of thymosin beta-4). This dual-peptide formulation is designed for research into enhanced tissue repair and recovery. BPC-157 works through angiogenesis and nitric oxide signaling pathways, while TB-500 promotes cellular migration and actin sequestration. Together, these peptides create a complementary mechanism for investigating accelerated healing processes in laboratory models.",
    specifications: [
      { label: "Quantity", value: "5mg BPC-157 / 5mg TB-500" },
      { label: "Total Yield", value: "10mg per vial" },
      { label: "BPC-157 MW", value: "1503.74 g/mol" },
      { label: "TB-500 MW", value: "885.05 g/mol" },
      { label: "Purity (HPLC)", value: "≥99.8%" },
      { label: "Format", value: "Lyophilized powder" },
      { label: "Solubility", value: "Bacteriostatic water" },
    ],
    scientificSpecs: {
      aminoAcidSequence: "BPC-157: Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val | TB-500: Ac-SD-KS-DK-PK-LK-AE-TK-DK-KK-AK-AE",
      molecularWeight: "1503.74 g/mol (BPC-157) / 885.05 g/mol (TB-500)",
    },
    researchApplications: [
      "Synergistic tissue repair and regeneration studies",
      "Enhanced wound healing mechanism investigation",
      "Angiogenesis and blood vessel formation research",
      "Muscle and tendon recovery analysis",
      "Anti-inflammatory response studies",
      "Cellular migration and actin regulation research",
    ],
    storageConditions: "-20°C, protected from light and moisture",
    shelfLife: "24 months when stored properly",
  },
  {
    name: "Retatrutide",
    slug: "retatrutide",
    category: "Triple Hormone Receptor Agonist",
    weight: "5145.74 g/mol",
    purity: "99.8%",
    price: 75,
    description: "A synthetic peptide that targets GIP, GLP-1, and glucagon receptors for investigative metabolic research.",
    image: "/images/products/retatrutide.png",
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
    price: 50,
    description: "Copper peptide complex with glycine, histidine, and lysine amino acids for tissue regeneration and wound healing research.",
    image: "/images/products/ghk-cu.png",
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
    name: "CJC-1295 No DAC / Ipamorelin",
    slug: "cjc-1295-ipamorelin-blend",
    category: "Synergistic GH Secretagogue Blend",
    weight: "3367.97 / 711.85 g/mol",
    purity: "99.9%",
    price: 65,
    description: "A synergistic 5mg/5mg peptide blend combining a GHRH analogue (Modified GRF 1-29) and a selective GHRP for amplified growth hormone secretion research.",
    image: "/images/products/cjc:ipamorelin.png",
    coa: null,
    detailedDescription: "This formulation combines CJC-1295 without DAC (also known as Modified GRF 1-29), a synthetic Growth Hormone Releasing Hormone (GHRH) analogue, with Ipamorelin, a highly selective Growth Hormone Secretagogue (GHRP). When researched together in this 1:1 ratio (5mg/5mg), they exhibit a profound synergistic effect, amplifying the pulsatile release of growth hormone in laboratory models. This combination is highly regarded in research for maximizing pathway stimulation without significantly increasing cortisol, ACTH, or prolactin levels.",
    specifications: [
      { label: "Quantity", value: "5mg CJC-1295 No DAC / 5mg Ipamorelin" },
      { label: "Total Yield", value: "10mg per vial" },
      { label: "Purity (HPLC)", value: "≥99.9%" },
      { label: "Format", value: "Lyophilized powder" },
      { label: "Solubility", value: "Bacteriostatic water" },
    ],
    scientificSpecs: {
      aminoAcidSequence: "Mod GRF 1-29 + Aib-His-D-2-Nal-D-Phe-Lys-NH2",
      molecularWeight: "3367.97 g/mol (CJC) / 711.85 g/mol (Ipamorelin)",
    },
    researchApplications: [
      "Synergistic GHRH and GHRP pathway studies",
      "Pulsatile GH secretion analysis and amplification",
      "Metabolic and anti-aging research models",
      "Receptor binding synergy investigations",
      "Long-term GH stimulation research without cortisol elevation",
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
    price: 10,
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
