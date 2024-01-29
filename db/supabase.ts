import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;

const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Enviromental variables have been compromised or missing, immedite attention needed here!!!",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
