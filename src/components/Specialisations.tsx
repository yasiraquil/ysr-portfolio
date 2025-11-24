"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Server, Layers, Terminal } from "lucide-react";

const specialisations = [
    {
        title: "Real-Time Systems",
        description: "WebSockets, streaming, telemetry, concurrency",
        icon: <Activity size={24} className="text-cyan-400" />,
        color: "border-cyan-500/30 text-cyan-400"
    },
    {
        title: "AI & LLM Engineering",
        description: "Vercel AI SDK, pgvector, embeddings, automation",
        icon: <Brain size={24} className="text-purple-400" />,
        color: "border-purple-500/30 text-purple-400"
    },
    {
        title: "Scalable Backend",
        description: "Node.js, Express, PostgreSQL, Prisma, Neo4j",
        icon: <Server size={24} className="text-blue-400" />,
        color: "border-blue-500/30 text-blue-400"
    },
    {
        title: "Full-Stack Development",
        description: "React, Next.js, Tailwind, Responsive UI",
        icon: <Layers size={24} className="text-green-400" />,
        color: "border-green-500/30 text-green-400"
    }
];

export default function Specialisations() {
    return (
        <section id="specialisations" className="section-padding bg-[#0a0a0a]">
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <Terminal className="text-green-500" size={32} />
                    <h2 className="text-3xl md:text-4xl font-bold font-mono">
                        <span className="text-green-500">{">"}</span> usr/yasir/specialisations
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    className="h-px bg-slate-800 w-full"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specialisations.map((spec, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-[#0c0c0c] border ${spec.color.split(" ")[0]} p-1 rounded-sm hover:translate-y-[-4px] transition-transform duration-300`}
                    >
                        <div className="bg-[#111] p-6 h-full border border-slate-800/50 relative overflow-hidden group">
                            {/* Scanline effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-2 bg-slate-900/50 rounded border border-slate-800 ${spec.color.split(" ")[1]}`}>
                                    {spec.icon}
                                </div>
                                <span className="text-xs font-mono text-slate-600">MOD_0{index + 1}</span>
                            </div>

                            <h3 className={`text-lg font-bold font-mono mb-3 ${spec.color.split(" ")[1]}`}>
                                {spec.title}
                            </h3>
                            <p className="text-slate-400 text-sm font-mono leading-relaxed">
                                {">"} {spec.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
