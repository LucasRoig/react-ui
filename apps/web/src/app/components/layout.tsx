import Link from "next/link";

function NavBlock({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="uppercase text-xs/6 font-mono font-medium text-muted-foreground tracking-widest">{title}</h3>
      <ul className="flex flex-col gap-2 border-l border-gray-200">{children}</ul>
    </div>
  );
}

function NavLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <Link
      className="pl-5 text-sm text-muted-foreground-dark border-l border-transparent hover:text-dark-foreground hover:border-black -mx-px"
      href={href}
    >
      {children}
    </Link>
  );
}

export default function ComponentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[240px_minmax(0,1fr)]">
      <div className="relative">
        <div className="absolute inset-0">
          <aside className="sticky top-[var(--header-height)] overflow-y-auto max-h-[calc(100dvh-var(--header-height))] bottom-0 left-0 p-6">
            <nav className="flex flex-col gap-8">
              <NavBlock title="Components">
                <NavLink href="/components/button">Button</NavLink>
                <NavLink href="/components/card">Card</NavLink>
                <NavLink href="/components/input">Input</NavLink>
              </NavBlock>
              <NavBlock title="PUSH TOO LONG">
                <div className="h-[2000]">Test</div>
              </NavBlock>
            </nav>
          </aside>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
