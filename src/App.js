import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './component/Header'
import Card from './component/Card';
import Navbar from './component/Navbar';
import Caraousel from './component/Carousel'

function App() {
	// const data =  [1,2,3,4,5]
	return (
		<>
			<Router>
				<Navbar/>
				<Switch>
					<Caraousel/>
				</Switch>
			</Router>
		{/* <Card/> */}
		</>
  );
}

export default App;
