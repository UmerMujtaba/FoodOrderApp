import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, Button, ToastAndroid, Text, StatusBar, ImageBackground, TouchableOpacity, Image, useColorScheme, Platform } from 'react-native';
import { supabase } from '../../../utils/supabase';
import { navigateReset } from '../../../navigator/navigationRef';
import { ScreenNames, Strings } from '../../../constants/string';
import { useTheme } from '@react-navigation/native';
import { images } from '../../../assets/images';
import fonts from '../../../constants/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../../../components/cutomTextInput';
import GradientButton from '../../../components/gradientButton';
import styles from './styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { rhp } from '../../../constants/dimensions';
import { formatPhoneNumber, formatTime, sendOtp, verifyOtp } from '../../../utils/helper';

const SMSLogin = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [session, setSession] = useState(null);
  const { colors } = useTheme();
  const scheme = useColorScheme();
  const [value, setValue] = useState("");
  const CELL_COUNT = 6;
  const [timeLeft, setTimeLeft] = useState(120);
  const [timerActive, setTimerActive] = useState(true); // New state to track if timer is active
  const [results, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  useEffect(() => {
    let timer;
    if (otpSent && timerActive) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setTimerActive(false); // Stop the timer
            ToastAndroid.show('OTP expired. Please resend.', ToastAndroid.SHORT);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, timerActive]);


  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.appBar}>
        <ImageBackground source={images.userScreenBgImage} style={styles.imgBgStyle}>
          <TouchableOpacity style={styles.backIconContainer(colors)} onPress={() => navigation.goBack()}>
            <Image source={images.backIcon} style={styles.backImage} />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {!otpSent ? (
        <Text style={styles.title(colors)}>{Strings.EnterYourPhoneNo}</Text>
      ) : (
        <Text style={styles.title(colors)}>{Strings.EnterSixDigit}</Text>
      )}

      {!otpSent ? (
        <Text style={styles.descriptionText(colors)}>
          {Strings.OTPWWillBeSentTo}
        </Text>
      ) : (
        <Text style={styles.descriptionText(colors)}>
          {`${`Code sent to`} ${formatPhoneNumber(phoneNumber)}. This code will expire in ${formatTime(timeLeft)}.`}
        </Text>
      )}

      <View style={styles.body}>
        {!otpSent ? (
          <>
            <CustomTextInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              style={{ marginTop: rhp(80), marginBottom: rhp(0) }}
            />

            <GradientButton
              buttonText={'Send OTP'}
              onPress={() => sendOtp(setOtpSent, setTimeLeft, setTimerActive, phoneNumber)}
              style={{ marginTop: rhp(15) }}
            />
          </>
        ) : (
          <>
            <CodeField
              ref={ref}
              {...results}
              caretHidden={false}
              value={value}
              onChangeText={(text) => {
                setValue(text);
                setOtpCode(text);
              }}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete={Platform.select({
                android: "sms-otp",
                default: "one-time-code",
              })}
              testID="my-code-input"
              renderCell={({ index, symbol, isFocused }) => (
                <View style={styles.cell(colors)}>
                  <Text
                    key={index}
                    style={[styles.cellText(colors)]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />

            <GradientButton
              buttonText={"Verify OTP"}
              onPress={() => verifyOtp(setSession, value, phoneNumber)}
              style={{ marginTop: rhp(15) }}
            />

            {timeLeft === 0 && !timerActive && (
              <TouchableOpacity onPress={() => sendOtp(setOtpSent, setTimeLeft, setTimerActive, phoneNumber)}>
                <Text style={styles.resendOtpText}>Resend OTP</Text>
              </TouchableOpacity>
            )}
          </>
        )}

        {session && (
          <Text style={{ marginTop: 20 }}>
            Logged in as: {session.user.phone}
          </Text>
        )}
      </View>
    </View>
  );
};

export default SMSLogin;
