import React from 'react';
import Layout from '../components/layout';

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Me</h1>
            <p>Tel: +32 498 43 51 96</p>
            <p>email: omer.yildiz@cronos.be</p>
            <p> Github:
                <a href="https://github.com/yildiom"
                    // target="_blank"> this is done to make sure the link opens in a new tab
                    target="_blank">
                    https://github.com/yildiom
                </a>
            </p>
        </Layout>
    )
}

export default ContactPage;