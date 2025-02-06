import { DefaultLayout } from "../../../app/layout/DefaultLayout";
import style from "../../../app/components/subPageContent/subPageContent.module.scss";
import useStyles from "../../../app/hooks/useStyle";
import { useState } from "react";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { SubPageContent } from "../../../app/components/subPageContent/SubPageContent";

type TabType = {
  id: string;
  label: string;
  content: JSX.Element;
};

type TabMenuProps = {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
};

type TabContentProps = {
  activeTab: string;
};

export function Offert() {
  const tabs: TabType[] = [
    { id: "firstTab", label: "Zajęcia grupowe", content: <ZajeciaGrupowe /> },
    {
      id: "secondTab",
      label: "Lekcje indywidualne",
      content: <LekcjeIndywidualne />,
    },
    {
      id: "thirdTab",
      label: "Wieczory panieńskie",
      content: <WieczoryPanienskie />,
    },
  ];

  function TabMenu({ activeTab, setActiveTab }: TabMenuProps) {
    return (
      <div className={s("tab-menu")}>
        {tabs.map(({ id, label }) => (
          <div
            key={id}
            className={
              activeTab === id ? s("tab-title active") : s("tab-title")
            }
            onClick={() => setActiveTab(id)}
          >
            {label}
          </div>
        ))}
      </div>
    );
  }

  function TabContent({ activeTab }: TabContentProps) {
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
    return <div className={s("tabs-content")}>{activeTabContent}</div>;
  }

  const s = useStyles(style);
  const [activeTab, setActiveTab] = useState<string>("firstTab");

  return (
    <DefaultLayout>
      <Breadcrumbs namePage={"Oferta"} />
      <SubPageContent className={`body-arranged-md`}>
        <h1 className={`text-center`}>Oferta taneczna</h1>
        <div className={s(`tab-modul`)}>
          <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent activeTab={activeTab} />
        </div>
      </SubPageContent>

      {/* <SubPageContent className={`body-arranged-md`}>
        <h1 className={`text-center`}>Oferta</h1>
        <div className={s(`tab-modul`)}>
          <div className={s(`tab-menu`)}>
            <div
              className={
                activeTab === "firstTab"
                  ? s(`tab-title active`)
                  : s(`tab-title`)
              }
              onClick={() => setActiveTab("firstTab")}
            >
              Zajęcia grupowe
            </div>
            <div
              className={
                activeTab === "secondTab"
                  ? s(`tab-title active`)
                  : s(`tab-title`)
              }
              onClick={() => setActiveTab("secondTab")}
            >
              Lekcje indywidualne
            </div>
            <div
              className={
                activeTab === "thirdTab"
                  ? s(`tab-title active`)
                  : s(`tab-title`)
              }
              onClick={() => setActiveTab("thirdTab")}
            >
              Wieczory panieńskie
            </div>
          </div>
          <div className={s(`tabs-content`)}>
            <div
              className={activeTab === "firstTab" ? s(`tab active`) : s(`tab`)}
            >
              tab1
            </div>
            <div
              className={activeTab === "secondTab" ? s(`tab active`) : s(`tab`)}
            >
              tab2
            </div>
            <div
              className={activeTab === "thirdTab" ? s(`tab active`) : s(`tab`)}
            >
             tab3
            </div>
          </div>
        </div>
      </SubPageContent> */}
    </DefaultLayout>
  );
}

