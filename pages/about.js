import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout title={'About'}>
        <Link href="/">
            <a>Go to home page</a>
        </Link>
        <p>A Javascript Programmer</p>
        <img src="/static/js.jpg" alt="Javascript" height="200px" />
    </Layout>
)