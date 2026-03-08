"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 문의 제출 처리 (실제 연동 시 API 호출)
    setEmail("")
    setName("")
    setMessage("")
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
              문의하기
            </h2>
            <p className="mt-6 text-lg opacity-80 leading-relaxed">
              사업 제안, 파트너십, 채용 문의 등 무엇이든 편하게 보내주세요.
              담당자가 빠르게 연락드리겠습니다.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-widest opacity-60 mb-2">
                  주소
                </h3>
                <p className="text-lg">서울특별시 강남구 테헤란로 123 NEXUS타워</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest opacity-60 mb-2">
                  대표 전화
                </h3>
                <p className="text-lg">02-1234-5678</p>
                <p className="text-sm opacity-80">평일 09:00 - 18:00</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest opacity-60 mb-2">
                  이메일
                </h3>
                <p className="text-lg">contact@nexus.kr</p>
                <p className="text-sm opacity-80">24시간 접수</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="이름 / 회사명"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
              required
            />
            <Input
              type="email"
              placeholder="이메일 주소"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
              required
            />
            <Textarea
              placeholder="문의 내용을 입력해 주세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30 resize-none"
              required
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto h-12 px-8"
            >
              문의 보내기
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
