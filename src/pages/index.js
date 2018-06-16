import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h2>Page example</h2>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <h2>Post example</h2>
    <Link to="blog/hello-world">Post</Link>
  </div>
);

export default IndexPage;
