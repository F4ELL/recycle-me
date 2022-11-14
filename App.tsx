import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Login } from './src/screens/Login';

import theme from './src/theme'
import { Loading } from './src/components/Loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold }) 

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Login /> : <Loading /> }
    </ThemeProvider>    
  );
}