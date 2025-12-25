import React from 'react';
import { Code } from 'lucide-react';
import { profileInfo } from "@/lib/data";

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-blue-500"><Code className="w-5 h-5" /></div>
                    Technical Arsenal
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {profileInfo.skills.map((skill, idx) => (
                        <div key={idx} className="group p-8 rounded-3xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all hover:-translate-y-2">
                            <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
                                <skill.icon className="w-10 h-10" />
                            </div>
                            <h4 className="font-bold text-lg">{skill.name}</h4>
                            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-bold">{skill.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
