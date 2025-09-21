import Image from "next/image";
import type { SVGProps } from "react";

export const Logo = (props: { width?: number, height?: number, className?: string }) => (
    <Image
        src="/assets/logo-eustaquio.png"
        alt="Eustáquio IA Logo"
        width={props.width || 64}
        height={props.height || 64}
        className={props.className}
    />
);
