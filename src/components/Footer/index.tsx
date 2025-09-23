import { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="footer-content">
          <p>© 2025 Beaming app by Prepaid Solutions, LLC</p>

          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>

            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>

            <li>
              <a href="/data-deletion-instruction">Data Deletion Instruction</a>
            </li>

            <li>
              <a href="/subscription-terms">Subscription Terms</a>
            </li>
          </ul>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
