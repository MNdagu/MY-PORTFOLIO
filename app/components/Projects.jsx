import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  { id: 1, title: "Project 1", description: "Description of Project 1", tags: ["React", "Node.js", "MongoDB"] },
  { id: 2, title: "Project 2", description: "Description of Project 2", tags: ["Next.js", "JavaScript", "Tailwind"] },
  { id: 3, title: "Project 3", description: "Description of Project 3", tags: ["Vue.js", "Express", "PostgreSQL"] },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary text-black">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
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

