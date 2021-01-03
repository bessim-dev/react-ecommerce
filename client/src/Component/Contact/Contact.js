import React from "react";
import {
  ContactContainer,
  LinkContainer,
  TwitterIconContainer,
  LinkedInIconContainer,
  GithubIconContainer,
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  FacebookIconContainer,
  FacebookText,
  LinkedInText,
  TwitterText,
  GithubText,
  FacebookIcon,
} from "./Contact.style";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <ContactContainer>
      <LinkContainer
        href="https://www.facebook.com/bessim.boujebli.927/"
        whileHover={{ width: "200px" }}
      >
        <FacebookIconContainer>
          <FacebookIcon />
        </FacebookIconContainer>
        <FacebookText>Facebook</FacebookText>
      </LinkContainer>
      <LinkContainer
        href="https://github.com/bessim-dev"
        whileHover={{ width: "200px" }}
      >
        <GithubIconContainer>
          <GithubIcon />
        </GithubIconContainer>
        <GithubText>Github</GithubText>
      </LinkContainer>
      <LinkContainer
        whileHover={{ width: "200px" }}
        href="https://linkedin.com"
      >
        <LinkedInIconContainer>
          <LinkedInIcon />
        </LinkedInIconContainer>
        <LinkedInText>LinkedIN</LinkedInText>
      </LinkContainer>
      <LinkContainer
        whileHover={{ width: "200px" }}
        href="https://twitter.com/Shining96406619"
      >
        <TwitterIconContainer>
          <TwitterIcon />
        </TwitterIconContainer>
        <TwitterText>Twitter</TwitterText>
      </LinkContainer>
    </ContactContainer>
  );
};
export default Contact;
