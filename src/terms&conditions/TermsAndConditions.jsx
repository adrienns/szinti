import React, { useState } from "react";

import "./TermsAndConditions.css";

const TermsandConditions = () => {
  return (
    <div className="terms-and-conditions">
      <h2 className="terms-and-conditions-header">Terms and Conditions </h2>
      <p>
        Please read these Terms and Conditions carefully every time before using
        the http://www.vewe.com website operated by Vewe Jewelery Ltd. These
        terms of use are subject to modifications, so we advise you to check
        back regularly.
      </p>

      <p>
        By using the website you are agreeing to be bound by the then current
        version of these terms and conditions including the terms of our Privacy
        Policy & Cookie Policy www.vewe cookie policy If you disagree with any
        part of the terms then you may not access the website.
      </p>

      <p>
        The materials appearing on Vewe Jewelry’s website could include
        technical, typographical, or photographic errors. Vewe Jewelry does not
        warrant that any of the materials on its web site are accurate,
        complete, or current.
      </p>
      <p>
        The Site may provide you with comprehensive information and news
        regarding Vewe, company overview, news regarding the company including
        any other content related thereto such as contact information, videos,
        text, files, logos, button icons, images, data compilations, links,
        other specialized content, documentation, know-how, specifications
        materials, designs, data, source and object code, interface, and other
        features obtained from or through the Site.
      </p>
      <p>
        All text and images are copyright of Vewe Jewellery and should not be
        used without prior consent. Should you wish to use images from this site
        please contact us.{" "}
      </p>

      <p>
        <span className="terms-conditions-bold-text">
          ACCEPTANCE OF YOUR ORDER{" "}
        </span>{" "}
        <br></br>When you submit an order sucessfully to me on the website you
        will receive an Order Number acknowledging your details. This is an
        acknowledgement of your details and is not a confirmation of your order.
        Then I will process your order and will send you a confirmation email,
        giving you estimated timescales for delivery. All orders placed through
        this website will be subject to my acceptance of the order. The credit
        card is charged at the moment of submitting the order. A contract
        between you and Vewe Jewelery is confirmed once you receive an email
        with your delivery information. You should check the email for accuracy
        and let me know immediately if there are any errors. I reserve the right
        not to accept your order if the item is out of stock or if I am unable
        to obtain authorization for payment. All orders are subject to
        availability and confirmation of the order price.
      </p>

      <p>
        <span className="terms-conditions-bold-text">SHIPPING </span>
        <br></br> The ordered package contains: white gift box, the ordered
        jewelery and packing that maintain the integrity of the product. The
        shipping in Hungary costs 1500Ft. In the European Union it the shipping
        costs 2500 Ft. The package will arrive to the customer approximately
        within 4-8 working days in Hungary. If you order over 19.000 Ft the
        shipping is free. After placing the order if the ordered jewelry is in
        the stock, the package will be sent on the day of the purchase,
        therefore the delivery time will be approximately within 4 days in
        Hungary.If the jewelery is not in stock it will take approximately 2
        week for the jewelery to arrive to the customer. In the European Union
        the shipping costs 2500Ft. The package will arrive within 4-14 working
        days. If you order over 19.000 Ft the shipping is free. Pick up: You can
        pick up your jewelery at my workshop near Corvin Pláza melletti on
        weekday. Address: 1082 Budapest, Kisfaludy utca 28a. If you choose to
        pick up your jewelery please send me an email in advance.
      </p>
      <p>
        <span className="terms-conditions-bold-text">
          {" "}
          LINKS TO OTHER SITES
        </span>{" "}
        <br></br> Our Service may contain links to third-party web sites or
        services that are not owned or controlled by My Company (change this).
        Vewe Jewelery has no control over, and assumes no responsibility for,
        the content, privacy policies, or practices of any third party web sites
        or services. You further acknowledge and agree that My Company (change
        this) shall not be responsible or liable, directly or indirectly, for
        any damage or loss caused or alleged to be caused by or in connection
        with use of or reliance on any such content, goods or services available
        on or through any such web sites or services.
      </p>
      <p>
        <span className="terms-conditions-bold-text">CHANGES</span> <br></br> I
        reserve the right to modify or replace these Terms at any time.
      </p>
      <p>
        <span className="terms-conditions-bold-text">CONTACT ME </span>{" "}
        <br></br>If you have any questions (or comments) about these Terms,
        please feel free to contact me.
      </p>
    </div>
  );
};

export default TermsandConditions;
