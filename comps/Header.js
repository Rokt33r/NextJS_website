import Link from 'next/link'

const linkStyle = {
  padding: 10,
  lineHeight: 1.2,
  textDecoration: 'none',
  color: '#20b2aa',
  fontSize: '15px'
}

const headerStyle = {
  width: '100%',
  height: '40px',
  padding: 20,
  textAlign: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  backgroundColor: '#fff',
  boxShadow: '0 0.3rem 0.3rem 0 rgba(0,0,0,0.1)'
}

const Header = () => (
  <div style={headerStyle}>
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