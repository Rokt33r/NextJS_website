import Link from 'next/link'
import Header from '../comps/Header'
import Layout from '../comps/MyLayout'

const PostLink = (props) => (
  <li>
    <Link
      as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learn Next.js"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)