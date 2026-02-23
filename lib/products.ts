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
    name: "TB-500",
    slug: "tb-500",
    category: "Thymosin Beta-4 Fragment",
    weight: "4963.50 g/mol",
    purity: "99.7%",
    description: "Synthetic peptide segment of the naturally occurring thymosin beta-4 protein for in-vitro studies.",
    image: "/images/products/tb-500.jpeg",
    coa: null,
    detailedDescription: "TB-500 is a synthetic version of the naturally occurring peptide Thymosin Beta-4, which is present in virtually all human and animal cells. This peptide plays a crucial role in building new blood vessels, new small muscle tissue fibers, new cell migration and new blood cell reproduction.",
    specifications: [
      { label: "Molecular Weight", value: "4963.50 g/mol" },
      { label: "Sequence", value: "Ac-Ser-Asp-Lys-Pro-Asp-Met-Ala-Glu-Ile-Glu-Lys-Phe-Asp-Lys-Ser-Lys-Leu-Lys-Lys-Thr-Glu-Thr-NH2" },
      { label: "Purity (HPLC)", value: "≥99.7%" },
      { label: "Format", value: "Lyophilized powder" },
      { label: "Solubility", value: "Water, bacteriostatic water" },
    ],
    researchApplications: [
      "Cell migration and proliferation studies",
      "Vascular development research",
      "Tissue regeneration investigations",
      "Inflammation modulation studies",
      "Collagen deposition analysis",
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
    name: "CJC-1295",
    slug: "cjc-1295",
    category: "GHRH Analog",
    weight: "3367.97 g/mol",
    purity: "99.8%",
    description: "Tetrasubstituted peptide analog of growth hormone-releasing hormone for pharmacokinetic research.",
    image: "/images/products/cjc-1295.jpeg",
    coa: null,
    detailedDescription: "CJC-1295 is a synthetic analog of growth hormone-releasing hormone (GHRH) that has been modified to increase its half-life and stability. The modification involves the addition of Drug Affinity Complex (DAC) technology, which extends the peptide's duration of action in research models.",
    specifications: [
      { label: "Molecular Weight", value: "3367.97 g/mol" },
      { label: "Type", value: "GHRH analog with DAC" },
      { label: "Purity (HPLC)", value: "≥99.8%" },
      { label: "Format", value: "Lyophilized powder" },
      { label: "Solubility", value: "Bacteriostatic water, sterile saline" },
    ],
    researchApplications: [
      "Growth hormone secretion studies",
      "GHRH receptor binding research",
      "Pharmacokinetic half-life investigations",
      "Pituitary gland function analysis",
      "DAC technology mechanism studies",
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
    image: "/images/products/ipamorelin.png",
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
    name: "Tirzepatide",
    slug: "tirzepatide",
    category: "Dual GIP/GLP-1 Agonist",
    weight: "4813.53 g/mol",
    purity: "99.9%",
    description: "A 39-amino acid synthetic peptide for research into synergistic incretin hormone receptor binding.",
    image: "/images/products/tirzepatide.jpeg",
    coa: "/images/coa/tirzepatide-coa.png",
    detailedDescription: "Tirzepatide is a dual glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptor agonist. This 39-amino acid synthetic peptide represents a novel approach to studying incretin biology through simultaneous activation of both GIP and GLP-1 receptors.",
    specifications: [
      { label: "Molecular Weight", value: "4813.53 g/mol" },
      { label: "Amino Acids", value: "39" },
      { label: "Target Receptors", value: "GIP, GLP-1" },
      { label: "Purity (HPLC)", value: "≥99.9%" },
      { label: "Format", value: "Lyophilized powder" },
      { label: "Solubility", value: "Sterile water, PBS buffer" },
    ],
    scientificSpecs: {
      aminoAcidSequence: "YAibEGTFTSDYSIAMLDLLAQAGAFVGGLYSDGGPQEQPEVADN-PEG-C20 dicarboxylic acid",
      molecularFormula: "C₂₂₅H₃₄₈N₆₀O₇₈S",
      casNumber: "2023788-19-2",
      molecularWeight: "4813.53 g/mol",
    },
    researchApplications: [
      "Dual incretin receptor activation studies",
      "Glucose metabolism research",
      "GIP/GLP-1 synergy investigations",
      "Insulin secretion pathway analysis",
      "Receptor co-activation mechanism studies",
    ],
    storageConditions: "-20°C, protected from light",
    shelfLife: "24 months when stored properly",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug)
}
