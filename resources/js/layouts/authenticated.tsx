import { PropsWithChildren, ReactNode, useState } from 'react'
import { User } from '@/types'
import { Link } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import {
  IconBell,
  IconLayoutSidebar,
  IconLayoutSidebarInactive,
  IconLayoutSidebarLeftCollapse,
  IconRotate3d,
} from '@tabler/icons-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Sidebar from '@/layouts/sidebar'
import Header from '@/layouts/header'

export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{
  user?: User
  header?: ReactNode
}>) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false)
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden bg-[#F3F4F6] text-slate-800 md:block">
        <div className="flex h-full max-h-screen border-r-2 border-slate-200/30 flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <IconRotate3d className="h-6 w-6" />
              <h1 className="">
                Linertya
                <span className={'font-bold text-4xl text-teal-700'}>
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
            <Sidebar />
          </SimpleBar>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
