import Link from 'next/link';
import Layout from '../components/Layout';
import React, { Component } from 'react'
import Error from './_error';

export class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/sacidaksoy');
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();
        return { user: data, statusCode };
    }

    render() {
        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode}/>
        }

        return (
            <Layout title={'About'}>
                <p>{user.login}</p>
                <img src={user.avatar_url} alt={user.login} height="200px" />
                <Link href={user.html_url}>
                    <a>{user.html_url}</a>
                </Link>
            </Layout>
        )
    }
}

export default About;