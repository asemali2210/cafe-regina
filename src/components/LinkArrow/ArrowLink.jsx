import Image from "next/image";
import Link from "next/link";
import arrowLinkIcon from "../../../public/images/arrowLink.png";
// Styled CTA link that appends the brand arrow graphic.
export default function ArrowLink({ href, content, moreClass = null }) {
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

