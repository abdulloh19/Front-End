import { useRouter } from "next/router";
import { withLayout } from "src/layout/Layout";
import Seo from "src/layout/seo/seo";
import { DetailedCourseComponent } from "src/pageComponent";

const CoursesDetailedPage = () => {
  const router = useRouter();
  return (
    <Seo metaTitle={`Sammi course | ${router.query.slug}`}>
      <DetailedCourseComponent />
    </Seo>
  );
};

export default withLayout(CoursesDetailedPage);
