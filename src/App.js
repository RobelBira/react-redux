
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/Store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';



function App() {
  return (
    <Provider store={store}>
    <CakeContainer />
    <HooksCakeContainer />
    <IcecreamContainer />
    </Provider>
  );
}

export default App;

