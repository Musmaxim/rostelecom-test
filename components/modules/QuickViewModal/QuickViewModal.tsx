import { closeQuickViewModal } from "@/context/modals";
import { formatPrice, removeOverflowHiddenFromBody } from "@/lib/utils/common";
import styles from "@/styles/quick-view-modal/index.module.scss";
import QuickViewModalSlider from "./QuickViewModalSlider";
import { useCartAction } from "@/hooks/useCartAction";
import { useProductImages } from "@/hooks/useProductImages";
import ProductAvailable from "@/components/elements/ProductAvaliable/ProductAvailable";
import ProductColor from "../ProductsListItem/ProductColor";
import ProductComposition from "../ProductsListItem/ProductComposition";
import useLang from "@/hooks/useLang";
import ProductSizeTableBtn from "../ProductsListItem/ProductSizeTableBtn";
import ProductSizesItem from "../ProductsListItem/ProductSizesItem";
import ProductCounter from "../ProductsListItem/ProductCounter";

const QuickViewModal = () => {
  const { lang, translations } = useLang();
  const { product, setSelectedSize, selectedSize } = useCartAction();
  const images = useProductImages(product);
  const handleCloseModal = () => {
    removeOverflowHiddenFromBody();
    closeQuickViewModal();
  };
  return (
    <div className={styles.modal}>
      <button
        className={`btn-reset ${styles.modal__close}`}
        onClick={handleCloseModal}
      />
      <div className={styles.modal__left}>
        <QuickViewModalSlider images={images} />
      </div>
      <div className={styles.modal__right}>
        <h3 className={styles.modal__right__title}>{product.name}</h3>
        <div className={styles.modal__right__price}>
          {formatPrice(+product.price)} Р.
        </div>
        <div className={styles.modal__right__info}>
          <ProductAvailable
            vendorCode={product.vendorCode}
            inStock={+product.inStock}
          />
          <ProductColor color={product.characteristics.color} />
          {product.characteristics?.composiotion && (
            <ProductComposition
              composition={product.characteristics.composiotion}
            />
          )}
          {Object.keys(product.sizes).length ? (
            <div className={styles.modal__right__info__size}>
              <div className={styles.modal__right__info__size__inner}>
                <span className={styles.product__size_title}>
                  {translations[lang].catalog.size}
                </span>
                <ProductSizeTableBtn
                  sizes={product.sizes}
                  type={product.type}
                  className={`sizes-table-btn ${styles.modal__right__info__sizes_btn}`}
                />
              </div>
              <ul className={`list-reset ${styles.modal__right__info__sizes}`}>
                {Object.entries(product.sizes).map(([key, value], i) => (
                  <ProductSizesItem
                    key={i}
                    currentCartItems={[]}
                    currentSize={[key, value]}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className={styles.modal__right__bottom}>
            <span className={styles.product__count_title}>
              {translations[lang].product.count}
            </span>
            <div className={styles.modal__right__bottom__inner}>
              {!!selectedSize ? (
                <ProductCounter
                  className={`counter ${styles.modal__right__bootm__counter}`}
                  count={0}
                />
              ) : (
                <div
                  className={`counter ${styles.modal__right__bottom__counter}`}
                  style={{ justifyContent: "center" }}
                >
                  <span>{translations[lang].product.total_in_cart} 0</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
