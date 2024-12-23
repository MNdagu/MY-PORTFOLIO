import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">About Me</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            I'm a passionate fullstack developer with experience in Javascript, React, Next.js, and various backend technologies like Python, Flask and PostgreSQL. 
            I love creating efficient, scalable, and user-friendly web applications that solve real-world problems.
          </p>
          <Button variant="outline">
            <a href="/placeholder.svg?height=720&width=1280" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

