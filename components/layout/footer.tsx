import React from 'react';
import { profileInfo } from "@/lib/data";

export function Footer() {
    return (
        <footer className="bg-background border-t py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">Let's build something great.</h2>
                    <div className="space-y-3">
                        <p className="text-muted-foreground font-medium">Get in touch:</p>
                        <div className="flex flex-col gap-2">
                            {profileInfo.emails.map((email, idx) => (
                                <a
                                    key={idx}
                                    href={`mailto:${email}`}
                                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                                >
                                    <profileInfo.social.email.icon className="w-4 h-4" /> {email}
                                </a>
                            ))}
                            <a
                                href={`https://wa.me/88${profileInfo.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-medium text-sm"
                            >
                                <profileInfo.social.whatsapp.icon className="w-4 h-4" /> WhatsApp: {profileInfo.whatsapp}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6">
                    <a href={profileInfo.social.github.url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1">
                        <profileInfo.social.github.icon className="w-7 h-7" />
                    </a>
                    <a href={profileInfo.social.linkedin.url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-secondary text-secondary-foreground hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                        <profileInfo.social.linkedin.icon className="w-7 h-7" />
                    </a>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-20 pt-10 border-t text-center text-muted-foreground text-sm">
                <p>&copy; {new Date().getFullYear()} {profileInfo.name}. All rights reserved.</p>
                <p className="mt-2 text-xs">Designed for impact, coded for performance.</p>
            </div>
        </footer>
    );
}
