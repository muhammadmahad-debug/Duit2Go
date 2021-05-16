import React from "react";
import Logo from "../../logo-01.png";

const Footer = () => {
  return (
    <footer id="footer-2" className="footer division">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-5 col-xl-4">
            <div className="footer-info mb-40">
              <div className="footer-logo">
                <img src={Logo} alt="footer-logo" />
              </div>

              <p>
                Aliquam nullam tempor sapien and gravida donec congue ipsum
                porta justo undo velna auctor magna enim laoreet augue porta
              </p>
            </div>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 offset-xl-1">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Products</h6>

              <ul className="clearfix">
                <li>
                  <p>
                    <a href="#">How It Works?</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Integrations</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Product Updates</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Our Pricing</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Press</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Useful Links</h6>

              <ul className="clearfix">
                <li>
                  <p>
                    <a href="#">Privacy Policy</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Career</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Advertising</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Terms</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Site Map</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xl-3">
            <div className="footer-form mb-20">
              <h6 className="h6-xl">Follow the Best</h6>

              <p className="mb-20">
                Stay up to date with our latest news and our new products
              </p>

              <form className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                    id="s-email"
                  />
                  <span className="input-group-btn">
                    <button type="submit" className="btn ico-25">
                      <span className="flaticon-arrow-right"></span>
                    </button>
                  </span>
                </div>

                <label for="s-email" className="form-notification"></label>
              </form>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="footer-copyright">
                <p>&copy; 2021 PowerNode. All Rights Reserved</p>
              </div>
            </div>

            <div className="col-lg-6">
              <ul className="bottom-footer-list ico-15 text-right clearfix">
                <li>
                  <p className="first-list-link">
                    <a href="#">
                      <span className="flaticon-facebook"></span> Facebook
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">
                      <span className="flaticon-twitter"></span> Twitter
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">
                      <span className="flaticon-youtube"></span> YouTube
                    </a>
                  </p>
                </li>
                <li>
                  <p className="last-li">
                    <a href="#">
                      <span className="flaticon-yelp"></span> Yelp
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
