import { IconAddressBook, IconDatabase, IconHome } from "@tabler/icons-react";
import DropdownItem from "@/components/dropdown-item";
import { Accordion } from "@/components/ui/accordion";
import NavItem from "@/components/nav-item";

export default function Sidebar() {
	return (
		<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
			<Accordion type={'multiple'}>
				<NavItem
					text={'Dashboard'}
					url={route('dashboard')}
					icon={<IconHome stroke={1.25} className={'text-slate-800 group-hover:text-white'}/>}
				/>
				<NavItem
					text={'Pegawai'}
					url={route('dashboard')}
					icon={<IconAddressBook stroke={1.25} className={'text-slate-800 group-hover:text-white'}/>}
				/>
				
				<DropdownItem
					icon={<IconDatabase stroke={1.25} className={'text-slate-800 group-hover:text-white'}/>}
					target={'data-master'}
					text={'Data Master'}
				>
					<DropdownItem.Content url={route('dashboard')} text={'Dashboard'}/>
				</DropdownItem>
			</Accordion>
		</nav>
	)
}
