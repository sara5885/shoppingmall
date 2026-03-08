import { Target, Heart, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "고객 가치",
    description: "고객의 성공이 우리의 성공입니다. 맞춤형 솔루션으로 실질적인 성과를 만들어냅니다.",
  },
  {
    icon: Heart,
    title: "신뢰와 투명성",
    description: "정직한 소통과 투명한 비즈니스로 장기적인 파트너십을 구축합니다.",
  },
  {
    icon: Zap,
    title: "혁신",
    description: "기술과 프로세스의 지속적 혁신으로 업계 표준을 선도합니다.",
  },
  {
    icon: Users,
    title: "함께 성장",
    description: "임직원, 파트너, 사회와 함께 성장하는 지속 가능한 기업을 지향합니다.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-accent font-medium">
            Core Values
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground">
            핵심 가치
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            NEXUS가 지향하는 핵심 가치로 더 나은 미래를 만들어갑니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="group p-8 bg-background border border-border hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-secondary text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
