import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styless.css'

interface iProps {
  siteTitle: string
}
const Header = ({ siteTitle }: iProps): JSX.Element => (
  <header className='nav-header'>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `aliceblue`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Elemetal`,
}

export default Header
