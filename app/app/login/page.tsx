"use client";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
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
                    <h2>{pending ? "Logging in..." : "Login with Github"}</h2>
                </CardHeader>
                <CardContent>
                    <Button onClick={handleLogin}>Login via Github</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginPage