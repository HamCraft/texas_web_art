import { Phone } from "lucide-react"

export default function Header() {
  return (
    <div className="w-full py-2 text-primary-foreground bg-muted">
      <div className="container flex items-center justify-between">
        <h1>Free for the first 5 clients — just provide the domain.</h1>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span className="text-sm font-medium text-red-500">Call us: (555) 123-4567</span>
        </div>
        
      </div>
    </div>
    
  )
}
