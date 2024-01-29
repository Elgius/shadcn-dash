import { createClient } from '@supabase/supabase-js';
import { Employee } from './database.types';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Enviromental variables have been compormised or are missing, please check the system!")
}


export const supabase = createClient<Employee>(supabaseUrl, supabaseAnonKey);
