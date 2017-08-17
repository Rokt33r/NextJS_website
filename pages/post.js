import Layout from '../comps/MyLayout'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

// props를 전달하고,
// <Content />에 url을 연결하지 않으면 오류남
export default (props) => (
  <Layout>
    <Content url={props.url} />
  </Layout>
)