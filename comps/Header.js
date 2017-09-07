import Link from 'next/link'

const linkStyle = {
  padding: 10,
  lineHeight: 1.2,
  textDecoration: 'none',
  color: '#20b2aa'
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/works">
      <a style={linkStyle}>Works</a>
    </Link>
    <Link href="/archive">
      <a style={linkStyle}>Archive</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
    <style jsx>{`
      a:hover {
        color: white;
      }
      `}</style>
  </div>
)

export default Header