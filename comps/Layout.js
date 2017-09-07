import Header from './Header'

const layoutStyle = {
  margin: '0 20',
  padding: 20,
  marginTop: '100px'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout