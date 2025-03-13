'use client'
import { useState, useCallback } from 'react'
import Navbar from '../../Navbar'
import MobileNavbar from '../../MobileNavbar/MobileNavbar'
import Footer from '../../Footer'
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation'

const MainLayout = ({ children }: { children: ReactNode }) => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const pathName = usePathname();
    const isDashboard = pathName.includes('/dashboard')

    const handleDismissMobileMenu = useCallback(() => {
        setMobileMenu(false)
    }, [setMobileMenu])

    const handlePresentMobileMenu = useCallback(() => {
        setMobileMenu(true)
    }, [setMobileMenu])

    return (
      <>
        {!isDashboard && (
          <>
            <Navbar
              onPresentMobileMenu={handlePresentMobileMenu}
              onDismissMobileMenu={handleDismissMobileMenu}
              visible={mobileMenu}
            />
            <MobileNavbar
              visible={mobileMenu}
              onDismissMobileMenu={handleDismissMobileMenu}
            />
          </>
        )}
        {children}
        {!isDashboard && <Footer />}
      </>
    );
}

export default MainLayout