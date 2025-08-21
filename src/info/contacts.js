import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "syedtalhakhalid@gmail.com",
    href: "mailto:syedtalhakhalid@gmail.com",
    color: "text-red-500"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/syedtalhakhalid",
    href: "https://linkedin.com/in/syedtalhakhalid",
    color: "text-blue-600"
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Syntist",
    href: "https://github.com/Syntist",
    color: "text-gray-800 dark:text-gray-200"
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Miami, FL",
    href: null,
    color: "text-green-500"
  }
];