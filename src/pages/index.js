import * as React from "react";
import {useEffect} from "react";
import Seo from "../components/seo/seo";
import Layout from "./../components/layout/Layout";

const IndexPage = () => {

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  // Delete cookie
  function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
  }

  // Read cookie
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // Set cookie consent
  function acceptCookieConsent() {
    deleteCookie("immence_user_cookie_consent");
    setCookie("immence_user_cookie_consent", 1, 30);
    let ele = document.getElementById("cookieNotice")
    if(ele){
      ele.style.display = "none";
    }
  }

  useEffect(() => {
    setTimeout(() => {
      let cookie_consent = getCookie("immence_user_cookie_consent");
      if (cookie_consent != "") {
        let ele = document.getElementById("cookieNotice")
        if(ele){
        ele.style.display = "none";
        }
      } else {
        let ele = document.getElementById("cookieNotice")
        if(ele){
          ele.style.display = "block";
        }
      }
    }, 1000);
  }, [])
  
  

  return (
    <>
      <Seo title={"Test Title"} description={"This is Test Description"} />
        <Layout>
                  <main>
          {/* header section */}
          <header className="main-header" id="header">
            <nav className="navbar navbar-expand-lg navbar-custom">
              <div className="container">
                <a className="navbar-brand" href="/">
                  <img
                    src={require("../img/logo_immence.svg").default}
                    alt="immence logo"
                    className="header-logo"
                  />
                </a>
                <div className="xl-nav mx-auto navbar-section">
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="../service.html">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="../project.html">
                        Case Studies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="../blog.html">
                        Insights
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        aria-current="page"
                        href="../about.html">
                        {" "}
                        About{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="../contact.html">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="../careers.html">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="stat-btn">
                  <a
                    href="../estimate-projects.html"
                    type="button"
                    className="btn btn-outline-primary btn-ouline-sm">
                    Start a project
                    {/* <i class="fi-rr-arrow-right arrow-i"></i> */}
                  </a>
                </div>
                <div className="menu">
                  <div className="menu-bar bar1" />
                  <div className="menu-bar bar2" />
                  <div className="menu-bar bar3" />
                </div>
                <div className="mobile-section-navbar">
                  <a className="mobile-logo" href="/">
                    <img
                      src={require("../img/logo_immence.svg").default}
                      alt="immence logo"
                      className="header-logo"
                    />
                  </a>
                  <ul className="list-unstyled mobile-section-navbar-ul">
                    <li className="has-submenu">
                      <a className href="../service.html">
                        Services
                      </a>
                      {/* <ul class="inactive">
            <li>
              <a href="service.html#webdev" class="drop-menu-list-a dropdown-item"> Web Development </a>
            </li>
            <li>
              <a href="service.html#appdev" class="drop-menu-list-a dropdown-item"> App Development </a>
            </li>
            <li>
              <a href="service.html#graphicdesign" class="drop-menu-list-a dropdown-item"> UI/UX Design </a>
            </li>
            <li>
              <a href="service.html#devops" class="drop-menu-list-a dropdown-item"> Devops </a>
            </li>
            <li>
              <a href="service.html#opensources" class="drop-menu-list-a dropdown-item">
                Open Sources Customization
              </a>
            </li>
          </ul> */}
                    </li>
                    <li>
                      <a href="../project.html">Case Studies</a>
                    </li>
                    {/*  <li class="has-submenu">
            <a class="dropdown-toggle">Products</a>
            <ul class="inactive">
              <li>
                <a href="service.html" class="drop-menu-list-a dropdown-item">
                  <strong>DZY</strong>
                </a>
              </li>
              <li>
                <a href="#" class="drop-menu-list-a dropdown-item">
                  <strong>PARIVAR</strong>
                </a>
              </li>
              <li>
                <a href="#" class="drop-menu-list-a dropdown-item">
                  <strong>JATKOT JOBS</strong>
                </a>
              </li>
              <li>
                <a href="#" class="drop-menu-list-a dropdown-item">
                  <strong>PARIVAR</strong>
                </a>
              </li>
            </ul>
          </li> */}
                    <li>
                      <a href="../blog.html">Insights</a>
                    </li>
                    <li>
                      <a href="../about.html">About</a>
                    </li>
                    <li>
                      <a href="../contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="../careers.html">Careers</a>
                    </li>
                  </ul>
                  <div className="mobile-btn">
                    <a
                      href="../estimate-projects.html"
                      type="button"
                      className="btn btn-outline-primary btn-ouline-sm">
                      Start a project{" "}
                      <i className="fi-rr-arrow-right arrow-i" />
                    </a>
                  </div>
                </div>
                <div className="body-overlay body-overlay-hidden" />
              </div>
            </nav>
          </header>
          {/*end header section */}
          <div className="sectionPadding">
            <div className="blogDetail">
              <div className="container">
                <h1 className="blogmainTitle">
                  Businesses prefer custom software development;
                  <br />7 reasons why?
                </h1>
                <div className="publishedInfo">
                  <p>
                    By{" "}
                    <a href className="bluegray">
                      <strong>Dhrumil Mehta</strong>
                    </a>
                  </p>
                  <p>
                    <span className="bull">•</span> Published in{" "}
                    <a className="bluegray">
                      <strong>Technology</strong>
                    </a>{" "}
                  </p>
                  <p>
                    <span className="bull">•</span>Aug 08, 2022
                  </p>
                  <p className="redText">
                    <span className="bull">•</span>
                    <strong>3 mins read</strong>
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="aboutBlog">
                      <img
                        src={require("../img/blog_banner/businesses-prefer-custom-software-7-reasons-why_1.png").default}
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="contentBox">
                        <p>
                          They typically reach this conclusion after conducting
                          a thorough search: construct. They looked at what was
                          on the market already, decided they didn't like it,
                          and hired us to create something special.
                        </p>
                        <p>
                          Asking them why they want to build what they are
                          building is still part of our organizational culture.
                          We're dedicated to achieving goals in the most
                          intelligent way possible, so it's not unusual for us
                          to suggest changes to teams' original builds.
                        </p>
                        <h3 className="question text-center smallText">
                          THE QUESTIONS WE ASK TO HELP MAKE A BUILD VS BUY
                          DECISION
                        </h3>
                        <p>
                          Want to hear what immence discovery sounds like in
                          advance? These are all the queries we ask ourselves or
                          a client while deciding whether to build or buy. The
                          end goal for both is for everyone to utilize and adore
                          it. Here is how we begin to determine which is the
                          greatest choice.
                        </p>
                        <div className="mrgBox">
                          <p className="reason">Need and result</p>
                          <p>
                            Will a tailored solution provide you a competitive
                            edge?
                          </p>
                          <p>Is deep customization really necessary?</p>
                          <p>
                            Is this addressing a small but urgent set of
                            problems, or is there a plan for it to grow to cover
                            a bigger and larger range of company needs? (For
                            instance, will this initially only be a
                            manufacturing calendar or will it eventually be a
                            complete ERP?)
                          </p>
                          <p>
                            Is there a demand or market for this tool outside of
                            your company? Would it make sense to license it to
                            others or turn it into a SaaS product if it is
                            successful in your organization?
                          </p>
                        </div>
                        <div className="mrgBox">
                          <p className="reason">Existing Remedies</p>
                          <p>
                            I know this one should be apparent, but does this
                            solution already exist? Have any commercially
                            available solutions been tried out or piloted to
                            meet the business need? If so, what went wrong with
                            those?
                          </p>
                        </div>
                        <div className="mrgBox">
                          <p className="reason">Longevity</p>
                          <p>
                            Is this a long-term problem with a long-term fix for
                            your company?
                          </p>
                          <p>
                            How often do you expect the features and business
                            needs to change?
                          </p>
                        </div>
                        <div className="mrgBox">
                          <p className="reason">Reducing risk</p>
                          <p>
                            Exist any low-tech methods to validate the
                            fundamental presumptions underlying this investment?
                            A digital transformation of an existing analogue or
                            low-tech process is advantageous.
                          </p>
                        </div>
                        <div className="mrgBox">
                          <p className="reason">
                            Internal assets and assistance
                          </p>
                          <p>
                            Are there commercial objectives and distinct success
                            criteria for this investment that will allow you to
                            defend the expense, time, and internal man hours
                            required?
                          </p>
                          <p>
                            {" "}
                            Is there widespread agreement/buy-in inside the
                            organization among leadership/decision-makers and
                            target users that this is a high priority need?
                          </p>
                          <p>
                            Exists a user adoption/change management plan? What
                            hazards can be anticipated?
                          </p>
                          <p>
                            Are there any internal resources that are
                            knowledgeable about software development? Making
                            sound strategic judgments is made much easier with
                            this (which is not always necessary).
                          </p>
                        </div>
                        <div className="mrgBox">
                          <p className="reason">Comparing timelines</p>
                          <p>How urgent is the situation?</p>
                          <p>
                            How long does it take to install the current
                            solution versus creating a V1 from scratch? Off the
                            shelf products might not be ideal, but they might be
                            accessible right now.
                          </p>
                          <p>
                            Although it won't be flawless either, your V1 will
                            be accessible sooner than V2.
                          </p>
                          <p>
                            How do the yearly prices for use and support
                            continue to vary? Consider the ongoing costs of both
                            an off-the-shelf alternative and the hosting and
                            maintenance of a custom designed app.
                          </p>
                        </div>
                        <div className="mrgBox">
                          <p className="reason">Cost evaluation</p>
                          <p>
                            How do the costs of the existing solutions'
                            deployment (implementation/customization) compare to
                            those of the custom-built solutions?
                          </p>
                          <p>
                            From our perspective, we adore both ready-made
                            solutions and the software we build.
                          </p>
                          <p>
                            Build or buy? is a question that has no one correct
                            response. Correctness depends on the circumstances.
                            In our opinion, what counts is that your team uses
                            software that is beneficial to you. You should like
                            using the software since it should be simple to use
                            and practical. It must be well-supported and on
                            budget. We don't give much thought to the how,
                            whether we develop it ourselves or assist you in
                            finding it.
                            <a href="../contact.html">
                              {" "}
                              Connect with leading consultants!
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="tagPadd">
                        <div className="tagSection">
                          <div className="tagBox">
                            <h2>Tags</h2>
                            <ul>
                              <li>
                                <a href>#webdevelopment</a>
                              </li>
                              <li>
                                <a href>#appdevelopment</a>
                              </li>
                              {/* <li><a href="">#customsoftwaredevelopment</a></li> */}
                              {/* <li><a href="">#offshoredevelopment></li> */}
                            </ul>
                          </div>
                          <div className="shareSec">
                            <h2>Share</h2>
                            <ul>
                              <li>
                                <a
                                  href="https://www.facebook.com/goimmence"
                                  target="_blank"
                                  className="facebook">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://twitter.com/goimmence"
                                  target="_blank"
                                  className="twitter">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.linkedin.com/company/goimmence/"
                                  target="_blank"
                                  className="linkedin">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                  </svg>
                                </a>
                              </li>
                              {/* <li>
                <a href="" target="_blank" class="email">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                  </svg>
                </a>
              </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="prevNextsec">
                        <div className="prev">
                          <p>Previous Article</p>
                          <a href="../blog/top-software-development-company-in-education-for-2022.html">
                            Top Software Development Company in Education for
                            2022
                          </a>
                        </div>
                        <div className="prev">
                          <p>Next Article</p>
                          <a href="../blog/why-india-should-be-your-first-choice-to-outsource-mobile-app-development.html">
                            Why India should be your first choice to Outsource
                            Mobile App Development ?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="rightBlogsec">
                      <div className="profileInfo">
                        <div className="imgSec">
                          <img
                            src={require("../img/dhrumil_mehta.png").default}
                            alt="immence"
                            className="img-fluid userImg"
                          />
                        </div>
                        <p className="name">Dhrumil Mehta</p>
                        {/* <p class="designation"></p> */}
                        <ul className="socialMediasec">
                          <li>
                            <a
                              href="https://www.instagram.com/goimmence/"
                              className="instagram"
                              target="_blank">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/goimmence"
                              target="_blank"
                              className="twitter">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://immence.com/"
                              className="globe"
                              target="_blank">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                <path d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="postSec">
                        <h3 className="relatedPost">Related Posts</h3>
                        <div className="postBox">
                          <a href="../blog/why-india-should-be-your-first-choice-to-outsource-mobile-app-development.html">
                            <img
                            src={require("../img/blog_banner/mobile_blog_1.png").default}
                              alt="mobile_blog"
                              className="img-fluid"
                            />
                            <div className="paddBox">
                              <h5 className="postTitle">
                                Why India should be your first choice to
                                Outsource Mobile App Development?
                              </h5>
                              <div className="postinfo">
                                <div>
                                  <p className="authorName">Dhrumil Mehta</p>
                                </div>
                                <div className="dateTime">
                                  <p className="date">Aug 01, 2022</p>
                                  <div className="postTime">
                                    <span className="bull">•</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512">
                                      {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                      <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                                    </svg>
                                    <p>3 min</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="postBox">
                          <a href="../blog/how-investment-in-web-development-can-benefit-your-business.html">
                            <img
                            src={require("../img/blog_banner/blog_1.png").default}
                              alt="blog"
                              className="img-fluid"
                            />
                            <div className="paddBox">
                              <h5 className="postTitle">
                                How investment in Web Development can benefit
                                your Business?
                              </h5>
                              <div className="postinfo">
                                <div>
                                  <p className="authorName">Dhrumil Mehta</p>
                                </div>
                                <div className="dateTime">
                                  <p className="date">July 26, 2022</p>
                                  <div className="postTime">
                                    <span className="bull">•</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512">
                                      {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                      <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                                    </svg>
                                    <p>3 min</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="postBox">
                          <a href="../blog/top-application-modernization-services-in-india.html">
                            <img
                            src={require("../img/blog_banner/clutch_blog_1.png").default}
                              alt="clutch_blog"
                              className="img-fluid"
                            />
                            <div className="paddBox">
                              <h5 className="postTitle">
                                Top Application Modernization Services in India.
                              </h5>
                              <div className="postinfo">
                                <div>
                                  <p className="authorName">immence</p>
                                </div>
                                <div className="dateTime">
                                  <p className="date">June 08, 2022</p>
                                  <div className="postTime">
                                    <span className="bull">•</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512">
                                      {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                      <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                                    </svg>
                                    <p>1 min</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer section */}
          <footer className="footer bg-gray">
            {/* third testimonial section */}
            <div className="footermain">
              <div className="com-section third-testimonial-section">
                <div className="container">
                  <div className="footerLogosec">
                    <div className="third-box">
                      <a
                        href="https://clutch.co/profile/immence"
                        target="_blank">
                        <div className="third-logo mb-3">
                          <img
                          src={require("../img/clutch.svg").default}
                            alt="immence - Clutch reviews"
                          />
                        </div>
                        <div className="third-content">
                          <p className="mb-0">5 of 5 (10 reviews)</p>
                        </div>
                      </a>
                    </div>
                    <div className="third-box">
                      <a
                        href="https://www.goodfirms.co/company/immence"
                        target="_blank">
                        <div className="third-logo mb-3">
                          <img
                          src={require("../img/goodfirms.svg").default}
                            alt="immence - Goodfirms reviews"
                          />
                        </div>
                        <div className="third-content">
                          <p className="mb-0">5 of 5 stars (6 reviews)</p>
                        </div>
                      </a>
                    </div>
                    <div className="third-box">
                      <a
                        href="https://www.upwork.com/ag/immence/"
                        target="_blank">
                        <div className="third-logo mb-3">
                          <img
                          src={require("../img/upwork.svg").default}
                            alt="immence - Upwork's top rated agency"
                          />
                        </div>
                        <div className="third-content">
                          <p className="mb-0">Top Rated Agency</p>
                        </div>
                      </a>
                    </div>
                    <div className="third-box onlineDegreelogo">
                      <a
                        href="https://www.onlinedegree.com/article/best-software-development-education/"
                        target="_blank">
                        <div className="third-logo">
                          <img
                          src={require("../img/online_degree_logo.svg").default}
                            alt="immence - AWS Certified solutions architect"
                          />
                        </div>
                        <div className="third-content">
                          <p className="mb-0">
                            Best Software Development Company
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*end third testimonial section */}
              {/* join section */}
              <div className="join-section">
                <div className="container">
                  <div className="footer-col">
                    <a
                      className="join-box project-details"
                      href="../contact.html">
                      <p className="mb-1">Ready to contact</p>
                      <h2 className="h1">
                        Got a Project?
                        <br />
                        Let’s talk!
                      </h2>
                      <div className="btn btn-outline-light btn-ouline">
                        Contact us
                      </div>
                    </a>
                    <a className="join-box join-us" href="../careers.html">
                      <div className="line-curve">
                        <img src={require("../img/line_curve.png").default} alt />
                      </div>
                      <p className="mb-1">Careers</p>
                      <h2 className="h1">
                        Join our
                        <br />
                        Team
                      </h2>
                      <div className="btn btn-outline-dark-primary btn-ouline">
                        View openings
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/*end join section */}
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="social-media">
                      <li className="facebook">
                        <a
                          href="https://www.facebook.com/goimmence"
                          className="me-2"
                          target="_blank">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="twitter">
                        <a
                          href="https://twitter.com/goimmence"
                          className="me-2"
                          target="_blank">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="instagram">
                        <a
                          href="https://www.instagram.com/goimmence/"
                          className="me-2"
                          target="_blank">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="linkedin">
                        <a
                          href="https://www.linkedin.com/company/goimmence/"
                          className="me-2"
                          target="_blank">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li className="github">
                        <a
                          href="https://github.com/kasetiya"
                          className="me-2"
                          target="_blank">
                          <i className="fab fa-github" />
                        </a>
                      </li>
                      {/* <li class="dribble">
            <a href="#" class="me-2" target="_blank">
              <i class="fab fa-dribbble"></i>
            </a>
          </li> */}
                    </ul>
                    <ul className="list-unstyled d-flex footer-list justify-content-center mt-2 mb-2">
                      <li className="me-4">
                        <a href="../privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li className="me-4">
                        <a href="../cookie_policy.html">Cookie Policy</a>
                      </li>
                      <li>
                        <a href="../terms_of_use.html">Terms of use</a>
                      </li>
                    </ul>
                    <p className="copy-right-text mb-0 text-center">
                      © immence enterprise pvt ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/*end footer section */}
          {/* scrolltop */}
          <div
            className="scrolltop"
            // onclick={topFunction}
            id="myBtn"
            title="Go to top">
            <div className="scroll icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40">
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      {/* <path fill="#373B78" d="M0 0H40V40H0z" transform="translate(-390 -651) translate(390 651)"></path> */}
                      {/* <g fill="#FFF">
            <path
              d="M11 14H9V7H2V5h9v9z"
              transform="translate(-390 -651) translate(390 651) rotate(-90 19.5 9) rotate(45 6.5 9.5)"
            ></path>
          </g> */}
                    </g>
                  </g>
                </g>
              </svg>
              <img
              src={require("../img/fav_iconwhite.svg").default}
                alt="fav-icon"
                className="img-fluid"
              />
            </div>
          </div>
          {/*end scrolltop */}
          <div className="bg-overlay-blue" />
          {/* cookie section start */}
          <div
            className="cookie-section"
            id="cookieNotice"
            style={{ display: "none" }}>
            <div className="container">
              <div className="row">
                <div className="contentBox">
                  <p>
                    In order to provide a more relevant experience for you, we
                    use cookies to enable some website functionality.
                    <br />
                    For more information see our{" "}
                    <a href="../privacy-policy.html">Privacy Policy</a> and{" "}
                    <a href="../cookie_policy.html">Cookies Policy.</a>
                  </p>
                  <button
                    className="btn btn-outline-primary btn-ouline-sm"
                    onClick={acceptCookieConsent}
                    >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* cookie section end */}
        </main>
        </Layout>
    </>
  );
};

export default IndexPage;
