import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase } from "lucide-react"

export const metadata = {
  title: "채용정보 | NEXUS",
  description: "NEXUS와 함께할 인재를 찾습니다.",
}

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Back link */}
          <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              홈으로
            </Link>
          </Button>

          <header className="mb-12">
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              Careers
            </span>
            <h1 className="mt-2 font-serif text-4xl md:text-5xl font-medium text-foreground">
              채용정보
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              NEXUS와 함께 성장할 인재를 기다립니다.
            </p>
          </header>

          {/* Job posting - MD */}
          <article className="rounded-lg border border-border bg-card overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground">
                    MD (Merchandising Director / 상품기획)
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    정규직 · 서울 본사
                  </p>
                </div>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                <section>
                  <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-3 border-b border-border pb-2">
                    채용 분야
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    상품 기획 및 머천다이징 전반을 담당할 MD를 채용합니다. 시장 분석과 데이터 기반의 상품 전략 수립, 바이어 협상 및 재고 관리 업무를 수행합니다.
                  </p>
                </section>

                <section>
                  <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-3 border-b border-border pb-2">
                    담당 업무
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>시즌별 상품 기획 및 라인업 구성</li>
                    <li>시장·트렌드 조사 및 경쟁사 분석</li>
                    <li>바이어 미팅 및 협상, 발주 관리</li>
                    <li>재고 관리 및 판매 데이터 분석</li>
                    <li>내부 디자인·영업팀과의 커뮤니케이션</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-3 border-b border-border pb-2">
                    자격 요건
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>대졸 이상 (전공 무관, 유관 경력 우대)</li>
                    <li>상품 기획·머천다이징·바이어 경력 3년 이상</li>
                    <li>엑셀 활용 능력 (피벗, 차트, 데이터 정리)</li>
                    <li>원가 계산 및 마진 관리에 대한 이해</li>
                    <li>해외 바이어·공장과의 영어 또는 중국어 커뮤니케이션 가능자</li>
                    <li>시장 감각과 트렌드 파악 능력</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-3 border-b border-border pb-2">
                    우대 사항
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>패션·리테일·이커머스 상품 기획 경험</li>
                    <li>해외 소싱 및 OEM/ODM 업무 경험</li>
                    <li>데이터 분석 도구(GA, 엑셀 매크로 등) 활용 경험</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-3 border-b border-border pb-2">
                    지원 방법
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    이력서와 자기소개서를 아래 이메일로 보내주시거나, 홈페이지 문의하기를 통해 접수해 주세요.
                  </p>
                  <p className="text-foreground font-medium">
                    contact@nexus.kr
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    메일 제목: [MD 지원] 이름
                  </p>
                </section>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <Button asChild>
                  <Link href="/#contact">문의하기로 지원하기</Link>
                </Button>
              </div>
            </div>
          </article>

          <p className="mt-8 text-sm text-muted-foreground text-center">
            추가 채용 포지션이 있을 경우 이 페이지에 업데이트됩니다.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
