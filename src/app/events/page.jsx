import Navbar from "@/components/navbar/Navbar";
import ArrowLink from "@/components/LinkArrow/ArrowLink";
import { events } from "@/data/siteData";
import Image from "next/image";
import React from "react";
import "@/style/pages/events.scss";

function EventsPage() {
  return (
    <div className="events-page bg-dark-1">
      <Navbar />
      <div className="container">
        <div className="back-link">
          <ArrowLink href="/" content="Back To Home" />
        </div>

        <div className="events-list">
          {events.map((ev) => (
            <div key={ev.id} className="event-row row gx-4">
              <div className="col-12 col-lg-5 event-row__image">
                <Image
                  src={ev.imgSrc}
                  alt={ev.title}
                  className="img-fluid"
                  width={600}
                  height={400}
                />
              </div>
              <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
                <p className="event-row__date font-inter">{ev.date}</p>
                <h3 className="event-row__title font-athina">{ev.title}</h3>
                <p className="event-row__desc font-inter">{ev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
