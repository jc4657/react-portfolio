export default function Navbar({ darkMode }) {
    return (
        <header className={"navbar" + (darkMode ? " dark" : " light")}>
            <span className={"name" + (darkMode ? " dark" : " light")}>Jason Chen</span>
            <nav>
                <ul className="menu">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}