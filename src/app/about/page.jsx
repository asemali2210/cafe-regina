import ArrowLink from "@/components/LinkArrow/ArrowLink";
import Navbar from "@/components/navbar/Navbar";

export default function About() {
  return (
    <div  className="abot__page">
      <Navbar />
      <header>
        <p className="h2">Know about cafe </p>
        <div className="header__bottom d-flex">
            <p className="h2">Regina</p>
            <p>Are you curious about the oldest café in Zelzate ? Then look no further, because Café Regina is the place to be. This is not only the oldest, but also the nicest café in Zelzate and the surrounding area. So be sure to come by and enjoy a good time! </p>
        
        </div>
        <ArrowLink href="contact" content="CONTACT US"/>
      </header>
    </div>
  );
}