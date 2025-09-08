import Navbar from "@/components/navbar/Navbar";
import ArrowLink from "@/components/LinkArrow/ArrowLink";
import { events } from "@/data/siteData";
import Image from "next/image";
import { notFound } from "next/navigation";
import "@/style/pages/events.scss";
export default function EventDetailPage({ params }) {
  const id = parseInt(params.id, 10);
  const ev = events.find((e) => e.id === id);
  if (!ev) return notFound();

  return (
    <div className="events-page bg-dark-1">
      <Navbar />
      <div className="container-fluid p-0">
        <div className="back-link d-flex justify-content-center py-4">
          <ArrowLink
            href="/"
            content="Back To Home"
            moreClass={"text-center"}
          />
        </div>
      </div>
      <div className="container">
        <div className="event-row row justify-content-between py-5">
          <div className="col-12 col-lg-5 event-row__image">
            <Image
              src={ev.imgSrc}
              alt={ev.title}
              className="img-fluid object-fit-contain"
              width={600}
              height={400}
              quality={100}
            />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <p className="event-row__date font-athina">{ev.date}</p>
            <h1 className="event-row__title font-harmond">{ev.title}</h1>
            <p className="event-row__desc font-inter">{ev.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
