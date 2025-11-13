import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv'

dotenv.config()

const supabaseUrl=process.env.SUPABASE_URL || ""
const supabaseKey=process.env.SUPABASE_KEY || ""

export const supabase=createClient(supabaseUrl,supabaseKey)
async function testConnection() {
  if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Missing Supabase credentials in .env");
    return;
  }

  // Try a simple API call to check connectivity
  const { data, error } = await supabase.from("works").select("*").limit(1);

  if (error) {
    console.error("❌ Supabase connection failed:", error.message);
  } else {
    console.log("✅ Supabase connection successful!");
    console.log("Sample data:", data);
  }
}

testConnection();