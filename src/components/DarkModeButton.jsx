import DarkModeIcon from "../assets/dark_mode.svg?react"
import LightModeIcon from "../assets/light_mode.svg?react"

export default function DarkModeButton({ darkMode, toggleDarkMode }) {
    return (
        <button
            type="button"
            className={"dark-mode-button" + (darkMode ? " dark" : " light")}
            onClick={toggleDarkMode}
        >
            <div className="icon-wrap">
                <LightModeIcon className={"icon icon-animated" + (darkMode ? " icon-in" : " icon-out")} />
                <DarkModeIcon className={"icon icon-animated" + (darkMode ? " icon-out" : " icon-in")} />
            </div>
        </button>
    )
}