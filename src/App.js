import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './component/Header'
import Card from './component/Card';
import Navbar from './component/Navbar';
import Caraousel from './component/Carousel'
import ProductPage from './component/ProductPage';
import Footer from './component/Footer';

function App() {
	// const data =  [1,2,3,4,5]
	return (
		<>

				<Navbar/>
				<Caraousel/>
				<ProductPage/>
				<Footer/>

		{/* <Card/> */}
		</>
  );
}

export default App;
