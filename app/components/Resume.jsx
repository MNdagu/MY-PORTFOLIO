import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import SkillCard from "@/components/SkillCard";
import EducationCard from "@/components/EducationCard";
import { experiences, skills, education, resumeLink } from "@/data/resume";

export default function Resume() {
  return (
    <Section id="resume" title="My Resume" className="bg-accent/10">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Work Experience */}
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-primary">Work Experience</CardTitle>
          </CardHeader>
          <CardContent>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-primary">Education</CardTitle>
          </CardHeader>
          <CardContent>
            {education.map((edu, index) => (
              <EducationCard key={index} education={edu} index={index} />
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-primary">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            {skills.map((skillCategory, index) => (
              <SkillCard
                key={index}
                skillCategory={skillCategory}
                index={index}
              />
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg"
        >
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            download="Resume-Mark-Ndagu.pdf"
            aria-label="Download full resume"
          >
            Download Full Resume
          </a>
        </Button>
      </div>
    </Section>
  );
}
