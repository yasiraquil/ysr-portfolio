"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layers, Zap } from "lucide-react";

const caseStudies = [
    {
        title: "Draw App",
        subtitle: "Real-Time Collaboration Engine",
        problem: "Building a whiteboard that supports 50+ concurrent users without state divergence or latency spikes.",
        solution: "Implemented a WebSocket-based sync engine with optimistic UI updates and conflict resolution.",
        architecture: ["Next.js Frontend", "Node.js WebSocket Server", "PostgreSQL Storage", "Redis Pub/Sub"],
        impact: ["Sub-200ms latency", "99.9% uptime during stress tests", "Zero data loss"],
        color: "border-l-4 border-blue-500"
    },
    {
        title: "AI Station",
        subtitle: "Enterprise Intelligence Workspace",
        problem: "Fragmented AI workflows requiring users to switch between multiple tools for text, image, and code generation.",
        solution: "Unified interface integrating OpenAI, Anthropic, and custom models with context-aware prompts.",
        architecture: ["Next.js App Router", "Vercel AI SDK", "Clerk Authentication", "Edge Functions"],
        impact: ["5x productivity boost", "Seamless model switching", "Enterprise-grade security"],
        color: "border-l-4 border-purple-500"
    }
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="section-padding bg-slate-900/30">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Deep <span className="text-blue-500">Dive</span>
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    className="h-1 bg-blue-500 mx-auto rounded-full"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`glass-card p-8 rounded-xl ${study.color} bg-slate-800/20`}
                    >
                        <h3 className="text-2xl font-bold text-slate-100 mb-1">{study.title}</h3>
                        <p className="text-blue-400 font-medium mb-6">{study.subtitle}</p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">The Challenge</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{study.problem}</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">The Solution</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{study.solution}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-700/50">
                                <div>
                                    <div className="flex items-center gap-2 mb-3 text-slate-200 font-semibold">
                                        <Layers size={16} className="text-blue-400" /> Architecture
                                    </div>
                                    <ul className="space-y-1">
                                        {study.architecture.map((item, i) => (
                                            <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-slate-500 rounded-full" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-3 text-slate-200 font-semibold">
                                        <Zap size={16} className="text-yellow-400" /> Impact
                                    </div>
                                    <ul className="space-y-1">
                                        {study.impact.map((item, i) => (
                                            <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                                                <CheckCircle2 size={12} className="text-green-500" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
