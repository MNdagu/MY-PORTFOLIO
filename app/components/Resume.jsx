import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    responsibilities: [
      "Led a team of 5 developers in building a large-scale React application",
      "Implemented state management using Redux and optimized performance",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Innovative Startups Ltd.",
    period: "2018 - 2020",
    responsibilities: [
      "Developed and maintained multiple web applications using React and Node.js",
      "Designed and implemented RESTful APIs",
      "Worked closely with UX designers to implement responsive designs"
    ]
  }
]

const skills = [
  "JavaScript (ES6+)", "React", "Next.js", "PostgreSQL", "Git", "Python", "Flask"
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">My Resume</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              {experiences.map((exp, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-semibold text-primary">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company} | {exp.period}</p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button asChild>
            <a href="/placeholder.svg?height=720&width=1280" target="_blank" rel="noopener noreferrer" download>
              Download Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

