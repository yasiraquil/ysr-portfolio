"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Code, Star, Terminal, ShieldCheck } from "lucide-react";

const achievements = [
    {
        title: "Meta Hacker Cup",
        subtitle: "Top 3,000 Global Rank (2025)",
        icon: <Trophy size={24} />,
        color: "text-blue-400",
        border: "border-blue-500/30",
        link: "https://drive.google.com/file/d/1BBeAjY7gCjNqmSEn6vVDju8CkbsIHlwN/view?usp=sharing",
        permission: "rwx"
    },
    {
        title: "CodeChef",
        subtitle: "World Rank 744 (Rating 1622)",
        icon: <Code size={24} />,
        color: "text-yellow-400",
        border: "border-yellow-500/30",
        link: "#",
        permission: "r-x"
    },
    {
        title: "DSA Problem Solving",
        subtitle: "1000+ Problems Solved",
        icon: <Code size={24} />,
        color: "text-pink-400",
        border: "border-pink-500/30",
        link: "https://codolio.com/profile/go0hDC9f",
        permission: "r--"
    },
    {
        title: "Hackathon Winner",
        subtitle: "Champion - XLR8 Hackathon",
        icon: <Award size={24} />,
        color: "text-purple-400",
        border: "border-purple-500/30",
        link: "#",
        permission: "rwx"
    },
    {
        title: "Vihaan Hackathon",
        subtitle: "Top 100 Finalist (IEEE DTU)",
        icon: <Star size={24} />,
        color: "text-orange-400",
        border: "border-orange-500/30",
        link: "#",
        permission: "r-x"
    },
    {
        title: "FLY-Scholar",
        subtitle: "Leadership Program Fellow",
        icon: <Award size={24} />,
        color: "text-green-400",
        border: "border-green-500/30",
        link: "https://drive.google.com/file/d/1ZFwm0M5OQivURUeYIZT-SmSDQ8jLh_dB/view",
        permission: "r--"
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="section-padding bg-[#0a0a0a]">
            <div className="mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <Terminal className="text-cyan-500" size={32} />
                    <h2 className="text-3xl md:text-4xl font-bold font-mono">
                        <span className="text-cyan-500">{">"}</span> usr/yasir/achievements
                    </h2>
                </motion.div>
                <div className="h-px bg-slate-800 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-[#0c0c0c] border ${item.border} p-6 rounded-sm hover:bg-slate-900/50 transition-all group relative overflow-hidden`}
                    >
                        {item.link && item.link !== "#" ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-2 bg-slate-900/50 rounded ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <ShieldCheck size={14} />
                                        <span>{item.permission}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-400">
                                    {item.subtitle}
                                </p>
                                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs text-cyan-500">[VIEW_CERT]</span>
                                </div>
                            </a>
                        ) : (
                            <div className="h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-2 bg-slate-900/50 rounded ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <ShieldCheck size={14} />
                                        <span>{item.permission}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-200 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-400">
                                    {item.subtitle}
                                </p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
