import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ( {title} ) => (
    <li>
        <Link href={`/post?title=${title}`}>
            <a>{title} Post</a>
        </Link>
    </li>
)

export default () => (
    <Layout title={'Blog'}>
        <ul>
            <PostLink title={'react'}/>
            <PostLink title={'angular'}/>
            <PostLink title={'vue'}/>
        </ul>
    </Layout>
)