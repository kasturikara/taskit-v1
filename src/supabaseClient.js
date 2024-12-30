import { createClient } from "@supabase/supabase-js";

const url = "https://rijecjlikegyicadpjmm.supabase.co";
const anon =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpamVjamxpa2VneWljYWRwam1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0Njc4NjEsImV4cCI6MjA1MTA0Mzg2MX0.zFrmW-CX0xDATKZDgR4O-UT8bHbuPNKw090Qz9trCuE";

export const supabase = createClient(url, anon);
