drop policy if exists "Anyone can join the waitlist" on public.waitlist_signups;

create policy "Anyone can join the waitlist"
  on public.waitlist_signups
  for insert
  to anon, authenticated
  with check (
    char_length(email) between 5 and 255
    and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and char_length(coalesce(source, '')) <= 64
  );
