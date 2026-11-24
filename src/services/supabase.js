import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// chaves em Project Settings > API
const supabaseUrl = 'https://hgfzdpftmisxtlskeudw.supabase.co';
const supabaseKey = 'sb_publishable_04v4cj4NzwGoxAdmFy9oBw_thzvRc0q';

export const supabase = createClient(supabaseUrl, supabaseKey);
