import { DefaultLayout } from "../../../app/layout/DefaultLayout";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
export function PageNotFound() {
  return (
    <DefaultLayout>
      <Breadcrumbs namePage={"404 Page Not Found"} />
      <div>PageNotFound 404</div>
    </DefaultLayout>
  );
}
