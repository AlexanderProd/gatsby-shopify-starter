import React from 'react';
// import { Link } from 'gatsby'
import Helmet from 'react-helmet';

import SEO from '~/components/seo';

const CustomOrderPage = () => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <SEO title="Custom Order" keywords={[`gatsby`, `application`, `react`]} />
        </Helmet>
        <h1>Custom Order Page</h1>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
    </>
)

export default CustomOrderPage;