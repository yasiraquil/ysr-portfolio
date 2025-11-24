"use client";

import { motion } from "framer-motion";
import { Terminal, Package } from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "JavaScript", version: "ES6+", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
            { name: "TypeScript", version: "5.3.0", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
            { name: "Python", version: "3.12", icon: "https://cdn.simpleicons.org/python/3776AB" },
            { name: "C++", version: "20", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", version: "19.0.0", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Next.js", version: "15.0.0", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
            { name: "Tailwind CSS", version: "4.0", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "HTML5", version: "Latest", icon: "https://cdn.simpleicons.org/html5/E34F26" },
            { name: "CSS3", version: "Latest", icon: "https://cdn.simpleicons.org/css3/1572B6" },
        ]
    },
    {
        title: "Backend & APIs",
        skills: [
            { name: "Node.js", version: "20.10.0", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "Express", version: "4.18.2", icon: "https://cdn.simpleicons.org/express/white" },
            { name: "Socket.IO", version: "4.7.2", icon: "https://cdn.simpleicons.org/socketdotio/white" },
            { name: "JWT", version: "9.0.0", icon: "https://cdn.simpleicons.org/jsonwebtokens/000000" },
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", version: "16.1", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
            { name: "MongoDB", version: "7.0", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
            { name: "Prisma", version: "5.7.0", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
            { name: "Neo4j", version: "5.15", icon: "https://cdn.simpleicons.org/neo4j/008CC1" },
        ]
    },
    {
        title: "DevOps",
        skills: [
            { name: "Docker", version: "24.0", icon: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: "Git", version: "2.43", icon: "https://cdn.simpleicons.org/git/F05032" },
            { name: "GitHub Actions", version: "v4", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
        ]
    },
    {
        title: "AI / ML",
        skills: [
            { name: "OpenAI API", version: "v1", icon: "https://cdn.simpleicons.org/openai/412991" },
            { name: "TensorFlow", version: "2.15", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
            { name: "Pandas", version: "2.1.4", icon: "https://cdn.simpleicons.org/pandas/150458" },
            { name: "NumPy", version: "1.26", icon: "https://cdn.simpleicons.org/numpy/013243" },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
            <div className="mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <Terminal className="text-yellow-500" size={32} />
                    <h2 className="text-3xl md:text-4xl font-bold font-mono">
                        <span className="text-yellow-500">{">"}</span> usr/yasir/skills
                    </h2>
                </motion.div>
                <div className="h-px bg-slate-800 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-mono">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#0c0c0c] border border-slate-800 rounded-sm p-6 hover:border-yellow-500/50 transition-colors group"
                    >
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                            <Package size={18} className="text-yellow-500" />
                            <h3 className="text-lg font-bold text-slate-200">
                                {category.title.toLowerCase().replace(/ /g, "-")}
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {category.skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center justify-between group/skill">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 relative flex items-center justify-center bg-slate-900 rounded p-1">
                                            {typeof skill.icon === 'string' ? (
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="text-blue-400">{skill.icon}</div>
                                            )}
                                        </div>
                                        <span className="text-sm text-slate-300 group-hover/skill:text-yellow-400 transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                    <span className="text-xs text-slate-600">
                                        @{skill.version}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
