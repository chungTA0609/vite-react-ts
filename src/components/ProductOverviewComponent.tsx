import { useAppSelector } from "../app/store/hook";
import ProductOverviews from "./ProductOverviews";
import { useParams } from "react-router-dom";

const ProductOverviewComponent = () => {
  const params = useParams();
  const { productList } = useAppSelector((state) => state.productList);
  return (
    <ProductOverviews
      product={productList.find(
        (e) => e.id === parseInt(params.productId ?? "0")
      )}
    />
  );
};
export default ProductOverviewComponent;
