"use client";

import { motion } from "framer-motion";
import { Terminal, Maximize2, Minimize2, X, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function CodingProfile() {
    return (
        <section id="coding-profile" className="section-padding bg-[#0a0a0a]">
            <div className="mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <Terminal className="text-orange-500" size={32} />
                    <h2 className="text-3xl md:text-4xl font-bold font-mono">
                        <span className="text-orange-500">{">"}</span> usr/yasir/coding_profile
                    </h2>
                </motion.div>
                <div className="h-px bg-slate-800 w-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {/* Terminal Window for Image Viewer */}
                <div className="bg-[#0c0c0c] border border-slate-800 rounded-sm shadow-2xl overflow-hidden group">
                    {/* Window Header */}
                    <div className="flex items-center justify-between px-4 py-2 bg-[#111] border-b border-slate-800">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                            <span className="text-orange-500">feh</span>
                            <span>./coding_profile_stats_v2.png</span>
                            <span className="text-slate-700">--zoom 100%</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-500">
                            <Minimize2 size={14} />
                            <Maximize2 size={14} />
                            <X size={14} />
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative p-1 bg-[#0a0a0a]">
                        {/* Scanline Effect Overlay */}
                        <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />

                        <div className="relative w-full overflow-hidden rounded-sm border border-slate-800/50">
                            <Image
                                src="/coding-profile-v2.png"
                                alt="Coding Profile Statistics"
                                width={1920}
                                height={1080}
                                quality={100}
                                priority
                                className="w-full h-auto hover:scale-[1.02] transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                        </div>

                        {/* Footer Status Bar */}
                        <div className="mt-1 flex justify-between items-center px-2 py-1 text-[10px] font-mono text-slate-500 bg-[#0c0c0c] border-t border-slate-900">
                            <span>IMG: 1920x1080</span>
                            <span>SIZE: 2.4MB</span>
                            <span className="text-green-500">STATUS: LOADED</span>
                        </div>
                    </div>
                </div>

                {/* Optional: Add a call to action or link to profiles */}
                <div className="mt-6 flex justify-center gap-6 font-mono text-sm">
                    <a href="https://leetcode.com/u/go0hDC9f/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors">
                        <ExternalLink size={16} />
                        <span>leetcode_profile</span>
                    </a>
                    <a href="https://www.codechef.com/users/yasir_aquil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors">
                        <ExternalLink size={16} />
                        <span>codechef_profile</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
