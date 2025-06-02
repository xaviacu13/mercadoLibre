import React, { useState } from "react";
import { Root } from "./styles";
import { NavigationBar, CarouselImg, ImageSelected, ProductInfo } from "./components";
const data = [
  {
    src: "http://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "http://http2.mlstatic.com/D_728476-MLU78878973712_092024-I.jpg",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "http://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: "http://http2.mlstatic.com/D_728476-MLU78878973712_092024-I.jpg",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: "http://http2.mlstatic.com/D_718475-MLU78879161632_092024-O.jpg",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: "http://http2.mlstatic.com/D_728476-MLU78878973712_092024-I.jpg",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: "http://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: "http://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg",
    title: "Mountain view",
    description: "3.98M views",
  },
];

const ProductDetail = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState(data[0]);

  return (
    <>
      <Root>
        <NavigationBar publication={id} />
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
          <CarouselImg
            images={data}
            onSelect={(src) => setSelectedImage(src)}
          />
          <ImageSelected src={selectedImage.src} />
          <ProductInfo/>

        </div>
      </Root>
    </>
  );
};

export default ProductDetail;
