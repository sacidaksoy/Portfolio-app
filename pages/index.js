import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Home</h1>
        <Link href="/about">
            <a>Go to about page</a>
        </Link>
        <p>
            Welcome to the home Page
        </p>
    </div>
)

export default Index;