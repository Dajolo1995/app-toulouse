export interface TitleProps {
    title: string;
    level?: 5 | 4 | 3 | 2 | 1;
    color?: string;
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

export interface TextProps {
    text: string;
    level?: number;
    color?: string;

}