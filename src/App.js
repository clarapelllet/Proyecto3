

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <h1>My App in React</h1>
      <main>
    <Switch>
       <Route path="/" component={Home} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/generos" component={Generos} />
    </Switch>
    </main>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
