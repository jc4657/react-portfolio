export default function Navbar({ darkMode }) {
    return (
        <nav className={"navbar" + (darkMode ? " dark" : " light")}>
            <h1 className={"name" + (darkMode ? " dark" : " light")}>Jason Chen</h1>
            <div className="menu">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}