import BitMap from 'qrcode.react'
import {QRCode as Vector} from 'react-qr-svg'

const QRView = ({bitmap, ...rest}) => {
  const View = bitmap ? BitMap : Vector
  return <View {...rest} />
}

export default QRView
