import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { joinWaitlist } from "@/lib/waitlist.functions";
import { GoldButton } from "./GoldButton";
import { cn } from "@/lib/utils";

const emailSchema = z.string().trim().toLowerCase().email().max(255);

interface WaitlistFormProps {
  source?: string;
  className?: string;
}

export function WaitlistForm({ source = "landing", className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const join = useServerFn(joinWaitlist);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error("Please enter a valid email.");
      return;
    }
    setStatus("submitting");
    try {
      const res = await join({ data: { email: parsed.data, source } });
      if (!res.ok) {
        toast.error(res.error ?? "Something went wrong.");
        setStatus("idle");
        return;
      }
      setStatus("success");
      toast.success(
        res.alreadyJoined ? "You're already on the list." : "You're on the list.",
      );
    } catch {
      toast.error("Network error. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "glass mx-auto flex max-w-md items-center justify-center gap-3 rounded-full px-6 py-4 text-pearl",
          className,
        )}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-gold text-black">
          <Check className="h-4 w-4" />
        </span>
        <span className="text-sm">Welcome. We'll be in touch.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center",
        className,
      )}
    >
      <input
        type="email"
        required
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        autoComplete="email"
        className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm text-pearl placeholder:text-muted-foreground/70 outline-none backdrop-blur-md transition focus:border-[color-mix(in_oklab,var(--gold)_45%,transparent)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--gold)_25%,transparent)]"
      />
      <GoldButton type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Joining…
          </>
        ) : (
          "Join the Waitlist"
        )}
      </GoldButton>
    </form>
  );
}
