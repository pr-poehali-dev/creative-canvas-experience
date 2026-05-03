import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Shirt",
    title: "Форма под заказ",
    description:
      "Разрабатываем уникальный дизайн формы специально для вашей команды. Любые цвета, логотипы, номера и имена игроков — воплощаем вашу идею в жизнь.",
  },
  {
    icon: "Palette",
    title: "Дизайн и разработка",
    description:
      "Наши дизайнеры создадут макет формы с нуля или адаптируют ваш существующий дизайн. Согласовываем каждую деталь до запуска в производство.",
  },
  {
    icon: "Ruler",
    title: "Индивидуальный крой",
    description:
      "Производим форму по стандартным размерам или под индивидуальные мерки каждого игрока. Идеальная посадка для максимального комфорта на поле.",
  },
  {
    icon: "Package",
    title: "Полный комплект",
    description:
      "Футболка, шорты, гетры, вратарская форма — одеваем команду полностью. Также производим тренировочные жилеты, разминочные костюмы и аксессуары.",
  },
  {
    icon: "Shield",
    title: "Гарантия качества",
    description:
      "Используем только сертифицированные спортивные ткани. Форма выдерживает интенсивные тренировки, частые стирки и сохраняет насыщенность цвета.",
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description:
      "Доставляем по всей России курьерскими службами. Отслеживание заказа на каждом этапе — от производства до вашей двери.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Что мы делаем
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для вашей <span className="text-primary">команды</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От первого эскиза до доставки готовой формы — берём на себя весь процесс, чтобы вы сосредоточились на игре.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} size={24} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}