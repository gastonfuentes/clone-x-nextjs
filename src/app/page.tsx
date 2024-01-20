import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
export default async function Home() {
  const cookieStore = cookies()

  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: posts } = await supabase.from('posts').select()

  console.log({ posts })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hola twitter 👋 !!
      <pre>
        {
          JSON.stringify(posts, null, 2)
        }
      </pre>
    </main>
  )
}
