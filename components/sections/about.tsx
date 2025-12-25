import React from 'react';
import { User, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { profileInfo } from "@/lib/data";

export function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center space-y-10">
                    <div className="inline-flex p-4 rounded-3xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                        <User className="w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Get to know me</h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed italic max-w-3xl mx-auto">
                        "{profileInfo.about}"
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
                        <div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-blue-100 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-blue-900">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform dark:bg-blue-900/50 dark:text-blue-400">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-2xl text-slate-900 dark:text-white">{profileInfo.cgpa}</h3>
                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2 dark:text-slate-400">CGPA</p>
                        </div>
                        <div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-blue-100 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-blue-900">
                            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform dark:bg-indigo-900/50 dark:text-indigo-400">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-2xl text-slate-900 dark:text-white">5+</h3>
                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2 dark:text-slate-400">Projects</p>
                        </div>
                        <div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-blue-100 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-blue-900">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform dark:bg-purple-900/50 dark:text-purple-400">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-2xl text-slate-900 dark:text-white">2</h3>
                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2 dark:text-slate-400">Specialized</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
