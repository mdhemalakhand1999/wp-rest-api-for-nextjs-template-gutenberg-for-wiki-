import BreadcrumbSection from '../breadcrumb/BreadcrumbSection';
import ProductDetailSection from '../product/ProductDetailSection';
import RelatedProductSection from '../product/RelatedProductSection';
const ShopDetailsMain = ({product,allProduct}) => {
  return (
    <>
      <BreadcrumbSection title={"Shop Details"} current={"Shop Details"} />
      <ProductDetailSection product={product} allProduct={allProduct}/>
      <RelatedProductSection allProduct={allProduct}/>
    </>
  );
};

export default ShopDetailsMain;
