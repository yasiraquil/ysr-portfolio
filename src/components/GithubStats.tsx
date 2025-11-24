"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Star, Eye, GitCommit } from "lucide-react";

const stats = [
    { label: "Followers", value: "1.2k", icon: <Users size={20} />, color: "text-blue-400" },
    { label: "Following", value: "180", icon: <Users size={20} />, color: "text-green-400" },
    { label: "Total Stars", value: "3.5k", icon: <Star size={20} />, color: "text-yellow-400" },
    { label: "Total Views", value: "45k", icon: <Eye size={20} />, color: "text-purple-400" },
];

export default function GithubStats() {
    const [contributionData, setContributionData] = useState<string[][]>([]);

    // Generate mock contribution data
    const weeks = 52;
    const days = 7;
    const contributionLevels = ["bg-slate-800", "bg-green-900", "bg-green-700", "bg-green-500", "bg-green-300"];

    useEffect(() => {
        const data = Array.from({ length: weeks }).map(() =>
            Array.from({ length: days }).map(() =>
                Math.random() > 0.7
                    ? contributionLevels[Math.floor(Math.random() * (contributionLevels.length - 1)) + 1]
                    : contributionLevels[0]
            )
        );
        setContributionData(data);
    }, []);

    return (
        <section id="github" className="section-padding">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    GitHub <span className="text-blue-500">Activity</span>
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    className="h-1 bg-blue-500 mx-auto rounded-full"
                />
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-slate-800/60 transition-colors"
                        >
                            <div className={`p-3 rounded-full bg-slate-800/50 ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <span className="text-2xl font-bold text-slate-100">{stat.value}</span>
                            <span className="text-sm text-slate-400">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Contribution Graph Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 md:p-8 rounded-xl overflow-x-auto border border-slate-700/50"
                >
                    <div className="flex items-center justify-between mb-6 min-w-[600px]">
                        <div className="flex items-center gap-2 text-slate-300">
                            <GitCommit size={20} className="text-blue-500" />
                            <span className="font-medium">1,248 contributions in the last year</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                            <span>Less</span>
                            <div className="flex gap-1">
                                {contributionLevels.map((bg, i) => (
                                    <div key={i} className={`w-3 h-3 rounded-sm ${bg}`} />
                                ))}
                            </div>
                            <span>More</span>
                        </div>
                    </div>

                    <div className="flex gap-1 min-w-[600px]">
                        {Array.from({ length: weeks }).map((_, w) => (
                            <div key={w} className="flex flex-col gap-1">
                                {Array.from({ length: days }).map((_, d) => {
                                    const level = contributionData[w]?.[d] || contributionLevels[0];

                                    return (
                                        <div
                                            key={d}
                                            className={`w-3 h-3 rounded-sm ${level} hover:ring-1 hover:ring-white transition-all`}
                                            title={`Contribution on week ${w + 1}, day ${d + 1}`}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
