import Newsletter from "@/components/shared/Newsletter/Newsletter";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import React from "react";
import PhotosGallery from "@/components/gallery/PhotosGallery/PhotosGallery";

function PhotosPage() {
  return (
    <div className="bg-dark-1">
      <PageHeader
        title1="Enjoy The Atmospheric"
        title2="Photos!"
        descirptions={
          "If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos!"
        }
        linkContent="contact"
        linkHref="/contact"
      />
      <PhotosGallery />
      <Newsletter />
    </div>
  );
}

export default PhotosPage;
