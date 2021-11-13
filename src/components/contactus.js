import React from "react";

const ContactUS = () => {
  return (
    <div className="row">
      {/* <!-- CONTENT FOR THE MOBILE NUMBER  --> */}
      <div className="col-6 pt-1 d-block">
        <div className="contact-box__info">
          <a href="#" className="contact-box__info--title">
            01009158274
          </a>
          <p>تم برمجته بواسطة مصطفى قدري</p>
        </div>
      </div>
      {/* <!-- CONTENT FOR EMAIL  --> */}
      <div className="col-6 pt-1 d-block">
        <div className="contact-box__info">
          <a href="#" className="contact-box__info--title">
            mostafakadry806@gmail.com
          </a>
          <p className="contact-box__info--subtitle">للدعم الفني</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
