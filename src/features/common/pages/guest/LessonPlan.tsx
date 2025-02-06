import { DefaultLayout } from "../../../app/layout/DefaultLayout";
import style from "../../../app/components/subPageContent/lessonPlan.module.scss";
import useStyles from "../../../app/hooks/useStyle";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import scheduleData from "../../../../data/scheduleData.json";
import { SubPageContent } from "../../../app/components/subPageContent/SubPageContent";
import { useState } from "react";
import { SitePaths } from "../../../app/constants/Paths";
import { Link } from "react-router";

type TabMenuProps = {
  activeTab: string;
  setActiveTab: (day: string) => void;
};

type TabContentProps = {
  activeTab: string;
};

export function LessonPlan() {
  const s = useStyles(style);
  const [activeTab, setActiveTab] = useState<string>("Poniedziałek");

  function TabMenu({ activeTab, setActiveTab }: TabMenuProps) {
    return (
      <div className={s("tab-menu")}>
        {scheduleData.map(({ day }) => (
          <div
            key={day}
            className={
              activeTab === day ? s("tab-title active") : s("tab-title")
            }
            onClick={() => setActiveTab(day)}
          >
            {day}
          </div>
        ))}
      </div>
    );
  }

  function TabContent({ activeTab }: TabContentProps) {
    const activeDay = scheduleData.find((day) => day.day === activeTab);
    if (!activeDay) return null;

    return (
      // <div className={s("tabs-content")}>
      //   {activeDay.rooms.map((room, index) => (
      //     <div key={index} className={s("room")}>
      //       <h5>{room.room}</h5>
      //       {room.lessons.map((lesson, idx) => (
      //         <div key={idx} className={s("lesson")}>
      //           <h6>{lesson.title}</h6>
      //           <p>
      //             <b>Godziny:</b> {lesson.hours}
      //           </p>
      //           <p>
      //             <b>Poziom:</b> {lesson.difficulty}
      //           </p>
      //           <p>
      //             <b>Instruktor:</b> {lesson.instructor}
      //           </p>
      //           <p>
      //             <b>Status grupy:</b> {lesson.groupStatus}
      //           </p>
      //           {lesson.registration && (
      //             <p>
      //               <b>{lesson.registration}</b>
      //             </p>
      //           )}
      //           {lesson.registrationButton && (
      //             <button>{lesson.registrationButton}</button>
      //           )}
      //         </div>
      //       ))}
      //     </div>
      //   ))}
      // </div>
      <>
        <div className={s("calledar")}>
          {activeDay.rooms.map((roomData, roomIndex) => (
            <div key={roomIndex}>
              <h3 className="text-center">{roomData.room}</h3>
              {roomData.lessons.map((lesson, lessonIndex) => (
                <div className={s("lesson")} key={lessonIndex}>
                  <div className={s("title-lesson")}>{lesson.title}</div>
                  <div className={s("hours")}>{lesson.hours}</div>
                  <div className={s("dificulty-level")}>
                    {lesson.difficulty}
                  </div>
                  <div className={s("instructor")}>{lesson.instructor}</div>
                  <div className={s("group-status")}>{lesson.groupStatus}</div>
                  {lesson.registration && (
                    <div>
                      <div className={s("registration")}>
                        {lesson.registration}
                      </div>
                      <Link to={SitePaths.CONTACT.absolute}>
                        <div className={s("sign-up-button")}>
                          {lesson.registrationButton}
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <DefaultLayout>
      <Breadcrumbs namePage={"Grafik"} />

      {/* <SubPageContent className={"body-arranged-md"}>
        
        {scheduleData.map((dayData, dayIndex) => (
          <div key={dayIndex}>
            <h2 className={s("day-heading", "text-center")}>{dayData.day}</h2>
            <div className={s("calledar")}>
              {dayData.rooms.map((roomData, roomIndex) => (
                <div key={roomIndex}>
                  <h3 className="text-center">{roomData.room}</h3>
                  {roomData.lessons.map((lesson, lessonIndex) => (
                    <div className={s("lesson")} key={lessonIndex}>
                      <div className={s("title-lesson")}>{lesson.title}</div>
                      <div className={s("hours")}>{lesson.hours}</div>
                      <div className={s("dificulty-level")}>
                        {lesson.difficulty}
                      </div>
                      <div className={s("instructor")}>{lesson.instructor}</div>
                      <div className={s("group-status")}>
                        {lesson.groupStatus}
                      </div>
                      {lesson.registration && (
                        <div>
                          <div className={s("registration")}>
                            {lesson.registration}
                          </div>
                          <Link to={SitePaths.CONTACT.absolute}>
                            <div className={s("sign-up-button")}>
                              {lesson.registrationButton}
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </SubPageContent> */}

      <SubPageContent className={`body-arranged-md`}>
        <h1 className={"text-center"}>Tygodniowy grafik zajęć</h1>
        <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabContent activeTab={activeTab} />
      </SubPageContent>
    </DefaultLayout>
  );
}
