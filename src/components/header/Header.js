import logo from '../../logo.svg'; //Scalable Vector Graphics

function Header() {
    let title = "Introduction to React"
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{title}</h1>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}

export default Header;