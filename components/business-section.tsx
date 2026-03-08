import { ArrowUpRight, Briefcase, Cpu, Globe, Shield } from "lucide-react"
import Link from "next/link"

const businessAreas = [
  {
    id: 1,
    name: "기술 솔루션",
    description: "맞춤형 소프트웨어 및 디지털 플랫폼 개발",
    icon: Cpu,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: 2,
    name: "컨설팅",
    description: "비즈니스 전략 및 디지털 전환 컨설팅",
    icon: Briefcase,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: 3,
    name: "글로벌 사업",
    description: "해외 시장 진출 및 파트너십",
    icon: Globe,
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    id: 4,
    name: "보안·인프라",
    description: "보안 솔루션 및 클라우드 인프라",
    icon: Shield,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
]

export function BusinessSection() {
  return (
    <section id="business" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              Business
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground">
              사업 분야
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              다양한 사업 영역에서 전문성과 혁신을 바탕으로 고객 가치를 창출합니다.
            </p>
          </div>
          <Link
            href="#contact"
            className="group flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            사업 문의하기
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessAreas.map((area) => (
            <div
              key={area.id}
              className="group p-8 bg-card border border-border hover:border-accent transition-colors"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${area.color}`}>
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                {area.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
