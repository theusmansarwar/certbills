import categoryData from "@/app/Components/data/CategoryData";
import CategoryDetail from "@/app/pages/category-detail/CategoryDetail";

export default function Page({ params }) {
  const { categoryslug } = params;

  const data = categoryData[categoryslug];
  console.log(data);
  

  if (!data) {
    return <div>Category not found</div>;
  }

  return <CategoryDetail data={data} />;
}
