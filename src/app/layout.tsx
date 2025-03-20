"use client";
import { fontBWGradual } from "./assets/fonts";
import "./globals.css";
import Providers from "./Provider";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClient and QueryClientProvider
import { ToastContainer } from "react-toastify";

// Create a new QueryClient instance
const queryClient = new QueryClient();

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Aureus AI</title>
      </head>
      <body className={`${fontBWGradual.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <Providers>{children}</Providers>
        </QueryClientProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
