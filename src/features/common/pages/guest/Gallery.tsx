import { DefaultLayout } from "../../../app/layout/DefaultLayout";
import style from "../../../app/components/subPageContent/subPageContent.module.scss";
import useStyles from "../../../app/hooks/useStyle";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { SubPageContent } from "../../../app/components/subPageContent/SubPageContent";
import { ImageGallery } from "../../components/gallery/ImageGallery";
import { ExternalPaths } from "../../../app/constants/Paths";
import { Link } from "react-router";
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
        <h2 className={s(`h2__pading-top`, `text-center`)}>
          Więcej naszych zdjęć znajdziesz na:
        </h2>
        <div className={s(`links`)}>
          <Link to={ExternalPaths.FACEBOOK} target={"_blank"}>
            <button>Facebooku</button>
          </Link>
          <Link to={ExternalPaths.INSTAGRAM} target={"_blank"}>
            <button>Instagramie</button>
          </Link>
        </div>
      </SubPageContent>
    </DefaultLayout>
  );
}
