import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="container-fluid el-newsletter">
        <div className="row">
          <div className="col-md-12">
            <div className="newsletter-col">
              <h1 className="text-center">Subscribe To Our Newsletter</h1>
                    <p className="text-center">
                        Lorem og elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim.
                    </p>
              <div className="newsletterContainer">
                <input
                  type="email"
                  name="newsletter"
                  className="newsletter-form__input"
                  placeholder="e-mail"
                />
                <div className="btn-action">Subscribe Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
