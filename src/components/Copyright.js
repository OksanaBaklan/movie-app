/** @format */

import React from "react";
import { BsSuitHeart } from "react-icons/bs";
const Copyright = () => {
  return (
    <p className="flex items-center justify-center py-10">
      Made by
      <a
        href="https://github.com/OksanaBaklan"
        target="_blank"
        rel="noreferrer"
        className="px-1 text-primary transition ease-in-out duration-300 font-bold hover:-translate-y-1"
      >
        Oksana Bakl
      </a>
      with <BsSuitHeart className="mx-1 text-primary"></BsSuitHeart>
    </p>
  );
};

export default Copyright;
