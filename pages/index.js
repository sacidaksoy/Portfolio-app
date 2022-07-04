import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
    <Layout title="Home">
        <Link href="/about">
            <a>Go to about page</a>
        </Link>
        <p>
            Welcome to the home Page
        </p>
    </Layout>
)

export default Index;