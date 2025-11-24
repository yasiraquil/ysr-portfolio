"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Activity, HardDrive, Zap, Database, BarChart } from "lucide-react";

const metrics = [
    { value: "10k+", label: "Data Points Processed", color: "text-blue-400", bg: "bg-blue-500", icon: <Database size={20} /> },
    { value: "40%", label: "Latency Improvement", color: "text-green-400", bg: "bg-green-500", icon: <Zap size={20} /> },
    { value: "2k+", label: "Drawings Stored", color: "text-purple-400", bg: "bg-purple-500", icon: <HardDrive size={20} /> },
    { value: "1000+", label: "DSA Problems Solved", color: "text-yellow-400", bg: "bg-yellow-500", icon: <Cpu size={20} /> },
    { value: "99.9%", label: "System Uptime", color: "text-cyan-400", bg: "bg-cyan-500", icon: <Activity size={20} /> },
    { value: "3-5", label: "Drones Tracked", color: "text-red-400", bg: "bg-red-500", icon: <BarChart size={20} /> },
];

export default function ImpactMetrics() {
    return (
        <section id="impact" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-y border-slate-800">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <Terminal className="text-red-500" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold font-mono">
                            <span className="text-red-500">{">"}</span> usr/yasir/impact
                        </h2>
                    </motion.div>
                    <div className="h-px bg-slate-800 w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0c0c0c] border border-slate-800 p-6 rounded-sm hover:border-red-500/50 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 bg-slate-900 rounded ${metric.color}`}>
                                        {metric.icon}
                                    </div>
                                    <span className="text-sm text-slate-400 uppercase tracking-wider">{metric.label}</span>
                                </div>
                                <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
                            </div>

                            {/* Progress Bar Simulation */}
                            <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "70%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    className={`h-full ${metric.bg} opacity-80`}
                                />
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-slate-600">
                                <span>0%</span>
                                <span>50%</span>
                                <span>100%</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
