import Link from 'next/link'
import Layout from '../comps/Layout'

function getPosts () {
  return [
    { id: 'First', title: 'First' },
    { id: 'Second', title: 'Second' }
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        text-decoration: none;
        color: blue;
      }
      a:hover {
        opacity: 0.6;
      }
     `}</style>
  </li>
)

export default () => (
  <Layout>
    <h1>BIYN</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
  </Layout>
)