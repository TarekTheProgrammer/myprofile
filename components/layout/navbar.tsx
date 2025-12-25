"use client"

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { navLinks, profileInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const current = navLinks.find(link => {
                const element = document.getElementById(link.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current.id);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3 dark:bg-slate-900/80" : "bg-transparent py-5"
        )}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <span className="text-xl font-bold tracking-tight text-primary">TH.</span>
                <div className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                activeSection === link.id ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <Button asChild className="rounded-full shadow-lg hover:shadow-xl transition-all">
                    <a href={profileInfo.linkedin} target="_blank" rel="noopener noreferrer">
                        Connect
                    </a>
                </Button>
            </div>
        </nav>
    );
}
