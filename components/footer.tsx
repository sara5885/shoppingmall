import Link from "next/link"

const footerLinks = {
  company: [
    { name: "회사소개", href: "#about" },
    { name: "사업분야", href: "#business" },
    { name: "채용정보", href: "/recruitment" },
    { name: "보도자료", href: "#" },
  ],
  support: [
    { name: "문의하기", href: "#contact" },
    { name: "자주 묻는 질문", href: "#" },
    { name: "이용약관", href: "#" },
    { name: "개인정보처리방침", href: "#" },
  ],
  legal: [
    { name: "이용약관", href: "#" },
    { name: "개인정보처리방침", href: "#" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Blog", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold text-foreground">
              NEXUS
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              혁신과 신뢰로
              <br />
              미래를 만드는 기업입니다.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 NEXUS. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
