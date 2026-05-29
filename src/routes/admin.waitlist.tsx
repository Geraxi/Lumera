import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/waitlist")({
  head: () => ({ meta: [{ title: "Waitlist — Lumera Admin" }, { name: "robots", content: "noindex" }] }),
  component: AdminWaitlist,
});

type Signup = { id: string; email: string; source: string; created_at: string };

function AdminWaitlist() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [signups, setSignups] = useState<Signup[]>([]);
  const [userEmail, setUserEmail] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        navigate({ to: "/admin/login", replace: true });
        return;
      }
      setUserEmail(userData.user.email ?? "");
      setUserId(userData.user.id);
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userData.user.id)
        .eq("role", "admin");
      const admin = !!roles && roles.length > 0;
      setIsAdmin(admin);
      if (admin) {
        const { data, error } = await supabase
          .from("waitlist_signups")
          .select("id,email,source,created_at")
          .order("created_at", { ascending: false });
        if (error) toast.error(error.message);
        else setSignups((data ?? []) as Signup[]);
      }
      setLoading(false);
    })();
  }, [navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login", replace: true });
  };

  const exportCsv = () => {
    const rows = [["email", "source", "created_at"], ...filtered.map((s) => [s.email, s.source, s.created_at])];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `waitlist-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  const filtered = signups.filter((s) => s.email.toLowerCase().includes(query.toLowerCase()));

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center bg-background text-sm text-muted-foreground">Loading…</div>;
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold text-foreground">Not authorized</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your account ({userEmail}) doesn't have admin access.
          </p>
          <p className="mt-4 rounded-md bg-muted/40 p-3 text-left text-xs text-muted-foreground">
            To grant yourself admin, run this in the backend SQL editor:
            <code className="mt-2 block break-all rounded bg-background p-2 text-foreground">
              INSERT INTO public.user_roles (user_id, role) VALUES ('{userId}', 'admin');
            </code>
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <button onClick={signOut} className="rounded-md border border-input px-4 py-2 text-sm">Sign out</button>
            <Link to="/" className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Waitlist signups</h1>
            <p className="text-sm text-muted-foreground">{signups.length} total · signed in as {userEmail}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={exportCsv} disabled={!filtered.length}
              className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground disabled:opacity-50">
              Export CSV
            </button>
            <button onClick={signOut} className="rounded-md border border-input px-3 py-2 text-sm">Sign out</button>
          </div>
        </div>

        <input
          value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by email…"
          className="mt-6 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
        />

        <div className="mt-4 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Signed up</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={3} className="px-4 py-10 text-center text-muted-foreground">No signups yet.</td></tr>
              ) : filtered.map((s) => (
                <tr key={s.id} className="border-t border-border">
                  <td className="px-4 py-3 text-foreground">{s.email}</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.source}</td>
                  <td className="px-4 py-3 text-muted-foreground">{new Date(s.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
