export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-2xl">⚽</span>
        <span className="text-xl font-bold tracking-tight">STRIKEKIT</span>
      </div>
    </div>
  )
}