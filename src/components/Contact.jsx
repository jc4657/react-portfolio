import EmailIcon from "../assets/envelope.svg?react"
import LinkedInIcon from "../assets/linkedin.svg?react"
import GitHubIcon from "../assets/github.svg?react"

export default function Contact({ darkMode }) {
    return (
        <div className={"contact" + (darkMode ? " dark" : " light")} id="contact">
            <h1>Contact</h1>
            <nav className="social-links">
                <a href="mailto:jasonchen4657@gmail.com">
                    <EmailIcon />
                </a>
                <a href="https://www.linkedin.com/in/jason-chen-593821275">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/jc4657">
                    <GitHubIcon />
                </a>
            </nav>
        </div>
    )
}