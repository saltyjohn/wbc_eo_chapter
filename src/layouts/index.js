import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

// Used Gatsby Starter "Portfolio Emma" to learn how to include favicon
// https://github.com/LeKoArts/gatsby-starter-portfolio-emma
import favicon from '../img/favicon-flag.ico'


const Layout = ({ children, data }) => {
  const meta = data.site.siteMetadata;
  // console.log(children())
  return (
    <div>
      <Helmet
        title={meta.title}
        meta={[
          { name: 'description', content: 'Waynesburg College Epsilon Omicron Chapter Alumni Page.' },
          { name: 'keywords', content: 'waynesburg,epsilon,omicron,alumni,chapter,68,69,70,71' },
        ]}
      >
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      <Header siteTitle={meta.title} siteSubTitle={meta.subTitle} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        subTitle
      }
    }
  }
`
