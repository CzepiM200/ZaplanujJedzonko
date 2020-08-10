import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import './_footer.scss';

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="container container__flex">
            <div className="column">
              <h3 className="title">Lorem ipsum</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem. Aliquam erat volutpat. Donec placerat nisl
                magna.
              </p>
            </div>
            <div className="column">
              <h3 className="title">Lorem ipsum</h3>
              <ul className="list">
                <li className="list__element">consectetur adipiscing elit</li>
                <li className="list__element">sed do eiusmod tempor</li>
                <li className="list__element">incididunt ut labore</li>
                <li className="list__element">et dolore magna aliqua</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="title">Lorem ipsum</h3>
              <div>
                <input className="input"></input>
                <button className="btn">Lorem</button>
              </div>
              <div className="icons">
                <a>
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright">
          <p>
            Copyright<span>ZaplanujJedzonko.pl</span>
          </p>
        </div>
      </>
    );
  }
}

export default Footer;
