import React, { useState } from "react";
import {
  NavigationBar,
  CarouselImg,
  ImageSelected,
  ProductInfo,
  Description,
} from "./components";
import { Root, ImgContainer, DesContainer, DividerLine } from "./styles";

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
  
];
const description = "iPhone 16 Pro Max. \n\nImponente diseño de titanio. Control de la Cámara. 4K Dolby Vision a 120 cps. Y el chip A18 Pro.\n\n• IMPONENTE DISEÑO DE TITANIO — El iPhone 16 Pro tiene un diseño de titanio resistente y ligero con una pantalla Super Retina XDR más grande, de 6.3 pulgadas.¹ Es increíblemente duradero gracias al Ceramic Shield de última generación, que es dos veces más resistente que cualquier vidrio de smartphone.\n\n• CONTROL DE LA CÁMARA — Con esta nueva funcionalidad podrás acceder fácilmente a las herramientas de la cámara, como el zoom o la profundidad de campo, para que no se te escape ni un momento.\n\n• CAPTURAS SOÑADAS — La cámara Fusion de 48 MP te permite grabar en 4K Dolby Vision a 120 cps para llevar tus videos a otro nivel. Y con la cámara ultra gran angular de 48 MP, tus fotos macro y panorámicas van a tener un nivel de detalle sorprendente.\n\n• ESTILOS FOTOGRÁFICOS — La nueva generación de Estilos Fotográficos te da más libertad creativa para que cada foto tenga tu toque personal. Y gracias a los avances en nuestro procesamiento de imágenes, ahora puedes revertir cualquier estilo en cualquier momento.\n\n• LA POTENCIA DEL CHIP A18 PRO — Este chip es el genio detrás de Apple Intelligence, gracias a su Neural Engine más rápido, su CPU y su GPU mejorados, y un gran salto en el ancho de banda de memoria. También te permite disfrutar funcionalidades avanzadas de foto y video, y juegos AAA.\n\n• UN SALTO ENORME EN BATERÍA — El iPhone 16 Pro es tan potente y eficiente que puede ofrecerte hasta 33 horas de reproducción de video.² Acopla un cargador MagSafe para obtener una carga inalámbrica más rápida o carga a través de la entrada USB-C.³\n\n• PERSONALIZA TU IPHONE — Con iOS 18 puedes cambiar el color de los íconos de la pantalla de inicio a tu gusto. Encuentra tus tomas favoritas en un flash en la rediseñada app Fotos. Y agrega divertidos efectos animados a cualquier palabra, frase o emoji en iMessage.\n\n• FUNCIONALIDADES ESENCIALES DE SEGURIDAD — Con Detección de Choques, el iPhone puede detectar si sufres un accidente grave de auto y pedir ayuda cuando tú no puedes. \n\nAviso legal\n1 Las pantallas tienen las esquinas redondeadas. Si se mide en forma de rectangulo, la pantalla tiene 6.12 pulgadas (iPhone 16), 6.69 pulgadas (iPhone 16 Plus), 6.27 pulgadas (iPhone 16 Pro) o 6.86 pulgadas (iPhone 16 Pro Max) en diagonal. El area real de visualizacion es menor.\t\t\t\t\t\t\t\n2 La duracion de la bateria varia segun el uso y la configuracion. Para obtener mas informacion, visita apple.com/la/batteries/. \t\t\t\t\t\t\t\n3 Los accesorios se venden por separado.\t\t\t\t\t\n4 Algunas funcionalidades podrian no estar disponibles en todos los paises o areas.\t\t\t\t\t\n5 El iPhone 16 y el iPhone 16 Pro pueden detectar si sufres un accidente de auto grave y pedir ayuda. Requiere conexion celular o llamadas por Wi-Fi."

const ProductDetail = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState(data[0]);

  return (
    <Root>
      <NavigationBar publication={id} />
      <ImgContainer>
        <CarouselImg images={data} onSelect={(src) => setSelectedImage(src)} />
        <ImageSelected src={selectedImage.src} />
        <ProductInfo />
      </ImgContainer>
      <DividerLine />
      <DesContainer>
        <Description description={description}/>
      </DesContainer>
    </Root>
  );
};

export default ProductDetail;
