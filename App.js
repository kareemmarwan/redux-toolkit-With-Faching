import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Users from './Screen.js/Users'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
export default function App() {
  return (
    <Provider store={store}>
      <View style={{ padding: 10 }}>
        <Users />
      </View>
    </Provider>
  )
}
