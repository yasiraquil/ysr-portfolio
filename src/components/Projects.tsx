"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Terminal, FileCode, ChevronRight } from "lucide-react";

const projects = [
    {
        title: "draw-app",
        subtitle: "Realtime Collaborative Whiteboard",
        description: "A real-time whiteboard supporting sub-200 ms WebSocket sync for 10–50 concurrent users per room. Deployed a hybrid Next.js + Node.js architecture achieving 99.9% uptime.",
        tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL", "Docker"],
        links: { demo: "https://draw-app-frontend-gamma.vercel.app", github: "https://github.com/yasiraquil/draw-app2" },
        color: "text-blue-400",
        permissions: "drwxr-xr-x",
        size: "4.2MB"
    },
    {
        title: "ai-station",
        subtitle: "All-in-One AI Platform",
        description: "An AI workspace automating content drafting and image utilities, cutting manual effort by 4–5x. Features Clerk authentication and tiered user plans.",
        tags: ["React", "Node.js", "Express", "Tailwind", "Vercel"],
        links: { demo: "https://ai-station-frontend.vercel.app/", github: "https://github.com/yasiraquil/ai-station" },
        color: "text-purple-400",
        permissions: "drwxr-xr-x",
        size: "12.5MB"
    },
    {
        title: "gmail-mcp",
        subtitle: "Email Automation Tool",
        description: "Developed Model Context Protocol server for Gmail automation using Google APIs and OAuth2 authentication. Built email processing pipeline with search, send, read, and attachment handling capabilities.",
        tags: ["Node.js", "Gmail API", "MCP SDK", "OAuth2"],
        links: { demo: "#", github: "https://github.com/yasiraquil/gmail-mcp-server" },
        color: "text-green-400",
        permissions: "-rwxr-xr-x",
        size: "1.8MB"
    },
    {
        title: "pitch-deck-analyzer",
        subtitle: "AI Startup Evaluation Tool",
        description: "Built ML-powered startup evaluation tool using Python, TensorFlow, and NLP for document analysis. Implemented React.js frontend with file upload, PDF parsing, and automated scoring algorithms.",
        tags: ["Python", "TensorFlow", "NLP", "React.js"],
        links: { demo: "#", github: "https://github.com/yasiraquil/pitch-deck-analyser" },
        color: "text-red-400",
        permissions: "drwxr-xr-x",
        size: "3.5MB"
    },
    {
        title: "realtime-tracker",
        subtitle: "Live GPS Tracking System",
        description: "Built Node.js server with Socket.IO for live GPS tracking, handling 100+ concurrent WebSocket connections. Implemented Redis for session management and MongoDB for location history with GeoJSON indexing.",
        tags: ["Node.js", "Socket.IO", "Redis", "MongoDB"],
        links: { demo: "https://liv-tracker.onrender.com/", github: "https://github.com/yasiraquil/Liv-Tracker" },
        color: "text-yellow-400",
        permissions: "drwxr-xr-x",
        size: "2.1MB"
    },
    {
        title: "intervu-platform",
        subtitle: "AI Interview Prep",
        description: "Built Next.js platform with Firebase authentication, Vapi voice agents, and Google Gemini for AI-powered interviews. Implemented real-time voice interaction, automated feedback generation, and comprehensive interview analytics.",
        tags: ["Next.js", "Firebase", "Vapi", "Google Gemini"],
        links: { demo: "#", github: "https://github.com/yasiraquil" },
        color: "text-cyan-400",
        permissions: "drwxr-xr-x",
        size: "5.8MB"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-[#0a0a0a]">
            <div className="mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <Terminal className="text-purple-500" size={32} />
                    <h2 className="text-3xl md:text-4xl font-bold font-mono">
                        <span className="text-purple-500">{">"}</span> usr/yasir/projects
                    </h2>
                </motion.div>
                <div className="h-px bg-slate-800 w-full" />
            </div>

            <div className="grid grid-cols-1 gap-6 font-mono">
                {/* Header Row */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2 text-xs text-slate-500 border-b border-slate-800 uppercase tracking-wider">
                    <div className="col-span-2">Permissions</div>
                    <div className="col-span-1">User</div>
                    <div className="col-span-1">Size</div>
                    <div className="col-span-1">Date</div>
                    <div className="col-span-7">Name</div>
                </div>

                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="md:grid md:grid-cols-12 md:gap-4 md:px-6 md:py-4 p-6 bg-[#0c0c0c] border border-slate-800 rounded-sm hover:bg-slate-900/50 hover:border-purple-500/50 transition-all items-center">

                            {/* Metadata Columns (Desktop) */}
                            <div className="hidden md:block col-span-2 text-xs text-slate-500">{project.permissions}</div>
                            <div className="hidden md:block col-span-1 text-xs text-green-500">yasir</div>
                            <div className="hidden md:block col-span-1 text-xs text-slate-500">{project.size}</div>
                            <div className="hidden md:block col-span-1 text-xs text-slate-500">Oct 24</div>

                            {/* Project Content */}
                            <div className="col-span-12 md:col-span-7">
                                <div className="flex items-start gap-4">
                                    <Folder className={`${project.color} mt-1`} size={24} />
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                            <h3 className={`text-xl font-bold ${project.color} group-hover:underline decoration-2 underline-offset-4`}>
                                                {project.title}
                                            </h3>
                                            <span className="text-xs text-slate-500 md:ml-2">// {project.subtitle}</span>
                                        </div>

                                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-6 text-sm">
                                            <a
                                                href={project.links.demo}
                                                className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors"
                                            >
                                                <ChevronRight size={14} /> ./run_demo
                                            </a>
                                            <a
                                                href={project.links.github}
                                                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                                            >
                                                <FileCode size={14} /> view_source.ts
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <div className="px-6 py-4 text-slate-500 text-sm">
                    <span className="text-green-500">yasir@portfolio</span>:<span className="text-blue-500">~/projects</span>$ <span className="animate-pulse">_</span>
                </div>
            </div>
        </section>
    );
}
