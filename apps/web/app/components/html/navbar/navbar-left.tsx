'use client'

import { memo } from "react";
import Button from "../../atoms/button";

import type { ButtonProps } from "../../atoms/button";

type ItemMenuProps = {
    href: string;
    label: string;
}
const itemMenu = [
    {
        href: '#',
        label: 'Dashboard'
    },
    {
        href: '#',
        label: 'Team'
    },
    {
        href: '#',
        label: 'Projects'
    },
    {
        href: '#',
        label: 'Calendar'
    },
]
const MenuDesktop = memo(() => (<div className="hidden sm:ml-6 sm:block">
    <div className="flex space-x-4">
        {itemMenu.map(({ href, label }: ItemMenuProps, index: number) => (<a href={href} key={index} className={`${index === 0 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'} rounded-md px-3 py-2 text-sm font-medium`} aria-current={index === 0 ? 'page' : false}>{label}</a>))}
    </div>
</div>))
const MenuMobile = memo(() => (<div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
        {itemMenu.map(({ href, label }: ItemMenuProps, index: number) => (<a href={href} key={index} className={`${index === 0 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'} block rounded-md px-3 py-2 text-base font-medium`} aria-current={index === 0 ? 'page' : false}>{label}</a>))}
    </div>
</div>))
const NavBarLeft = ({ pressButton }: { pressButton: ButtonProps['onClick'] }): JSX.Element => (<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <Button onClick={pressButton} title="Open main menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>
        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </Button>
</div>)

MenuDesktop.displayName = 'MenuDesktop';
MenuMobile.displayName = 'MenuMobile';

export { MenuDesktop, MenuMobile }
export default NavBarLeft
