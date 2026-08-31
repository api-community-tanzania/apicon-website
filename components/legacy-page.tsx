"use client";

import { useEffect } from "react";
import { useLegacyInteractions } from "@/components/use-legacy-interactions";

type LegacyPageProps = {
  markup: string;
  bodyClassName?: string;
};

export function LegacyPage({ markup, bodyClassName }: LegacyPageProps) {
  useLegacyInteractions(markup);

  useEffect(() => {
    if (!bodyClassName) return;
    document.body.classList.add(bodyClassName);
    return () => document.body.classList.remove(bodyClassName);
  }, [bodyClassName]);

  return <div className="legacy-page-root" dangerouslySetInnerHTML={{ __html: markup }} />;
}
