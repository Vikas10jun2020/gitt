import React, {useEffect} from 'react';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import SplashScreen from 'react-native-splash-screen';
import WebView from './src/screen/WebView/WebView';
import constant from './src/constant/constant';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <InternetConnectionAlert
      onChange={connectionState => {
        console.log('Connection State: ', connectionState);
      }}>
      <Text>Thi</Text>
      <WebView url={constant.WEBSITE_URL} />
    </InternetConnectionAlert>
  );
};

export default App;
