"use client";

import { motion } from "framer-motion";
import { Terminal, GitCommit, MapPin, Calendar } from "lucide-react";

const timelineItems = [
    {
        type: "experience",
        role: "Software Developer Intern",
        company: "Growage",
        location: "Delhi, India",
        period: "Nov 2025 - Dec 2025",
        description: [
            "Developed an AI self-discovery platform capable of ingesting 10k+ data points.",
            "Reduced latency by 40% using Vercel AI SDK and optimized database queries.",
            "Implemented OAuth onboarding and built data pipelines with Postgres, pgvector, and Neo4j."
        ]
    },
    {
        type: "experience",
        role: "Ethical Hacking and Penetration Testing Intern",
        company: "CDAC, Noida",
        location: "Remote",
        period: "Jul 2025 - Aug 2025",
        description: [
            "Conducted vulnerability assessments and penetration testing as part of the Cyber Gyan Project.",
            "Analyzed network traffic and protocols using Wireshark to identify security loopholes.",
            "Gained hands-on experience in ethical hacking methodologies and system hardening."
        ]
    },
    {
        type: "experience",
        role: "Web Developer Intern",
        company: "Aerialbots - IIF",
        location: "Onsite,Delhi, India",
        period: "Sep 2024 - Nov 2024",
        description: [
            "Built real-time flight dashboards for streaming drone telemetry.",
            "Optimized data transmission for a 20% performance improvement.",
            "Developed a tracking system supporting 3–5 concurrent drones."
        ]
    },
    {
        type: "experience",
        role: "Web Designer Intern",
        company: "USIP",
        location: "Onsite, Delhi, India",
        period: "Jan 2024 - Mar 2024",
        description: [
            "Designed and developed responsive web interfaces for university portals.",
            "Improved user experience by implementing modern UI patterns and accessibility standards.",
            "Collaborated with cross-functional teams to deliver project milestones on time."
        ]
    }
];

export default function Journey() {
    return (
        <section id="journey" className="section-padding bg-[#0a0a0a]">
            <div className="mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <Terminal className="text-blue-500" size={32} />
                    <h2 className="text-3xl md:text-4xl font-bold font-mono">
                        <span className="text-blue-500">{">"}</span> usr/yasir/experience
                    </h2>
                </motion.div>
                <div className="h-px bg-slate-800 w-full" />
            </div>

            <div className="font-mono">
                <div className="space-y-8">
                    {timelineItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l border-slate-800 hover:border-green-500 transition-colors group"
                        >
                            {/* Timestamp Marker */}
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#0a0a0a] border border-slate-600 group-hover:border-green-500 group-hover:bg-green-500 transition-all rounded-full" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                                <span className="text-xs text-slate-500">[{item.period}]</span>
                                <h3 className="text-lg font-bold text-blue-400">
                                    {item.role} @ {item.company}
                                </h3>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                <div className="flex items-center gap-1">
                                    <MapPin size={12} />
                                    <span>{item.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <GitCommit size={12} />
                                    <span>Commit</span>
                                </div>
                            </div>

                            <div className="bg-[#111] border border-slate-800 p-4 rounded-sm text-sm text-slate-300">
                                <ul className="space-y-2">
                                    {item.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-slate-600 mt-1">$</span>
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}

                    <div className="pl-8 pt-4">
                        <span className="animate-pulse text-green-500">_</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
