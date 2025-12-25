import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import { profileInfo } from "@/lib/data";

export function Education() {
    return (
        <section id="education" className="py-24 px-6 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-2 rounded-lg bg-primary text-primary-foreground"><BookOpen className="w-5 h-5" /></div>
                    <h2 className="text-3xl font-bold">Education</h2>
                </div>
                <div className="bg-background p-10 rounded-[2.5rem] border border-border shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-foreground pointer-events-none">
                        <BookOpen className="w-48 h-48" />
                    </div>
                    <div className="relative z-10">
                        <span className="text-primary font-bold text-sm tracking-widest uppercase px-3 py-1 bg-primary/10 rounded-full">Graduated</span>
                        <h3 className="text-3xl font-bold mt-4">{profileInfo.university}</h3>
                        <p className="text-xl text-muted-foreground mt-2">{profileInfo.degree}</p>
                        <div className="flex items-center gap-2 mt-6 text-muted-foreground">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="font-medium">Focus Areas: Algorithms, Data Structures, and Software Engineering.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
