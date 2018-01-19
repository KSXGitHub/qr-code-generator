import Link from 'next/link'

const style = {
  textDecoration: 'underline',
  cursor: 'pointer'
}

const HyperLink = attr => <span style={style}>
  <Link {...attr} />
</span>

export default HyperLink
