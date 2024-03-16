import Link from 'next/link'
import Logo from '@/static/img/logo.webp'
import LogoWhite from '@/static/img/logo-white.webp'
import { PAGE_URL } from '@/constants'
import Image from 'next/image'
import { HeaderProps } from '@/interfaces'
import classNames from 'classnames'
export default function Header(props: HeaderProps) {
    const { isDarkTheme } = props
    return (
        <header
            className={classNames(
                `fixed top-0 z-10 w-full py-4 backdrop-blur-xl`,
                {
                    'bg-white': !isDarkTheme,
                    'bg-black': isDarkTheme,
                },
            )}
        >
            <nav
                className={classNames(
                    'mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 md:px-7.5 lg:px-0',
                    {
                        'text-black': !isDarkTheme,
                        'text-white': isDarkTheme,
                    },
                )}
            >
                <h1 className="">
                    <Link href="/">
                        <Image
                            src={isDarkTheme ? LogoWhite : Logo}
                            alt={'logo image'}
                            width={46}
                            height={52}
                        />
                    </Link>
                </h1>
                <ul className="flex items-center gap-x-13.5 text-sm lg:text-lg">
                    <li>
                        <Link href={PAGE_URL.PROFILE}>Profile</Link>
                    </li>
                    <li>
                        <Link href={PAGE_URL.LIST}>Work</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
