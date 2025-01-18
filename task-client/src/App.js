import './App.css';
import { Provider } from 'react-redux'; // Correct import
import { store } from './redux/store'
import IndexRoute from './routes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <IndexRoute/>
      </Provider>
    </div>
  );
}

export default App;
