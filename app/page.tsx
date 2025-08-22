import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preorder | SwipeSavvy", // → <title>
  description: "Join the SwipeSavvy preorder...", // → <meta name="description">
  openGraph: {
    title: "Preorder | SwipeSavvy", // → <meta property="og:title">
    description: "Join the SwipeSavvy preorder...", // → <meta property="og:description">
    url: "https://shaheerssift.netlify.app", // → <meta property="og:url">
    siteName: "SwipeSavvy", // → <meta property="og:site_name">
    images: [
      // → <meta property="og:image"...>
      {
        url: "https://shaheerssift.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "SwipeSavvy Preorder",
      },
    ],
    type: "website", // → <meta property="og:type">
  },
  twitter: {
    card: "summary_large_image", // → <meta name="twitter:card">
    title: "Preorder | SwipeSavvy", // → <meta name="twitter:title">
    description: "Join the SwipeSavvy preorder...", // → <meta name="twitter:description">
    images: ["https://shaheerssift.netlify.app/og-image.png"], // → <meta name="twitter:image">
  },
};

export default function Home() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold">Shaheer</h1>
      <h1 className="text-3xl font-bold">Preorder Page</h1>
      <p className="mt-4">Get early access to SwipeSavvy today!</p>
      <img
        src="/og-image.png"
        alt="Preorder Promo"
        className="mx-auto mt-6 rounded-lg shadow-lg"
      />
    </main>
  );
}
