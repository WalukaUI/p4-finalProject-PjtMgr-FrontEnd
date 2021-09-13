import React from "react"
import "./Footer.css"

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-black text-muted" style={{fontSize: "1.3rem"}}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://www.facebook.com/slamidwestusa/" target="_blank" className="me-4 text-reset" rel="noreferrer" >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" className="me-4 text-reset" target="_blank"  rel="noreferrer" >
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://mail.google.com/" className="me-4 text-reset" target="_blank"  rel="noreferrer" >
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com/" className="me-4 text-reset" target="_blank"  rel="noreferrer" >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footerTopics">
                  <i className="fas fa-gem me-3 "></i>SRI LANKA ASSOCIATION
                </h6>
                <p>
                   The Second Oldest Sri Lankan Association in the United States.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footerTopics">USEFUL LINKS</h6>
                <p>
                  <a href="https://www.facebook.com/slamidwestusa/" className="text-reset">
                    Social Media
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footerTopics">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> SLA Association St Louies, MO, USA.
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  midwestlsa@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 636 328 9352
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
        >
          © 2021 Copyright :
          <a className="text-reset fw-bold" href="!#">
            SLA
          </a>
        </div>
      </footer>
    </>
  );
}


export default Footer