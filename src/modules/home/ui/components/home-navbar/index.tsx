import { SidebarTrigger } from '@/components/ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SearchInput from './search-input'
import { AuthButton } from '@/modules/auth/ui/components/auth-button'

export const HomeNavbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50'>
      <div className='flex items-center gap-4 w-full'>
        <div className='flex items-center flex-shrink-0'>
          <SidebarTrigger />
          <Link href={"/"}>
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <Image
                src={'/images/logo-theme.svg'}
                height={35}
                width={35}
                alt="logo"
              />
              <Image
                src={'/images/full-theme.svg'}
                height={85}
                width={85}
                alt="logo"
              />
            </div>
          </Link>
        </div>

        {/* Searchbar */}
        <div className='flex-1 flex justify-center max-w-[720px] mx-auto'>
          <SearchInput />
        </div>

        {/* Auth */}
        <div className='w-32 items-center flex justify-end gap-4'>
          <AuthButton />
        </div>
      </div>
    </nav>
  )
}
