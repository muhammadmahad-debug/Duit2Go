/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const WhySection = () => {
  return (
    <section id='content-2' className='wide-60 content-section division'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          <div className='col-md-5 col-lg-6'>
            <div
              className='img-block left-column mb-40 wow fadeInRight'
              data-wow-delay='0.6s'
            >
              <img
                className='img-fluid'
                src='./assets/images/img-06.png'
                alt='content-image'
              />
            </div>
          </div>

          <div className='col-md-7 col-lg-6'>
            <div
              className='txt-block right-column pc-30 mb-40 wow fadeInLeft'
              data-wow-delay='0.4s'
            >
              <h3 className='h3-sm'>Stay connected with your friends easily</h3>

              <ul className='simple-list grey-color'>
                <li className='list-item'>
                  <p className='p-md'>
                    Fringilla risus, luctus mauris orci auctor purus euismod
                    pretium purus pretium ligula rutrum tempor sapien
                  </p>
                </li>

                <li className='list-item'>
                  <p className='p-md'>
                    Quaerat sodales sapien euismod purus blandit purus ipsum
                    primis in cubilia laoreet augue luctus magna dolor luctus
                    undo an egestas sapien vitae
                  </p>
                </li>

                <li className='list-item'>
                  <p className='p-md'>
                    Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                    sodales sapien undo pretium a purus mauris
                  </p>
                </li>
              </ul>

              <a
                href='#content-4'
                className='btn btn-md btn-tra-grey theme-hover'
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
