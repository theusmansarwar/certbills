
import { coursesData } from "@/app/Components/data/CourseData";
import InDemandCoursesDetail from "@/app/pages/in-demand-courses-detail/InDemandCoursesDetail";

export default function Page({ params }) {
  const { courseslug } = params;
  console.log(courseslug);
  
  const course = coursesData.find(c => c.slug === courseslug); //  find course

  if (!course) {
    return <div>Course not found</div>;
  }

  return <InDemandCoursesDetail data={course} />; //  pass course data
}
