import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start bg-black text-muted"
        style={{ fontSize: "1.3rem" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
                <h6 className="text-uppercase fw-bold mb-4 footerTopics">
                  <i className="fas fa-gem me-3 "></i>T&T.Inc
                </h6>
                <p>Project Management System</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center" >
                <h6 className="text-uppercase fw-bold mb-4 footerTopics">
                  USEFUL LINKS
                </h6>
                <p>
                  <p className="text-reset">Branches Contact details</p>
                
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
                <h6 className="text-uppercase fw-bold mb-4 footerTopics">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home me-3"></i> T&T.Inc St Louies, MO,
                  USA.
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@ttInc.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 353 111 222
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright :
          <a className="text-reset fw-bold" href="!#">
            T&T
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
