import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const designs = [
  {
    id: 1,
    name: "Extreme #20",
    description: "Синяя форма с диагональными полосами — красная, белая, золотая. Агрессивный стиль для амбициозных команд.",
    front: "https://cdn.poehali.dev/files/590c307e-d224-4071-8c18-5548f0a255e1.jpg",
    back: "https://cdn.poehali.dev/files/92858f53-b51b-464b-88d4-8dc0caeb2710.jpg",
    tags: ["Синий", "Диагональ", "Сублимация"],
    colors: ["#3D3FA3", "#CC2222", "#FFFFFF", "#C89A2A"],
  },
]

export function DesignsSection() {
  const [activeDesign, setActiveDesign] = useState(0)
  const [side, setSide] = useState<"front" | "back">("front")

  const design = designs[activeDesign]

  return (
    <section id="designs" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Готовые дизайны
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Выберите <span className="text-primary">стиль</span> для команды
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Готовые макеты под заказ — адаптируем цвета и нанесём логотип вашего клуба
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image viewer */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative bg-muted/30 rounded-2xl overflow-hidden aspect-square flex items-center justify-center border border-border/50 shadow-2xl">
                <img
                  key={side}
                  src={side === "front" ? design.front : design.back}
                  alt={`${design.name} — ${side === "front" ? "спереди" : "сзади"}`}
                  className="w-full h-full object-contain p-4 transition-all duration-500 animate-fade-in-up"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs font-semibold">
                    {side === "front" ? "Спереди" : "Сзади"}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Front / Back toggle */}
            <div className="flex gap-3">
              <Button
                variant={side === "front" ? "default" : "outline"}
                size="sm"
                onClick={() => setSide("front")}
                className="gap-2"
              >
                <Icon name="Eye" size={16} />
                Спереди
              </Button>
              <Button
                variant={side === "back" ? "default" : "outline"}
                size="sm"
                onClick={() => setSide("back")}
                className="gap-2"
              >
                <Icon name="RotateCcw" size={16} />
                Сзади
              </Button>
            </div>
          </div>

          {/* Design info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-bold mb-3">{design.name}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{design.description}</p>
            </div>

            {/* Color palette */}
            <div>
              <p className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Цветовая палитра</p>
              <div className="flex gap-3">
                {design.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-border shadow-md"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {design.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="text-sm px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {[
                "Нанесение вашего логотипа и названия клуба",
                "Фамилия и номер каждого игрока",
                "Адаптация цветовой схемы под ваш бренд",
                "Производство от 10 комплектов",
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 mt-2"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Icon name="ShoppingBag" size={18} />
              Заказать этот дизайн
            </Button>
          </div>
        </div>

        {/* Design thumbnails (если будет больше дизайнов) */}
        {designs.length > 1 && (
          <div className="flex gap-4 mt-12 justify-center flex-wrap">
            {designs.map((d, i) => (
              <button
                key={i}
                onClick={() => { setActiveDesign(i); setSide("front") }}
                className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeDesign === i ? "border-primary scale-105 shadow-lg" : "border-border hover:border-primary/50"
                }`}
              >
                <img src={d.front} alt={d.name} className="w-full h-full object-contain bg-muted/30 p-1" />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
