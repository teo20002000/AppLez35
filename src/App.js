import Typography from './Components/Typography.jsx';
import Card from './Components/Card.jsx'
import './App.css';


function App() {
  return ( <>
  <Typography>Typography : normal</Typography> <br />
  <Typography color={{color:"#519C11"}}>Typography color</Typography> <br />
  <Typography componentType="h1">Typography : title</Typography> <br />
  <Card title="card-title" image="./SimpleCode.jpg">Card</Card>
  </>
  );
}

export default App;
