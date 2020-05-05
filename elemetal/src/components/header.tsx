import { Link } from 'gatsby'
import React from 'react'
import './styless.css'
import './header.module.scss';

interface Props {
  siteTitle: string
  link: string
  to: string
}

// const HeaderLink = (props: Props) =>  (
//   <Link className={styles.link} to={props.to}
// 

const Header = ({ siteTitle }: Props): JSX.Element => (
  <header className='header'>
    <div
    className='row'
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
