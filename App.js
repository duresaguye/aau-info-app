import AppNavigation from './navigation/appNavigation';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);

  const loadCustomFont = async () => {
    await Font.loadAsync({
      exo: require('./assets/fonts/Exo/static/Exo-Regular.ttf'),
      exoSemibold: require('./assets/fonts/Exo/static/Exo-SemiBold.ttf'),
      roboto: require('./assets/fonts/Roboto/Roboto-Light.ttf'),
      robotoBold: require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    });

    setFontLoaded(true);
  };

  useEffect(() => {
    loadCustomFont();
  }, []);

  if (!isFontLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="dark" />
      <AppNavigation />
    </>
  );
}
