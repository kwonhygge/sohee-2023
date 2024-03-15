import { workSans } from '@/styles/font'
import Link from 'next/link'
import Logo from '@/static/img/logo.webp'
import { PAGE_URL } from '@/constants'
import Image from 'next/image'
export default function Header() {
    return (
        <header
            className={`${workSans.className} fixed top-0 z-10 w-full py-4 backdrop-blur-xl`}
        >
            <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 md:px-7.5 lg:px-0">
                <h1 className="">
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt={'logo image'}
                            width={46}
                            height={52}
                        />
                    </Link>
                </h1>
                <ul className="flex items-center gap-x-13.5 text-sm lg:text-lg">
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link href={PAGE_URL.LIST}>Work</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
