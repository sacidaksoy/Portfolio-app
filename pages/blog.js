import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ slug, title }) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
            <a>{title} Post</a>
        </Link>
    </li>
)

export default () => (
    <Layout title={'Blog'}>
        <ul>
            <PostLink slug="react-post" title={'react'}/>
            <PostLink slug="angular-post" title={'angular'}/>
            <PostLink slug="vue-post" title={'vue'}/>
        </ul>
    </Layout>
)