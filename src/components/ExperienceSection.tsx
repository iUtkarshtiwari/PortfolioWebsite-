
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    title: "Summer Training: Full-Stack using MERN",
    company: "Cipher-Schools",
    period: "8 June 2023 - 20 July",
    description: [
      "I completed a 1.5-month Full Stack Web Development training with Cipher Schools,","Where I learned to build dynamic web applications using the MERN stack (MongoDB, Express.js, React, Node.js).", 
      "During the program, I worked on a Notes App project where I implemented features like user authentication, CRUD operations for notes, and data storage using MongoDB.",
      "I gained hands-on experience with building RESTful APIs, managing frontend-backend communication, and deploying full-stack applications."
    ]
  },
  {
    title: "Java Basic To Advance",
    company: "Programmers Point",
    period: "March 2024",
    description: [
        "I completed a 3-month Java training from Programmer’s Point, covering core to advanced concepts.",
        "I gained a solid understanding of object-oriented programming, data structures, exception handling, file I/O, and multithreading.",
        "I also explored JDBC for database connectivity and built mini-projects to apply concepts like inheritance, collections, and GUI development using Java Swing.",
        "This hands-on experience strengthened my ability to write clean, modular, and efficient Java code."
     ]
  },
  {
    title: "Data Analysis with PowerBI",
    company: "Lovely Professional University",
    period: "November 2024",
    description: [
          "I completed Power BI training at Lovely Professional University, where I learned to create interactive dashboards and visualize complex datasets.",
          "The training covered data import, transformation using Power Query, DAX formulas, and building dynamic reports. As part of the program, I created a project that analyzed sales data to uncover trends and performance metrics.",
          "I used filters, slicers, KPIs, and custom visuals to build a comprehensive dashboard that provided actionable insights for business decisions. This experience enhanced my data storytelling and analytical skills."

    
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">CERTIFICATIONS</h2>
          <p className="text-tech-light/70 max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 overflow-hidden relative border-l-4 border-l-tech-purple">
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-tech-light">{exp.title}</h3>
                  <p className="text-tech-purple mt-1 mb-2">{exp.company}</p>
                  <p className="text-tech-light/60 text-sm mb-4">{exp.period}</p>

                  <ul className="space-y-2 ml-6 list-disc text-tech-light/80">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Timeline dot */}
                <div className="absolute top-6 -left-2 w-4 h-4 rounded-full bg-tech-purple"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-medium text-tech-light mb-2">Secured Global Rank 1537 out of 26,400</h4>
              <p className="text-tech-light/70">
                In LeetCode Contest 315. Proficiency in algorithms, solving DSA problems, problem-solving approach, and algorithmic thinking.
              </p>
            </Card>
            
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-medium text-tech-light mb-2">Earned Top 30% globally</h4>
              <p className="text-tech-light/70">
                With a LeetCode rating of 1573+, demonstrating competitive programming expertise.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
