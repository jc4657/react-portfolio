export default function Header({ darkMode }) {
    return (
        <div className={ "header" + (darkMode ? " dark" : " light") }>
            <h1>
                Header
            </h1>
        </div>
        
    )
}