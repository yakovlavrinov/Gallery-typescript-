import { useState } from "react";

import { Photo } from "./types";

import { Navigation } from "./Navigation";
import { PreviewGallery } from "./PreviewGallery";
import { TransitionPhoto } from "./MainPhoto/index";

import style from "./index.module.scss";

interface GalleryProps {
  photos: Photo[];
}

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }

  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return (
    <div className={style.Gallery}>
      <div className={style.GalleryContainer}>
        <TransitionPhoto
          className={style.GalleryTransitionPhoto}
          photos={photos}
          indexActivePhoto={indexActivePhoto}
        />
        <Navigation
          className={style.GalleryNavigation}
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
          }}
        />
      </div>
      <PreviewGallery
        className={style.GalleryPreviewList}
        indexActivePhoto={indexActivePhoto}
        photos={photos}
        setNewPhoto={setIndexActivePhoto}
      />
    </div>
  );
};
