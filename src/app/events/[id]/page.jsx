import Navbar from "@/components/navbar/Navbar";
import ArrowLink from "@/components/LinkArrow/ArrowLink";
import { events } from "@/data/siteData";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import "@/style/pages/events.scss";

export default function EventDetailPage({ params }) {
  const id = parseInt(params.id, 10);
  const ev = events.find((e) => e.id === id);
  if (!ev) return notFound();

  return (
    <div className="events-page bg-dark-1">
      <Navbar />
      <div className="container">
        <div className="back-link">
          <ArrowLink href="/" content="Back To Home" />
        </div>

        <div className="event-row row">
          <div className="col-12 col-lg-5 event-row__image">
            <Image
              src={ev.imgSrc}
              alt={ev.title}
              className="img-fluid"
              width={800}
              height={600}
            />
          </div>
          <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
            <p className="event-row__date font-inter">{ev.date}</p>
            <h1 className="event-row__title font-athina">{ev.title}</h1>
            <p className="event-row__desc font-inter">{ev.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

