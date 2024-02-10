import { manrope } from '@/styles/font'
export default function Header() {
    return (
        <header className={`${manrope.className}`}>
            <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 pt-7.5 md:px-7.5 lg:px-0">
                <h1 className="text-3xl font-bold">
                    <a href="/">hee</a>
                </h1>
                <ul className="flex items-center gap-x-13.5">
                    <li>
                        <a href="/works">Works</a>
                    </li>
                    <li>
                        <a href="/info">Info</a>
                    </li>
                    <li>
                        <a href="/brunch">Brunch</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
