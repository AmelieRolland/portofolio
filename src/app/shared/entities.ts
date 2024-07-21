export interface Translations {
    fr: string;
    en: string;
}

export interface Project {
    id: number;
    name: string;
    shortDescription: Translations;
    description: Translations;
    stack: string[];
    img: string;
    github: string;
}

export interface WhoAmI {
    id: number;
    title: Translations;
    img: string;
    description: Translations;
    showDescription: boolean;
    isActive: boolean;
}


export interface Stack {
    id: number,
    img: string,
    title: string,
}

