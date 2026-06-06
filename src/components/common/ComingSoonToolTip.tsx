"use client";

import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sparkles } from "lucide-react";

interface ComingSoonTooltipProps {
  children: ReactNode;
}

export default function ComingSoonTooltip({
  children,
}: ComingSoonTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={150}>
        <TooltipTrigger asChild>
          <span className="cursor-not-allowed">{children}</span>
        </TooltipTrigger>

        <TooltipContent
          sideOffset={12}
          className="rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15">
              <Sparkles className="h-4 w-4 text-emerald-400" />
            </div>

            <div>
              <p className="font-semibold text-white">
                Coming Soon
              </p>
              <p className="text-xs text-slate-300 mt-0.5 max-w-[180px]">
                We're working on this feature and it'll be available soon.
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}