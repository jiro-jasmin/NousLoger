import Link from "next/link"
import { useContext } from "react";
import { UserContext } from "./UserContext";


const NavBar: React.FC = () => {

    const { isAuth, toggleAuth } = useContext(UserContext)

    
    return (
        <nav className="fixed h-12 w-full bg-white shadow-md z-40 flex items-center justify-between">
            <Link href="/" aria-label="aller à la page d'accueil" title="Page d'accueil" tabIndex={0}>
                <h1 className="text-3xl font-bold text-slate-600 px-4">
                    NousLoger<span className="text-slate-400">.com</span>
                </h1>
            </Link>

            <button
                className="
                h-full flex items-center bg-teal-500 border-l border-teal-600 text-white
                hover:brightness-110 transition-all duration-500 ease-in-out px-4"
                onClick={() => toggleAuth}
            >
                {isAuth ? "Bienvenue admin!" : "Se connecter"}
              
            </button>

        </nav>
    )
}

export default NavBar;