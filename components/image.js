import HyperLink from './hyperlink'

const Image = ({src, ...rest}) => <HyperLink href={src}>
  <img src={src} {...rest} />
</HyperLink>

export default Image
