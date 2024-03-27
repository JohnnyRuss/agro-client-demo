import { getTimeString } from "@/utils";
import { useSearchParams } from "@/hooks/utils";
import { useGetOrderQuery } from "@/hooks/api/dashboard/orders";

import * as Styled from "./styles/orderReview.styled";
import { Spinner, ErrorMessage, Button } from "@/components/Layouts";

import { GroupedOrdersListedOrderCommonProductT } from "@/interface/db/order.types";

type OrderReviewT = {};

const OrderReview: React.FC<OrderReviewT> = () => {
  const { getParam } = useSearchParams();

  const reviewingOrderId = getParam("review-order");
  const isReviewingOrder = reviewingOrderId !== null;

  const { status, data } = useGetOrderQuery();

  const getNestedField = (
    product: GroupedOrdersListedOrderCommonProductT,
    key: string
  ) => {
    const isProductType = product.productType === "PRODUCT";
    const nestedProduct = isProductType ? product.product : product.combo;
    return nestedProduct[key as keyof typeof nestedProduct];
  };

  return (
    <Styled.OrderReview>
      {isReviewingOrder ? (
        <div className="invoice">
          {status.loading && <Spinner />}

          {status.error && <ErrorMessage message={status.message} />}

          {status.status === "SUCCESS" && (
            <>
              <div
                className={`order-status ${
                  data.status === "APPROVED"
                    ? "succeed"
                    : data.status === "REJECTED"
                    ? "rejected"
                    : "pending"
                } `}
              />

              <header className="invoice-header">
                <div className="invoice-header__left">
                  <figure className="invoice-logo__small">
                    <img src="/assets/logo-small.webp" alt="agro-ornament" />
                  </figure>

                  <div className="invoice-info">
                    {/* <p>
                      <span>ინვოისის ნომერი:</span>
                      &nbsp;
                      <span>1</span>
                    </p> */}

                    <p>
                      <span>შეკვეთის თარიღი:</span>
                      &nbsp;
                      <span>
                        {getTimeString(data.createdAt, "dayMonthYearConfig")}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="invoice-header__right">
                  <figure className="invoice-logo__text">
                    <img src="/assets/text-logo.webp" alt="agro-ornament" />
                  </figure>
                </div>
              </header>

              <div className="invoice-sub--head">
                <div>
                  <p>კომაპანია:</p>
                  <p>AGRO-ORNAMENT</p>
                  <p>კომპანიის მისამართი და ZIP კოდი</p>
                  <p>ტელ. ნომერი</p>
                </div>

                <div>
                  <p>მომხმარებელი:</p>
                  <p>{data.customerName}</p>
                  <p>{data.customerAddress}</p>
                  <p>{data.customerPhone}</p>
                  <p>{data.customerId}</p>
                </div>
              </div>

              <div className="invoice-body">
                <div className="invoice-body__grid-col">
                  <p>პროდუცქტი</p>
                  <p>ზომა</p>
                  <p>რაოდენობა</p>
                  <p>ფასი</p>
                  <p>ჯამი</p>
                </div>

                {data.products.map((product) => (
                  <div className="invoice-body__grid-col" key={product._id}>
                    <p>{getNestedField(product, "title")}</p>
                    <p>{product.size}</p>
                    <p>{product.quantity}</p>
                    <p>{getNestedField(product, "price")}</p>
                    <p>
                      {product.quantity *
                        (getNestedField(product, "price") as number)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="invoice-footer">
                <span>{data.totalPrice}₾</span>
              </div>

              <div className="invoice-actions">
                <Button show="danger">შეკვეთის გაუქმება</Button>
                <Button show="primary">გადაიყვანე მომლოდინე რეჟიმში</Button>
                <Button show="secondary">შეკვეთის დადსტურება</Button>
              </div>

              {/* <div className="invoice-total"></div> */}
            </>
          )}
        </div>
      ) : (
        <figure className="invoice-fig">
          <img src="/assets/invoice.jpg" alt="" />
        </figure>
      )}
    </Styled.OrderReview>
  );
};

export default OrderReview;
