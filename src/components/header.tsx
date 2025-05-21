import { Phone } from "lucide-react"

export default function Header() {
  return (
    <div className="w-full bg-primary py-2 text-primary-foreground bg-slate-950">
      <div className="container flex items-center justify-end">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span className="text-sm font-medium">Call us: (555) 123-4567</span>
        </div>
      </div>
    </div>
  )
}
