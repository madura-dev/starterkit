'use client'
import { Link } from '@inertiajs/react'
import {
  IconFingerprintScan,
  IconLayoutSidebarLeftCollapse,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import SimpleBar from 'simplebar-react'
import SidebarMenu from '@/components/sidebar-menu'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.js'

const Sidebar = () => {
  return (
    <div className="hidden text-slate-800 md:block">
      <div className="flex bg-[#F3F4F6] h-full fixed max-w-[280px] max-h-screen border-r-2 border-slate-200/30 flex-col gap-2">
        <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <IconFingerprintScan className="h-8 w-8" />
            <h1 className="text-xl mb-0">
              Linertia
              <span className={'font-bold p-0 m-0 text-xl text-teal-700'}>
                .
              </span>{' '}
            </h1>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <IconLayoutSidebarLeftCollapse className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <SimpleBar
          forceVisible="y"
          style={{ maxHeight: '70vh' }}
          className="flex-1"
        >
          <SidebarMenu />
        </SimpleBar>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Butuh Bantuan?</CardTitle>
              <CardDescription>
                Kamu ingin menyesuaikan fitur sesuai kebutuhan?
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Konsultasi Sekarang
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
