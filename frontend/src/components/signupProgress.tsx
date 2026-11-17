export default function SignupProgress({ section }: { section: number }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <p className="text-caramel text-xs font-semibold">Step {section} of 2: {section === 1 ? 'About you' : 'Account security'}</p>
        <p className="text-outline-strong text-xs">{section}/2</p>
      </div>
      <div className="flex items-center gap-2 w-full">
        <div className="bg-mustard h-1.5 rounded-full grow"></div>
        <div className={`h-1.5 rounded-full grow ${section > 1 ? 'bg-mustard' : 'bg-outline'}`}></div>
      </div>
    </div>
  )
}