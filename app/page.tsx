// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Preorder | SwipeSavvy", // → <title>
//   description: "Join the SwipeSavvy preorder...", // → <meta name="description">
//   openGraph: {
//     title: "Preorder | SwipeSavvy", // → <meta property="og:title">
//     description: "Join the SwipeSavvy preorder...", // → <meta property="og:description">
//     url: "https://shaheerssift.netlify.app", // → <meta property="og:url">
//     siteName: "SwipeSavvy", // → <meta property="og:site_name">
//     images: [
//       // → <meta property="og:image"...>
//       {
//         url: "https://shaheerssift.netlify.app/SSlogopreorder.png",
//         width: 1200,
//         height: 630,
//         alt: "SwipeSavvy Preorder",
//       },
//     ],
//     type: "website", // → <meta property="og:type">
//   },
//   twitter: {
//     card: "summary_large_image", // → <meta name="twitter:card">
//     title: "Preorder | SwipeSavvy", // → <meta name="twitter:title">
//     description: "Join the SwipeSavvy preorder...", // → <meta name="twitter:description">
//     images: ["https://shaheerssift.netlify.app/SSlogopreorder.png"], // → <meta name="twitter:image">
//   },
// };

// export default function Home() {
//   return (
//     <main className="p-10 text-center">
//       <h1 className="text-3xl font-bold">Shaheer</h1>
//       <h1 className="text-3xl font-bold">Preorder Page</h1>
//       <p className="mt-4">Get early access to SwipeSavvy today!</p>
//       <img
//         src="/SSlogopreorder.png"
//         alt="Preorder Promo"
//         className="mx-auto mt-6 rounded-lg shadow-lg"
//       />
//     </main>
//   );
// }





import type { Metadata } from "next";
import ShareMenu from "./components/shareMenu";

export const metadata: Metadata = {
  title: "Preorder | SwipeSavvy",
  description: "Join the SwipeSavvy preorder...",
  openGraph: {
    title: "Preorder | SwipeSavvy",
    description: "Join the SwipeSavvy preorder...",
    url: "https://shaheerssift.netlify.app", // ✅ deployed link
    siteName: "SwipeSavvy",
    images: [
      {
        url: "https://shaheerssift.netlify.app/SSlogopreorder.png", // ✅ absolute path
        width: 1200,
        height: 630,
        alt: "SwipeSavvy Preorder",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preorder | SwipeSavvy",
    description: "Join the SwipeSavvy preorder...",
    images: ["https://shaheerssift.netlify.app/SSlogopreorder.png"], // ✅ absolute path
  },
};

export default function Home() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold">Shaheer</h1>
      <h1 className="text-3xl font-bold">Preorder Page</h1>
      <p className="mt-4">Get early access to SwipeSavvy today!</p>
      <img
        src="/SSlogopreorder.png"
        alt="Preorder Promo"
        className="mx-auto mt-6 rounded-lg shadow-lg max-w-xs sm:max-w-md"
      />

      {/* Floating share menu (client component) */}
      <ShareMenu />
    </main>
  );
}
