import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content: "NEXUS와의 협업으로 디지털 전환을 성공적으로 진행했습니다. 전문성과 책임감이 뛰어난 파트너입니다.",
    author: "김대표",
    role: "A사 대표이사",
    rating: 5,
  },
  {
    id: 2,
    content: "기술력과 커뮤니케이션 모두 만족스러웠습니다. 복잡한 요구사항도 빠르게 반영해 주셨습니다.",
    author: "이상무",
    role: "B그룹 IT담당",
    rating: 5,
  },
  {
    id: 3,
    content: "장기 프로젝트를 함께 진행하며 신뢰를 쌓았습니다. 앞으로도 지속적인 협력을 기대합니다.",
    author: "박팀장",
    role: "C기업 프로젝트 매니저",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-accent font-medium">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground">
            고객 후기
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            함께한 고객사의 생생한 후기입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-card border border-border relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-muted-foreground/20" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
