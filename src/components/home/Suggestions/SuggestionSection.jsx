"use client";

import Image from "next/image";
import ArrowLink from "../../LinkArrow/ArrowLink";
import RevealOnView from "@/components/shared/RevealOnView/RevealOnView";
import "./home-suggestions.scss";
import sliderImg1 from "../../../../public/images/slider-right (1).png";
import sliderImg2 from "../../../../public/images/slider-right (2).png";
import sliderImg3 from "../../../../public/images/slider-right (3).png";
import sliderImg4 from "../../../../public/images/sllider-left (1).png";
import sliderImg5 from "../../../../public/images/sllider-left (2).png";
import sliderImg6 from "../../../../public/images/sllider-left (3).png";

// Text and CTA metadata shown above the gallery.
const SUGGESTION_CONTENT = {
  title: "Weekend Suggestion",
  body: "During the weekend at Cafe Regina you can treat yourself to a delicious hot meal that is prepared with a lot of care and love. Our chef gets to work and conjures up traditional Flemish classics that will delight your taste buds. So be sure to drop by or contact this business!",
  cta: {
    label: "READ MORE",
    href: "/suggestions",
  },
};

// Image groupings feed the staggered gallery layout.
const SUGGESTION_COLUMNS = [
  {
    id: "left",
    columnClass: "col-md-6",
    wrapperClass: "images__left d-flex",
    images: [
      { src: sliderImg2, alt: "Cocktail" },
      { src: sliderImg3, alt: "Cafe interior" },
      { src: sliderImg1, alt: "Drinks selection" },
    ],
  },
  {
    id: "right",
    columnClass: "col-md-6",
    wrapperClass: "images__right d-flex",
    images: [
      { src: sliderImg4, alt: "Coffee service" },
      { src: sliderImg6, alt: "Dining table" },
      { src: sliderImg5, alt: "Dessert" },
    ],
  },
];

// Text block summarises the weekend suggestion for visitors.
function SuggestionHighlight({ content }) {
  return (
    <div className="home__suggestions__intro">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 d-flex align-items-center text-center flex-column">
            <div className="suggestions__content d-flex align-items-center justify-content-center text-center flex-column">
              <p className="heading-xl mb-3">{content.title}</p>
              <p className="text-gray">{content.body}</p>
              <ArrowLink
                content={content.cta.label}
                href={content.cta.href}
                moreClass="my-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Render one column of stacked imagery.
function SuggestionImageColumn({ column }) {
  return (
    <div className={column.columnClass}>
      <div className={`${column.wrapperClass}`}>
        {column.images.map((image, index) => (
          <div key={`${column.id}-${index}`} className={`imgae_${index + 1}`}>
            <Image
              src={image.src}
              alt={image.alt}
              className="img-fluid _img"
              width={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Wrap both image columns inside a fluid container for large screens.
function SuggestionGallery({ columns }) {
  return (
    <div className="home__suggestions__images">
      <div className="container-fluid overflow-hidden">
        <div className="row">
          {columns.map((column) => (
            <SuggestionImageColumn key={column.id} column={column} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Compose the highlight copy with the supporting imagery.
function SuggestionSection() {
  return (
    <RevealOnView
      /* data-animate ensures only this section and its direct children animate */
      as="section"
      className="home__suggestions"
      data-animate="suggestion"
      stagger={0.12}
    >
      <SuggestionHighlight content={SUGGESTION_CONTENT} />
      <SuggestionGallery columns={SUGGESTION_COLUMNS} />
    </RevealOnView>
  );
}

export default SuggestionSection;

