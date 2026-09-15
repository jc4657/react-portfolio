import EmailIcon from "../assets/mail.svg?react"
import LinkedInIcon from "../assets/linkedin.svg?react"
import GitHubIcon from "../assets/github.svg?react"

export default function Contact({ darkMode }) {
    return (
        <div className={"contact" + (darkMode ? " dark" : " light")} id="contact">
            <h1>Contact</h1>
            <nav className="social-links">
                <a href="mailto:jasonchen4657@gmail.com" target="_blank">
                    <EmailIcon className="icon" />
                </a>
                <a href="https://github.com/jc4657" target="_blank">
                    <GitHubIcon className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/jason-chen-593821275" target="_blank">
                    <LinkedInIcon className="icon" />
                </a>
            </nav>
        </div>
    )
}