"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Terminal, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "Loading modules... Done.\nInitializing system... Success.\nUser detected: Yasir Aquil.\nRole: Full-Stack & AI Engineer.\nStatus: Ready to deploy.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[#0a0a0a]">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 w-full max-w-2xl"
                >
                    {/* Terminal Window */}
                    <div className="w-full rounded-lg overflow-hidden border border-slate-800 bg-[#0c0c0c] shadow-2xl font-mono">
                        <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-slate-800">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 text-xs text-slate-500 flex items-center gap-2">
                                <Terminal size={12} />
                                <span>yasir@portfolio:~</span>
                            </div>
                        </div>
                        <div className="p-6 min-h-[300px] text-sm md:text-base">
                            <div className="text-slate-400 mb-4">
                                <span className="text-green-500">yasir@portfolio</span>:<span className="text-blue-500">~</span>$ ./init.sh
                            </div>
                            <div className="whitespace-pre-line text-slate-300 mb-6 font-mono leading-relaxed">
                                {text}
                                <span className="animate-cursor-blink inline-block w-2 h-4 bg-green-500 ml-1 align-middle"></span>
                            </div>

                            <div className="mt-8 border-t border-slate-800 pt-6">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-slate-100">
                                    Yasir <span className="text-green-500">Aquil</span>
                                </h1>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Building scalable <span className="text-blue-400">Real-Time Systems</span> and <span className="text-purple-400">AI Workflows</span>.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="#contact"
                                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-black font-bold rounded-md transition-all flex items-center gap-2 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                                    >
                                        <Terminal size={18} />
                                        Execute Contact
                                    </Link>
                                    <Link
                                        href="#projects"
                                        className="px-6 py-3 bg-transparent border border-slate-700 hover:border-green-500 text-slate-300 hover:text-green-500 font-medium rounded-md transition-all flex items-center gap-2"
                                    >
                                        <ChevronRight size={18} />
                                        View Source
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-6 justify-center md:justify-start text-slate-500">
                        <a href="https://github.com/yasiraquil" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors hover:scale-110 transform">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/yasir-aquil/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:yasiraquil121@gmail.com" className="hover:text-yellow-500 transition-colors hover:scale-110 transform">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Hexagon or Glitch Effect Background */}
                        <div className="absolute inset-0 bg-green-500/10 rounded-full blur-3xl animate-pulse" />

                        <div className="relative w-full h-full rounded-full border-2 border-green-500/30 overflow-hidden bg-[#0c0c0c] flex items-center justify-center group hover:border-green-500/60 transition-colors duration-500">
                            <Image
                                src="/images/yasir_pp.jpg"
                                alt="Yasir Aquil"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                priority
                            />
                            {/* Scanline overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none" />
                        </div>

                        {/* Floating Tech Badges - Retro Style */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-[#1a1a1a] border border-green-500/30 px-4 py-2 rounded-md flex items-center gap-2 z-20 shadow-[0_0_10px_rgba(34,197,94,0.1)]"
                        >
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-mono text-green-500">System Online</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-1/2 -right-12 bg-[#1a1a1a] border border-slate-700 px-3 py-2 rounded-md z-0 flex items-center gap-2 hover:border-blue-500 transition-colors"
                        >
                            <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-4 h-4" />
                            <span className="text-xs font-mono text-slate-300">React</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute top-10 -left-8 bg-[#1a1a1a] border border-slate-700 px-3 py-2 rounded-md z-0 flex items-center gap-2 hover:border-blue-500 transition-colors"
                        >
                            <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" className="w-4 h-4" />
                            <span className="text-xs font-mono text-slate-300">Postgres</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                            className="absolute -bottom-8 right-12 bg-[#1a1a1a] border border-slate-700 px-3 py-2 rounded-md z-0 flex items-center gap-2 hover:border-green-500 transition-colors"
                        >
                            <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" className="w-4 h-4" />
                            <span className="text-xs font-mono text-slate-300">Node.js</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
