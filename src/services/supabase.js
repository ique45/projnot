import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// chaves em Project Settings > API
const supabaseUrl = 'SUA_URL_DO_SUPABASE';
const supabaseKey = 'SUA_CHAVE_ANON_PUBLICA';

export const supabase = createClient(supabaseUrl, supabaseKey);
