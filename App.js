// import React, {useEffect, useRef, useState} from 'react';
// import {
//   ActivityIndicator,
//   AppState,
//   Image,
//   PermissionsAndroid,
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';

// const App = () => {
//   const devices = useCameraDevices();
//   const device = devices.back;
//   const camera = useRef(null);
//   const [imageData, setImageData] = useState('');

//   const [appState, setAppState] = useState(AppState.currentState);
//   const [isMounted, setIsMounted] = useState(false);

//   const handleAppStateChange = nextAppState => {
//     if (appState.match(/active|background/) && nextAppState === 'active') {
//       console.log('open app ===============');
//       if (isMounted === true) {
//         resumeRecording();
//       }
//     } else if (
//       appState === 'active' &&
//       nextAppState.match(/inactive|background/)
//     ) {
//       // if(isMounted === true){
//       setIsMounted(true);
//       pauseRecording();
//       // }
//       console.log('backGround app ===============');
//     }
//     console.log('nextAppState ========= : ', nextAppState);
//     setAppState(nextAppState);
//   };

//   useEffect(() => {
//     permissionCamera();

//     AppState.addEventListener('change', handleAppStateChange);
//     return () => {
//       AppState.removeEventListener('change', handleAppStateChange);
//     };
//   }, []);

//   const permissionCamera = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.CAMERA,
//           {
//             title: 'App Camera Permission',
//             message: 'App needs access to your camera ',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           console.log('Camera permission given');
//           checkPermission();
//         } else {
//           console.log('Camera permission denied');

//           if (value === 1) {
//             Alert.alert(
//               'Alert!',
//               `We're unable to connect to your camera. Please provide the camera access.`,
//               [{text: 'Ok'}],
//               {cancelable: true},
//             );
//             return;
//           }
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     } else {
//       checkPermission();
//     }
//   };

//   const checkPermission = async () => {
//     const cameraPermission = await Camera.getCameraPermissionStatus();
//     // const microphonePermission = await Camera.getMicrophonePermissionStatus()

//     console.log('cameraPermission :================ ', cameraPermission);
//   };

//   if (device == null) {
//     return <ActivityIndicator size={20} color={'red'} />;
//   }

//   const capture = async () => {
//     if (camera != null) {
//       // const photo = await camera.current.takePhoto()
//       console.log('photo check ======= ');

//       camera.current.startRecording({
//         flash: 'on',
//         onRecordingFinished: video => console.log('video=========== ', video),
//         onRecordingError: error =>
//           console.error('error ============== ', error),
//       });
//       // setIsMounted(true);
//       // setImageData(photo.path)
//     }
//   };

//   const stopRecord = async () => {
//     console.log('stop recording ============== ');
//     await camera.current.stopRecording();
//     // setIsMounted(false);
//   };

//   const pauseRecording = async () => {
//     console.log('pause recording ============== ');
//     await camera.current.pauseRecording();
//   };
//   const resumeRecording = async () => {
//     // setIsMounted(true);
//     console.log('resume recording ============== ');
//     await camera.current.resumeRecording();
//   };

//   return (
//     <SafeAreaView
//       style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       {imageData != '' ? (
//         <>
//           <Image
//             source={{url: 'file://' + imageData}}
//             style={{width: '90%', height: 200}}
//           />
//         </>
//       ) : (
//         <Camera
//           ref={camera}
//           style={StyleSheet.absoluteFill}
//           device={device}
//           isActive={true}
//           video={true}
//           // photo={true}
//         />
//       )}

//       <TouchableOpacity
//         onPress={capture}
//         style={{
//           backgroundColor: 'red',
//           width: '80%',
//           alignItems: 'center',
//           paddingVertical: 10,
//           borderRadius: 5,
//           marginBottom: 15,
//         }}>
//         <Text>Start</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={pauseRecording}
//         style={{
//           backgroundColor: 'red',
//           width: '80%',
//           alignItems: 'center',
//           paddingVertical: 10,
//           borderRadius: 5,
//           marginBottom: 15,
//         }}>
//         <Text>Pause</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={resumeRecording}
//         style={{
//           backgroundColor: 'red',
//           width: '80%',
//           alignItems: 'center',
//           paddingVertical: 10,
//           borderRadius: 5,
//           marginBottom: 15,
//         }}>
//         <Text>Resume</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={stopRecord}
//         style={{
//           backgroundColor: 'red',
//           width: '80%',
//           alignItems: 'center',
//           paddingVertical: 10,
//           borderRadius: 5,
//         }}>
//         <Text>Stop</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

// Project simple code
// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// import Home from './src/Home';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MatchList from './src/MatchList';
// import CardDetails from './src/component/CardDetails';

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           <Stack.Screen name="home" component={Home} />
//           <Stack.Screen name="score" component={MatchList} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

// call detection

import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import CallDetectorManager from 'react-native-call-detection';

const App = () => {
  const [featureOn, setFeatureOn] = useState(false);
  const [incoming, setIncoming] = useState(false);
  const [number, setNumber] = useState(null);
  useEffect(() => {
    askPermission();
  }, []);

  const askPermission = async () => {
    try {
      const permissions = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      ]);
      console.log('Permissions are:', permissions);
    } catch (err) {
      console.warn(err);
    }
  };

  const startListenerTapped = () => {
    setFeatureOn(true);
    callDetector = new CallDetectorManager(
      (event, number) => {
        console.log(event, number);
        if (event === 'Disconnected') {
          // Do something call got disconnected
          setIncoming(false);
          setNumber(null);
        } else if (event === 'Incoming') {
          // Do something call got incoming
          setIncoming(true);
          setNumber(number);
        } else if (event === 'Offhook') {
          //Device call state: Off-hook.
          // At least one call exists that is dialing,
          // active, or on hold,
          // and no calls are ringing or waiting.
          setIncoming(true);
          setNumber(number);
        } else if (event === 'Missed') {
          // Do something call got missed
          // setState({incoming: false, number: null});
          setIncoming(false);
          setNumber(null);
        }
      },
      true, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
      () => {}, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
      {
        title: 'Phone State Permission',
        message:
          'This app needs access to your phone state in order to react and/or to adapt to incoming calls.',
      }, // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
    );
  };
  const stopListenerTapped = () => {
    callDetector && callDetector.dispose();
    setFeatureOn(false);
    setIncoming(false);
  };

  return (
    <View style={styles.body}>
      <Text style={{color: 'black', fontSize: 26, fontWeight: '700'}}>
        Call Detection
      </Text>
      <Text style={[styles.text, {color: 'black'}]}>
        Should the detection be on?
      </Text>
      <TouchableHighlight
        style={{borderRadius: 50}}
        onPress={featureOn ? stopListenerTapped : startListenerTapped}>
        <View
          style={{
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: featureOn ? 'blue' : '#eb4034',
            borderRadius: 50,
          }}>
          <Text style={styles.text}>{featureOn ? `ON` : `OFF`} </Text>
        </View>
      </TouchableHighlight>
      {incoming && (
        <Text style={{fontSize: 50, color: 'red'}}>Call arahi h {number}</Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    padding: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  button: {},
});
