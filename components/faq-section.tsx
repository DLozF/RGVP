"use client"

import { useState, useEffect, useRef } from "react"
import { HelpCircle, ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I reconstitute lyophilized peptides?",
    answer:
      "Using a sterile syringe, slowly inject the appropriate amount of bacteriostatic water into the vial along the inner wall. Do not spray directly onto the peptide cake. Gently swirl the vial until the powder is fully dissolved — never shake vigorously. Use our Reconstitution Calculator above to determine the exact volume needed for your desired concentration.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept CashApp, Zelle, and Venmo. After placing your order through our checkout, you'll receive an invoice number. Send your payment to $RGVPeptides (CashApp) with your invoice number in the memo field — nothing else. Your order is confirmed once we match your payment.",
  },
  {
    question: "How are orders shipped?",
    answer:
      "All peptide orders are shipped via cold-chain logistics with insulated packaging and ice packs to maintain compound integrity during transit. Orders are typically fulfilled within 48 hours. Free shipping is available on orders over $150 within the RGV area.",
  },
  {
    question: "How should I store my peptides?",
    answer:
      "Unreconstituted (lyophilized) peptides should be stored at -20°C, protected from light and moisture. Once reconstituted with bacteriostatic water, store at 2-8°C (standard refrigerator) and use within 4-6 weeks. Bacteriostatic water can be stored at room temperature (15-25°C).",
  },
  {
    question: "What does the Certificate of Analysis (COA) include?",
    answer:
      "Each COA is issued by an independent, accredited laboratory (Janoshik Analytical) and includes HPLC purity analysis, mass spectrometry identity confirmation, and concentration verification. COAs are available for download directly on each product page where available.",
  },
  {
    question: "Are your peptides for human use?",
    answer:
      "No. All products sold by RGVPeptides are strictly for laboratory research purposes only and are not intended for human or veterinary use, food supplements, or any diagnostic or therapeutic application. By purchasing, you confirm that you are a qualified researcher.",
  },
  {
    question: "Do you offer bulk or wholesale pricing?",
    answer:
      "Yes. For bulk research orders or institutional procurement, please contact us at support@rgvpeptides.com with your requirements. We offer volume-based pricing for qualified research institutions and laboratories.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Due to the sensitive nature of research compounds and strict quality control requirements, we cannot accept returns on opened or reconstituted products. Unopened products in original packaging may be eligible for return within 14 days. Contact support for assistance.",
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`group rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-crimson/20 bg-navy-light/50"
          : "border-white/5 bg-navy-light/20 hover:border-white/10 hover:bg-navy-light/30"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          <span className="mt-0.5 font-mono text-xs text-crimson/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`text-sm font-semibold transition-colors ${isOpen ? "text-alabaster" : "text-alabaster/80"}`}>
            {faq.question}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180 text-crimson" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 pl-16">
            <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll(".reveal")
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section Header */}
        <div className="reveal mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <HelpCircle className="h-3.5 w-3.5" />
            Common Questions
          </div>
          <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl lg:text-5xl">
            Frequently <span className="text-crimson">Asked</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Everything you need to know about our research compounds, ordering, and shipping.
          </p>
        </div>

        {/* FAQ List */}
        <div className="reveal space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="reveal mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Still have questions?{" "}
            <a
              href="mailto:support@rgvpeptides.com"
              className="font-semibold text-crimson transition-colors hover:text-crimson/80"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
