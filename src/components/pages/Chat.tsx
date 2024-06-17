import { Link } from "react-router-dom";
// import {} from "next/image"
import { Bird, CornerDownLeft, FileUp, MessageSquareMore, Mic, Paperclip, Rabbit, Share, Turtle } from "lucide-react"
import {
    Home,
    LineChart,
    Package2,
    PanelLeft,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Chat() {
    return (
        <div className="fixed flex min-h-screen w-full flex-col bg-muted/40">
            <TooltipProvider>
                <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                    <nav className="flex flex-col items-center gap-10 px-2 sm:py-4">
                        <Link to='/'>
                            <Button variant={'link'} size='icon' aria-label="Home">
                                <img src="/flaticon.png" className="" ></img>
                            </Button>
                        </Link>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    to="/Home"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Home className='size-5' />
                                    <span className="sr-only">Dashboard</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Dashboard</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    to="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <FileUp className='size-5' />
                                    <span className="sr-only">Upload</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Upload</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    to="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    {/* <Users2 className="h-5 w-5" /> */}
                                    <MessageSquareMore className="size-5" />
                                    <span className="sr-only">Customers</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Customers</TooltipContent>
                        </Tooltip>

                    </nav>
                    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    to="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Settings className="h-5 w-5" />
                                    <span className="sr-only">Settings</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Settings</TooltipContent>
                        </Tooltip>
                    </nav>
                </aside>
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <header className="fixed top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size="icon" variant="outline" className="sm:hidden">
                                    <PanelLeft className="h-5 w-5" />
                                    <span className="sr-only">Toggle Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="sm:max-w-xs">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <Link
                                        to="#"
                                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                    >
                                        <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                        <span className="sr-only">Acme Inc</span>
                                    </Link>
                                    <Link
                                        to="#"
                                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    >
                                        <Home className="h-5 w-5" />
                                        Dashboard
                                    </Link>
                                    <Link
                                        to="#"
                                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    >
                                        <ShoppingCart className="h-5 w-5" />
                                        Orders
                                    </Link>

                                    <Link
                                        to={''}
                                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    >
                                        <Users2 className="h-5 w-5" />
                                        Customers
                                    </Link>
                                    <Link
                                        to="#"
                                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    >
                                        <LineChart className="h-5 w-5" />
                                        Settings
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>

                        <Breadcrumb className="hidden md:flex">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link to="/Home">Dashboard</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Chat</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="overflow-hidden rounded-full"
                                >
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    {/* <img src="/flaticon.png" className="" ></img> */}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                    <div className="flex flex-col p-l-56">
                        <main className="py-[20px] px-[60px] p-b-[50px]  grid flex-1 gap-10ff overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
                            <div className="h-[90vh] overflow-y-scroll overflow-y-hidden relative flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
                            >
                                <form className="grid w-full items-start gap-6">
                                    <fieldset className="grid gap-6 rounded-lg border p-4">
                                        <legend className="-ml-1 px-1 text-sm font-medium">
                                            Settings
                                        </legend>
                                        <div className="grid gap-3">
                                            <Label htmlFor="model">Model</Label>
                                            <Select>
                                                <SelectTrigger
                                                    id="model"
                                                    className="items-start [&_[data-description]]:hidden"
                                                >
                                                    <SelectValue placeholder="Select a model" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="genesis">
                                                        <div className="flex items-start gap-3 text-muted-foreground">
                                                            <Rabbit className="size-5" />
                                                            <div className="grid gap-0.5">
                                                                <p>
                                                                    Neural{" "}
                                                                    <span className="font-medium text-foreground">
                                                                        Genesis
                                                                    </span>
                                                                </p>
                                                                <p className="text-xs" data-description>
                                                                    Our fastest model for general use cases.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="explorer">
                                                        <div className="flex items-start gap-3 text-muted-foreground">
                                                            <Bird className="size-5" />
                                                            <div className="grid gap-0.5">
                                                                <p>
                                                                    Neural{" "}
                                                                    <span className="font-medium text-foreground">
                                                                        Explorer
                                                                    </span>
                                                                </p>
                                                                <p className="text-xs" data-description>
                                                                    Performance and speed for efficiency.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="quantum">
                                                        <div className="flex items-start gap-3 text-muted-foreground">
                                                            <Turtle className="size-5" />
                                                            <div className="grid gap-0.5">
                                                                <p>
                                                                    Neural{" "}
                                                                    <span className="font-medium text-foreground">
                                                                        Quantum
                                                                    </span>
                                                                </p>
                                                                <p className="text-xs" data-description>
                                                                    The most powerful model for complex computations.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="temperature">Temperature</Label>
                                            <Input id="temperature" type="number" placeholder="0.4" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="grid gap-3">
                                                <Label htmlFor="top-p">Top P</Label>
                                                <Input id="top-p" type="number" placeholder="0.7" />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="top-k">Top K</Label>
                                                <Input id="top-k" type="number" placeholder="0.0" />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="grid gap-6 rounded-lg border p-4">
                                        <legend className="-ml-1 px-1 text-sm font-medium">
                                            Messages
                                        </legend>
                                        <div className="grid gap-3">
                                            <Label htmlFor="role">Role</Label>
                                            <Select defaultValue="system">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="system">System</SelectItem>
                                                    <SelectItem value="user">User</SelectItem>
                                                    <SelectItem value="assistant">Assistant</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="content">Content</Label>
                                            <Textarea
                                                id="content"
                                                placeholder="You are a..."
                                                className="min-h-[9.5rem]"
                                            />
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="bg-grey border relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">

                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="ml-auto gap-1.5 text-sm absolute right-3 top-3"
                                >
                                    <Share className="size-3.5" />
                                    Share
                                </Button>
                                <Badge variant="outline" className="absolute left-3 left-3">
                                    Messages
                                </Badge>
                                <div className="flex-1" />
                                <form
                                    className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
                                >
                                    <Label htmlFor="message" className="sr-only">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Type your message here..."
                                        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                                    />
                                    <div className="flex items-center p-3 pt-0">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <Paperclip className="size-4" />
                                                    <span className="sr-only">Attach file</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top">Attach File</TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <Mic className="size-4" />
                                                    <span className="sr-only">Use Microphone</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top">Use Microphone</TooltipContent>
                                        </Tooltip>
                                        <Button type="submit" size="sm" className="ml-auto gap-1.5">
                                            Send Message
                                            <CornerDownLeft className="size-3.5" />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </TooltipProvider>
        </div>

    )
}