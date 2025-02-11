import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { Card } from "react-bootstrap";
import ownStyle from "./currentNews.module.scss";
import useStyles from "../../hooks/useStyle";
import { SitePaths } from "../../constants/Paths";
import { Link } from "react-router";

type CurrentInformationType = {
  info: string;
  cardHeader: string;
  cardTitle: string;
  cardText: string;
  cardFooterDate: string;
};

const currentInformation: CurrentInformationType[] = [
  {
    info: "newCourse",
    cardHeader: "Sezon taneczny 2024/2025",
    cardTitle: "Sezon taneczny 2024/2025 w studiu tańca Max Dance",
    cardText:
      "Grupy o różnym poziomie zaawansowania. Nowe choreografie !! !! Znajdź z nami swój rytm !!",
    cardFooterDate: "10.01.2025",
  },
  {
    info: "importantInfo",
    cardHeader: "Nowe Kursy",
    cardTitle: "Nowe grupy początkujące !! Zapisy!!",
    cardText:
      "CZWARTEK 20:30 kurs tańca towarzyskiego i użytkowego dla par z Julią Start 23.01.2025",
    cardFooterDate: "12.12.2024",
  },
  {
    info: "",
    cardHeader: "Sezon taneczny 2024/2025",
    cardTitle: "Sezon taneczny 2024/2025 w studiu tańca Max Dance",
    cardText:
      "CZWARTEK 20:30 kurs tańca towarzyskiego i użytkowego dla par z Julią",
    cardFooterDate: "12.12.2024",
  },
  {
    info: "",
    cardHeader: "Nowe Kursy",
    cardTitle: "Nowe grupy początkujące !! Zapisy!!",
    cardText:
      "CZWARTEK 20:30 kurs tańca towarzyskiego i użytkowego dla par z Julią Start 23.01.2025",
    cardFooterDate: "12.12.2024",
  },
];

export function CurrentNews() {
  const s = useStyles(ownStyle);
  return (
    <section className={s(`current-news`)}>
      <div className="body-arranged-md">
        <header>
          <h2 className={s(``, `text-center`)}>
            <b>MAX</b> Dance Aktualności
          </h2>
        </header>
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          className={s(`news__swiper`)}
          breakpoints={{
            991: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 1,
            },
          }}
        >
          {currentInformation.map((news) => (
            <SwiperSlide className={s(`custom-slide`, `h-auto`)}>
              <Card
                className={s(
                  `card-news ${
                    news.info === "newCourse"
                      ? "new-course"
                      : "pulse-shadow-box"
                  }`,
                  `text-center h-100`
                )}
              >
                <Card.Header className={s(`own-card-header`)}>
                  {news.cardHeader}
                </Card.Header>
                <Card.Body className={s(`own-card-body`)}>
                  <Card.Title className={s(`own-card-title`)}>
                    {news.cardTitle}
                  </Card.Title>
                  <Card.Text className={s(`own-card-text`)}>
                    {news.cardText}
                  </Card.Text>
                  <Link to={SitePaths.LESSON_PLAN.absolute}>
                    <button>Zobacz grafik</button>
                  </Link>
                </Card.Body>
                <Card.Footer className={s(`own-card-footer`)}>
                  {news.cardFooterDate}
                </Card.Footer>
              </Card>
            </SwiperSlide>
          ))}

          <br />
          <br />
        </Swiper>
      </div>
    </section>
  );
}
