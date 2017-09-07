import Link from 'next/link'
import Layout from '../comps/Layout'

import publyImage from '../assets/publy.jpeg'

//Stateless function syntax
// const List = function(children) {
//   return (<ul>{children}</ul>)
// }

const listStyle = {
  listStyle: 'none',
  display: 'block',
}

const pageTitle = {
  margin: '0 auto',
  textAlign: 'center'
}

const Items = [
  {
    id: 0,
    image: 'publyImage',
    text: 'first'
  },
  {
    id: 1,
    image: 'pubpubImage',
    text: 'second'
  },
  {
    id: 2,
    image: 'publyImage',
    text: 'third'
  }
]

const listItems = Items.map((item) => (
  <li key={item.id} style={listStyle}>
    <a>
      <img src={`/assets/${item.image}`}/>
      {item.text}
    </a>
  </li>
))

export default () => (
    <Layout>
      <h2 style={pageTitle}>WORKS</h2>
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    </Layout>
)