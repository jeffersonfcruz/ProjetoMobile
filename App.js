import { View } from 'react-native';
import Home from './components';
import Login from "./components/Login"

export default function App() {
  return (
    <View style={{flex: 1}}>
		<Login/>
    </View>
  );
}
