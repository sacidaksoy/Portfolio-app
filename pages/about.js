import Link from 'next/link';

export default () => (
    <div>
        <h1>About</h1>
        <Link href="/">
            <a>Go to home page</a>
        </Link>
        <p>A Javascript Programmer</p>
        <img src="/static/js.jpg" alt="Javascript" height="200px" />
    </div>
)