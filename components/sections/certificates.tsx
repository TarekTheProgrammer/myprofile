import React from 'react';
import { Award } from 'lucide-react';
import { profileInfo } from "@/lib/data";

export function Certificates() {
    return (
        <section id="certificates" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">Certificates & Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {profileInfo.certificates.map((cert, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-6 p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-lg transition-shadow dark:bg-slate-900 dark:border-slate-800">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center dark:bg-blue-900/30 dark:text-blue-400">
                                <Award className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 dark:text-white">{cert.title}</h3>
                                <p className="text-blue-600 text-sm font-bold mt-2 tracking-wide dark:text-blue-400">{cert.issuer} • {cert.date}</p>
                                <p className="text-slate-500 text-sm mt-4 leading-relaxed dark:text-slate-400">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
