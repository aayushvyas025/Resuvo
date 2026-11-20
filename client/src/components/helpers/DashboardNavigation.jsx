import { ArrowLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"

function DashboardNavigation() {
  return (
     <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            to={"/app"}
            className="inline-flex gap-2 items-center text-slate-500 hover:text-indigo-700 transition-all"
          >
            <ArrowLeftIcon />
            Back to Dashboard
          </Link>
        </div>
  )
}

export default DashboardNavigation