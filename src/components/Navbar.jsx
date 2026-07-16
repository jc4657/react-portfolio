export default function Navbar({ darkMode }) {
    return (
        <nav className={"navbar" + (darkMode ? " dark" : " light")}>
            <span className={"name" + (darkMode ? " dark" : " light")}>Jason Chen</span>
            <div className="menu">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a>Contact</a>
            </div>
        </nav>
    )
}