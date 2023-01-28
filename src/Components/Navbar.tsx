import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <div className="navbar bg-blue-500">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Pro-1</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Link to='/'> <li><a>Home</a></li></Link>
                        <Link to='/calender'> <li><a>Calender</a></li></Link>
                        <Link to='/kanban'><li><a>Kanban-Board</a></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
