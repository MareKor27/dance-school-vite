import { ReactNode } from "react";
import { Navbar } from "../../common/components/header/Navbar";
import { Footer } from "../../common/components/footer/Footer";
import "./defaultLayout.scss";
import ScrollToTop from "../../common/components/scrollToTop/ScrollToTop";
import { SocialMedia } from "../../common/components/socialMedia/SocialMedia";
import { GoToTop } from "../../common/components/goToTop/GoToTop";

type DefaultLayoutType = {
  children: ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutType) {
  return (
    <div className={`site-content`}>
      <ScrollToTop />
      <SocialMedia />
      <Navbar />
      <main className={`main-content`}>{children}</main>
      <Footer />
      <GoToTop />
    </div>
  );
}
