import { SidebarTrigger } from '@/components/ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { AuthButton } from '@/modules/auth/ui/components/auth-button'
import { StudioUploadModal } from '../studio-upload-modal'

export const StudioNavbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md'>
      <div className='flex items-center gap-4 w-full'>
        <div className='flex items-center flex-shrink-0'>
          <SidebarTrigger />
          <Link href={"/studio"}>
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <Image
                src={'/images/logo-theme.svg'}
                height={35}
                width={35}
                alt="logo"
              />
              <p className='text-xl font-semibold tracking-tight'>Studio</p>
            </div>
          </Link>
        </div>

        {/* Searchbar */}
        <div className='flex-1' />

        {/* Auth */}
        <div className='w-36 items-center flex justify-between gap-4'>
          <StudioUploadModal />

          <AuthButton />
        </div>
      </div>
    </nav>
  )
}
