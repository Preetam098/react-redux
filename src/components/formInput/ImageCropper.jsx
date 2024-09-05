import Modal from "../Modal";
import { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import FilledButton from "../FilledButton";
import OutlinedButton from "../OutlinedButton";

const ImageCropper = ({ image, isOpen, onClickOutSide, onSubmit }) => {
  const cropperRef = useRef(null);
  const getCropData = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => {
        const file = new File([blob], "croppedImage.jpeg", {
          type: "image/jpeg",
        });
        onSubmit(file); // return file after crop
      }, "image/jpeg");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClickOutside={onClickOutSide}
      className="my-24 rounded-lg relative w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto bg-white h-2/3"
    >
      <div className="relative w-full h-[82%]">
        <Cropper
          style={{ height: 400, width: "100%" }}
          initialAspectRatio={3 / 4}
          preview=".img-preview"
          src={image}
          ref={cropperRef}
          viewMode={1}
          guides={false}
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4 p-4 justify-between w-full">
        <OutlinedButton name="Cancel" event={onClickOutSide} />
        <FilledButton name="Applied" event={getCropData} />
      </div>
    </Modal>
  );
};

export default ImageCropper;
