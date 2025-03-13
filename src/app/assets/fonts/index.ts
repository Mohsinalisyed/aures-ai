import localFont from 'next/font/local';

export const fontBWGradual = localFont({
    src: [
        {
            path: "./BwGradualDEMO-Thin.otf",
            weight: "200"
        },
        {
            path: "./BwGradualDEMO-ThinItalic.otf",
            weight: "200",
            style: "italic"
        },
        {
            path: "./BwGradualDEMO-Light.otf",
            weight: "300"
        },
        {
            path: "./BwGradualDEMO-LightItalic.otf",
            weight: "300",
            style: "italic"
        },
        {
            path: "./BwGradualDEMO-Regular.otf",
            weight: "400",
        },
        {
            path: "./BwGradualDEMO-RegularItalic.otf",
            weight: "400",
            style: "italic"
        },
        {
            path: "./BwGradualDEMO-Medium.otf",
            weight: "600",
        },
        {
            path: "./BwGradualDEMO-MediumItalic.otf",
            weight: "600",
            style: "italic"
        },
        {
            path: "./BwGradualDEMO-Bold.otf",
            weight: "700",
        },
        {
            path: "./BwGradualDEMO-BoldItalic.otf",
            weight: "700",
            style: "italic"
        },
        {
            path: "./BwGradualDEMO-ExtraBold.otf",
            weight: "800",
        },
        {
            path: "./BwGradualDEMO-ExtraBoldItalic.otf",
            weight: "800",
            style: "italic"
        },
        {
            path: "./BwGradualDEMO-Black.otf",
            weight: "900",
        },
        {
            path: "./BwGradualDEMO-BlackItalic.otf",
            weight: "900",
            style: "italic"
        },
    ],
    variable: '--font-bw-gradual',
    display: 'swap',
})