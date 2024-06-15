import SimpleBar from "simplebar-react";
import {Link} from "@inertiajs/react";
import {IconChartLine, IconHome, IconPackage, IconUser, IconUserCircle} from "@tabler/icons-react";
import {Badge} from "@/components/ui/badge";

export default function Sidebar() {
	return (
		<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
			<Link
				href="#"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<IconHome className="h-4 w-4" />
				Dashboard
			</Link>
			<Link
				href="#"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<IconUserCircle className="h-4 w-4" />
				Karyawan
				<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
					6
				</Badge>
			</Link>
			<Link
				href="#"
				className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
			>
				<IconPackage className="h-4 w-4" />
				Admin
			</Link>
			<Link
				href="#"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<IconUser className="h-4 w-4" />
				Customers
			</Link>
			<Link
				href="#"
				className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
			>
				<IconChartLine className="h-4 w-4" />
				Analytics
			</Link>
		</nav>
	)
}
