import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaHome,
  FaRegFile,
  FaIdCard,
  FaConciergeBell,
  FaRegEnvelope,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import styled from "styled-components";

export const socialLinks = {
  twitter: <FaTwitter />,
  github: <FaGithub />,
  facebook: <FaFacebook />,
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
};

export const navLinks = [
  { name: "home", icon: <FaHome />, link: "hero" },
  { name: "about", icon: <FiUser />, link: "about" },
  { name: "resume", icon: <FaRegFile />, link: "resume" },
  {
    name: "portfolio",
    icon: <FaIdCard />,
    link: "portfolio",
  },
  {
    name: "services",
    icon: <FaConciergeBell />,
    link: "services",
  },
  {
    name: "contact",
    icon: <FaRegEnvelope />,
    link: "contact",
  },
];

export const ScrollUp = styled.button`
  background-color: #149ddd;
  border-radius: 50%;
  color: white;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 0.75rem 0.75rem 0;
  height: 2.25rem;
  width: 2.25rem;
  z-index: 50;
  font-size: 1.25rem;
  border: none;
  display: flex;
  transition: all 0.1s ease-out;
  transform: ${(props) => (props.show ? "scale(1)" : "scale(0)")};
  align-items: center;
  justify-content: center;
`;
