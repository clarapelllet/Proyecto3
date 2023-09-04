import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <h1>My App in React</h1>
      <main>
    <Switch>
       <Route path="/" component={Home} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/detalle" component={Detalle} />
        <Route path="/popular" component={Popular} />
        <Route path="/upcoming" component={Upcoming} />
    </Switch>
    </main>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
