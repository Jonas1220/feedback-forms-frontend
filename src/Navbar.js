import {React} from 'react'

export default function Navbar({handleLangChange,handleNavChange,isOpen,setIsOpen}) {
    return (
        <nav className="flex flex-col items-center w-screen bg-white">
            <div className="w-full md:w-3/4 lg:w-2/3 flex items-center justify-between h-16 px-4 max-w-7xl">
                <span className="text-whiste font-bold text-xl">welcome</span>
                <div className="flex flex-row items-center py-2">
                    <button className="flex justify-center items-center py-2 w-24 text-center bg-indigo-500 rounded-lg text-white">test</button>
                </div>
            </div>
            {/* modal */}
        </nav>
    )
}
