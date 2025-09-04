import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowLinkIcon from "../../../public/images/arrowLink.png";
export default function ArrowLink({ href, content, moreClass }) {
  const styel = {
    color: "#DCCA87",
    gap: "10px",
    fontSize: "1.4rem",
    letterSpacing: "4px",
    fontFamily: "Inter, sans-serif",
    textTransform: "uppercase",
    fonWeight: "300",
  };
  return (
    <Link
      href={href}
      className={`d-flex align-items-center ${moreClass && moreClass}`}
      style={styel}
    >
      {content}
      <span>
        <Image src={arrowLinkIcon} alt="arrow" width={90} />
      </span>
    </Link>
  );
}
