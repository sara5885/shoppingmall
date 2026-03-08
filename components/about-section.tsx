const stats = [
  { number: "2015", label: "설립연도" },
  { number: "200+", label: "임직원" },
  { number: "98%", label: "고객 만족도" },
  { number: "50+", label: "협력사" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              Company
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight">
              신뢰와 혁신으로
              <br />
              <span className="italic">가치</span>를 만듭니다
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              NEXUS는 2015년 설립 이래 기술 혁신과 고객 중심의 서비스로
              업계를 선도해 왔습니다. 우리는 단순한 비즈니스를 넘어
              사회와 환경에 기여하는 지속 가능한 성장을 추구합니다.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              혁신적인 솔루션과 검증된 전문성으로 파트너와 고객에게
              최고의 가치를 전달합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 bg-background border border-border"
              >
                <span className="font-serif text-4xl md:text-5xl font-medium text-foreground">
                  {stat.number}
                </span>
                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
