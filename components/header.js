function getHeaderHTML() {
  return `
        <link rel="stylesheet" href="../css/header-and-footer/header.css" />
       <header>
      <div class="top-header">
        <div class="top-header-container">
          <div class="top-header-wrap">
            <div class="contact-info">
              <ul>
                <li>
                  <img src="/icons/mail-01-stroke-rounded.svg" alt="" />
                  <a href="info@elvirainfotech.com">info@elvirainfotech.com</a>
                </li>
                <li>
                  <img src="/icons/call-02-stroke-rounded.svg" alt="" />
                  <a href="+91 7044535163">+91 7044535163</a>
                </li>
              </ul>
            </div>
            <div class="social-links">
              <ul>
                <li id="follow-us-text">Follow Us</li>
                <li>
                  <a href="https://www.facebook.com/">
                    <img src="/icons/facebook-02-stroke-rounded.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a href="https://www.x.com/">
                    <img src="/icons/twitter-stroke-rounded.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <img src="/icons/instagram-stroke-rounded.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <img src="/icons/linkedin-02-stroke-rounded.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- navbar -->
      <nav class="bottom-header">
        <div class="bottom-header-container">
          <div class="logo">
            <i><img src="/images/elvira_logo.png.webp" alt="" /></i>
            <p>ISO 9001 : 2015 CERTIFIED</p>
          </div>
          <div class="sections">
            <ul>
              <li><a href="/index.html">HOME</a></li>
              <li><a href="/about.html">ABOUT</a></li>
              <li><a href="#">SERVICES</a></li>
              <li><a href="#">OUR WORK</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">CAREER</a></li>
              <li><a href="/contact-us.html">CONTACT US</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-placeholder");
  if (headerContainer) {
    headerContainer.innerHTML = getHeaderHTML();
  }
});
