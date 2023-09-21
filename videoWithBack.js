import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    Image,
    AppState
  } from 'react-native';
  import React,{useEffect,useState,useRef} from 'react';
  import { Camera, useCameraDevices } from 'react-native-vision-camera';
  
  const App = () => {
    const devices = useCameraDevices()
    const device = devices.back
    const camera = useRef(null)
    const [imageData, setImageData] = useState('')
  
    const [appState, setAppState] = useState(AppState.currentState);
    const [isMounted, setIsMounted] = useState(false);
  
    const handleAppStateChange = (nextAppState) => {
      if (appState.match(/active|background/) && nextAppState === 'active') {
        console.log('open app ===============')
        // if(isMounted === true){
          resumeRecording()
        // }
      } else if (appState === 'active' && nextAppState.match(/inactive|background/)) {
        // if(isMounted === true){
          pauseRecording()
        // }
        console.log('backGround app ===============')
      
      }
      console.log('nextAppState ========= : ',nextAppState)
      setAppState(nextAppState);
    };
  
  useEffect(() => {
    checkPermission()
  
    AppState.addEventListener('change', handleAppStateChange);
      return () => {
        AppState.removeEventListener('change', handleAppStateChange);
      };
  }, [])
  
  const checkPermission = async()=>{
    const cameraPermission = await Camera.getCameraPermissionStatus()
  // const microphonePermission = await Camera.getMicrophonePermissionStatus()
  
  console.log("cameraPermission :================ ",cameraPermission)
  }
  
  if (device == null) {
    return <ActivityIndicator size={20} color={'red'} />;
  }
  
  
  const capture = async()=>{
    if(camera != null){
      // const photo = await camera.current.takePhoto()
      console.log('photo check ======= ')
    
      camera.current.startRecording({
        flash: 'on',
        onRecordingFinished: (video) => console.log("video=========== ",video),
        onRecordingError: (error) => console.error("error ============== ",error),
      })
      // setIsMounted(true);
      // setImageData(photo.path)
    }
  }
  
  const stopRecord=async()=>{
    console.log('stop recording ============== ')
    await camera.current.stopRecording()
    // setIsMounted(false);
  }
  
  const pauseRecording=async()=>{
    console.log('pause recording ============== ')
    await camera.current.pauseRecording()
  }
  const resumeRecording=async()=>{
    // setIsMounted(true);
    console.log('resume recording ============== ')
    await camera.current.resumeRecording()
  }
   
  
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {imageData != ''?(<>
            <Image source={{url:'file://'+imageData}} style={{width:'90%',height:200}}/>
        </>):(
          <Camera
           ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        video={true}
        // photo={true} 
      />
        )}
     
        <TouchableOpacity
        onPress={capture}
          style={{
            backgroundColor: 'red',
            width: '80%',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            marginBottom:15
          }}>
          <Text>Start</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
        onPress={pauseRecording}
          style={{
            backgroundColor: 'red',
            width: '80%',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            marginBottom:15
  
          }}>
          <Text>Pause</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
        onPress={resumeRecording}
          style={{
            backgroundColor: 'red',
            width: '80%',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            marginBottom:15
  
          }}>
          <Text>Resume</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
        onPress={stopRecord}
          style={{
            backgroundColor: 'red',
            width: '80%',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
          }}>
          <Text>Stop</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({});
  