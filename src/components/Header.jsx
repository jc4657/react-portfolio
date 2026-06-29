export default function Header({ darkMode }) {
    return (
        <header className={"header" + (darkMode ? " dark" : " light")}>
            <h1>Header</h1>
        </header>
    )
}