/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const WhySection = () => {
  return (
    <section id="content-2" className="wide-60 content-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-5 col-lg-6">
            <div
              className="img-block left-column mb-40 wow fadeInRight"
              data-wow-delay="0.6s"
            >
              <img
                className="img-fluid"
                src="./assets/images/mobile_picture_4.jpg"
                alt="content-image"
              />
            </div>
          </div>

          <div className="col-md-7 col-lg-6">
            <div
              className="txt-block right-column pc-30 mb-40 wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              <h3 className="h3-sm">What is Earned Wage Access?</h3>

              <ul className="simple-list grey-color">
                <li className="list-item">
                  <p className="p-md">
                    As part of a financial wellbeing platform designed to
                    increase savings and reduce reliance on credit, EWA simply
                    means employers can offer employees access to their
                    already-earned wages, throughout the month.
                  </p>
                </li>

                <li className="list-item">
                  <p className="p-md">
                    EWA is proven with data to improve financial wellbeing and
                    reduce reliance on predatory forms of lending by 88%. No
                    interest is charged and it is not an advance.
                  </p>
                </li>

                <li className="list-item">
                  <p className="p-md">
                    According to the Financial Conduct Authority, EWA is not a
                    loan and should not be considered a form of credit.
                  </p>
                </li>
              </ul>

              <a
                href="#content-4"
                className="btn btn-md btn-tra-grey best-solutions "
              >
                Best Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
