// components/AnimatedRoutes.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSelectedLayoutSegment } from "next/navigation"; // optional

export default function AnimatedRoutes({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}            // changing key = enter/exit transition
        initial={{ opacity: 0 }}  // start invisible
        animate={{ opacity: 1 }}  // fade in
        exit={{ opacity: 0 }}     // fade out old page
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}