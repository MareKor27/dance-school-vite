import { DefaultLayout } from "../../../app/layout/DefaultLayout";
import style from "../../../app/components/subPageContent/subPageContent.module.css";
import useStyles from "../../../app/hooks/useStyle";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { SubPageContent } from "../../../app/components/subPageContent/SubPageContent";
import { ImageGallery } from "../../components/gallery/ImageGallery";
export function Gallery() {
  const s = useStyles(style);
  return (
    <DefaultLayout>
      <Breadcrumbs namePage={"Galeria"} />
      <SubPageContent className="body-stretched">
        <h1 className="text-center">Galeria z Studia Tańca MAXDance</h1>
        <div className={s(`masonry-galery`)}>
          <img src="images\gallery\g-1.jpg" alt="" />
          <img src="images\gallery\g-2.jpg" alt="" />
          <img src="images\gallery\g-3.jpg" alt="" />
          <img src="images\gallery\g-10.jpg" alt="" />
          <img src="images\gallery\g-4.jpg" alt="" />
          <img src="images\gallery\g-5.jpg" alt="" />
          <img src="images\gallery\g-6.jpg" alt="" />
          <img src="images\gallery\g-11.jpg" alt="" />
          <img src="images\gallery\g-7.jpg" alt="" />
          <img src="images\gallery\g-8.jpg" alt="" />
          <img src="images\gallery\g-9.jpg" alt="" />
          <img src="images\gallery\g-12.jpg" alt="" />
        </div>
      </SubPageContent>
      <SubPageContent className="body-arranged-md">
        <ImageGallery
          galleryName={"galleryOne"}
          className={"masonry-galery"}
          imgHeight="auto"
          imgWidth="auto"
        />
      </SubPageContent>
    </DefaultLayout>
  );
}
