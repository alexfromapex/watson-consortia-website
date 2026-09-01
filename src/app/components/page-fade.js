// components/PageFade.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageFade({ children }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  // Re-trigger animation whenever the route changes
  useEffect(() => {
    setKey(pathname);
  }, [pathname]);

  // `key` forces React to unmount+remount the wrapper → CSS animation replays
  return (
    <div key={key} className="fade-in">
      {children}
    </div>
  );
}