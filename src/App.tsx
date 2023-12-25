import './App.css';
import FooterComponent from './components/footer/footer.component';
import HomeComponent from './components/home/home.component';
import './components/navbar/navbar.component';
import NavbarComponent from './components/navbar/navbar.component';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='App'>
      <NavbarComponent></NavbarComponent>
      <HomeComponent></HomeComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
