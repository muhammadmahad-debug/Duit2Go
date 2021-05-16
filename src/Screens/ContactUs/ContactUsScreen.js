import React from "react";

const ContactUsScreen = () => {
  return (
    <div className="mt-3">
      <div>
        <div id="page" className="page">
          <div id="gmap" className="contacts-map division">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838357620288!2d144.95358331497258!3d-37.81725497975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2zMTIxIEtpbmcgU3QsIE1lbGJvdXJuZSBWSUMgMzAwMCwg0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2sua!4v1605805230806!5m2!1sru!2sua"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>

          <section
            id="contacts-3"
            className="bg-lightgrey wide-60 contacts-section division"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="section-title text-center mb-60">
                    <h2 className="h2-xs">Need Help? Say Hello</h2>

                    <p className="p-xl">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit and cursus varius
                      magna tempus a dolor
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-7 col-lg-8">
                  <div className="form-holder pc-30 mb-40">
                    <form name="contactform" className="row contact-form">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control name"
                          placeholder="Your Name*"
                        />
                      </div>

                      <div className="col-lg-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control email"
                          placeholder="Email Address*"
                        />
                      </div>

                      <div className="col-md-12">
                        <input
                          type="text"
                          name="subject"
                          className="form-control subject"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div className="col-md-12">
                        <textarea
                          name="message"
                          className="form-control message"
                          rows="6"
                          placeholder="Your Message ..."
                        ></textarea>
                      </div>

                      <div className="col-md-12 mt-15 text-right">
                        <button
                          type="submit"
                          className="btn btn-md  tra-grey-hover submit Download "
                        >
                          Send Message
                        </button>
                      </div>

                      <div className="col-md-12 contact-form-msg text-center">
                        <div className="sending-msg">
                          <span className="loading"></span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4">
                  <div className="contacts-info pc-30 mb-40">
                    <div className="contact-3-box mb-40 clearfix">
                      <h5 className="h5-xs">Our Location</h5>
                      <p className="grey-color">121 King Street, Melbourne,</p>
                      <p className="grey-color">Victoria 3000 Australia</p>
                    </div>

                    <div className="contact-3-box mb-40 clearfix">
                      <h5 className="h5-xs">Contact Info</h5>
                      <p className="grey-color">
                        <span>Phone :</span> +12 3 3456 7890
                      </p>
                      <p className="grey-color">
                        <span>Email :</span>{" "}
                        <a href="mailto:yourdomain@mail.com">
                          hello@yourdomain.com
                        </a>
                      </p>
                      <p className="grey-color">
                        <span>Skype :</span>{" "}
                        <a href="tel:123456789">support.spamagic</a>
                      </p>
                    </div>

                    <div className="contact-3-box clearfix">
                      <h5 className="h5-xs">Working Hours</h5>
                      <p className="grey-color">
                        <span>Mon – Fri :</span> 9:00 AM - 7:00 PM
                      </p>
                      <p className="grey-color">
                        <span>Saturday :</span> 9:00 AM - 6:00 PM
                      </p>
                      <p className="grey-color">
                        <span>Sunday :</span> Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUsScreen;
