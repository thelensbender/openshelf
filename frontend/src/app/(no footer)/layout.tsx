

export default function NoFooterLayout({children} : {children: React.ReactNode}) {
  return (
    <div className="flex h-dvh flex-col">
      <main className="flex justify-center h-dvh py-5 px-3">{children}</main>
    </div>
  );
}