import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AD Ouro Preto",
    description: "Site não oficial da Assembleia de Deus no bairro Ouro Preto.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
        other: {
            rel: "/favicon.ico",
            url: "/favicon.ico",
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <meta name="description" content={metadata.description || ""} />
            <meta property="og:url" content="https://adouropreto.com.br/" />
            <meta property="og:image" content="/favicon.ico" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="pt_BR" />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
