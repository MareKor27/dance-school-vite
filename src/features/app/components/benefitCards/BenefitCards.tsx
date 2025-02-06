import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import style from "./benefitCards.module.scss";
import useStyles from "../../hooks/useStyle";

export function BenefitCardsSection() {
  const s = useStyles(style);
  return (
    <section className={s(`benefit-cards-section`)}>
      <div className={s(``, `body-arranged-md`)}>
        <header>
          <h2 className={s(``, `text-center`)}>
            Karty <b>BENEFITOWE</b>
          </h2>
        </header>
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={4}
          autoplay={{ delay: 2000 }}
          className={s(`swiper`)}
          pagination={{ clickable: true }}
          breakpoints={{
            1300: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 3,
              pagination: { clickable: true },
            },
            768: {
              slidesPerView: 2,
              pagination: { clickable: true },
            },
            300: {
              slidesPerView: 1,
              pagination: { clickable: true },
            },
          }}
        >
          <SwiperSlide className={s(`custom-slide`, `h-auto`)}>
            <img className={s(`img-card`)} src="\images\guest\cards1.webp" />
          </SwiperSlide>
          <SwiperSlide className={s(`custom-slide`, `h-auto`)}>
            <img className={s(`img-card`)} src="\images\guest\cards2.webp" />
          </SwiperSlide>
          <SwiperSlide className={s(`custom-slide`, `h-auto`)}>
            <img className={s(`img-card`)} src="\images\guest\cards3.webp" />
          </SwiperSlide>
          <SwiperSlide className={s(`custom-slide`, `h-auto`)}>
            <img className={s(`img-card`)} src="\images\guest\cards4.webp" />
          </SwiperSlide>
          <SwiperSlide className={s(`custom-slide`, `h-auto`)}>
            <img className={s(`img-card`)} src="\images\guest\cards5.webp" />
          </SwiperSlide>
          <SwiperSlide className={s(`custom-slide`, `h-auto`)}>
            <img className={s(`img-card`)} src="\images\guest\cards6.webp" />
          </SwiperSlide>
          <SwiperSlide className={s(`custom-slide`, `h-auto`)}>
            <img className={s(`img-card`)} src="\images\guest\cards7.webp" />
          </SwiperSlide>
          <br />
          <br />
        </Swiper>
      </div>
    </section>
  );
}
