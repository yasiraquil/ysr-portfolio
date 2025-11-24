"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUp, Terminal, Send, FileText, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="relative pt-20 pb-10 overflow-hidden bg-[#0a0a0a] border-t border-slate-800 font-mono">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <Terminal className="text-green-500" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-green-500">{">"}</span> usr/yasir/contact
                        </h2>
                    </motion.div>
                    <div className="h-px bg-slate-800 w-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Terminal Input Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0c0c0c] border border-slate-800 p-6 rounded-sm shadow-2xl"
                    >
                        <div className="flex gap-2 mb-6 border-b border-slate-800 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-2 text-xs text-slate-500">bash — 80x24</span>
                        </div>

                        <div className="space-y-4 font-mono text-sm">
                            <div className="text-slate-500">
                                # Send a message to the system administrator
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-green-500">
                                    yasir@portfolio:~$ <span className="text-slate-300">input_email</span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-transparent border-b border-slate-800 focus:border-green-500 outline-none text-slate-300 py-1 w-full transition-colors"
                                    placeholder="enter_your_email..."
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-green-500">
                                    yasir@portfolio:~$ <span className="text-slate-300">input_message</span>
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="bg-transparent border-b border-slate-800 focus:border-green-500 outline-none text-slate-300 py-1 w-full min-h-[100px] resize-none transition-colors"
                                    placeholder="enter_your_message..."
                                />
                            </div>

                            <button className="mt-4 flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors group">
                                <span>{">"} execute_send</span>
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Contact Info & Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-slate-200 mb-4">
                                <span className="text-blue-500">#</span> Connection Details
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                System is available for freelance projects and full-time opportunities.
                                Secure connection established. Ready to collaborate.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:yasiraquil121@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-green-400 transition-colors group">
                                <div className="p-2 bg-slate-900 border border-slate-800 group-hover:border-green-500/50 rounded-sm transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span>yasiraquil121@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-4 text-slate-300 group">
                                <div className="p-2 bg-slate-900 border border-slate-800 rounded-sm">
                                    <Phone size={20} />
                                </div>
                                <span>+91 7669645250</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300 group">
                                <div className="p-2 bg-slate-900 border border-slate-800 rounded-sm">
                                    <MapPin size={20} />
                                </div>
                                <span>New Delhi, India</span>
                            </div>
                        </div>

                        <div className="pt-6">
                            <a
                                href="https://drive.google.com/file/d/13aXSU958F5-m363wZqZKuNP84KF1AKwI/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 hover:border-green-500 text-green-500 hover:text-green-400 rounded-sm transition-all group"
                            >
                                <FileText size={18} />
                                <span>./download_resume.sh</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
                    <div>
                        © {new Date().getFullYear()} Yasir Aquil. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/yasiraquil" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/yasir-aquil/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-2 border border-slate-800 hover:border-green-500 text-slate-500 hover:text-green-500 transition-all rounded-sm"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
