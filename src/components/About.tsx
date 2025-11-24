"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Globe } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="section-padding bg-[#0a0a0a]">
            <div>
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <Terminal className="text-green-500" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold font-mono">
                            <span className="text-green-500">{">"}</span> usr/yasir/about
                        </h2>
                    </motion.div>
                    <div className="h-px bg-slate-800 w-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full rounded-xl overflow-hidden bg-[#1e1e1e] border border-slate-700 shadow-2xl font-mono"
                >
                    {/* Terminal Header */}
                    <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div className="ml-4 text-xs text-slate-400 flex items-center gap-2">
                            <Terminal size={12} />
                            <span>yasir@portfolio:~/about</span>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 md:p-8 text-slate-300 space-y-6">
                        <div>
                            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">whoami</span>
                        </div>
                        <p className="leading-relaxed">
                            I am a <span className="text-blue-400 font-bold">Full-Stack & AI Engineer</span> passionate about building high-performance applications.
                            My work bridges the gap between robust backend architecture and intuitive user experiences,
                            with a specialized focus on real-time capabilities and AI integration.
                        </p>

                        <div>
                            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">cat mission.txt</span>
                        </div>
                        <p className="leading-relaxed">
                            To engineer scalable systems that solve real-world problems. I thrive on optimizing latency,
                            automating workflows with LLMs, and deploying production-grade software that makes an impact.
                        </p>

                        <div>
                            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">ls -la interests/</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                            <div className="flex items-center gap-3">
                                <Cpu size={18} className="text-purple-400" />
                                <span>Real-Time Systems</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Code size={18} className="text-blue-400" />
                                <span>AI & LLM Engineering</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Globe size={18} className="text-green-400" />
                                <span>Scalable Architecture</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Terminal size={18} className="text-orange-400" />
                                <span>DevOps & Cloud</span>
                            </div>
                        </div>

                        <div className="animate-pulse">
                            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="w-2 h-4 bg-slate-400 inline-block align-middle ml-1" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
