import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Project 1 - Glam Beautyshop (E-commerce application)",
    description:
      "Developed an e-commerce site where users can add products to their carts and buy by checking out using M-Pesa.I was in charge of the backend implementation.I was able to create all the relational tables,models and routes. Tools used include : Python, Flask and Postgresql for the database,JWT for user authentication and Postman for API testing.",
    tags: [
      "JavaScript",
      "Python",
      "Node.js",
      "React",
      "Flask",
      "PostgreSQL",
      "Tailwind",
    ],
    link: "https://frontend-glam.vercel.app/",
  },
  {
    id: 2,
    title: "Project 2 - Bibliophilia (Personal library management application)",
    description:
      "This was a personal book collection management application where users could add new book to their collection by scanning the book's ISBN code.Tools used include HTML,CSS,React.js. A user could also export their reading list in JSON or CSV format, track their reading analytics and also read using text-to-speech.",
    tags: ["JavaScript", "React", "Tailwind", "Node.js"],
    link: "https://phase2-project-my-books-app.vercel.app/",
  },
  {
    id: 3,
    title: "Project 3 - Fit Track (CLI for tracking exercise and nutrition)",
    description:
      "This was a personal project where I created a command line application using python. A user could create,track and update/manage their workout routines and nutrition.Other tools used include SQLite for database and SQLAlchemy for ORM.",
    tags: ["Python", "SQLAlchemy", "SQLite"],
    link: "https://github.com/MNdagu/Fit_Track_CLI_app#overview",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary text-black">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
