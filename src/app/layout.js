import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bài Kiểm Tra Nội Bộ | VietProDev x MeU",
  description: "Bài kiểm tra nội bộ cho nhân viên VietProDev x MeU. Kiểm tra kiến thức Frontend cơ bản với thời gian 60 phút.",
  keywords: "kiểm tra nội bộ, frontend test, vietprodev, meu, bài thi nội bộ",
  authors: [{ name: "VietProDev x MeU" }],
  creator: "VietProDev",
  publisher: "VietProDev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quiz.vietprodev.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bài Kiểm Tra Nội Bộ | VietProDev x MeU",
    description: "Bài kiểm tra nội bộ cho nhân viên VietProDev x MeU. JavaScript, TypeScript, React, Tailwind CSS.",
    url: "https://quiz.vietprodev.com",
    siteName: "VietProDev x MeU - Kiểm Tra Nội Bộ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VietProDev x MeU Internal Test",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bài Kiểm Tra Nội Bộ | VietProDev x MeU",
    description: "Bài kiểm tra nội bộ cho nhân viên VietProDev x MeU.",
    images: ["/og-image.jpg"],
    creator: "@vietprodev",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#ec4899" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script src="/js/snowstorm-min.js" defer></script>
      </body>
    </html>
  );
}
