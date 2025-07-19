function footer() {
  return `
   <link rel="stylesheet" href="../css/header-and-footer/footer.css" />
     <div class="footer-section">
      <div class="footer-container">
        <div class="desc-box">
          <div class="img-container">
            <i><img src="/images/elvira_logo.png.webp" alt="elvira_logo" /></i>
            <i
              ><img
                id="qr"
                src="/images/image-2023-10-12T162220.600.png.webp"
                alt=""
            /></i>
          </div>
          <p class="para">
            “We are proud to announce that we are now an ISO 9001 certified
            company. This certification reflects our commitment to quality and
            customer satisfaction. It is a testament to our dedication to
            providing top-notch services and ensuring that your experience with
            us is of the highest standard.”
          </p>
          <div class="social-links">
            <i><img src="/icons/facebook-02-stroke-rounded.svg" alt="" /></i>
            <i><img src="/icons/twitter-stroke-rounded.svg" alt="" /></i>
            <i><img src="/icons/instagram-stroke-rounded.svg" alt="" /></i>
            <i><img src="/icons/linkedin-02-stroke-rounded.svg" alt="" /></i>
          </div>
        </div>
        <!--  -->
        <div class="contact-us-container">
          <div class="contact-us-box">
            <h3>contact us</h3>
            <div class="address-div">
              <i
                ><img
                  src="/icons/location-06-stroke-rounded.svg"
                  alt="location-icon"
              /></i>
              <p>
                Elvira Infotech Private Limited, Unit 1908, Imagine Tech park,
                DP Block, Sector V, Kolkata-700091, West Bengal, India
              </p>
            </div>
            <div class="contact-numb-div">
              <i
                ><img src="/icons/call-02-stroke-rounded.svg" alt="call-icon"
              /></i>
              <p>+91 7044535163</p>
            </div>
            <div class="contact-mail-div">
              <i
                ><img src="/icons/mail-01-stroke-rounded.svg" alt="mail-icon"
              /></i>
              <p>info@elvirainfotech.com</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="newsletter-container">
          <div class="newsletter-box">
            <h3>newsletter</h3>
            <p>Join our mailing list to receive news and announcements</p>
            <div class="button-div">
              <input type="email" placeholder="Your e-mail" />
              <button>Get A Subcribe</button>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
    <!--  -->
    <div class="copyright-section">
      <p>Copyright Elvira Infotech 2025</p>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer-placeholder");
  if (footerContainer) {
    footerContainer.innerHTML = footer();
  }
});
