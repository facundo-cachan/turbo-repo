'use client'

import { useState } from "react";
import Image from "next/image";
import NavBarRight from "./navbar-right";
import NavBarLeft, { MenuDesktop, MenuMobile } from "./navbar-left";

const NavBar = () => {
    const [mobile_menu, setMobileMenu] = useState<boolean>(false)

    const showMobileMenu = () => {
        setMobileMenu(!mobile_menu)
    }

    return (<nav className="fixed left-0 top-0 w-full bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <NavBarLeft pressButton={showMobileMenu} />
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <Image
                            src="https://tailwindui.com/img/logos/mark.svg"
                            alt="User Avatar"
                            className="h-8 w-auto"
                            width={100}
                            height={24}
                            priority
                        />
                    </div>
                    {!mobile_menu && (<MenuDesktop />)}
                </div>
                <NavBarRight />
            </div>
        </div>
        {mobile_menu && (<MenuMobile />)}
    </nav>)
}

export default NavBar