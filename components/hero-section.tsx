import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background - gradient (no image dependency) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary/95 to-foreground" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.6_0.1_250_/_.25),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-primary-foreground/80 font-medium mb-4">
          Innovation · Trust · Future
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-primary-foreground text-balance leading-tight">
          혁신과 신뢰로
          <br />
          <span className="italic">미래</span>를 만듭니다
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          NEXUS는 기술 혁신과 고객 신뢰를 바탕으로
          더 나은 내일을 만들어가는 기업입니다.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="px-8 h-12 text-base">
            <Link href="#about">
              회사소개
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8 h-12 text-base border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="#contact">문의하기</Link>
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-primary-foreground/60">Scroll</span>
          <div className="w-px h-12 bg-primary-foreground/30" />
        </div>
      </div>
    </section>
  )
}
