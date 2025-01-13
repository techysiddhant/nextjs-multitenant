import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import db from '@/db'
import { user } from '@/db/schema'
import { eq } from 'drizzle-orm'
import React from 'react'
const getUser = async (username: string) => {
    return await db.select().from(user).where(eq(user.username, username))
}
const UserPages = async (props: { params: Promise<{ username: string }> }) => {
    const { username } = await props.params;
    // console.log(username);
    const finalUsername = decodeURIComponent(username);
    const subdomain = finalUsername.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
        ? finalUsername.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
        : null;
    console.log(subdomain);
    const data = await getUser(subdomain!);
    // console.log(data);÷
    return (
        <div>{
            data && <>

                <h1>{username}</h1>
                <Card>
                    <CardHeader>
                        <CardTitle>{data[0]?.username}</CardTitle>
                        <CardTitle>{data[0]?.email}</CardTitle>
                    </CardHeader>
                </Card>
            </>
        }
        </div>
    )
}

export default UserPages