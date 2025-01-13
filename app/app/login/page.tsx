"use client";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { signIn } from "@/lib/auth-client";
import { useState } from "react";
const LoginPage = () => {
    const [pending, setPending] = useState(false);
    const handleLogin = async () => {
        await signIn.social({
            provider: "github",
        }, {
            onRequest: () => {
                setPending(true);
            },
            onSuccess: () => {
                console.log("Logged in successfully");
            },
            onError: (ctx) => {
                console.error(ctx.error.message ?? "Something went wrong.");
            },
        }
        )
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button onClick={handleLogin}>Login via Github</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginPage