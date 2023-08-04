import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {WebView as RNWebView} from 'react-native-webview';

const WebView = ({url}) => {
  const Spinner = () => (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color={'blue'} />
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <RNWebView
        startInLoadingState={true}
        style={styles.container}
        source={{uri: url}}
        renderLoading={Spinner}
        scalesPageToFit
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
});
export default WebView;
