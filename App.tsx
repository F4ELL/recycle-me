import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Loading } from './src/components/Loading';

import theme from './src/theme'

import { Routes } from './src/routes';
import { UserContextProvider } from './src/contexts/auth';


export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold }) 

  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        { fontsLoaded ? <Routes /> : <Loading /> }
      </UserContextProvider>
    </ThemeProvider>    
  );
}