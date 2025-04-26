"use client"

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Podcast } from "@/models/Podcast";
import { Article } from "@/models/Article";

type NewsSectionProps = {
    featuredImage?: string;
    articles: Article[];
    podcasts: Podcast[];
};

const tabs = ["Alle", "Artikler", "Podcasts"];

export function NewsSection({
    articles = [],
    podcasts = [],
}: NewsSectionProps) {
    const [activeTab, setActiveTab] = useState<string>(tabs[0]);

    type Item = Article | Podcast;
    let filtered: Item[];
    switch (activeTab) {
        case "Artikler":
            filtered = articles;
            break;
        case "Podcasts":
            filtered = podcasts;
            break;
        default:
            filtered = [...articles, ...podcasts];
    }

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={`/${articles[0].image}`}
                            alt="Featured news"
                            width={800}
                            height={450}
                            className="object-cover w-full h-64 md:h-96"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                            <span className="text-xs uppercase bg-red-600 text-white px-2 py-1 rounded">Nyhed</span>
                            <h3 className="mt-2 text-2xl font-bold text-white">Kom til guldkamp over hele landet</h3>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <Button variant="default">Læs flere nyheder</Button>
                    </div>
                </div>
                <div>
                    <div className="flex space-x-4 mb-6 lg:mb-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`uppercase text-sm font-semibold px-3 py-1 rounded ${activeTab === tab ? 'bg-red-600 text-white' : 'text-gray-500'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="space-y-4 mt-5">
                        {filtered.map((item) => (
                            <div key={item.id} className="flex items-center bg-white shadow-sm overflow-hidden">
                                <Image
                                    src={`/${item.image}`}
                                    alt={item.title}
                                    width={80}
                                    height={70}
                                    className="object-cover"
                                />
                                <div className="p-3">
                                    <p className="text-xs uppercase text-red-600 font-medium">{item.subject}</p>
                                    <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;
