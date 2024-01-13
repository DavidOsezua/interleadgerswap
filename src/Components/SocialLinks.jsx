import React from "react";
import { socialLinks } from "../data/data";


const SocialLinks = () => {
  return (
    <ul className="flex gap-[1rem] items-center">
      {socialLinks.map((socialLink) => (
        <img src={socialLink.socialIcon} />
      ))}
    </ul>
  );
};

export default SocialLinks;
