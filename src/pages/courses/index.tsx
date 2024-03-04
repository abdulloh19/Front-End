import { withLayout } from "src/layout/Layout";
import { CoursesPageComponent } from "src/pageComponent";

const courses = () => {
  return <CoursesPageComponent />;
};

export default withLayout(courses);
