import { useSearchParams } from "@/hooks/utils";

import { comboStore } from "@/store";

import * as Styled from "./styles/chooseThumbnails.styled";
import { ArrowLeftIcon } from "@/components/Layouts/Icons";

type ChooseThumbnailsT = {};

const ChooseThumbnails: React.FC<ChooseThumbnailsT> = () => {
  const { removeParam } = useSearchParams();

  const addedProducts = comboStore.use.addedProducts();
  const toggleAsset = comboStore.use.toggleExistingAsset();
  const addedAssets = comboStore.use.existingAssets();

  const images = addedProducts
    .flatMap((product) => product.assets)
    .filter((asset) => asset.endsWith(".webp"));

  const onToggleMedia = (src: string) => toggleAsset(src);

  const onDoneSelectMedia = () => removeParam("media");

  // TODO:
  // 1. Create set from images array
  // 2. show videos as well

  return (
    <Styled.ChooseThumbnails>
      <div className="assets-box--head">
        <button
          onClick={onDoneSelectMedia}
          className="assets-box--head__back-btn"
        >
          <ArrowLeftIcon />
        </button>

        <span>
          არჩეულია &nbsp;
          <strong>
            {addedAssets.length}/{images.length}
          </strong>
        </span>
      </div>

      {images.length > 0 ? (
        <div className="assets-box__list-wrapper">
          <div className="assets-box__list">
            {images.map((src) => (
              <img
                src={src}
                alt={src}
                title={src}
                width="100%"
                loading="lazy"
                onClick={() => onToggleMedia(src)}
                className={addedAssets.includes(src) ? "selected" : ""}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="added-products__assets-msg">
          დამატებული პროდუქტები არ ფიქსირდება
        </p>
      )}

      <button className="assets-box__done-btn" onClick={onDoneSelectMedia}>
        დასრულება
      </button>
    </Styled.ChooseThumbnails>
  );
};

export default ChooseThumbnails;
