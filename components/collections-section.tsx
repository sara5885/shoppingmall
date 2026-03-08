import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const collections = [
  {
    id: 1,
    name: "Essentials",
    description: "일상을 완성하는 기본 아이템",
    image: "/images/collection-1.jpg",
    itemCount: 48,
  },
  {
    id: 2,
    name: "Outerwear",
    description: "계절을 담은 아우터 컬렉션",
    image: "/images/collection-2.jpg",
    itemCount: 24,
  },
  {
    id: 3,
    name: "Accessories",
    description: "스타일을 완성하는 액세서리",
    image: "/images/collection-3.jpg",
    itemCount: 36,
  },
]

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              Collections
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground">
              시즌 컬렉션
            </h2>
          </div>
          <a 
            href="#" 
            className="group flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            전체 컬렉션 보기
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <a
              key={collection.id}
              href="#"
              className="group relative aspect-[3/4] overflow-hidden bg-secondary"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-background/90 backdrop-blur-sm p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-2xl font-medium text-foreground">
                      {collection.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {collection.itemCount} items
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {collection.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
