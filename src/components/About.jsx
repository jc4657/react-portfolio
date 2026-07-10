export default function About({ darkMode }) {
    return (
        <div className={ "about" + (darkMode ? " dark" : " light") }>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue et turpis et mollis. Aliquam rutrum luctus mi eu fermentum. Suspendisse potenti. Maecenas in convallis nulla. Fusce id lorem sed lacus egestas rutrum. Ut porttitor quis risus id elementum. Pellentesque molestie massa et velit pellentesque accumsan.
            </p>
            <p>
                Duis ultrices feugiat bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dignissim dui sit amet posuere tempor. Aenean dapibus orci odio, eu convallis orci consequat non. Vestibulum lectus enim, rhoncus auctor ipsum id, aliquet congue velit. Nam posuere enim et laoreet hendrerit. In vitae dolor pharetra, porta quam a, laoreet.
            </p>
        </div>
    )
}