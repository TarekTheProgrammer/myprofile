import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';
import { profileInfo } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {profileInfo.projects.map((project, idx) => (
                        <Card key={idx} className="rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all group border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                            <div className="h-56 bg-slate-100 flex items-center justify-center p-8 group-hover:bg-blue-50 transition-colors dark:bg-slate-800 dark:group-hover:bg-blue-900/20">
                                <Terminal className="w-20 h-20 text-slate-300 group-hover:text-blue-200 transition-colors dark:text-slate-600 dark:group-hover:text-blue-700" />
                            </div>
                            <CardHeader className="p-10 pb-2">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-10 pt-2 pb-6">
                                <CardDescription className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="p-10 pt-0">
                                <Button variant="link" className="p-0 h-auto font-bold text-blue-600 gap-2 hover:gap-4 transition-all dark:text-blue-400" asChild>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        Explore Implementation <ExternalLink className="w-4 h-4" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
