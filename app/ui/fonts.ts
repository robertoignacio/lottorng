import { Montserrat, Noto_Sans } from "next/font/google";

// variable font: https://fonts.google.com/specimen/Montserrat
export const montserrat = Montserrat({
    style: ['italic','normal'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'arial', 'sans-serif'],
});

// variable font: https://fonts.google.com/noto/specimen/Noto+Sans 
export const noto_sans = Noto_Sans({
    style: ['italic','normal'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'arial', 'sans-serif'],
});