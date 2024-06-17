import {
    // Bird,
    // CornerDownLeft,
    // File,
    FileUp,
    Home,
    ListFilter,
    MessageSquareMore,

    // MoreHorizontal,
    PlusCircle,
    // Rabbit,
    Search,
    Settings,
} from "lucide-react"

// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// import {
//     Drawer,
//     DrawerContent,
//     DrawerDescription,
//     DrawerHeader,
//     DrawerTitle,
//     DrawerTrigger,
// } from "@/components/ui/drawer";

import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"
import { Link } from "react-router-dom"
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
// import { SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Tabs, TabsContent } from "../ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

export function Dashboard() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
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
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
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
                                    to="/Home/chat"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    {/* <Users2 className="h-5 w-5" /> */}
                                    <MessageSquareMore className="size-5" />
                                    <span className="sr-only">Chat</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Chat</TooltipContent>
                        </Tooltip>
                        {/* <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    to="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <LineChart className="h-5 w-5" />
                                    <span className="sr-only">Analytics</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Analytics</TooltipContent>
                        </Tooltip> */}
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

                    {/* <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="overflow-hidden rounded-full"
                                >
                                    <img src="/flaticon.png" className="" ></img>
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
                    </header> */}
                    {/* </Card> */}

                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <Tabs defaultValue="all">
                            <TabsContent value="all">
                                <div className="relative m-2 flex items-center">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search..."
                                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                                    />
                                    <div className="ml-auto flex items-center gap-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" size="sm" className="h-8 gap-1">
                                                    <ListFilter className="h-3.5 w-3.5" />
                                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                        Filter
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuCheckboxItem checked>
                                                    Name
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem>
                                                    Date
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem>
                                                    Starred
                                                </DropdownMenuCheckboxItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        {/* <Button size="sm" variant="outline" className="h-8 gap-1">
                                            <File className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                Export
                                            </span>
                                        </Button> */}
                                        <Button size="sm" className="h-8 gap-1">
                                            <PlusCircle className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                New Chat
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                                <Card x-chunk="dashboard-06-chunk-0">
                                    <CardHeader>
                                        <CardTitle>My Chats</CardTitle>
                                        <CardDescription>
                                            Manage your PDf's and Ask Questions.
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Name</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Price
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Total Sales
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Created at
                                                    </TableHead>
                                                    <TableHead>
                                                        <span className="sr-only">Actions</span>
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        <h1 className="flex justify-center">
                                                            No Previous Records Found!
                                                        </h1>
                                                    </TableCell>
                                                </TableRow>
                                                {/* <TableRow>
                                                    <TableCell className="font-medium">
                                                        Laser Lemonade Machine
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline">Draft</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        $499.99
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        25
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-07-12 10:42 AM
                                                    </TableCell>
                                                    <TableCell>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium">
                                                        Hypernova Headphones
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline">Active</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        $129.99
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        100
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-10-18 03:21 PM
                                                    </TableCell>
                                                    <TableCell>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium">
                                                        AeroGlow Desk Lamp
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline">Active</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        $39.99
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        50
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-11-29 08:15 AM
                                                    </TableCell>
                                                    <TableCell>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium">
                                                        TechTonic Energy Drink
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="secondary">Draft</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        $2.99
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        0
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-12-25 11:59 PM
                                                    </TableCell>
                                                    <TableCell>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium">
                                                        Gamer Gear Pro Controller
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline">Active</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        $59.99
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        75
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2024-01-01 12:00 AM
                                                    </TableCell>
                                                    <TableCell>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium">
                                                        Luminous VR Headset
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline">Active</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        $199.99
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        30
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2024-02-14 02:14 PM
                                                    </TableCell>
                                                    <TableCell>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow> */}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="text-xs text-muted-foreground">
                                            Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                            products
                                        </div>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </main>
                </div>
            </TooltipProvider >
        </div >
    )
}