const ZajeciaGrupowe = () => (
  <div>
    <h4>DISCOFOX DLA PAR </h4>
    <p>
      Discofox to taniec użytkowy, w Polsce przyjęła się także nazwa „dwa na
      jeden” (2 na 1). Discofox możemy tańczyć prawie do każdej muzyki
      dyskotekowej, niezależnie od jej tempa. Kroki i przejścia taneczne tego
      tańca to kompilacja wielu styli tanecznych, zawiera elementy samby, salsy,
      cha-cha-cha, rock and rolla a nawet jazz, dzięki temu jest ciekawy i
      nieskomplikowany zarazem. Discofox to taniec użytkowy, którego największą
      zaletą jest uniwersalność, gdyż może być tańczony praktycznie do każdej
      muzyki i na każdej imprezie. Jest to idealny taniec na wesele zarówno dla
      gości jak i dla pary młodej jako pierwszy taniec weselny.
    </p>
    <h4>KURS TAŃCA TOWARZYSKIEGO DLA PAR</h4>
    <p>
      Na kursach podstawowych realizowany jest światowy program taneczny, czyli
      wszystkie tańce, które mogą być przydatne zarówno na eleganckim bankiecie,
      jak i na zabawie weselnej. Nauką objęte są tańce standardowe-walc
      angielski, tango, walc wiedeński oraz tańce latynoamerykańskie-salsa, cha
      cha, jive, bachata.
    </p>
    <h4>KURS TAŃCA TOWARZYSKIEGO I UŻYTKOWEGO DLA SINGLI</h4>
    <p>
      Jeśli chcesz nauczyć się tańca towarzyskiego a nie masz partnera lub
      partnerki, to właśnie specjalnie dla Ciebie przygotowaliśmy ten kurs. Jest
      to również okazja do miłego spędzania wolnego czasu i zawarcia nowych
      znajomości. W programie kursu znajdują się tańce: standardowe: walc
      angielski, tango, walc wiedeński latynoamerykańskie: salsa, cha cha, jive,
      bachata taniec użytkowy: discofox. Na kursie jest taka sama liczba pań i
      panów. Podczas każdych zajęć odbywają się zamiany partnerów.
    </p>
    <h4>LATINO SOLO</h4>
    <p>
      Latino solo to niezwykle żywiołowe rytmy tańców latynoamerykańskich:
      samby, salsy, bachaty, rumby, cha chy, jive’a oraz pasodouble. To zajęcia
      przeznaczone dla osób, które chcą poznać tańce latynoamerykańskie i
      nauczyć się tańczyć je bez partnera. Jest to również lekcja gracji. Tu
      wiek nie gra roli. Tańcząc lepiej poznacie swoje ciało, nauczycie się
      ładnie poruszać, nabieracie pewności siebie i przypominacie sobie jaką
      radość daje taniec. Tańce w rytmach latynoskich sprawiają, iż każdy
      mięsień nabierze sprężystości.
    </p>
    <h4> SALSA SOLO</h4>
    <p>
      Salsa solo to znakomity sposób na rozwijanie własnych umiejętności
      tanecznych, a także na poprawę kondycji i utrzymanie linii. Daj ponieść
      się gorącym latynoskim rytmom! Zajęcia prowadzone solo, w których mogą
      uczestniczyć Panie jak również Panowie. To taniec dla każdego, ponieważ
      łatwo nauczyć się jej podstaw, a potem stopniowo doskonalić umiejętności.
      Salsa pasuje do prawie każdej muzyki, a więc jest bardzo praktyczna. Salsa
      pozwala na improwizację – nawet tańczona w parze, a przede wszystkim jest
      pełna humoru i pozwala dobrze się bawić.
    </p>
    <h4>BROADWAY JAZZ </h4>
    <p>
      Technika tańca łącząca w sobie taniec jazzowy, klasyczny, stepowy,
      rewiowy. Niezwykle ekspresyjna i widowiskowa. Podczas zajęć poznasz kroki
      tańca musicalowego, które przeniosą Cię do Ameryki lat 20. Jeśli chcesz
      poczuć się jak na scenie nowojorskiego Broadwayu i zatańczyć jak bohaterki
      znanych musicali, te zajęcia są dla Ciebie!
    </p>
    <h4>JAZZ</h4>
    <p>
      Jego podstawą jest technika tańca klasycznego. Styl ten pozwala na
      wyrażanie emocji poprzez wykorzystanie naturalnych ruchów i możliwości
      ludzkiego ciała. Jazz to taniec kontrastów i poprzez to daje
      niewiarygodnie szeroki wachlarz środków wyrazu. To połączenie unoszenia i
      opadania, dynamiki i liryki, ekspresji i wyciszenia. Nic dziwnego, że
      zdobywa rzesze miłośników pragnących poprzez taniec wyrazić swoją
      osobowość. Taniec jazzowy to jeden z najpopularniejszych stylów
      tanecznych, który nieodłącznie kojarzy się z konwencją teatru muzycznego.
      Charakterystyczne cechy jazzu to: pulsacja swingowa, kształtująca
      indywidualny, wewnętrzny rytm, niezależny od akompaniamentu muzycznego
      oraz policentryzm, czyli izolowanie poszczególnych części ciała tak, by
      móc poruszać nimi niezależnie. Korzenie tańca jazzowego sięgają Afryki. W
      kulturze afrykańskiej słowo "jazz" oznaczało siłę, gwałtowność, ekstazę.
      Jazz to fuzja różnych technik tanecznych, które zaowocowały niezwykłym
      wachlarzem możliwości ruchowych, zapewniając radość z tańca, a także
      znakomity efekt wizualny. Ekspresyjne użycie rąk, ramion i nóg; obroty i
      podskoki - to wszystko odgrywa dużą rolę i pomaga w budowaniu silnych a
      jednocześnie płynnych, gładkich i bardzo technicznych układów.
    </p>
    <h4>PILATES</h4>
    <p>
      Pilates to trening całego ciała, połączenie ćwiczeń inspirowanych jogą,
      baletem i ćwiczeniami izometrycznymi (siłowymi). Jego celem jest
      wzmocnienie mięśni bez ich nadmiernego rozbudowania, odciążenie
      kręgosłupa, poprawa postawy, uelastycznienie ciała, obniżenie poziomu
      stresu oraz ogólna poprawa zdrowia. Główną zaletą tej metody jest prostota
      ćwiczeń, które trenują nasz umysł i ciało. Tego właśnie brakuje nam , aby
      po ciężkim dniu pracy wykonać kilka prostych ruchów ,i pozbyć się
      skumulowanego napięcia, rozluźnić się i nabrać siły.
    </p>
    <h4>STRETCHING</h4>{" "}
    <p>
      To kombinacja ćwiczeń wzmacniających całe ciało w połączeniu z intensywnym
      rozciąganiem. Jeśli szukasz dynamicznego pełnego podskoków treningu – te
      zajęcia nie będą w Twoim guście. Tu stawiamy na wsłuchanie się w swoje
      ciało i wyciszamy poprzez specjalnie ułożoną sekwencje ćwiczeń. Powoli
      poznajemy i zwiększamy możliwości swojego ciała. Taki trening jest
      doskonałym uzupełnieniem innych ćwiczeń. Może też występować samodzielnie
      bo zwiększa siłę i wydolność organizmu. Streching zwiększa napływ krwi do
      mięśni i rozluźnia, przyspieszając regenerację i spalanie tkanki
      tłuszczowej; powiększa ruchomość stawów, dzięki czemu zachowujesz
      prawidłową sylwetkę i nabierzesz sprawności.
    </p>
    <h4>BURLESKA</h4>
    <p>
      Burleska to teatralna forma tańca rewiowego, której tradycyjnymi
      elementami są kobiece ruchy, szyk i elegancja. Styl ten pomaga odkryć
      prawdziwą kobiecość i oswoić się ze swoim ciałem. Zajęcia te przeznaczone
      są tylko i wyłącznie dla Pań – bardzo kobiece, zmysłowe ruchy, którym
      towarzyszy odpowiedni strój i rekwizyty. Tańczymy z wykorzystaniem
      krzeseł, jako atrybutu tanecznego. Taniec ten sprawia, że nawet
      najbardziej nieśmiałe panie wydobywają z siebie odrobinę seksapilu :)
      Taniec burleska pierwotnie był artystycznym pastiszem przedstawień
      operowych. Później wpleciono inne elementy i dodano bogatą w sceniczne
      rekwizyty erotyczną oprawę. Mimo że burleska jest zdominowana przez
      kobiety, mężczyźni również zajmują się tym rodzajem sztuki. Burleska ma
      wiele nawiązań stylistycznych do pin-up. Ważne jest podkreślanie kobiecych
      kształtów i emanowanie sex appealem. Dużym atutem jest... praca z
      rekwizytem !!! Kapelusz, parasol, wachlarz, krzesło - będziemy tańczyć
      prawie ze wszystkim.
    </p>
    <h4>SEXY DANCE</h4>{" "}
    <p>
      Zajęcia oparte są na układzie choreograficznym, w który wplatane są
      niezwykle kobiece oraz bardzo zmysłowe ruchy. Sexy Dance doskonale wpływa
      zarówno na ciało jak i psychikę. Zajęcia wzmacniają i rozciągają mięśnie,
      uczy się również na nich seksownego sposobu poruszania. Uczestniczki
      pracują nie tylko nad swoją powłoką cielesną ale i nad swym podejściem do
      niej.. Ta oryginalna mieszanka miękkości, namiętności i szybkich,
      dynamicznych ruchów stanowi wspaniały sposób na odnalezienie własnego
      stylu.
    </p>
    <h4>CHAIR DANCE</h4>
    <p>
      Jest to taniec z wykorzystaniem krzesła. Na zajęciach odkryjesz swoje
      różne strony - zarówno własnej kobiecości, jak i kreatywności. Na
      zajęciach uczymy się płynnego poruszania w tańcu, a także różnych
      nietypowych technik z wykorzystaniem krzesła, o których dowiesz się na
      zajęciach. Jeżeli chciałabyś próbować czegoś nietypowego i nietuzinkowego,
      to te zajęcia są właśnie dla Ciebie Nie zabraknie ciekawych rozwiązań i
      artystycznych choreografii. Na jednych zajęciach stawiamy na kobiecość, na
      innnych zaś na wyraz artystyczny w tańcu Różnorodność to drugie imię tych
      zajęć.
    </p>
    <h4>HIGH HEELS</h4>
    <p>
      Zajęcia, na których uczymy się poruszać oraz tańczyć na obcasach. Jeżeli
      chciałabyś swobodnie tańczyć zarówno na imprezach, jak i masz ochotę
      wyrazić swoje emocję oraz artystyczną stronę swojej duszy w tańcu - to
      zajęcia dla Ciebie. Na zajęciach pracujemy nad odpowiednią sylwetką,
      postawą, pewnością siebie, rozciągnięciem, a także nad tym aby jak
      najswobodniej poruszać się w tańcu. Od czasu do czasu nie zabraknie
      również floor-worku, czyli pracy z podłogą. Zajęcia dedykowane są dla
      kobiet, które pragną poruszać się zmysłowo i z gracją. Zwiększają
      świadomość własnego ciała, poprawiają sylwetkę oraz uczą chodzenia i
      tańczenia na obcasach. W choreografie wplatane są zmysłowe kocie ruchy,
      dlatego na tych zajęciach poczujesz się jak tancerka z teledysku.
    </p>
    <h4>LADIES CHOREO</h4>
    <p>
      Kto rządzi światem ? Dziewczyny !! Odrkryj swoją kobiecość i pewność
      siebie tańcząc do ulubionych piosenek. Ladies choreo zawiera w sobie
      elementy sexy dance, burleski, tańca na krzesłach - ale przede wszytskim
      uczy znajomości własnego ciała oraz pewności siebie więc jest to coś dla
      każdej z nas !!
    </p>
    <h4>TANIEC BRZUCHA</h4>
    <p>
      Tradycyjny orientalny taniec kobiet, wyzwalający to, o najbardziej
      uwodzicielskie i zmysłowe. Ta forma ruchu rozwija mięśnie kręgosłupa,
      rozluźnia stawy bioder, miednicy, ramion oraz szyi. Tancerki odnajdują w
      sobie miękkość i zmysłowość. W tańcu wykorzystuje się przepiękne
      orientalne ozdobne pasy, które zawiązujemy wokół bioder: pomagają one
      doskonalić technikę i .... kuszą. Subtelna muzyka, dzwonienie ozdób na
      pasach, szmer kobiecych szeptów oraz prawdziwa tajemnica
    </p>
    <h4>ZUMBA</h4>{" "}
    <p>
      Zumba® to zainspirowana latynoskimi rytmami fuzja tańca i aerobiku. Zumba
      jest bardzo innowacyjnym systemem fitness, który poprzez świetną zabawę
      kształtuje naszą sylwetkę, dba o naszą kondycję, a przede wszystkim napawa
      nas optymizmem i wprawia nas w świetne samopoczucie, które zostaje na
      długo, długo poza zajęciami. Proste kroki taneczne, świetne kombinacje
      ruchów i motywująca muzyka stwarza atmosferę świetnej imprezy i totalnie
      porywa nas do zabawy. Bardzo dynamiczna i ekscytująca kombinacja rytmów
      latynoskich i międzynarodowych, tj. merengue, salsa, cumbia, reggeaton,
      flamenco, samba, taniec brzucha, cha-cha, rumba .... i wiele innych.
    </p>
    <h4>SALSATION</h4>{" "}
    <p>
      Salsation to program taneczno fitnessowy. Łączy miłość do tańca z
      elementami treningu funkcjonalnego. Idea , która przyświeca salsation to
      skupienie się na emocjach. Każda choreografia opowiada inną historię i
      inne uczucia. Choreografie to sekwencje pewnych kroków, które powtarzają
      się przy określonym fragmencie muzycznym. najważniejsza jest muzyka !
      Zadaniem choreografii jest podkreślenie muzyki, zwrócenie uwagi na zmiane
      tempa, wejście nowego instrumentu, na pojawiający się akcent. Zajęcia
      salsation uczą kontroli nad ruchem ciała podczas tańca. Są zbudowane w
      taki sposób, aby zwiększyć świadomość swojego ciała.
    </p>
    <h4>SHUFFLE DANCE</h4>
    <p>
      Taniec polegający na pozornym "ślizganiu się" po parkiecie. Jest to taniec
      freestylowy. Wyróżniamy dwa podstawowe kroki: running man oraz shuffle.
      Shuffle dance to współczesna wersja tańca ulicznego! Ten żywiołowy taniec
      do muzyki elektronicznej powstał w Australii. Nauczysz się od prostych
      połączeń kroków do trochę bardziej skomplikowanych układów, nauczysz się
      improwizować! Swobodny i radosny styl tańca, który może tańczyć każdy
      niezależnie od wieku!
    </p>
    <h4>LATIN FUSION</h4>
    <p>
      Latin fusion to miszanka różnych stylów tańca latynoskiego wzbogaconego
      elementami innych współczesnych stylów z naciskiem na taniec komercyjny.
      Zajęcia skierowane do kobiet.
    </p>{" "}
  </div>
);

