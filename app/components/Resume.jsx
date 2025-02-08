import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "IT intern",
    company: "Kinde Engineering Works Ltd.",
    period: "2023",
    responsibilities: [
      "Supported network installations and maintenance, including configuring routers, switches, and cabling for clients.",
      "Collaborated with the dispatch team to ensure maximum customer satisfaction in installation and maintenance of internet.",
    ],
  },
];

const skills = [
  "HTML/CSS",
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "Next.js",
  "PostgreSQL",
  "Github",
  "Python",
  "Flask(Restful API)",
  "MySQL",
  "Postman",
  "Bootstrap",
  "Tailwind",
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          My Resume
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-black">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              {experiences.map((exp, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-semibold text-black">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {exp.company} | {exp.period}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-black">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-black px-2 py-1 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button
            asChild
            className="bg-slate-800 hover:bg-slate-950 text-white py-3 px-6 rounded-lg"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1AFVTW-04Y7wk9dh8qTOleDkFpd1G_fuT"
              target="_blank"
              rel="noopener noreferrer"
              download="Resume-Mark-Ndagu.pdf"
            >
              Download Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
