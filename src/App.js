// import logo from './logo.svg';
import './style/App.scss'
import Layout1 from './layouts/Layout1'
import Start from './scenes/Start'

const App = () => {
  return (
    <div className="App">
      <Layout1>
        <Start />
      </Layout1>
    </div>
  );
}

export default App;
