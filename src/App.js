// import logo from './logo.svg';
import './style/App.scss'
import Layout1 from './layouts/Layout1'
import Scene1 from './pages/Scene1'

const App = () => {
  return (
    <div className="App">
      <Layout1>
        <Scene1 />
      </Layout1>
    </div>
  );
}

export default App;
