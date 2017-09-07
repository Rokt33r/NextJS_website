import Link from 'next/link'
import Layout from '../comps/Layout'
import publy from '../static/images/publy.jpeg'

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
    image: 'publy',
    text: 'first'
  },
  {
    id: 1,
    image: 'publy',
    text: 'second'
  },
  {
    id: 2,
    image: 'publy',
    text: 'third'
  }
]

const listItems = Items.map((item) => (
  <li key={item.id} style={listStyle}>
    <a>
      {/*<img src={$(require('../static/images/publy.jpeg'))}/>*/}
      <img src={`/assets/${item.image}.jpeg`}/>
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