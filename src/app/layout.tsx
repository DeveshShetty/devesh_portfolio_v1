import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Devesh Shetty | Machine Learning, AI & Data Engineer",
  description: "Portfolio of Devesh Shetty — machine learning, applied AI and data engineer building production systems across distributed data, GenAI and cloud platforms. Based in Dublin, Ireland.",
  keywords: [
    "ML Engineer",
    "AI Engineer",
    "GenAI",
    "LLM",
    "Deep Learning",
    "PySpark",
    "Big Data",
    "Azure",
    "Portfolio"
  ],
};

export const viewport: Viewport = {
  colorScheme: "dark light",
};

// Restores the saved theme before first paint to avoid a flash. Night is the default.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
