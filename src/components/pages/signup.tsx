import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MountainIcon } from "../Mountainicon"

export function Signup() {
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
                        <CardTitle className="text-xl">Sign Up</CardTitle>
                        <CardDescription>
                            Enter your information to create an account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input id="first-name" placeholder="Max" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" placeholder="Robinson" required />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>
                            <Button type="submit" className="w-full bg-green-700 hover:bg-green-600 ">
                                Create an account
                            </Button>
                            {/* <Button variant="outline" className="w-full">
                        Sign up with GitHub
                    </Button> */}
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link to="/Login" className="underline">
                                Login
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>

    )
}
