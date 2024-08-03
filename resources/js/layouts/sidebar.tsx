import {
  IconAddressBook,
  IconAnalyze,
  IconClipboardList,
  IconClipboardPlus,
  IconDatabase,
  IconDeviceDesktopAnalytics,
  IconHome,
  IconReportAnalytics,
  IconTextGrammar,
} from '@tabler/icons-react'
import DropdownItem from '@/components/dropdown-item'
import { Accordion } from '@/components/ui/accordion'
import NavItem from '@/components/nav-item'

export default function Sidebar() {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Accordion type={'multiple'}>
        <NavItem
          text={'Dashboard'}
          url={route('dashboard')}
          icon={
            <IconHome
              stroke={1.25}
              className={'text-slate-800 group-hover:text-white'}
            />
          }
        />
        <NavItem
          text={'Lirik'}
          url={route('dashboard')}
          icon={
            <IconClipboardList
              stroke={1.25}
              className={'text-slate-800 group-hover:text-white'}
            />
          }
        />
        <NavItem
          text={'Buat Lirik'}
          url={route('dashboard')}
          icon={
            <IconClipboardPlus
              stroke={1.25}
              className={'text-slate-800 group-hover:text-white'}
            />
          }
        />
        <NavItem
          text={'Analitics'}
          url={route('dashboard')}
          icon={
            <IconDeviceDesktopAnalytics
              stroke={1.25}
              className={'text-slate-800 group-hover:text-white'}
            />
          }
        />
      </Accordion>
    </nav>
  )
}
