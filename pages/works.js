import Link from 'next/link'
import Layout from '../comps/Layout'

//Stateless function syntax
// const List = function(children) {
//   return (<ul>{children}</ul>)
// }
const Items = [
         {
           id: 0,
           image: 'publyImage',
           text: 'first'
         },
         {
           id: 1,
           image: 'publyImage',
           text: 'second'
         },
         {
           id: 2,
           image: 'publyImage',
           text: 'third'
         }
       ]

const List = Items.map((item) => (
  <li key={item.id}>
    <a>
      <img src={`/assets/${item.image}.jpeg`}/>
      {item.text}
    </a>
  </li>
))

export default () => (
    <Layout>
      <h2>WORKS</h2>
      <div>
        <ul>
          {List}
        </ul>
      </div>
    </Layout>
)

/*export default () => (
  <Layout>
    <h2>WORKS</h2>
    <ul>
      <li>
        <a>Publy Report</a>
      </li>
    </ul>

    <style jsx>{`
          h1, a {
            font-family: "Arial";
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            width: 200px;
            height: 150px;
            background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
          }
          a {
            text-decoration: none;
          }
          a:hover {
            opacity: 0.7
          }
          `}</style>
  </Layout>
)*/