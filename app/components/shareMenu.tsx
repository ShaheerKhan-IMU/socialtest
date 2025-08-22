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
              <FacebookShareButton
                url={shareUrl}
                hashtag="#SwipeSavvy"
                title="Preorder | SwipeSavvy, \nGet early access today!"
              >
                <FacebookIcon size={36} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={shareUrl}
                title="Preorder | SwipeSavvy, \nGet early access today!"
                hashtags={["SwipeSavvy", "Preorder"]}
              >
                <TwitterIcon size={36} round />
              </TwitterShareButton>

              <LinkedinShareButton
                url={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                title="Preorder | SwipeSavvy"
                summary="Join the SwipeSavvy preorder today!"
                source="SwipeSavvy"
              >
                <LinkedinIcon size={36} round />
              </LinkedinShareButton>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={28}
                  className="hover:scale-110 transition-transform"
                />
              </a>
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
