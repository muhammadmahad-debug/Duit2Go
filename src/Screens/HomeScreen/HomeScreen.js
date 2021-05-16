import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import WhySection from "../../components/WhySection/WhySection";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const HomeScreen = () => {
  return (
    <div>
      <HeroSection />
      <WhySection />

      <section
        id="features-3"
        className="bg-lightgrey wide-60 features-section division"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-center mb-60">
                <h2 className="h2-xs">Features That Matters</h2>

                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius magna
                  tempus a dolor
                </p>
              </div>
            </div>
          </div>

          <div className="fbox-3-wrapper pc-30">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="fbox-3 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="fbox-ico grey-color ico-65">
                    <span className="flaticon-message"></span>
                  </div>

                  <div className="fbox-txt">
                    <h5 className="h5-xs">Text Messages</h5>

                    <p className="p-md grey-color">
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="fbox-3 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="fbox-ico grey-color ico-65">
                    <span className="flaticon-voice-message"></span>
                  </div>

                  <div className="fbox-txt">
                    <h5 className="h5-xs">Voice Messages</h5>

                    <p className="p-md grey-color">
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="fbox-3 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="fbox-ico grey-color ico-65">
                    <span className="flaticon-users"></span>
                  </div>

                  <div className="fbox-txt">
                    <h5 className="h5-xs">Shared Lists</h5>

                    <p className="p-md grey-color">
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="fbox-3 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <div className="fbox-ico grey-color ico-65">
                    <span className="flaticon-image"></span>
                  </div>

                  <div className="fbox-txt">
                    <h5 className="h5-xs">File Attachments</h5>

                    <p className="p-md grey-color">
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="fbox-3 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <div className="fbox-ico grey-color ico-65">
                    <span className="flaticon-alarm"></span>
                  </div>

                  <div className="fbox-txt">
                    <h5 className="h5-xs">Push Notifications</h5>

                    <p className="p-md grey-color">
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="fbox-3 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="1.4s"
                >
                  <div className="fbox-ico grey-color ico-65">
                    <span className="flaticon-keyhole"></span>
                  </div>

                  <div className="fbox-txt">
                    <h5 className="h5-xs">Concrete Security</h5>

                    <p className="p-md grey-color">
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="content-4" className="wide-60 content-section division">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2-xs">
                The financial platform you and your company need
              </h2>
            </div>
          </div>
          <div id="cb-1-1" className="cbox-1 pb-50">
            <div className="row d-flex align-items-center m-row">
              <div className="col-md-7 col-lg-6 m-bottom">
                <div
                  className="txt-block left-column pc-30 mb-40 wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <h3 className="h3-sm">Earned Wage Access</h3>

                  <p className="p-md grey-color">
                    Earned Wage Access allows users to advance a portion of
                    their pay ahead of payday. ​ Users submits a request on the
                    app. Relevant checks are conducted. Users receives the funds
                    immediately. Users can then use the funds to pay for medical
                    bills, car repair costs, children's tuition fees and more.
                  </p>
                </div>
              </div>

              <div className="col-md-5 col-lg-6 m-top">
                <div
                  className="img-block right-column mb-40 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <img
                    className="img-fluid"
                    style={{ height: "600px" }}
                    src="./assets/images/mobile_picture_1.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="cb-1-2" className="cbox-1">
            <div className="row d-flex align-items-center">
              <div className="col-md-5 col-lg-6">
                <div
                  className="img-block left-column mb-40 wow fadeInRight"
                  data-wow-delay="0.4s"
                >
                  <img
                    className="img-fluid"
                    src="./assets/images/img-08.png"
                    alt="content-image"
                  />
                </div>
              </div>

              <div className="col-md-7 col-lg-6">
                <div
                  className="txt-block right-column pc-30 mb-40 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <h3 className="h3-sm">Salary Tracking</h3>

                  <ul className="simple-list grey-color">
                    <li className="list-item">
                      <p className="p-md">
                        Users gain a sense of security when they can monitor
                        their earnings. ​
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-md">
                        With some simple and quick integration with the
                        employer's HR systems, the app will update the user's
                        earnings based on their work.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="cb-1-1" className="cbox-1 pb-50">
            <div className="row d-flex align-items-center m-row">
              <div className="col-md-7 col-lg-6 m-bottom">
                <div
                  className="txt-block left-column pc-30 mb-40 wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <h3 className="h3-sm">Financial Education</h3>

                  <p className="p-md grey-color">
                    DUIT2GO is here to help users make the right financial
                    decisions and choices. The user will receive:
                    <ul className="simple-list grey-color">
                      <li className="list-item">
                        <p className="p-md">
                          triggers if they have been using earned wage access
                          too often
                        </p>
                      </li>

                      <li className="list-item">
                        <p className="p-md">
                          regular updates about good spending habits
                        </p>
                      </li>

                      <li className="list-item">
                        <p className="p-md">
                          news updates that could affect their financial
                          decisions
                        </p>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="col-md-5 col-lg-6 m-top">
                <div
                  className="img-block right-column mb-40 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <img
                    className="img-fluid"
                    style={{ height: "600px" }}
                    src="./assets/images/mobile_picture_2.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="cb-1-2" className="cbox-1">
            <div className="row d-flex align-items-center">
              <div className="col-md-5 col-lg-6">
                <div
                  className="img-block left-column mb-40 wow fadeInRight"
                  data-wow-delay="0.4s"
                >
                  <img
                    className="img-fluid"
                    style={{ height: "600px" }}
                    src="./assets/images/mobile_picture_3.jpeg"
                    alt="content-image"
                  />
                </div>
              </div>

              <div className="col-md-7 col-lg-6 m-bottom">
                <div
                  className="txt-block left-column pc-30 mb-40 wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <h3 className="h3-sm">Benefits Program</h3>

                  <p className="p-md grey-color">
                    By becoming regulars, users will receive special discounts
                    and offers for essential goods and services. These special
                    discounts apply for buying necessities such as clothes,
                    groceries, insurance and many more. This is intended to
                    reduce the financial burden on users.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="cb-1-1" className="cbox-1 pb-50">
            <div className="row d-flex align-items-center m-row">
              <div className="col-md-7 col-lg-6 m-bottom">
                <div
                  className="txt-block left-column pc-30 mb-40 wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <h3 className="h3-sm">Digital Attendance System</h3>

                  <p className="p-md grey-color">
                    Companies do not need to have their own digital attendance
                    tracking system as we offer a QR-based attendance system.
                    Our digital attendance system allows us to easily keep
                    salary up-to-date and can be implemented easily. Companies
                    don't need to pay for this as it comes with our services.
                  </p>
                </div>
              </div>

              <div className="col-md-5 col-lg-6 m-top">
                <div
                  className="img-block right-column mb-40 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <img
                    className="img-fluid"
                    src="./assets/images/img-07.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="statistic-2"
        className="bg-09 wide-60 statistic-section division"
      >
        <div className="container white-color">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-center mb-60">
                <h2 className="h2-xs">What's New in v2.13</h2>

                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius magna
                  tempus a dolor
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
              <div className="row text-center">
                <div className="col-md-4">
                  <div
                    className="statistic-block mb-40 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h2 className="h2-title-xs statistic-number">
                      <span className="count-element">24</span>%
                    </h2>
                    <p className="p-md">
                      Luctus neque purus ipsum neque and dolor primis
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="statistic-block mb-40 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <h2 className="h2-title-xs statistic-number">
                      <span className="count-element">38</span>%
                    </h2>
                    <p className="p-md">
                      Luctus neque purus ipsum neque and dolor primis
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="statistic-block mb-40 wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <h2 className="h2-title-xs statistic-number">
                      <span className="count-element">46</span>%
                    </h2>
                    <p className="p-md">
                      Luctus neque purus ipsum neque and dolor primis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="content-1" className="wide-60 content-section division">
        <div className="container">
          <div className="row d-flex align-items-center m-row">
            <div className="col-md-7 col-lg-6 m-bottom">
              <div
                className="txt-block left-column pc-30 mb-40 wow fadeInRight"
                data-wow-delay="0.4s"
              >
                <h5 className="h5-xs sm-title">1. User Data Protection</h5>

                <p className="p-md grey-color">
                  An enim nullam tempor ac tincidunt ligula massa gravida and
                  orci luctus et ultrices sapien gravida donec pretium an ipsum
                  porta justo integer at odio velna vitae auctor integer
                </p>

                <h5 className="h5-xs sm-title mt-30">2. DataBase Backup</h5>

                <p className="p-md grey-color">
                  An luctus et ultrices sapien gravida donec pretium ipsum and
                  pretium ipsum porta justo integer at odio velna vitae
                </p>

                <h5 className="h5-xs sm-title mt-30">
                  3. Contextual Advertising
                </h5>

                <p className="p-md grey-color">
                  An enim nullam tempor ac tincidunt ligula massa gravida and
                  orci luctus et ultrices sapien gravida donec pretium an ipsum
                  porta justo integer at odio velna vitae auctor integer
                </p>
              </div>
            </div>

            <div className="col-md-5 col-lg-6 m-top">
              <div
                className="img-block right-column mb-40 wow fadeInLeft"
                data-wow-delay="0.6s"
              >
                <img
                  className="img-fluid"
                  src="./assets/images/img-11.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features-9" className="pb-60 features-section division">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-center mb-60">
                <h2 className="h2-xs">Security, Simplicity, Easiness</h2>

                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius magna
                  tempus a dolor
                </p>
              </div>
            </div>
          </div>

          <div className="fbox-9-img">
            <div className="row">
              <div className="col-md-12">
                <div className="video-preview">
                  <a
                    className="video-popup1"
                    href="https://www.youtube.com/embed/SZEflIVnhH8"
                  >
                    <div className="video-btn video-btn-lg bg-theme ico-75">
                      <div className="video-block-wrapper">
                        <span className="flaticon-play-button"></span>
                      </div>
                    </div>
                  </a>

                  <img
                    className="img-fluid radius-06"
                    src="./assets/images/features-9-img.jpg"
                    alt="features-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="fbox-9-wrapper">
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="fbox-9 pc-10 mb-40 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h5 className="h5-sm">Group Messaging</h5>
                  <p className="p-md grey-color">
                    Ligula risus auctor tempus and dolor feugiat lacinia at
                    purus ipsum primis suscipit and aliquet porta rutrum
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="fbox-9 pc-10 mb-40 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <h5 className="h5-sm">Strong Encryption</h5>
                  <p className="p-md grey-color">
                    Ligula risus auctor tempus and dolor feugiat lacinia at
                    purus ipsum primis suscipit and aliquet porta rutrum
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="fbox-9 pc-10 mb-40 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <h5 className="h5-sm">Multiple Widgets</h5>
                  <p className="p-md grey-color">
                    Ligula risus auctor tempus and dolor feugiat lacinia at
                    purus ipsum primis suscipit and aliquet porta rutrum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="reviews-2"
        className="bg-lightgrey wide-100 reviews-section division"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-center mb-60">
                <h2 className="h2-xs">Customers Feedback</h2>

                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius magna
                  tempus a dolor
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme reviews-wrapper">
                <div className="review-2 radius-08">
                  <div className="app-rating ico-20 yellow-color">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                  </div>

                  <h5 className="h5-xs">Great Flexibility!</h5>

                  <div className="review-2-txt">
                    <p className="p-md grey-color">
                      Etiam sapien sem at sagittis congue an augue massa varius
                      egestas undo suscipit magna tempus undo aliquet
                    </p>

                    <h6 className="h6-sm">- Scott Boxer</h6>
                  </div>
                </div>

                <div className="review-2 radius-08">
                  <div className="app-rating ico-20 yellow-color">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star-half-empty"></span>
                  </div>

                  <h5 className="h5-xs">Simple and Useful!</h5>

                  <div className="review-2-txt">
                    <p className="p-md grey-color">
                      At sagittis congue augue undo egestas magna ipsum vitae
                      purus and ipsum primis suscipit
                    </p>

                    <h6 className="h6-sm">- Wendy T.</h6>
                  </div>
                </div>

                <div className="review-2 radius-08">
                  <div className="app-rating ico-20 yellow-color">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                  </div>

                  <h5 className="h5-xs">I love this App!</h5>

                  <div className="review-2-txt">
                    <p className="p-md grey-color">
                      Mauris donec ociis magnis and sapien etiam sapien congue
                      undo augue pretium and ligula augue a lectus aenean magna
                    </p>

                    <h6 className="h6-sm">- pebz13</h6>
                  </div>
                </div>

                <div className="review-2 radius-08">
                  <div className="app-rating ico-20 yellow-color">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star-1"></span>
                  </div>

                  <h5 className="h5-xs">Best App for iOS!</h5>

                  <div className="review-2-txt">
                    <p className="p-md grey-color">
                      An augue in cubilia laoreet magna and suscipit egestas
                      magna ipsum purus ipsum and suscipit
                    </p>

                    <h6 className="h6-sm">- Scott Boxer</h6>
                  </div>
                </div>

                <div className="review-2 radius-08">
                  <div className="app-rating ico-20 yellow-color">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star-half-empty"></span>
                  </div>

                  <h5 className="h5-xs">Awesome Design!</h5>

                  <div className="review-2-txt">
                    <p className="p-md grey-color">
                      Mauris donec magnis sapien undo etiam sapien and congue
                      augue egestas ultrice a vitae purus velna integer tempor
                      congue
                    </p>

                    <h6 className="h6-sm">- John Sweet</h6>
                  </div>
                </div>

                <div className="review-2 radius-08">
                  <div className="app-rating ico-20 yellow-color">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                  </div>

                  <h5 className="h5-xs">Simply Amazing App!</h5>

                  <div className="review-2-txt">
                    <p className="p-md grey-color">
                      An augue cubilia laoreet undo magna a suscipit undo
                      egestas magna ipsum ligula vitae purus ipsum primis
                      cubilia blandit
                    </p>

                    <h6 className="h6-sm">- Leslie D.</h6>
                  </div>
                </div>

                <div className="review-2 radius-08">
                  <div className="app-rating ico-20 yellow-color">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star-half-empty"></span>
                  </div>

                  <h5 className="h5-xs">Powerful Features!</h5>

                  <div className="review-2-txt">
                    <p className="p-md grey-color">
                      Augue egestas volutpat and egestas augue in cubilia
                      laoreet magna undo suscipit luctus
                    </p>

                    <h6 className="h6-sm">- Marisol19</h6>
                  </div>
                </div>

                <div className="review-2 radius-08">
                  <div className="app-rating ico-20 yellow-color">
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star-half-empty"></span>
                  </div>

                  <h5 className="h5-xs">Super Support!</h5>

                  <div className="review-2-txt">
                    <p className="p-md grey-color">
                      Aliquam augue suscipit luctus neque purus ipsum neque
                      dolor primis libero tempus at blandit posuere varius magna
                    </p>

                    <h6 className="h6-sm">- AJ</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs-1" className="wide-100 faqs-section division">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-center mb-60">
                <h2 className="h2-xs">Frequently Asked Questions</h2>

                <p className="p-xl">
                  <Tabs>
                    <TabList>
                      <Tab>Employee</Tab>
                      <Tab>Employer</Tab>
                      <Tab>General</Tab>
                    </TabList>

                    <TabPanel>
                      <div className="faqs-1-questions">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="questions-holder pc-25">
                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="0.4s"
                              >
                                <h6 className="h6-xl">
                                  What is the maximum amount I can advance?
                                </h6>

                                <p className="p-md grey-color">
                                  The maximum you can withdraw is 50% of you
                                  salary earned. For example, if you have worked
                                  for 20 days, you may withdraw up to 50% of the
                                  amount of money you earn by working for 20
                                  days.
                                </p>
                              </div>

                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="0.6s"
                              >
                                <h6 className="h6-xl">
                                  Will overtime be included in the amount I can
                                  withdraw?
                                </h6>

                                <p className="p-md grey-color">
                                  This is dependent on the extent of the
                                  information we have access to through your
                                  employer. Some attendance systems may not
                                  capture overtime easily and so may not be
                                  included in DUIT2GO.
                                </p>
                              </div>
                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="1s"
                              >
                                <h6 className="h6-xl">
                                  I forgot my username/password?
                                </h6>

                                <p className="p-md grey-color">
                                  Please contact us and we will reset your login
                                  details for you.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="questions-holder pc-25">
                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="0.8s"
                              >
                                <h6 className="h6-xl">
                                  How many times can I access money within a pay
                                  period?
                                </h6>

                                <p className="p-md grey-color ">
                                  You can access your earned wages as many times
                                  as you want during the month before the 25th
                                  of the month (or cutoff date set by your
                                  employer). However, we strongly advise you to
                                  budget appropriately and limit the number of
                                  transactions throughout the month to ensure
                                  that you are developing good financial
                                  principles.
                                </p>
                              </div>

                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="1.2s"
                              >
                                <h6 className="h6-xl">
                                  How do I pay back my withdrawals?
                                </h6>

                                <p className="p-md grey-color">
                                  Most often the employer will be able to
                                  process the repayment as a deduction on your
                                  payslip.
                                </p>
                              </div>

                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="1.4s"
                              >
                                <h6 className="h6-xl">
                                  How long will it take for an advance request
                                  to be approved?
                                </h6>
                                <p className="p-md grey-color">
                                  We often process transactions within 1
                                  business day. However, unexpected delays may
                                  occur, do contact us if you face any issues.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="faqs-1-questions">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="questions-holder pc-25">
                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="0.4s"
                              >
                                <h6 className="h6-xl">
                                  How much information do we share from our
                                  attendance/payroll systems?
                                </h6>

                                <p className="p-md grey-color">
                                  We will not need full access to any of your
                                  systems. Attendance system: We will, to our
                                  best ability, integrate with your systems.
                                  Otherwise, simply sharing employee attendance
                                  information on a regular basis (e.g. weekly)
                                  is sufficient. Payroll system: We will require
                                  the basic salaries of employees participating
                                  in the programme and their salary bank account
                                  details. This is simply for us to safely
                                  transfer their withdrawals to them.
                                </p>
                              </div>

                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="0.6s"
                              >
                                <h6 className="h6-xl">
                                  How secure is the data shared with DUIT2GO?
                                </h6>

                                <p className="p-md grey-color">
                                  DUIT2GO stores all the information within
                                  Amazon Web Services and users can be
                                  guaranteed that their data is kept secure
                                </p>
                              </div>
                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="1s"
                              >
                                <h6 className="h6-xl">Can we trust DUIT2GO?</h6>

                                <p className="p-md grey-color">
                                  DUIT2GO is a registered company. We are
                                  registered with Suruhanjaya Syarikat Malaysia
                                  (SSM) and the provision of our services have
                                  been discussed with and validated by the
                                  Malaysian government.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="questions-holder pc-25">
                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="0.8s"
                              >
                                <h6 className="h6-xl">
                                  When do we return the sum of money borrowed by
                                  the employees to DUIT2GO?
                                </h6>

                                <p className="p-md grey-color ">
                                  This is dependent on the contract we agree
                                  with you on but we expect this sum to be
                                  deposited to us by the 7th of the month.
                                </p>
                              </div>

                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="1.2s"
                              >
                                <h6 className="h6-xl">
                                  What happens when the employee leaves the job
                                  after making a withdrawal but before salary
                                  payment?
                                </h6>

                                <p className="p-md grey-color">
                                  At the end of the month you should still make
                                  respective deductions to the salary that are
                                  entitled to HariGaji and send us the full
                                  amount due to us.
                                </p>
                              </div>

                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="1.4s"
                              >
                                <h6 className="h6-xl">
                                  What if my employees say they did not receive
                                  their full salary when using the earned wage
                                  access (EWA)?
                                </h6>
                                <p className="p-md grey-color">
                                  Employees will be made aware at the beginning
                                  that this is a service providing advance that
                                  will be deducted from their final salary
                                  amount and would have agreed to such a
                                  condition in the Terms of Use when they login.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="faqs-1-questions">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="questions-holder pc-25">
                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="0.4s"
                              >
                                <h6 className="h6-xl">What is DUIT2GO?</h6>

                                <p className="p-md grey-color">
                                  We are a financial wellness platform that
                                  provides salary tracking, earned wage access
                                  and additional services. We aim to increase
                                  the financial literacy of our customers by
                                  introducing an app that allows them to better
                                  understand their wages and have a sense of
                                  financial security.
                                </p>
                              </div>

                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="0.6s"
                              >
                                <h6 className="h6-xl">
                                  What does earned wage access mean?
                                </h6>

                                <p className="p-md grey-color">
                                  Earned wage access is a fintech service that
                                  allows employees to receive a portion of their
                                  salaries before their paydays according to the
                                  days they have already worked, thus accessing
                                  a portion of their earned wage. All these
                                  details are based on information we can access
                                  from your employer.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="questions-holder pc-25">
                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="1s"
                              >
                                <h6 className="h6-xl">
                                  How to access DUIT2GO services?
                                </h6>

                                <p className="p-md grey-color">
                                  ​​​​​​You can download our app in the Google
                                  Play Store but will not be able to login
                                  unless you are registered with us through an
                                  employer. Contact us and we will get back to
                                  you with the information you need to get
                                  on-board.
                                </p>
                              </div>

                              <div
                                className="question wow fadeInUp"
                                data-wow-delay="1.2s"
                              >
                                <h6 className="h6-xl">
                                  Are there any fees, taxes, or interest?
                                </h6>

                                <p className="p-md grey-color">
                                  DUIT2GO simply allows you to withdraw a
                                  portion of your earned wages early and,
                                  therefore, you are not borrowing. So there are
                                  no taxes or interest involved. The only cost
                                  will the be monthly subscription that allows
                                  you to use our app and service. Contact us to
                                  find out more about the price.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </p>
              </div>
            </div>
          </div>

          <div className="more-questions bg-lightgrey">
            <div className="row d-flex align-items-center">
              <div className="col-lg-9">
                <div className="more-questions-txt">
                  <p className="p-xl">
                    Still have a question? Don't worry, our customer care team
                    is ready to help you with any questions or problems
                  </p>
                </div>
              </div>

              <div className="col-lg-3 text-right">
                <div className="more-questions-btn">
                  <a
                    href="contacts.html"
                    className="btn btn-md  tra-black-hover Download "
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="download-1"
        className="wide-100 bg-fixed download-section division"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-6 offset-md-5 offset-lg-6">
              <div className="download-1-txt">
                <div className="download-logo">
                  <img src="./assets/images/app-logo.png" alt="hero-app-logo" />
                </div>

                <h2 className="h2-md">Stay Connected With Your Friends</h2>

                <p className="p-lg">
                  Feugiat eros, ac tincidunt ligula massa in faucibus orci
                  luctus et ultrices posuere cubilia curae integer congue leo
                  metus, eu mollis lorem primis in orci integer metus
                </p>

                <div className="stores-badge">
                  <a href="#" className="store">
                    <img
                      className="appstore-original"
                      src="./assets/images/appstore.png"
                      alt="appstore-badge"
                    />
                  </a>

                  <a href="#" className="store">
                    <img
                      className="googleplay-original"
                      src="./assets/images/googleplay.png"
                      alt="googleplay-badge"
                    />
                  </a>

                  <a href="#" className="store">
                    <img
                      className="amazon-original"
                      src="./assets/images/amazon.png"
                      alt="amazon-badge"
                    />
                  </a>

                  <a href="#" className="store">
                    <img
                      className="mac-appstore"
                      src="./assets/images/macstore.png"
                      alt="macstore-badge"
                    />
                  </a>

                  <a href="#" className="store">
                    <img
                      className="microsoft-original"
                      src="./assets/images/microsoft.png"
                      alt="microsoft-badge"
                    />
                  </a>
                </div>

                <div className="txt-block-rating">
                  <div className="stars-rating">
                    All Versions Rating
                    <span className="flaticon-star ml-5"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star"></span>
                    <span className="flaticon-star-half-empty"></span>
                    <p className="txt-rating">
                      Based on 7.296 user reviews (App Store & Google Play)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
