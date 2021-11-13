import React from "react";

const ContactUS = () => {
  return (
    <div class="row">
      {/* <!-- CONTENT FOR THE MOBILE NUMBER  --> */}
      <div class="col-6 pt-1 d-block">
        <div class="contact-box__info">
          <a href="#" class="contact-box__info--title">
            01009158274
          </a>
          <p>تم برمجته بواسطة مصطفى قدري</p>
        </div>
      </div>
      {/* <!-- CONTENT FOR EMAIL  --> */}
      <div class="col-6 pt-1 d-block">
        <div class="contact-box__info">
          <a href="#" class="contact-box__info--title">
            mostafakadry806@gmail.com
          </a>
          <p class="contact-box__info--subtitle">للدعم الفني</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
