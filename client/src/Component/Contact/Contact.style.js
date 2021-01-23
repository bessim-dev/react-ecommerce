import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "@styled-icons/boxicons-logos";

export const ContactContainer = styled(motion.div)`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 2em;
  height: 400px;
  position: fixed;
  top: 50%;
  margin-top: -200px;
  margin-left: -100px;
  @media screen and (max-width: 800px) {
    flex-direction: row;
    align-items: center;
    height: unset;
    position: unset;
    top: unset;
    margin-top: 0;
    margin-left: 0;
  }
`;

export const LinkContainer = styled(motion.a)`
  padding: 0;
  will-change: width;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 60px;
  height: 60px;
  margin: 0;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;

  box-shadow: 5px 15px 20px 5px rgba(0, 0, 0, 0.55);
`;
export const FacebookIconContainer = styled.div`
  height: 60px;
  width: 60px;
  text-align: center;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${LinkContainer}:hover & {
    background: #3b5998;
  }
`;
export const TwitterIconContainer = styled(FacebookIconContainer)`
  ${LinkContainer}:hover & {
    background: #1da1f2;
  }
`;
export const LinkedInIconContainer = styled(FacebookIconContainer)`
  ${LinkContainer}:hover & {
    background: #0a66c2;
  }
`;
export const GithubIconContainer = styled(FacebookIconContainer)`
  ${LinkContainer}:hover & {
    background: #333;
  }
`;
export const FacebookText = styled.span`
  font-size: 22px;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
  line-height: 60px;
  margin-left: 10px;
  ${LinkContainer}:hover & {
    color: #3b5998;
  }
`;
export const LinkedInText = styled(FacebookText)`
  ${LinkContainer}:hover & {
    color: #0a66c2;
  }
`;
export const TwitterText = styled(FacebookText)`
  ${LinkContainer}:hover & {
    color: #1da1f2;
  }
`;
export const GithubText = styled(FacebookText)`
  ${LinkContainer}:hover & {
    color: #333;
  }
`;
export const FacebookIcon = styled(Facebook)`
  height: 40px;
  width: 40px;
  ${LinkContainer}:hover & {
    color: #fff;
  }
`;
export const GithubIcon = styled(Github)`
  height: 40px;
  width: 40px;
  ${LinkContainer}:hover & {
    color: #fff;
  }
`;
export const LinkedInIcon = styled(Linkedin)`
  height: 40px;
  width: 40px;
  ${LinkContainer}:hover & {
    color: #fff;
  }
`;
export const TwitterIcon = styled(Twitter)`
  height: 40px;
  width: 40px;
  ${LinkContainer}:hover & {
    color: #fff;
  }
`;
