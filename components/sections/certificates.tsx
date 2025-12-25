import React from 'react';
import { Award } from 'lucide-react';
import { profileInfo } from "@/lib/data";

export function Certificates() {
    return (
        <section id="certificates" className="py-24 px-6 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-foreground">Certificates & Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {profileInfo.certificates.map((cert, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-6 p-8 rounded-[2rem] bg-background border border-border hover:shadow-lg transition-shadow">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                <Award className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-foreground">{cert.title}</h3>
                                <p className="text-primary text-sm font-bold mt-2 tracking-wide">{cert.issuer} • {cert.date}</p>
                                <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
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
