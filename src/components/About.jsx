export default function About({ darkMode }) {
    return (
        <div className={"about" + (darkMode ? " dark" : " light")} id="about">
            <h1>About</h1>
            <div className="about-text">
                <p>
                    Hi, I'm Jason! I'm a recent computer science graduate interested in software development. Through my coursework and projects, I've had experience with both front-end and back-end web development, and have rudimentary knowledge of the most common programming languages (Java, Python, Javascript, C, etc.).
                </p>
                <p>
                    I enjoy the problem solving aspect of creating software, especially the process of breaking a problem down into smaller parts and building them back up. I also appreciate the constant need to learn on every project: there's always something to improve.
                </p>
                <p>
                    I'm currently looking for opportunities where I can continue developing my skills, work with and learn from an experienced team, and contribute to real-world software projects.
                </p>
            </div>
        </div>
    )
}