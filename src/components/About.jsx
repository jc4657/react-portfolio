export default function About({ darkMode }) {
    return (
        <div className={ "about" + (darkMode ? " dark" : " light") }>
            <h1>About</h1>
        </div>
    )
}