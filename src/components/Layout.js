import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { useLocation } from "@reach/router";
import CookieConsent from "react-cookie-consent";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";

import { withPrefix, Link } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const location = useLocation();

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <CookieConsent
        debug={true}
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{
          background: "white",
          borderTop: "1px solid ",
          borderTopColor: "lightGrey",
          justifyContent: "center",
          paddingTop: "9px",
          paddingBottom: "5px",
          // boxShadow: "0px -10px 1px lightgrey"
        }}
        buttonStyle={{
          color: "#8c8c8c",
          background: "white",
          border: "1px solid",
          borderColor: "#8c8c8c",
          fontSize: "13px",
          borderRadius: "4px",
          width: "12ch",
          display: "inline-block",
          height: "30px",
          padding: "0px",
          marginLeft: "-500px",
          // marginTop: "0px"
        }}
        declineButtonStyle={{
          color: "#8c8c8c",
          background: "white",
          border: "1px solid",
          borderColor: "#8c8c8c",
          fontSize: "13px",
          borderRadius: "4px",
          width: "12ch",
          display: "inline-block",
          height: "30px",
          padding: "0px",
          marginLeft: "50px",
          // marginTop: "0px"
        }}
        contentStyle={{
          marginBottom: "auto",
          marginTop: "auto",
        }}
        expires={150}
        enableDeclineButton={true}
        flipButtons={true}
        onDecline={() => {
          alert("nay!");
        }}
        onAccept={() => {
          initializeAndTrack(location);
        }}
      >
        <p
          style={{
            color: "#8c8c8c",
            margin: "0px",
            fontSize: "0.85rem",
            textAlign: "center",
          }}
        >
          We use cookies to ensure that we give you the best experience on our
          website.{" "}
          <Link to="/privacy/" style={{ textDecoration: "none" }}>
            Click here
          </Link>
          for more information.
        </p>
      </CookieConsent>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
