import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Trash2, Upload } from "react-feather";

type ImageUploadProps = {
  setImageFile: (image: {name: string, base64: string} | null) => void;
  setError: (err: string | null) => void;
  minheight?: number;
  minwidth?: number;
  maxheight?: number;
  maxwidth?: number;
  ratio?: [number, number];
  isSquare?: boolean;
};

const ImageUpload: React.FC<ImageUploadProps> = (props: ImageUploadProps) => {
  const { setImageFile, setError, minheight, minwidth, maxheight, maxwidth, ratio, isSquare } = props;

  const [fileUrl, setFileUrl] = useState<string>();
  const [imagePresent, setImagePresent] = useState<boolean>(false);

  const handleDrop = async (acceptedFiles: any) => {    
    await checkDimensionsAndCovertToBase64(acceptedFiles[0])
      .then((res) => {
        if (res.result) {
          setImageFile({name: acceptedFiles[0].name, base64: res.data});
          setError(null);
          setFileUrl(res.data);
          setImagePresent(true);
        }
      })
      .catch((err) => {
        if (err) {
          setError(err.data);
        }
      });
  };

  const handleImageRemove = () => {
    setImageFile(null);
    setFileUrl(undefined);
    setImagePresent(false);
  };

  const checkDimensionsAndCovertToBase64 = (file: any): Promise<{ result: boolean; data: any }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          console.log("img.width: ", img.width);
          console.log("img.height: ", img.height);

          const width = img.width;
          const height = img.height;
          if (minheight && height < minheight) {
            reject({ result: false, data: `Image must be at least ${minheight}px high` });
          } else if (minwidth && width < minwidth) {
            reject({ result: false, data: `Image must be at least ${minwidth}px wide` });
          } else if (maxheight && height > maxheight) {
            reject({ result: false, data: `Image must be at most ${maxheight}px high` });
          } else if (maxwidth && width > maxwidth) {
            reject({ result: false, data: `Image must be at most ${maxwidth}px wide` });
          }

          if (isSquare || ratio) {
            if (isSquare && width === height) {
              resolve({ result: true, data: reader.result });
            } else if (ratio && ratio.length === 2) {
              if (!(width / height === ratio[0] / ratio[1] || height / width === ratio[0] / ratio[1])) {
                reject({ result: false, data: `Image must be of correct ratio` });
              } else {
                resolve({ result: true, data: reader.result });
              }
            }
          }
        };
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Dropzone disabled={imagePresent} onDrop={handleDrop} accept={{ "image/jpeg": [], "image/png": [] }} minSize={1024} maxSize={3072000}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div className="preview-image float-right">
            {fileUrl === undefined ? (
              <Upload className="upload-icon" size={30} />
            ) : (
              <>
                <Trash2 className="remove-icon" size={15} onClick={handleImageRemove} />
                <img className="image" src={fileUrl} alt="logo" />
              </>
            )}
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default ImageUpload;
