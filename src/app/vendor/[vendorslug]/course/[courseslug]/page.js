
import { vendorsCoursesData } from "@/app/Components/data/VendorsCoursesData";
import InDemandCoursesDetail from "@/app/pages/in-demand-courses-detail/InDemandCoursesDetail";

export default function Page({ params }) {
  const { courseslug } = params;
  console.log(courseslug);
  
  const course = vendorsCoursesData.find(c => c.slug === courseslug); //  find course
  console.log(course);
  

  if (!course) {
    return <div>Course not found</div>;
  }

  return <InDemandCoursesDetail data={course} />; //  pass course data
}
