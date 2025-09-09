
import vendorData from "@/app/Components/data/VendorsData";
import VendorsDetail from "@/app/pages/vendors-detail/VendorsDetail";

export default function Page({ params }) {
  const { vendorslug } = params;

  const data = vendorData[vendorslug];
  console.log(data);
  

  if (!data) {
    return <div>Vendor not found</div>;
  }

  return <VendorsDetail data={data} />;
}
