import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Button, Pressable, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { FIREBASE_APP } from '../../FirebaseConfig';
import { getFirestore, setDoc, doc, collection, serverTimestamp } from 'firebase/firestore';


const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [option, setOption] = useState('INCOMING')
  const db = getFirestore(FIREBASE_APP);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const setDataToFirestore = async(qrdata) => {
    try {
      const date = Date.now().toString();
      const myCollection = collection(db, option);
      const docRef = doc(myCollection, date);
      await setDoc(docRef, qrdata);

      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }

  }

  const handleBarCodeScanned = ({ type, data }) => {
    const firstFour = data.substring(0, 6);
    if (firstFour == "MSUIIT") {
      const uploadData = {
        name: data,
        time: serverTimestamp(),
      };

      setScanned(true);
      setDataToFirestore(uploadData);
      Alert.alert('Confirmation', `Bar code with type ${type} and data ${data} has been logged!`);
    }
    
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>

      <View style={styles.options} >
        <Pressable 
          style={[
            styles.optionsbuttons,
            {
              backgroundColor: option === 'INCOMING' ? '#3498db' : '#dbd4c1',
            },
          ]} 
          onPress={() => setOption('INCOMING')}
        >
          <Text style={{ fontSize: 13, color: option == "INCOMING" ? '#fff' : '#000' }}>Incoming</Text>
        </Pressable>

        <Pressable 
          style={[
            styles.optionsbuttons,
            {
              backgroundColor: option === 'OUTGOING' ? '#3498db' : '#dbd4c1',
            },
          ]} 
          onPress={() => setOption('OUTGOING')}
        >
          <Text style={{ fontSize: 13, color: option == "OUTGOING" ? '#fff' : '#000' }}>Outgoing</Text>
        </Pressable>

      </View>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />

      <View style={styles.rescan}>
        {scanned && 
          <Pressable style={styles.rescanbutton} onPress={() => setScanned(false)}>
            <Text style={{ fontSize: 17, color: '#fff' }}>Tap to Scan Again</Text>
          </Pressable>
        }
        
      </View>
    </View>
  );
}

export default Scanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dbd4c1',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
  },
  optionsbuttons: {
    borderWidth: 1,
    padding: 5,
    margin: 20,
    height: 35,
    borderColor: '#3498db',
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanner: {
    flex: 4,
    width: '80%',
    height: 50,
  },
  rescan: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150,
  },
  rescanbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    width: 200,
    height: 40,
    borderRadius: 10,
  }

});
