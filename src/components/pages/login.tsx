/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hFBRvF9wRs2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { MountainIcon } from "../Mountainicon"

export function Login() {
    return (
        <div>
            <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
                <Link to="#" className="mr-6 flex items-center" >
                    <MountainIcon />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                {/* <div className="ml-auto flex gap-2">
                    <Button className="bg-green-700">Sign Up</Button>
                </div> */}
            </header>
            <main>
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>Enter your email below to login to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link to="#" className="ml-auto inline-block text-sm underline" >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full bg-green-700">
                                Login
                            </Button>
                            {/* <Button variant="outline" className="w-full">
                                Login with Google
                            </Button> */}
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link to="/Signup" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

