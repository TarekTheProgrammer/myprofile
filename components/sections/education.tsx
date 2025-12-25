import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import { profileInfo } from "@/lib/data";

export function Education() {
    return (
        <section id="education" className="py-24 px-6 bg-white dark:bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-2 rounded-lg bg-blue-600 text-white"><BookOpen className="w-5 h-5" /></div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group dark:bg-slate-900 dark:border-slate-800">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-slate-900 dark:text-white pointer-events-none">
                        <BookOpen className="w-48 h-48" />
                    </div>
                    <div className="relative z-10">
                        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase px-3 py-1 bg-blue-50 rounded-full dark:bg-blue-900/30 dark:text-blue-400">Graduated</span>
                        <h3 className="text-3xl font-bold mt-4 text-slate-900 dark:text-white">{profileInfo.university}</h3>
                        <p className="text-xl text-slate-700 mt-2 dark:text-slate-300">{profileInfo.degree}</p>
                        <div className="flex items-center gap-2 mt-6 text-slate-500 dark:text-slate-400">
                            <Award className="w-5 h-5 text-blue-500" />
                            <span className="font-medium">Focus Areas: Algorithms, Data Structures, and Software Engineering.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
