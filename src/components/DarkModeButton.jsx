import DarkModeIcon from "../assets/dark_mode.svg?react"
import LightModeIcon from "../assets/light_mode.svg?react"

export default function DarkModeButton({ darkMode, toggleDarkMode }) {
    return (
        <button
            type="button"
            className={"dark-mode-button" + (darkMode ? " dark" : " light")}
            onClick={toggleDarkMode}
        >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
    )
}