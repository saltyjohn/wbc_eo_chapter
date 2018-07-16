import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

import oxFlag from '../img/ox_new.jpg'
import './index.css'

const Layout = ({ children, data }) => {
  const meta = data.site.siteMetadata;
  console.log(children())
  return (
    <div>
      <Helmet
        title={meta.title}
        meta={[
          { name: 'description', content: 'Waynesburg College Epsilon Omicron Chapter Alumni Page.' },
          { name: 'keywords', content: 'Waynesburg,Epsilon,Omicron,Alumni' },
        ]}
      />
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
      {/* TODO: make sticky flag */}
      {/* <img
        src={oxFlag}
        alt="Epsilon Omicron Flag"
        style={{
          position: "absolute",
          top: "50%"
        }}
      /> */}
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
