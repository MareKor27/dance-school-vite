import { BenefitCardsSection } from "../../../app/components/benefitCards/BenefitCards";
import { CurrentNews } from "../../../app/components/currentNews/CurrentNews";
import { HeroSection } from "../../../app/components/heroSection/HeroSection";
import { OfferSection } from "../../../app/components/offerBox/OfferSection";
import { Parallax } from "../../components/parallax/Parallax";
import { DefaultLayout } from "../../../app/layout/DefaultLayout";
import { useSearchParams } from "react-router";
import { ChangeEvent, useEffect, useState } from "react";

export function Home() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [counter, setCounter] = useState({ value: 0 });

  // const paramPlacki = searchParams.getAll("filter").includes("placki");
  // const paramReact = searchParams.getAll("filter").includes("react");

  // const toogleParamPlacki = (isSet: boolean) => {
  //   setSearchParams((prev) => {
  //     prev.delete("filter", "placki");
  //     if (isSet) {
  //       prev.append("filter", "placki");
  //     }
  //     return prev;
  //   });
  // };

  // const toogleParamReact = (isSet: boolean) => {
  //   setSearchParams((prev) => {
  //     prev.delete("filter", "react");
  //     if (isSet) {
  //       prev.append("filter", "react");
  //     }
  //     return prev;
  //   });
  // };

  // useEffect(() => {
  //   // setSearchParams((prev) => {
  //   //   const newParams = new URLSearchParams(prev);
  //   //   prev.append("filter", "placki");
  //   //   return prev;
  //   // });
  //   toogleParamReact(true);
  // }, []);

  // useEffect(() => {
  //   // setSearchParams((prev) => {
  //   //   const newParams = new URLSearchParams(prev);
  //   //   prev.append("filter", "react");
  //   //   return prev;
  //   // });
  //   toogleParamPlacki(true);
  // }, []);

  return (
    <DefaultLayout>
      {/* <div>
        <label htmlFor="paramX">Lubie placki</label>
        <input
          type="checkbox"
          name="paramX"
          id="paramX"
          checked={paramPlacki}
          onChange={(event) => {
            toogleParamPlacki(event.target.checked);
          }}
        />
        <label htmlFor="paramY">Lubie Reacta</label>
        <input
          type="checkbox"
          name="paramY"
          id="paramY"
          checked={paramReact}
          onChange={(event) => {
            toogleParamReact(event.target.checked);
          }}
        />
        <button
          onClick={() =>
            setCounter((prev) => {
              prev.value++;
              return { ...prev };
            })
          }
        ></button>
        <div>Counter: {counter.value}</div>
      </div> */}
      <Parallax />
      <HeroSection />
      <CurrentNews />
      <OfferSection />
      <BenefitCardsSection />
    </DefaultLayout>
  );
}
