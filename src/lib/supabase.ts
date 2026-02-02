import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const { data: { user } } = await supabase.auth.getUser()

const { data } = await supabase
  .from('items')
  .select('*')


export const getItems = async () => {
  return supabase.from('items').select('*')
}
