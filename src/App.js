import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Dashboard from './components/dashboard/dashboard';
import Footer from './components/footer/footer';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


function App() {
  return (    
    <div>
     <Container >
       <Row className="row-header">
       <Header></Header>   
       </Row>
       <Row className="row-dashboard">
       <Dashboard></Dashboard>
       </Row>
       <Row className="row-footer">
       <Footer></Footer>
       </Row>
     </Container>
    </div>
  );
}

export default App;
