/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const HeroSection = () => {
  return (
    <section id='hero-3' className='bg-fixed hero-section division'>
      <div className='container'>
        <div className='row d-flex align-items-center m-row'>
          <div className='col-md-7 col-lg-6 m-top'>
            <div
              className='hero-3-txt pc-10 mb-40 wow fadeInRight'
              data-wow-delay='0.4s'
            >
              <div className='hero-logo'>
                <div className='d-flex align-items-center'>
                  <img src='./assets/images/app-logo.png' alt='hero-app-logo' />
                  <div className='hero-logo-txt'>
                    <h4 className='h4-sm'>PowerNode</h4>
                    <span className='bg-rose white-color'>v2.13</span>
                  </div>
                </div>
              </div>

              <h2 className='h2-xl'>Chat with your friends anywhere</h2>

              <p className='p-md'>
                An enim nullam tempor sapien at gravida donec and ipsum undo
                pretium porta justo integer a velna integer vitae auctor congue
                and purus pretium ligula a sapien egestas
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
            </div>
          </div>

          <div className='col-md-5 col-lg-6 m-bottom'>
            <div
              className='hero-3-img text-center mb-40 wow fadeInLeft'
              data-wow-delay='0.6s'
            >
              <img
                className='img-fluid'
                src='./assets/images/hero-3-img.png'
                alt='hero-image'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
