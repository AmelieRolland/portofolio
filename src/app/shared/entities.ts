export interface Project {
    id: number,
    name: string,
    shortDescription: string,
    description: string,
    stack: string [],
    img: string,
    github: string,
}

export interface WhoamI {
    id: number,
    title: string,
    img: string,
    description: string,
    showDescription: boolean,
    isActive: boolean
}

export interface Stack {
    id: number,
    img: string,
    title: string,
}