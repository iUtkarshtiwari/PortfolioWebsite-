import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "C++", "SQL", "HTML", "CSS", "C", "Java"],
  },
  {
    name: "Libraries & Frameworks",
    skills: ["C++.STL", "ReactJS", "ExpressJS"],
  },
  {
    name: "Data Analysis Tools",
    skills: ["Excel", "Power BI"],
  },
  {
    name: "Languages",
    skills: ["English", "Hindi"],
  },
  {
    name: "Concepts",
    skills: [
      "Competative Programming",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Object-Oriented Programming",
      "Database Management system",
      "Software Engineering",
      "Problem Solving",
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      "Problem Solving",
      "Self-Learning",
      "Team Collaboration",
      "LeaderShip",
      "Conflict Resolution",
    ],
  },
];

type Certification = {
  skill: string;
  duration: string;
  image: string;
  link: string;
};

const certifications: Certification[] = [
  
  {
    skill: "Full Stack Using MERN",
    duration: "Cipher Schools",
    image: "/cipher1.png",
    link: "https://drive.google.com/file/d/1SHARkCSZxOjnnM7HdRCqOh2G2aOx7qGk/view?usp=drive_link",
  },
  {
    skill: "Data Structures and Algorithm",
    duration: "Lovely Professional University- NeoCollab",
    image: "/DSA1.png",
    link: "https://drive.google.com/file/d/18DMxc0R4bg8hYpEjUOJzggQ1JUU6WRl0/view?usp=drive_link",
  },
  {
    skill: "Object Oriented Programming",
    duration: "Lovely Professional University — NeoCollab",
    image: "/cpp.png",
    link: "https://drive.google.com/file/d/18III5HFsq9-sobZBGpMqSS1wFuFup2W8/view?usp=drive_link",
  },
  {
    skill: "Leadership Through Social Influence",
    duration: "Coursera Northern University",
    image: "/Leadership.png",
    link: "https://drive.google.com/file/d/1PNfGYTq6aM6nWQytx-FFts4xYyq4JBfh/view?usp=drive_link",
  },
  {
    skill: "Generative AI for Everyone",
    duration: "Coursera DeepLearning AI",
    image: "/genai.png",
    link: "https://drive.google.com/file/d/1ltXw1LPpUVTDkrh08Bwl5xwC8JkUZTDr/view?usp=drive_link",
  },
  {
    skill: "Mastering Data Structures and Algorithm in C and C++",
    duration: "Udemy Abdul Bari",
    image: "/abdulBari.png",
    link: "https://drive.google.com/file/d/16QVK2AP4lJSwPMw_xHI378b7WqYpmAim/view?usp=drive_link",
  },
  {
    skill: "Server side JavaScript with Node.js",
    duration: "Coursera — NIIT",
    image: "/Niit.png",
    link: "https://drive.google.com/file/d/1qjM7-xTHA66ArwZ3EYbmtsVeIrXVbNFy/view?usp=drive_link",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-tech-dark/50">
      <div className="container mx-auto px-4">
        {/* Skills Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-tech-light/70 max-w-2xl mx-auto">
            My technical toolkit and areas of expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="glass-card h-full p-6 hover:border-tech-purple/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gradient">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 text-tech-light/90 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Certifications
          </h2>
          <p className="text-tech-light/70 max-w-2xl mx-auto mb-10">
            Verified achievements in development and data technologies
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.skill}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Card className="glass-card h-full p-4 hover:border-tech-purple/50 transition-all duration-300">
                  <img
                    src={cert.image}
                    alt={`${cert.skill} Certificate`}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gradient mb-1">
                    {cert.skill}
                  </h3>
                  <p className="text-sm text-tech-light/80 mb-4">
                    {cert.duration}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-tech-purple text-white text-sm rounded-lg hover:bg-tech-purple/80 transition"
                  >
                    View Certificate
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
