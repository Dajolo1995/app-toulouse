import { ReactNode } from "react";


export interface buttonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    color?: string,
    width?: string,
    icon?: ReactNode;
    type?: "primary" | "link" | "text" | "default" | "dashed" | undefined
    background?: string;
}