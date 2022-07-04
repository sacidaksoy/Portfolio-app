import Link from 'next/link';
import Layout from '../components/Layout';

import React, { Component } from 'react'

export class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/sacidaksoy');
        const data = await res.json();
        return { user: data };
    }

    render() {
        const { user } = this.props;
        return (
            <Layout title={'About'}>
                <Link href="/">
                    <a>Go to home page</a>
                </Link>
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