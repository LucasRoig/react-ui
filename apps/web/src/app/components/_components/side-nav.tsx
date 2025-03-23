import { allComponents } from "content-collections";
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
      className="pl-5 text-sm text-muted-foreground-dark border-l border-transparent hover:text-foreground hover:border-black -mx-px"
      href={href}
    >
      {children}
    </Link>
  );
}

export function SideNav() {
  const components = allComponents;
  const componentByCategory = Map.groupBy(components, (component) => component.category);

  return (
    <nav className="flex flex-col gap-8">
      {[...componentByCategory.entries()].map(([category, components]) => (
        <NavBlock key={category} title={category}>
          {components.map((component) => (
            <NavLink key={component.slug} href={`/components/${component.slug}`}>
              {component.title}
            </NavLink>
          ))}
        </NavBlock>
      ))}
      <NavBlock title="PUSH TOO LONG">
        <div className="h-[2000]">Test</div>
      </NavBlock>
    </nav>
  );
}
