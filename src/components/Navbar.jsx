export default function Navbar({ darkMode }) {
    return (
        <header className={"navbar" + (darkMode ? " dark" : " light")}>
            <span className={"name" + (darkMode ? " dark" : " light")}>Jason Chen</span>
            <nav>
                <ul className="menu">
                    <li>Menu Option 1</li>
                    <li>Menu Option 2</li>
                    <li>Menu Option 3</li>
                </ul>
            </nav>
        </header>
    )
}