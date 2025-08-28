"use client";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Send } from "lucide-react";

function useShareUrl() {
  const [url, setUrl] = useState<string>("https://shaheerssift.netlify.app");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);
  return url;
}

export default function ShareMenu() {
  const shareUrl = useShareUrl();
  const [open, setOpen] = useState(false);
  const shareUrlLK = encodeURIComponent("https://shaheerssift.netlify.app");
  const title = "🚀 Preorder | SwipeSavvy - Get early access today!";
  const quote = "Be the first to experience SwipeSavvy. Join the movement now!";
  const hashtags = ["SwipeSavvy", "Preorder", "EarlyAccess"];

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Hover popup with social icons */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="mb-3 rounded-2xl bg-white/95 shadow-xl ring-1 ring-black/5 backdrop-blur px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <FacebookShareButton
                  url={shareUrl}
                  hashtag="Preorder | SwipeSavvy. Get early access today!"
                >
                  <FacebookIcon size={40} round />
                </FacebookShareButton>

                {/* Twitter (now X) */}
                <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  hashtags={hashtags}
                >
                  <TwitterIcon size={40} round />
                </TwitterShareButton>

                {/* LinkedIn */}
                <LinkedinShareButton
                  url={shareUrl}
                  title={title}
                  summary={quote} // acts like description
                  source="SwipeSavvy"
                >
                  <LinkedinIcon size={40} round />
                </LinkedinShareButton>
              </div>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrlLK}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                  <FaLinkedin size={28} className="text-white" />
                </div>
              </a>
              <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=" - " // optional, separates title and link
              >
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating send button */}
      <motion.button
        aria-label="Share"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-xl hover:shadow-2xl transition-shadow"
      >
        <Send className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
