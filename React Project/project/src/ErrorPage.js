import './ErrorPage.css';

function ErrorPage(props) {
    return (
        <div>
            <h1>404 Not Found</h1>
            <h2>The requested page was not found on the server. </h2>
            <h2><a href="/">Click here to return home!</a></h2>
        </div>
    )
}

export default ErrorPage;