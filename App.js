import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const App = () => {
  const [readqr, setReadQr] = useState('');

  const onSucces = (e) => {
    setReadQr(e.data);
  };

  return (
    <>
      <View>
        <Text style={styles.title}>QR Code Scanner</Text>
      </View>
      <View>
        <QRCodeScanner onRead={onSucces} />
        <View>
          <Text style={styles.output}>Read from camera is: {readqr}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  output: {
    marginTop: 400,
  },
});

export default App;
