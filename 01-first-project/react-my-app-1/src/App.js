import logo from './logo.svg';
import './App.css';
import Technologies from './Technologies.js';
import Header from './Header';
import Footer from './Footer';


const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
      <Footer />
    </div>
  );
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hello ! <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
