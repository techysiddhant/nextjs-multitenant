"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { authClient } from '@/lib/auth-client';
import React from 'react'
import { updateSubdomain } from '../actions';

const SettingPage = () => {
    const handleUserName = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const username = formData.get("username");
        console.log(username);
        const data = await authClient.updateUser({
            username: username as string
        });
        console.log(data);
    }
    const handleSubdomain = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const subdomain = formData.get("subdomain");
        console.log(subdomain);
        await updateSubdomain(subdomain as string);
    }
    return (
        <div>
            <h1>Setting Page</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleUserName}>
                        <input type="text" name="username" placeholder='Username' />
                        <button type="submit">Submit</button>
                    </form>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Update Subdomain</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubdomain}>
                        <input type="text" name="subdomain" placeholder='Subdomain' />
                        <button type="submit">Submit</button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default SettingPage