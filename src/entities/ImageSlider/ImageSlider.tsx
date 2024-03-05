import { styles } from 'entities/ImageSlider/ImageSlider.styles'
import React from 'react'

type Props = {
  images: string[]
}

export const ImageSlider: React.FC<Props> = ({ images }) => {
  // const [currentImage, setCurrentImage] = useState(images[0])
  return (
    <>
      {/* <div className={styles.arrowLeft}></div> */}
      <img className={styles.gamePageCardImg} src={images[0]} alt="" />
    </>
  )
}
