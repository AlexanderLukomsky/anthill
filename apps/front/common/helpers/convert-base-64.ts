import { Nullable } from 'common/types';

export type ConvertedImageType = {
  name: string;
  src: string;
  dimensions: {
    width: number;
    height: number;
  };
};

export const convertFileToBase64 = async (
  file: File,
  onSuccess?: (image: ConvertedImageType) => void,
  onError?: (error?: string) => void,
): Promise<Nullable<ConvertedImageType>> =>
  new Promise<Nullable<ConvertedImageType>>((res) => {
    const regEx = /\.(jpe?g|png|gif|bmp|svg)$/i;

    if (!regEx.test(file.name)) {
      if (onError) onError('image error');

      res(null);

      return;
    }

    const reader = new FileReader();

    const image = new Image();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      image.src = reader.result as string;

      image.onload = () => {
        if (typeof reader.result === 'string') {
          const convertedImage: ConvertedImageType = {
            name: file.name,
            src: reader.result,
            dimensions: {
              width: image.width,
              height: image.height,
            },
          };

          if (onSuccess) onSuccess(convertedImage);
          res(convertedImage);
        }
      };

      image.onerror = () => {
        if (onError) onError('image error');
        res(null);
      };
    };
  });