const LekcjeIndywidualne = () => (
  <div>
    <h4>LEKCJE INDYWIDUALNE</h4>
    <p>
      Proponujemy lekcje dla par i pojedynczych osób. Można samemu wybrać
      dowolne tańce i zdecydować o tempie nauczania. Bezpośredni kontakt z
      instruktorem pomaga dokładniej przyswoić taneczną wiedzę. Taką formę
      nauczania polecamy osobom nieśmiałym, które nie mają odwagi przyjść na
      kurs tańca lub nie mają na to czasu. Często jedna lub kilka lekcji mogą
      pomóc w przezwyciężeniu własnych drobnych słabości. Tempo zajęć, poziom
      nauki tańca oraz tańce dostosowane są do Państwa potrzeb.
    </p>

    <h4>LEKCJE DOKSZTAŁCAJĄCE </h4>
    <p>
      Z tej formy korzystają osoby, które: potrafią tańczyć i chcą poprawić
      jakość swojego tańca, muszące uzupełnić zaległości w tańcu bądź uzupełnić
      repertuar kursu tańca mające problemy z poszczególnymi krokami lub
      figurami, przygotowują się do pokazu na specjalna imprezę (np. własne
      wesele) i chcą indywidualnie dopracować wszystkie szczegóły, przypomnieć
      sobie kroki, dopasować choreografię do wielkości sali lub do wybranej
      przez siebie muzyki itp.
    </p>

    <h4>LEKCJE DLA NARZECZONYCH – PIERWSZY TANIEC</h4>
    <p>
      <b>Proponujemy:</b> Przygotowanie do pierwszego tańca Młodej Pary na
      weselu: kroki i choreografia do wybranego tańca, prezentacja przed, w
      trakcie i po pokazie, właściwa postawa. Naukę potrzebnych tańców do zabawy
      z gośćmi
      <p>150 zł: 1 godzina </p>
      <p>600 zł: pakiet 5 godzin (płatne z góry)</p>
      <p>5 godzin w ramach piekietu należy zrealizoawać w ciągu 3 miesięcy.</p>
    </p>
  </div>
);

