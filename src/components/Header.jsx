export default function Header({ darkMode }) {
    return (
        <div className={"header" + (darkMode ? " dark" : " light")}>
        </div> 
    )
}