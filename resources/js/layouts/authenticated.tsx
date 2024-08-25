import React, { PropsWithChildren, ReactNode } from 'react'
import { User } from '@/types'
import 'simplebar-react/dist/simplebar.min.css'
import Header from '@/layouts/header'
import Sidebar from '@/layouts/sidebar'
import Footer from '@/layouts/footer'
import { Head } from '@inertiajs/react'
import { Toaster } from 'sonner'

export default function Authenticated({
  user,
  header,
  title,
  children,
}: PropsWithChildren<{
  user?: User
  header?: ReactNode
  title: string
}>) {
  return (
    <div className="grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header title={title} />
        <Head title={title} />
        <main className="flex flex-1 min-h-[85vh] flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
        <Footer />
      </div>
      <Toaster
        position={'top-center'}
        richColors={true}
        theme={'light'}
        closeButton={true}
        toastOptions={{
          classNames: {
            error: 'bg-rose-100/50 bg-red-400 border border-rose-700',
            success: 'bg-grean-100/50 text-green-400 border border-green-700',
            warning:
              'text-yellow-400 border border-yellow-700 bg-yellow-100/50 ',
            info: 'bg-blue-100/50 text-blue-400 border border bg-blue-400',
          },
        }}
      />
    </div>
  )
}
