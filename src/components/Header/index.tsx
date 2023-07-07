import { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  )
}

export default Header;