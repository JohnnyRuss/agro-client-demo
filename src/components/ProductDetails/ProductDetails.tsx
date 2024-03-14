import { useSizeChange } from "@/hooks/utils";
import { useGetProductQuery } from "@/hooks/api/products";

import {
  Button,
  Counter,
  ErrorMessage,
  RelativeSpinner,
} from "@/components/Layouts";
import * as Styled from "./productDetails.styled";
import ProductSlider from "./components/ProductSlider";
import RelatedProducts from "./components/RelatedProducts";

type ProductDetailsT = {
  isOnDashboard?: boolean;
};

const ProductDetails: React.FC<ProductDetailsT> = ({ isOnDashboard }) => {
  const { data, status } = useGetProductQuery();

  const {
    size,
    onSizeChange,
    onQuantityChange,
    onIncreaseQuantity,
    onDecreaseQuantity,
  } = useSizeChange(data.sizes);

  return (
    <Styled.ProductDetails>
      {status.status === "SUCCESS" && (
        <div className="details-wrapper">
          <ProductSlider assets={data.assets} />

          <div className="details">
            <p className="details-title">{data.title}</p>

            <div className="details-category">
              <span>კატეგორია:</span>
              &nbsp;
              <span>{data.category.title}</span>
            </div>

            <p className="details-price">150₾</p>

            <p className="details-description">{data.description}</p>

            <div className="details-actions">
              <div className="details-actions__size">
                <label>ზომა:</label>
                &nbsp;
                <select name="size" onChange={onSizeChange}>
                  {data.sizes.map((size) => (
                    <option value={size.size} key={size._id}>
                      {size.size}
                    </option>
                  ))}
                </select>
                &nbsp;
                {size.size && <span>{size.quantity}</span>}
              </div>

              {isOnDashboard ? (
                <></>
              ) : (
                <>
                  <div className="details-actions__quantity">
                    <label>რაოდენობა:</label>
                    &nbsp;
                    <Counter
                      value={size.selectedCount}
                      onChangeCount={onQuantityChange}
                      onDecreaseCount={onDecreaseQuantity}
                      onIncreaseCount={onIncreaseQuantity}
                    />
                  </div>

                  <Button className="details-actions__add-btn" show="secondary">
                    დამატება
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {status.loading && <RelativeSpinner />}

      {status.error && <ErrorMessage message={status.message} />}

      {!isOnDashboard && (
        <RelatedProducts productId={data._id} categoryId={data.category._id} />
      )}
    </Styled.ProductDetails>
  );
};

export default ProductDetails;
