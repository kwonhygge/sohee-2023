export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main className="bg-gradient-to-b from-gray92 via-isabelline to-gray92">
            {children}
        </main>
    )
}
