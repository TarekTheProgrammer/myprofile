"use client"

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { profileInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section id="home" className="pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider dark:bg-blue-900/30 dark:text-blue-400">
                        Available for Work
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-tight">
                        I'm <span className="text-primary">{profileInfo.name}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                        {profileInfo.title}. Graduated from <span className="font-semibold text-foreground">{profileInfo.university}</span>.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button size="lg" className="gap-2 rounded-xl" asChild>
                            <a href={profileInfo.github} target="_blank" rel="noopener noreferrer">
                                <profileInfo.social.github.icon className="w-5 h-5" /> View GitHub
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="gap-2 rounded-xl" asChild>
                            <a href="#projects">
                                See My Work <ChevronRight className="w-4 h-4" />
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-6 blur-sm -z-10"></div>
                        <div className="w-64 h-80 md:w-80 md:h-[450px] rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                            <img
                                src="image_0af366.png"
                                alt={profileInfo.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
