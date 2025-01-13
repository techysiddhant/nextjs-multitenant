"use client";
import { useSession } from '@/lib/auth-client'
import React from 'react'

const HomePage = () => {
    const { data: session } = useSession();
    console.log(session?.user);
    // const hostname = request.headers.get(÷"host")
    return (
        <div>
            <h1>Home Page</h1>
            <pre>{JSON.stringify(session?.user, null, 2)}</pre>
        </div>
    )
}

export default HomePage