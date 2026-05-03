import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Коллекция «Премиум»",
    category: "Игровая форма",
    image: "https://cdn.poehali.dev/projects/76651da6-84c6-4262-bea9-78ec3029624e/files/4dace695-4661-449b-8a1b-957b5ca07884.jpg",
    description:
      "Флагманская линейка из дышащей ткани DryTech. Яркие цвета, точный крой, сублимационная печать — форма, которая выглядит профессионально.",
    tags: ["DryTech", "Сублимация", "Индивидуальный дизайн"],
  },
  {
    title: "Форма для академии",
    category: "Детская и юношеская форма",
    image: "https://cdn.poehali.dev/projects/76651da6-84c6-4262-bea9-78ec3029624e/files/2e92fee6-bf88-4d93-9c25-530912cd4d0e.jpg",
    description:
      "Лёгкая и прочная форма для детских команд. Специальный крой для юных игроков, усиленные швы и безопасные материалы.",
    tags: ["Детская линейка", "Прочный крой", "Безопасные ткани"],
  },
  {
    title: "Детали и качество",
    category: "Производство",
    image: "https://cdn.poehali.dev/projects/76651da6-84c6-4262-bea9-78ec3029624e/files/24c195d9-9765-4596-ab1c-ce32fd4d3ee5.jpg",
    description:
      "Вышитые эмблемы, номера и имена игроков. Каждый элемент формы проходит проверку качества перед отправкой.",
    tags: ["Вышивка", "Нанесение номеров", "Контроль качества"],
  },
  {
    title: "Вся линейка цветов",
    category: "Каталог форм",
    image: "https://cdn.poehali.dev/projects/76651da6-84c6-4262-bea9-78ec3029624e/files/7904b673-2510-4b38-b11d-3fe9b7ea38d2.jpg",
    description:
      "Более 20 базовых цветов и бесконечные варианты сочетаний. Форма любого цвета под фирменный стиль вашего клуба.",
    tags: ["20+ цветов", "Любые сочетания", "Фирменный стиль"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши коллекции</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Смотрите, что мы производим — от игровой формы для профессиональных клубов до детской экипировки для футбольных школ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Заказать такую
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}