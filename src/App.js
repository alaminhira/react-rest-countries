import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <h1>Hi from App</h1>
      <Countries></Countries>
    </div>
  )
}



































// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data));
//   }, [])

//   return (
//     <div>
//       <h1>Visition every country of the world!!!</h1>
//       <h4>Available countries {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div className="country">
//       <h3>{props.name}</h3>
//       <h4>Populaion: {props.population}</h4>
//     </div>
//   )
// }
































// function LoadComments() {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => setComments(data));
//   }, []);

//   return (
//     <div className='comment-list'>
//       <h2>Comments: {comments.length}</h2>
//       {
//         comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
//       }
//     </div>
//   )
// }

// function Comment(props) {
//   return (
//     <div className='comment'>
//       <h3>Email: {props.email}</h3>
//       <p>{props.body}</p>
//     </div>
//   )
// }

// function ExternalUsers() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => setUsers(data));
//   }, []);

//   return (
//     <div className='users'>
//       {
//         users.map(user => <User name={user.name} email={user.email}></User>)
//       }
//     </div>
//   )
// }

// function User(props) {
//   return (
//     <div className='user' style={{border: '1px solid #777', padding: '1.5rem', margin: '1rem', display: 'inline-block'}}>
//       <h3>Name: {props.name}</h3>
//       <h3>Email: {props.email}</h3>
//     </div>
//   )
// }

// function Counter() {
//   const [count, setCount] = useState(35);

//   const increase = () => setCount(count + 1);
//   const decrease = () => setCount(count - 1);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   )
// }

// const headingStyles = {
//   fontWeight: 'bold',
//   fontSize: '3rem',
//   borderBottom: '1px solid #fafafa',
//   marginBottom: '2rem'
// }

// const products = [
//   { name: 'Laptop', price: '74500', brand: 'Lenevo' },
//   { name: 'Phone', price: '19500', brand: 'Xiaomi' },
//   { name: 'Watch', price: '10500', brand: 'Rollax' },
//   { name: 'Car', price: '7450000', brand: 'Ferarri' },
//   { name: 'Bike', price: '450000', brand: 'Honda' }
// ];

// function App() {
//   return (
//     <div className="App">
//       <h1 style={headingStyles}>Product List</h1>
//       {
//         products.map(product => <Product name={product.name} price={product.price} brand={product.brand}></Product>)
//       }
//       <h2 className='plain'>This is plain HTML</h2>
//       <Person></Person>
//     </div>
//   );
// }

// const Product = ({ name, brand, price })=> {
//   return (
//     <div className="product">
//       <h3>Name: {name}</h3>
//       <h4>Brand: {brand}</h4>
//       <h5>Price: {price}</h5>
//     </div>
//   )
// }

// function Person(props) {
//   console.log(props)
//   return (
//     <div className='grid-item'>
//       <h2></h2>
//       <div>Hi from person</div>
//     </div>
//   )
// }


export default App;
