import Link from "next/link"
import Image from "next/image"
import { AlertTriangle } from "lucide-react"

const footerLinks = {
  Research: [
    { label: "Peptide Catalog", href: "/#catalog" },
    { label: "Quality Assurance", href: "/#quality" },
    { label: "About Us", href: "/about" },
  ],
  Support: [
    { label: "Contact Us", href: "mailto:support@rgvpeptides.com" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-crimson/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="RGVPeptides logo"
                width={80}
                height={80}
                className="h-20 w-auto object-contain"
              />
              <div>
                <p className="font-serif text-xl font-bold text-alabaster">
                  RGV<span className="text-crimson">Peptides</span>
                </p>
                <p className="font-mono text-xs text-muted-foreground">Ascending the Valley</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Premium peptide research compounds for the scientific community.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-alabaster">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-alabaster"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 rounded-xl border border-crimson/30 bg-crimson/5 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-crimson" />
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-crimson">
                Research Use Only
              </p>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-alabaster">
                STRICTLY FOR LABORATORY RESEARCH PURPOSES ONLY. NOT FOR HUMAN CONSUMPTION.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                All products sold by RGVPeptides are intended solely for laboratory research. They are not drugs, food supplements, or intended for any diagnostic or therapeutic purpose. By purchasing, you confirm that you are a qualified researcher and agree to use these products exclusively for legitimate scientific investigation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-navy-mid pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} RGVPeptides. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-chart-3" />
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  )
}
