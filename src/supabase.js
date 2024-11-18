// src/supabase.js
// import { createClient } from '@supabase/supabase-js';
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://uxhettixjfmxnjhtlmuh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4aGV0dGl4amZteG5qaHRsbXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMzczNTksImV4cCI6MjA0NTYxMzM1OX0.XyoSbLxHFt_POXSar8BmV5O6kzMkawczFIibjEZUPhU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