const WieczoryPanienskie = () => (
  <div>
    <h4>WIECZORY PANIEŃSKIE</h4>
    <p>
      Chcesz spędzić swój wieczór panieński zupełnie inaczej niż wszyscy? A może
      zafundować taki wieczór swojej przyjaciółce? Spotkajmy się u nas ={">"} w
      studiu tańca Max Dance ={">"} Zorganizujemy Wam niepowtarzalny wieczór
      panieński. Proponujemy Wam godzinny kurs Burleski, Tańca Brzucha, Sexy
      Dance, Dancehall'u, High Heels, Chair Dance, Salsy, Bachaty, Twerku i
      czego tylko zapragniecie! Nasi instruktorzy dodadzą Wam pewności siebie i
      podpowiedzą jak umiejętnie i z wdziękiem prezentować swoją kobiecość. Te
      niezwykłe zajęcia dadzą Wam ogromną dawkę muzycznej energii i tanecznych
      umiejętności, które wykorzystacie tego wieczoru. Gorąca muzyka i szalony
      taniec... zapewniamy dobrą zabawę, która będzie świetnym rozpoczęciem tego
      zwariowanego wieczoru. Po wyjściu od nas, Wszystkie będziecie królować na
      parkiecie!
    </p>{" "}
    <p>
      Wszystkie kwestie dotyczące programu zajęć, instruktora, muzyki oraz
      sposobu organizacji ustalamy wspólnie z Państwem. Zapraszamy w tygodniu
      oraz w weekendy.{" "}
    </p>
    <p>
      <b>Koszt lekcji za grupę:</b>{" "}
      <ul>
        <li>- do 9 osób 200 zł</li>
        <li>- 9 osób i powyżej 250 zł</li>
      </ul>{" "}
      Po ustaleniu terminu, godziny oraz stylu tanecznego potwierdzeniem
      rezerwacji jest uiszczenie opłaty min. na 2 tygodnie przed wieczorem
      panieńskim. Zapraszamy !!!
    </p>
  </div>
);
