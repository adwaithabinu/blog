import type {ComponentType} from "svelte";

export type MarkdownPost={
    metadata:{
        title: string;
        alt: string;
        imgURL: string;
        publishedAt: string;
        summary: string;
    };
    default: ComponentType;
}