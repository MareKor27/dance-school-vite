import style from "./socialMedia.module.css";
import useStyles from "../../../app/hooks/useStyle";
import { ExternalPaths } from "../../../app/constants/Paths";
import { Link } from "react-router";

export function SocialMedia() {
  const s = useStyles(style);
  return (
    <div className={s(`social-media`)}>
      <Link to={ExternalPaths.FACEBOOK} className={s("")} target={"_blank"}>
        <img src="/images/icons/icon-facebook.webp" alt={"Ikona Facebook"} />
      </Link>
      <Link to={ExternalPaths.INSTAGRAM} className={s("")} target={"_blank"}>
        <img src="/images/icons/icon-ig.webp" alt={"Ikona Instagram"} />
      </Link>
    </div>
  );
}
