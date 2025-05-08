import { Calendar, ChartBar } from "lucide-react"
import { NavLink } from "react-router"

export const Sidebar = () => {
    const navItems = [
        {name: "Dashboard", icon: <ChartBar />, path: "/"},
        {name: "Daily Tracker", icon: <Calendar />, path: "/dailytracker"},
    ]

    return(
        <div className="bg-neutral-800 h-full  flex flex-col">
            <div className="">
                <h1 className="text-green-500 p-3 py-4 font-bold border-b border-b-neutral-500">Energy Flow</h1>
            </div>
            <div>
                <ul className="mt-4">
                    {navItems.map((item) => (
                        <NavLink to={item.path} className={ ({isActive}) => `flex p-4 ${isActive ? "bg-neutral-700 rounded-full text-green-500" : ''}` }> 
                            <span className="text-green-500 mr-2">{item.icon}</span>
                            <span className="text-white" >{item.name}</span>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    )
}