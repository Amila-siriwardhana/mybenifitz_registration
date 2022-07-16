import React, {useState} from "react";
import Dropzone from "react-dropzone";
import {Trash2, Upload} from "react-feather";

type ImageUploadProps = {
  setImageFile: (file: any) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({setImageFile}) => {
  const [fileUrl, setFileUrl] = useState<string>();
  const [imagePresent, setImagePresent] = useState<boolean>(false);

  const handleDrop = (acceptedFiles: any) => {
    setImageFile(acceptedFiles[0]);
    setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    setImagePresent(true);
  }

  const handleImageRemove = () => {
    setImageFile(null);
    setFileUrl(undefined);
    setImagePresent(false);
  }

  return (
    <React.Fragment>

      <Dropzone
        disabled={imagePresent}
        onDrop={handleDrop}
        // accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({getRootProps, getInputProps}) => (
          <div {...getRootProps({className: "dropzone"})}>
            <input {...getInputProps()} />
            <div className="preview-image float-right">

              {fileUrl === undefined ?
                <Upload className="upload-icon" size={30}/> :
                <>
                  <Trash2 className="remove-icon" size={15} onClick={handleImageRemove}/>
                  <img className="image" src={fileUrl} alt="product image"/>
                </>
              }
            </div>
          </div>
        )}
      </Dropzone>
    </React.Fragment>
  );
}

export default ImageUpload;