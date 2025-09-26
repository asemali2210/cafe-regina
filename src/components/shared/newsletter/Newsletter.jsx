"use client";
import { useRef } from "react";
import "./news-letter.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function Newsletter() {
  const textRef = useRef(null);
  const containerRef = useRef();
  // Animate the heading copy differently on mobile and desktop breakpoints.
  useGSAP(
    () => {
      let splitedText = new SplitText(textRef.current, {
        type: "words, lines",
        linesClass: "line++",
      });
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 1%",
          },
        });
        tl.fromTo(
          splitedText.words,
          { y: 120 },
          { y: 0, duration: 0.4, ease: "power3.inOut", stagger: 0.07, delay: 0.3 }
        );
        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "-=400",
          },
        });

        tl.fromTo(
          splitedText.words,
          { y: 120, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.inOut",
            stagger: 0.07, delay: 0.3,
          }
        );
        // Clean up the desktop timeline when the effect re-runs.
        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
          splitedText.revert();
        };
      });
    },
    { scope: containerRef }
  );
  return (
    <div className="newsletter py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <div className="newsletter__header text-center">
              <p className="font-harmond text-white h2 mb-3">Stay informed</p>
              <p className="font-inter text-gray">
                Stay up to date with everything that happens at Café Regina!
                This business believes it is important to keep its valued guests
                informed of news, events and You can always find all the latest
                news in the newsletter, so be sure to take a look.
              </p>
            </div>
          </div>
          <div className="col-md-10">
            <div className="newsletter__form p-5  mt-5  d-flex flex-column justify-content-center align-items-center">
              <div
                className="form__header text-center d-flex flex-column gap-2 "
                ref={containerRef}
              >
                <p className="font-harmond text-white h2">Newsletter</p>
                <div className="overflow-hidden">
                  <p className="font-harmond _heading" ref={textRef}>
                    Subscribe to Our Newsletter
                  </p>
                </div>
                <p className="text-white font-inter">
                  And never miss latest Updates!
                </p>
              </div>
              <form className="_form mt-5 d-flex align-item-center gap-2 justify-content-center flex-md-row flex-column">
                <input
                  className="newsletter__input font-inter "
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  className="newssletter__submit font-inter"
                  type="submit"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;




