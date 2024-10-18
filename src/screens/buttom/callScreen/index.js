import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Alert, } from 'react-native';
import { Platform } from 'react-native';
import { ClientRoleType, createAgoraRtcEngine, ChannelProfileType, } from 'react-native-agora';
import { agoraAppId, agoraToken } from '../../../constants/key';
import GradientButton from '../../../components/gradientButton';
import messaging from '@react-native-firebase/messaging';
import styles from './styles';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import CustomTextInput from '../../../components/cutomTextInput';
import { checkUserLoggedInStatus, handleDeclineSendCallInvitation, handleSendCallInvitation } from '../../../utils/helper/callHelper';
import { requestAudioPermission } from '../../../utils/permissions/permissions';

const appId = agoraAppId;
const token = agoraToken;
const uid = 0;

const CallScreen = ({ route }) => {
  const agoraEngineRef = useRef(); // Agora engine instance
  const [isJoined, setIsJoined] = useState(false);
  const [remoteUid, setRemoteUid] = useState(0);
  const [message, setMessage] = useState('');
  const [channelName, setChannelName] = useState('my-channel'); // Default channel name
  const [incomingCall, setIncomingCall] = useState(null);
  const { randomUser } = route.params; // Get randomUser from previous screen
  const [recipientEmail, setRecipientEmail] = useState('');
  const [loggedInStatus, setLoggedInStatus] = useState(null); //
  const [fcmToken, setFcmToken] = useState(null);
  const colors = useTheme();


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (remoteMessage.data && remoteMessage.data.channel) {

        const { channel, callerId } = remoteMessage.data;
        setIncomingCall({ channel, callerId }); // Set incoming call data
        showMessage(`Incoming call from ${callerId}`);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    // Initialize Agora engine when the app starts
    setupVoiceSDKEngine();
  
   requestAudioPermission()
  }, []);






  useEffect(() => {
    // Check login status on component mount
    checkUserLoggedInStatus(randomUser, setRecipientEmail, setLoggedInStatus);
  }, [randomUser]);

  const handleSendCallInvitationWrapper = async () => {
    await handleSendCallInvitation(recipientEmail, channelName, randomUser); // Call the helper function
  };


  const join = async (channelName) => {
    if (isJoined) {
      return;
    }
    try {
      agoraEngineRef.current?.setChannelProfile(
        ChannelProfileType.ChannelProfileCommunication,
      );
      await agoraEngineRef.current?.joinChannel(token, channelName, uid, {
        clientRoleType: ClientRoleType.ClientRoleBroadcaster,
      });
    } catch (e) {
      console.log(e);
    }
  };




  const acceptCall = async () => {
    if (incomingCall) {
      await join(incomingCall.channel);
      setIncomingCall(null);
    }
  };

  const rejectCall = () => {
    setIncomingCall(null);
  };




  const setupVoiceSDKEngine = async () => {
    try {
      if (Platform.OS === 'android') {
       // await requestAudioPermission();
      }
      agoraEngineRef.current = createAgoraRtcEngine();
      const agoraEngine = agoraEngineRef.current;
      agoraEngine.registerEventHandler({
        onJoinChannelSuccess: () => {
          // showMessage('Successfully joined the channel ' + channelName);
          setIsJoined(true);

          console.log("🚀 ~ setupVoiceSDKEngine ~ 'Successfully joined the channel ", + channelName);
          //console.log("🚀 ~ setupVoiceSDKEngine  'Successfully joined the channel' , + channelName);
        },

        onUserJoined: (_connection, Uid) => {
          showMessage('Remote user joined with uid ' + Uid);
          setRemoteUid(Uid);
          console.log("🚀 ~ setupVoiceSDKEngine ~ 'Remote user joined with uid ' + Uid:", 'Remote user joined with uid ' + Uid);
        },

        onUserOffline: (_connection, Uid) => {
          showMessage('Remote user left the channel. uid: ' + Uid);
          setRemoteUid(0);
          console.log("🚀 ~ setupVoiceSDKEngine ~ 'Remote user left the channel. uid: ' + Uid:", 'Remote user left the channel. uid: ' + Uid);
        },

      });
      await agoraEngine.initialize({
        appId: appId,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const leave = async () => {
    try {
      await agoraEngineRef.current?.leaveChannel();
      setRemoteUid(0);
      setIsJoined(false);
      setIncomingCall(null);
      showMessage('You left the channel');
      console.log("🚀 ~ leave ~ 'You left the channel':", 'You left the channel')
    } catch (e) {
      console.log(e);
    }
  };

  function showMessage(msg) {
    setMessage(msg);
  }

  return (
    <View style={styles.container}>
      <View style={{ width: '90%', marginTop: '25%' }}>


        <CustomTextInput
          placeholder="Enter recipient email"
          value={recipientEmail}
          onChangeText={setRecipientEmail}

        />
        <CustomTextInput
          value={channelName}
          onChangeText={setChannelName}

        />
      </View>




      <View style={styles.buttonContainer}>


        <GradientButton
          onPress={() => {
            if (loggedInStatus === true) {

              handleSendCallInvitationWrapper();
              join(channelName);
            } else {
              console.log('User is not logged in, cannot place call.');

              Alert.alert(
                'Action Denied',
                'User is not logged in, cannot place call.',
                [{ text: 'OK' }]
              );
            }
          }}
          buttonText={"Call User"}
          style={{ marginRight: 20, width: 100 }}
        />
        <GradientButton

          onPress={() => {
            leave();
            handleDeclineSendCallInvitation(recipientEmail, channelName, randomUser);
          }}
          style={{ width: 140 }}
          buttonText={"Leave Channel"}
        />
      </View>

      {isJoined ? (
        <Text style={styles.userStatusText(colors)}>Local user uid: {uid}</Text>
      ) : (
        <Text style={styles.userStatusText(colors)}>Join a channel</Text>
      )}
      {isJoined && remoteUid !== 0 ? (
        <Text style={styles.userStatusText(colors)}>
          Remote user uid: {remoteUid}
        </Text>
      ) : (
        <Text style={styles.userStatusText(colors)}>
          Waiting for a remote user to join
        </Text>
      )}
      <Text style={styles.messageText}>{message}</Text>
      {incomingCall && (
        <View style={styles.callContainer}>
          <Text style={styles.infoText}>Incoming call from {incomingCall.callerId}</Text>
          <GradientButton onPress={acceptCall} buttonText="Accept" />
          <GradientButton onPress={rejectCall} buttonText="Reject" />
        </View>
      )}

    </View>
  );
};



export default CallScreen;
