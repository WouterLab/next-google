/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function Avatar({ url, className }) {
  return (
    <img
      loading='lazy'
      src={url}
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      alt='profile-pic'></img>
  );
}

export default Avatar;
