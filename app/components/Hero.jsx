import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 md:py-32 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-primary">Mark Ndagu</h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in animation-delay-200">Fullstack Software Developer</p>
        <Button size="lg" className="animate-fade-in animation-delay-400">
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      </div>
    </section>
  )
}

