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

export const socialLinks = {
  twitter: <FaTwitter />,
  github: <FaGithub />,
  facebook: <FaFacebook />,
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
};

export const navLinks = [
  { name: "home", icon: <FaHome />, link: "#" },
  { name: "about", icon: <FiUser />, link: "#about" },
  { name: "resume", icon: <FaRegFile />, link: "#resume" },
  {
    name: "portfolio",
    icon: <FaIdCard />,
    link: "#portfolio",
  },
  {
    name: "services",
    icon: <FaConciergeBell />,
    link: "#services",
  },
  {
    name: "contact",
    icon: <FaRegEnvelope />,
    link: "#contact",
  },
];
