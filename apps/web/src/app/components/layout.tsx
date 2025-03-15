export default function ComponentLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="grid grid-cols-[240px_minmax(0,1fr)]">
    <div className="relative">
      <div className="absolute inset-0">
        <aside className="sticky top-[var(--header-height)] overflow-y-auto max-h-[calc(100dvh-var(--header-height))] bottom-0 left-0">
          <div>Test 1</div>
          <div>Test 2</div>
          <div>Test 3</div>
          <div>Test 4</div>
          <div>Test 5</div>
          <div className="h-[2000]">Test</div>
        </aside>
      </div>
    </div>
    <main>
      {children}
    </main>
  </div>
}