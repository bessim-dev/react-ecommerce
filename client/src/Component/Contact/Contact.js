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
const Contact = () => {
  const mediaBool = window.matchMedia("(min-width: 800px)").matches;
  const anim = mediaBool ? { width: "200px" } : {};
  return (
    <ContactContainer mediaBool>
      <LinkContainer
        href="https://www.facebook.com/bessim.boujebli.927/"
        whileHover={anim}
      >
        <FacebookIconContainer>
          <FacebookIcon />
        </FacebookIconContainer>
        <FacebookText>Facebook</FacebookText>
      </LinkContainer>
      <LinkContainer href="https://github.com/bessim-dev" whileHover={anim}>
        <GithubIconContainer>
          <GithubIcon />
        </GithubIconContainer>
        <GithubText>Github</GithubText>
      </LinkContainer>
      <LinkContainer whileHover={anim} href="https://linkedin.com">
        <LinkedInIconContainer>
          <LinkedInIcon />
        </LinkedInIconContainer>
        <LinkedInText>LinkedIN</LinkedInText>
      </LinkContainer>
      <LinkContainer
        whileHover={anim}
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
