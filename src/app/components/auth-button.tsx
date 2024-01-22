'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export function AuthButton() {
    const supabase = createClientComponentClient

    const handleSignIn = () => {
        await supabase.signInWithOAuth({

        })
    }
}
