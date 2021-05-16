import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import WhySection from "./components/WhySection/WhySection";

function App() {
  return (
    <div id='page' className='page'>
      <Navbar />
      <HeroSection />
      <WhySection />

      <section
        id='features-3'
        className='bg-lightgrey wide-60 features-section division'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='section-title text-center mb-60'>
                <h2 className='h2-xs'>Features That Matters</h2>

                <p className='p-xl'>
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius magna
                  tempus a dolor
                </p>
              </div>
            </div>
          </div>

          <div className='fbox-3-wrapper pc-30'>
            <div className='row'>
              <div className='col-md-6'>
                <div
                  className='fbox-3 pc-25 mb-40 wow fadeInUp'
                  data-wow-delay='0.4s'
                >
                  <div className='fbox-ico grey-color ico-65'>
                    <span className='flaticon-message'></span>
                  </div>

                  <div className='fbox-txt'>
                    <h5 className='h5-xs'>Text Messages</h5>

                    <p className='p-md grey-color'>
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div
                  className='fbox-3 pc-25 mb-40 wow fadeInUp'
                  data-wow-delay='0.6s'
                >
                  <div className='fbox-ico grey-color ico-65'>
                    <span className='flaticon-voice-message'></span>
                  </div>

                  <div className='fbox-txt'>
                    <h5 className='h5-xs'>Voice Messages</h5>

                    <p className='p-md grey-color'>
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div
                  className='fbox-3 pc-25 mb-40 wow fadeInUp'
                  data-wow-delay='0.8s'
                >
                  <div className='fbox-ico grey-color ico-65'>
                    <span className='flaticon-users'></span>
                  </div>

                  <div className='fbox-txt'>
                    <h5 className='h5-xs'>Shared Lists</h5>

                    <p className='p-md grey-color'>
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div
                  className='fbox-3 pc-25 mb-40 wow fadeInUp'
                  data-wow-delay='1s'
                >
                  <div className='fbox-ico grey-color ico-65'>
                    <span className='flaticon-image'></span>
                  </div>

                  <div className='fbox-txt'>
                    <h5 className='h5-xs'>File Attachments</h5>

                    <p className='p-md grey-color'>
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div
                  className='fbox-3 pc-25 mb-40 wow fadeInUp'
                  data-wow-delay='1.2s'
                >
                  <div className='fbox-ico grey-color ico-65'>
                    <span className='flaticon-alarm'></span>
                  </div>

                  <div className='fbox-txt'>
                    <h5 className='h5-xs'>Push Notifications</h5>

                    <p className='p-md grey-color'>
                      Porta semper lacus and cursus feugiat primis ultrice and
                      ligula risus auctor tempus feugiat at impedit felis undo
                      auctor augue egestas
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div
                  className='fbox-3 pc-25 mb-40 wow fadeInUp'
                  data-wow-delay='1.4s'
                >
                  <div className='fbox-ico grey-color ico-65'>
                    <span className='flaticon-keyhole'></span>
                  </div>

                  <div className='fbox-txt'>
                    <h5 className='h5-xs'>Concrete Security</h5>

                    <p className='p-md grey-color'>
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

      <section id='content-4' className='wide-60 content-section division'>
        <div className='container'>
          <div id='cb-1-1' className='cbox-1 pb-50'>
            <div className='row d-flex align-items-center m-row'>
              <div className='col-md-7 col-lg-6 m-bottom'>
                <div
                  className='txt-block left-column pc-30 mb-40 wow fadeInRight'
                  data-wow-delay='0.6s'
                >
                  <h3 className='h3-sm'>
                    Sync your contacts with social profiles
                  </h3>

                  <p className='p-md grey-color'>
                    Gravida porta velna vitae auctor congue a magna impedit
                    nihil ligula risus. Mauris donec ligula and magnis
                  </p>

                  <p className='p-md grey-color'>
                    Aliqum mullam blandit and tempor sapien at donec ipsum
                    gravida porta. Velna vitae auctor congue a magna impedit
                    nihil ligula risus. Mauris donec ligula and magnis at sapien
                    sagittis sapien pretium enim gravida purus ligula
                  </p>
                </div>
              </div>

              <div className='col-md-5 col-lg-6 m-top'>
                <div
                  className='img-block right-column mb-40 wow fadeInLeft'
                  data-wow-delay='0.4s'
                >
                  <img
                    className='img-fluid'
                    src='./assets/images/img-07.png'
                    alt='content-image'
                  />
                </div>
              </div>
            </div>
          </div>

          <div id='cb-1-2' className='cbox-1'>
            <div className='row d-flex align-items-center'>
              <div className='col-md-5 col-lg-6'>
                <div
                  className='img-block left-column mb-40 wow fadeInRight'
                  data-wow-delay='0.4s'
                >
                  <img
                    className='img-fluid'
                    src='./assets/images/img-08.png'
                    alt='content-image'
                  />
                </div>
              </div>

              <div className='col-md-7 col-lg-6'>
                <div
                  className='txt-block right-column pc-30 mb-40 wow fadeInLeft'
                  data-wow-delay='0.6s'
                >
                  <h3 className='h3-sm'>
                    Keep your favorite people close to you
                  </h3>

                  <ul className='simple-list grey-color'>
                    <li className='list-item'>
                      <p className='p-md'>
                        Fringilla risus, luctus mauris orci auctor purus euismod
                        pretium purus pretium ligula rutrum tempor sapien
                      </p>
                    </li>

                    <li className='list-item'>
                      <p className='p-md'>
                        Quaerat sodales sapien euismod purus blandit
                      </p>
                    </li>

                    <li className='list-item'>
                      <p className='p-md'>
                        Nemo ipsam egestas volute turpis dolores ut aliquam
                        quaerat sodales sapien undo pretium a purus mauris
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id='statistic-2'
        className='bg-09 wide-60 statistic-section division'
      >
        <div className='container white-color'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='section-title text-center mb-60'>
                <h2 className='h2-xs'>What's New in v2.13</h2>

                <p className='p-xl'>
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius magna
                  tempus a dolor
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-10 col-xl-8 offset-lg-1 offset-xl-2'>
              <div className='row text-center'>
                <div className='col-md-4'>
                  <div
                    className='statistic-block mb-40 wow fadeInUp'
                    data-wow-delay='0.4s'
                  >
                    <h2 className='h2-title-xs statistic-number'>
                      <span className='count-element'>24</span>%
                    </h2>
                    <p className='p-md'>
                      Luctus neque purus ipsum neque and dolor primis
                    </p>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div
                    className='statistic-block mb-40 wow fadeInUp'
                    data-wow-delay='0.6s'
                  >
                    <h2 className='h2-title-xs statistic-number'>
                      <span className='count-element'>38</span>%
                    </h2>
                    <p className='p-md'>
                      Luctus neque purus ipsum neque and dolor primis
                    </p>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div
                    className='statistic-block mb-40 wow fadeInUp'
                    data-wow-delay='0.8s'
                  >
                    <h2 className='h2-title-xs statistic-number'>
                      <span className='count-element'>46</span>%
                    </h2>
                    <p className='p-md'>
                      Luctus neque purus ipsum neque and dolor primis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='content-1' className='wide-60 content-section division'>
        <div className='container'>
          <div className='row d-flex align-items-center m-row'>
            <div className='col-md-7 col-lg-6 m-bottom'>
              <div
                className='txt-block left-column pc-30 mb-40 wow fadeInRight'
                data-wow-delay='0.4s'
              >
                <h5 className='h5-xs sm-title'>1. User Data Protection</h5>

                <p className='p-md grey-color'>
                  An enim nullam tempor ac tincidunt ligula massa gravida and
                  orci luctus et ultrices sapien gravida donec pretium an ipsum
                  porta justo integer at odio velna vitae auctor integer
                </p>

                <h5 className='h5-xs sm-title mt-30'>2. DataBase Backup</h5>

                <p className='p-md grey-color'>
                  An luctus et ultrices sapien gravida donec pretium ipsum and
                  pretium ipsum porta justo integer at odio velna vitae
                </p>

                <h5 className='h5-xs sm-title mt-30'>
                  3. Contextual Advertising
                </h5>

                <p className='p-md grey-color'>
                  An enim nullam tempor ac tincidunt ligula massa gravida and
                  orci luctus et ultrices sapien gravida donec pretium an ipsum
                  porta justo integer at odio velna vitae auctor integer
                </p>
              </div>
            </div>

            <div className='col-md-5 col-lg-6 m-top'>
              <div
                className='img-block right-column mb-40 wow fadeInLeft'
                data-wow-delay='0.6s'
              >
                <img
                  className='img-fluid'
                  src='./assets/images/img-11.png'
                  alt='content-image'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='features-9' className='pb-60 features-section division'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='section-title text-center mb-60'>
                <h2 className='h2-xs'>Security, Simplicity, Easiness</h2>

                <p className='p-xl'>
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius magna
                  tempus a dolor
                </p>
              </div>
            </div>
          </div>

          <div className='fbox-9-img'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='video-preview'>
                  <a
                    className='video-popup1'
                    href='https://www.youtube.com/embed/SZEflIVnhH8'
                  >
                    <div className='video-btn video-btn-lg bg-theme ico-75'>
                      <div className='video-block-wrapper'>
                        <span className='flaticon-play-button'></span>
                      </div>
                    </div>
                  </a>

                  <img
                    className='img-fluid radius-06'
                    src='./assets/images/features-9-img.jpg'
                    alt='features-image'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='fbox-9-wrapper'>
            <div className='row'>
              <div className='col-lg-4'>
                <div
                  className='fbox-9 pc-10 mb-40 wow fadeInUp'
                  data-wow-delay='0.4s'
                >
                  <h5 className='h5-sm'>Group Messaging</h5>
                  <p className='p-md grey-color'>
                    Ligula risus auctor tempus and dolor feugiat lacinia at
                    purus ipsum primis suscipit and aliquet porta rutrum
                  </p>
                </div>
              </div>

              <div className='col-lg-4'>
                <div
                  className='fbox-9 pc-10 mb-40 wow fadeInUp'
                  data-wow-delay='0.6s'
                >
                  <h5 className='h5-sm'>Strong Encryption</h5>
                  <p className='p-md grey-color'>
                    Ligula risus auctor tempus and dolor feugiat lacinia at
                    purus ipsum primis suscipit and aliquet porta rutrum
                  </p>
                </div>
              </div>

              <div className='col-lg-4'>
                <div
                  className='fbox-9 pc-10 mb-40 wow fadeInUp'
                  data-wow-delay='0.8s'
                >
                  <h5 className='h5-sm'>Multiple Widgets</h5>
                  <p className='p-md grey-color'>
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
        id='reviews-2'
        className='bg-lightgrey wide-100 reviews-section division'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='section-title text-center mb-60'>
                <h2 className='h2-xs'>Customers Feedback</h2>

                <p className='p-xl'>
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius magna
                  tempus a dolor
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <div className='owl-carousel owl-theme reviews-wrapper'>
                <div className='review-2 radius-08'>
                  <div className='app-rating ico-20 yellow-color'>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                  </div>

                  <h5 className='h5-xs'>Great Flexibility!</h5>

                  <div className='review-2-txt'>
                    <p className='p-md grey-color'>
                      Etiam sapien sem at sagittis congue an augue massa varius
                      egestas undo suscipit magna tempus undo aliquet
                    </p>

                    <h6 className='h6-sm'>- Scott Boxer</h6>
                  </div>
                </div>

                <div className='review-2 radius-08'>
                  <div className='app-rating ico-20 yellow-color'>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star-half-empty'></span>
                  </div>

                  <h5 className='h5-xs'>Simple and Useful!</h5>

                  <div className='review-2-txt'>
                    <p className='p-md grey-color'>
                      At sagittis congue augue undo egestas magna ipsum vitae
                      purus and ipsum primis suscipit
                    </p>

                    <h6 className='h6-sm'>- Wendy T.</h6>
                  </div>
                </div>

                <div className='review-2 radius-08'>
                  <div className='app-rating ico-20 yellow-color'>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                  </div>

                  <h5 className='h5-xs'>I love this App!</h5>

                  <div className='review-2-txt'>
                    <p className='p-md grey-color'>
                      Mauris donec ociis magnis and sapien etiam sapien congue
                      undo augue pretium and ligula augue a lectus aenean magna
                    </p>

                    <h6 className='h6-sm'>- pebz13</h6>
                  </div>
                </div>

                <div className='review-2 radius-08'>
                  <div className='app-rating ico-20 yellow-color'>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star-1'></span>
                  </div>

                  <h5 className='h5-xs'>Best App for iOS!</h5>

                  <div className='review-2-txt'>
                    <p className='p-md grey-color'>
                      An augue in cubilia laoreet magna and suscipit egestas
                      magna ipsum purus ipsum and suscipit
                    </p>

                    <h6 className='h6-sm'>- Scott Boxer</h6>
                  </div>
                </div>

                <div className='review-2 radius-08'>
                  <div className='app-rating ico-20 yellow-color'>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star-half-empty'></span>
                  </div>

                  <h5 className='h5-xs'>Awesome Design!</h5>

                  <div className='review-2-txt'>
                    <p className='p-md grey-color'>
                      Mauris donec magnis sapien undo etiam sapien and congue
                      augue egestas ultrice a vitae purus velna integer tempor
                      congue
                    </p>

                    <h6 className='h6-sm'>- John Sweet</h6>
                  </div>
                </div>

                <div className='review-2 radius-08'>
                  <div className='app-rating ico-20 yellow-color'>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                  </div>

                  <h5 className='h5-xs'>Simply Amazing App!</h5>

                  <div className='review-2-txt'>
                    <p className='p-md grey-color'>
                      An augue cubilia laoreet undo magna a suscipit undo
                      egestas magna ipsum ligula vitae purus ipsum primis
                      cubilia blandit
                    </p>

                    <h6 className='h6-sm'>- Leslie D.</h6>
                  </div>
                </div>

                <div className='review-2 radius-08'>
                  <div className='app-rating ico-20 yellow-color'>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star-half-empty'></span>
                  </div>

                  <h5 className='h5-xs'>Powerful Features!</h5>

                  <div className='review-2-txt'>
                    <p className='p-md grey-color'>
                      Augue egestas volutpat and egestas augue in cubilia
                      laoreet magna undo suscipit luctus
                    </p>

                    <h6 className='h6-sm'>- Marisol19</h6>
                  </div>
                </div>

                <div className='review-2 radius-08'>
                  <div className='app-rating ico-20 yellow-color'>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star-half-empty'></span>
                  </div>

                  <h5 className='h5-xs'>Super Support!</h5>

                  <div className='review-2-txt'>
                    <p className='p-md grey-color'>
                      Aliquam augue suscipit luctus neque purus ipsum neque
                      dolor primis libero tempus at blandit posuere varius magna
                    </p>

                    <h6 className='h6-sm'>- AJ</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='faqs-1' className='wide-100 faqs-section division'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='section-title text-center mb-60'>
                <h2 className='h2-xs'>Frequently Asked Questions</h2>

                <p className='p-xl'>
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius magna
                  tempus a dolor
                </p>
              </div>
            </div>
          </div>

          <div className='faqs-1-questions'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='questions-holder pc-25'>
                  <div className='question wow fadeInUp' data-wow-delay='0.4s'>
                    <h6 className='h6-xl'>PowerNode system requirements</h6>

                    <p className='p-md grey-color'>
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                      egestas and magna suscipit lectus magna suscipit luctus
                      blandit vitae
                    </p>
                  </div>

                  <div className='question wow fadeInUp' data-wow-delay='0.6s'>
                    <h6 className='h6-xl'>Do you have a free trial?</h6>

                    <p className='p-md grey-color'>
                      An enim nullam tempor sapien gravida donec ipsum enim an
                      porta justo integer at velna vitae auctor integer congue
                      undo magna at pretium purus pretium ligula
                    </p>
                  </div>

                  <div className='question wow fadeInUp' data-wow-delay='0.8s'>
                    <h6 className='h6-xl'>
                      Can I use PowerNode on different devices?
                    </h6>

                    <ul className='simple-list grey-color'>
                      <li className='list-item'>
                        <p className='p-md'>
                          Fringilla risus, luctus mauris orci auctor purus
                          ligula euismod pretium purus pretium rutrum tempor
                          sapien
                        </p>
                      </li>

                      <li className='list-item'>
                        <p className='p-md'>
                          Nemo ipsam egestas volute turpis dolores ut aliquam
                          quaerat sodales sapien undo pretium a purus
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='questions-holder pc-25'>
                  <div className='question wow fadeInUp' data-wow-delay='1s'>
                    <h6 className='h6-xl'>
                      Can I use PowerNode in my language?
                    </h6>

                    <p className='p-md grey-color'>
                      Cubilia laoreet augue egestas and luctus donec curabite
                      diam vitae dapibus libero and quisque gravida donec neque.
                      Blandit justo aliquam molestie nunc sapien justo
                    </p>
                  </div>

                  <div className='question wow fadeInUp' data-wow-delay='1.2s'>
                    <h6 className='h6-xl'>How to manage my account?</h6>

                    <p className='p-md grey-color'>
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                    </p>

                    <p className='p-md grey-color'>
                      An enim nullam tempor sapien gravida donec congue leo
                      metus. Vitae arcu mollis blandit integer at velna
                    </p>
                  </div>

                  <div className='question wow fadeInUp' data-wow-delay='1.4s'>
                    <h6 className='h6-xl'>I have an issue with my account</h6>

                    <ul className='simple-list grey-color'>
                      <li className='list-item'>
                        <p className='p-md'>
                          Fringilla risus, luctus mauris orci auctor purus
                        </p>
                      </li>

                      <li className='list-item'>
                        <p className='p-md'>
                          Quaerat sodales sapien euismod blandit purus and ipsum
                          primis in cubilia laoreet augue luctus
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='more-questions bg-lightgrey'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-9'>
                <div className='more-questions-txt'>
                  <p className='p-xl'>
                    Still have a question? Don't worry, our customer care team
                    is ready to help you with any questions or problems
                  </p>
                </div>
              </div>

              <div className='col-lg-3 text-right'>
                <div className='more-questions-btn'>
                  <a
                    href='contacts.html'
                    className='btn btn-md btn-theme tra-black-hover'
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
        id='download-1'
        className='wide-100 bg-fixed download-section division'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 col-lg-6 offset-md-5 offset-lg-6'>
              <div className='download-1-txt'>
                <div className='download-logo'>
                  <img src='./assets/images/app-logo.png' alt='hero-app-logo' />
                </div>

                <h2 className='h2-md'>Stay Connected With Your Friends</h2>

                <p className='p-lg'>
                  Feugiat eros, ac tincidunt ligula massa in faucibus orci
                  luctus et ultrices posuere cubilia curae integer congue leo
                  metus, eu mollis lorem primis in orci integer metus
                </p>

                <div className='stores-badge'>
                  <a href='#' className='store'>
                    <img
                      className='appstore-original'
                      src='./assets/images/appstore.png'
                      alt='appstore-badge'
                    />
                  </a>

                  <a href='#' className='store'>
                    <img
                      className='googleplay-original'
                      src='./assets/images/googleplay.png'
                      alt='googleplay-badge'
                    />
                  </a>

                  <a href='#' className='store'>
                    <img
                      className='amazon-original'
                      src='./assets/images/amazon.png'
                      alt='amazon-badge'
                    />
                  </a>

                  <a href='#' className='store'>
                    <img
                      className='mac-appstore'
                      src='./assets/images/macstore.png'
                      alt='macstore-badge'
                    />
                  </a>

                  <a href='#' className='store'>
                    <img
                      className='microsoft-original'
                      src='./assets/images/microsoft.png'
                      alt='microsoft-badge'
                    />
                  </a>
                </div>

                <div className='txt-block-rating'>
                  <div className='stars-rating'>
                    All Versions Rating
                    <span className='flaticon-star ml-5'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star'></span>
                    <span className='flaticon-star-half-empty'></span>
                    <p className='txt-rating'>
                      Based on 7.296 user reviews (App Store & Google Play)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id='footer-2' className='footer division'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 col-lg-5 col-xl-4'>
              <div className='footer-info mb-40'>
                <div className='footer-logo'>
                  <img src='./assets/images/logo-01.png' alt='footer-logo' />
                </div>

                <p>
                  Aliquam nullam tempor sapien and gravida donec congue ipsum
                  porta justo undo velna auctor magna enim laoreet augue porta
                </p>
              </div>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 offset-xl-1'>
              <div className='footer-links mb-40'>
                <h6 className='h6-xl'>Products</h6>

                <ul className='clearfix'>
                  <li>
                    <p>
                      <a href='#'>How It Works?</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='#'>Integrations</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='#'>Product Updates</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='#'>Our Pricing</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='#'>Press</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2'>
              <div className='footer-links mb-40'>
                <h6 className='h6-xl'>Useful Links</h6>

                <ul className='clearfix'>
                  <li>
                    <p>
                      <a href='#'>Privacy Policy</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='#'>Career</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='#'>Advertising</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='#'>Terms</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='#'>Site Map</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-6 col-lg-3 col-xl-3'>
              <div className='footer-form mb-20'>
                <h6 className='h6-xl'>Follow the Best</h6>

                <p className='mb-20'>
                  Stay up to date with our latest news and our new products
                </p>

                <form className='newsletter-form'>
                  <div className='input-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email Address'
                      required
                      id='s-email'
                    />
                    <span className='input-group-btn'>
                      <button type='submit' className='btn ico-25'>
                        <span className='flaticon-arrow-right'></span>
                      </button>
                    </span>
                  </div>

                  <label for='s-email' className='form-notification'></label>
                </form>
              </div>
            </div>
          </div>

          <div className='bottom-footer'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-6'>
                <div className='footer-copyright'>
                  <p>&copy; 2021 PowerNode. All Rights Reserved</p>
                </div>
              </div>

              <div className='col-lg-6'>
                <ul className='bottom-footer-list ico-15 text-right clearfix'>
                  <li>
                    <p className='first-list-link'>
                      <a href='#'>
                        <span className='flaticon-facebook'></span> Facebook
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='#'>
                        <span className='flaticon-twitter'></span> Twitter
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='#'>
                        <span className='flaticon-youtube'></span> YouTube
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className='last-li'>
                      <a href='#'>
                        <span className='flaticon-yelp'></span> Yelp
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
