import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout>
            <h1>Abot me</h1>
            <p>Having worked in foreign affairs for three years,
                I have made a career change two years ago to become a front-end developer.
            I am constantly learning new skills and have an ever growing my passion for front-end development</p>
            <p>Would you like to <Link to='/contact'>contact me?</Link></p>
        </Layout>
    )
}

export default AboutPage;