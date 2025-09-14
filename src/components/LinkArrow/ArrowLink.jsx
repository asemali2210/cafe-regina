import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowLinkIcon from "../../../public/images/arrowLink.png";
export default function ArrowLink({ href, content, moreClass }) {
  return (
    <Link
      href={href}
      className={`arrow__link d-flex align-items-center ${
        moreClass ? moreClass : ""
      }`}
    >
      {content}
      <span>
        <Image src={arrowLinkIcon} alt="arrow" width={90} />
      </span>
    </Link>
  );
}
