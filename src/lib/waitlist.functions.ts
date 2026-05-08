import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const inputSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(255),
  source: z.string().trim().max(64).optional(),
});

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => inputSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("waitlist_signups").insert({
      email: data.email,
      source: data.source ?? "landing",
    });

    if (error) {
      // unique violation = already on the list, treat as success
      if (error.code === "23505") {
        return { ok: true as const, alreadyJoined: true };
      }
      console.error("[waitlist] insert failed", error);
      return { ok: false as const, error: "Something went wrong. Please try again." };
    }

    return { ok: true as const, alreadyJoined: false };
  });
