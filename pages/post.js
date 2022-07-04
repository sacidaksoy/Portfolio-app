import Layout from "../components/Layout";
import React from 'react'
import { useRouter } from "next/router";

function Post() {
    const router = useRouter();
    return (
        <Layout title={router.query.title}>
            <p style={{width: "80%"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias laudantium ratione esse quam ipsam sequi mollitia quaerat, sed velit amet, deleniti quis dicta doloribus vitae possimus. Natus vel corporis accusantium.</p>
        </Layout>
    )
}

export default Post;