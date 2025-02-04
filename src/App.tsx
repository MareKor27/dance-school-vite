import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./features/common/pages/guest/Home";
import { SitePaths } from "./features/app/constants/Paths";
import { AboutUs } from "./features/common/pages/guest/AboutUs";
import { Contact } from "./features/common/pages/guest/Contact";
import { Instructors } from "./features/common/pages/guest/Instructors";
import { Offert } from "./features/common/pages/guest/Offert";
import { LessonPlan } from "./features/common/pages/guest/LessonPlan";
import { Gallery } from "./features/common/pages/guest/Gallery";
import { PriceList } from "./features/common/pages/guest/PriceList";
import { PageNotFound } from "./features/common/pages/guest/PageNotFound";
import { Statut } from "./features/common/pages/guest/Statut";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={SitePaths.ABOUT_US.absolute} element={<AboutUs />} />
      <Route path={SitePaths.INSTRUCTORS.absolute} element={<Instructors />} />
      <Route path={SitePaths.OFFERT.absolute} element={<Offert />} />
      <Route path={SitePaths.LESSON_PLAN.absolute} element={<LessonPlan />} />
      <Route path={SitePaths.GALLERY.absolute} element={<Gallery />} />
      <Route path={SitePaths.PRICE_LIST.absolute} element={<PriceList />} />
      <Route path={SitePaths.CONTACT.absolute} element={<Contact />} />
      <Route path={SitePaths.STATUT.absolute} element={<Statut />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
