import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Login } from './src/screens/Login';

import theme from './src/theme'
import { Loading } from './src/components/Loading';
import { SignUp } from './src/screens/SignUp';
import { Occupation } from './src/screens/Occupation';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold }) 

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded ? <Occupation /> : <Loading /> }
    </ThemeProvider>    
  );
}