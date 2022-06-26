import React from 'react';
import {Formik} from 'formik';
import {StyleSheet, View, Pressable, KeyboardAvoidingView} from 'react-native';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';

import {Screen, Text, FormButton, Button, ThemeToggleBtn} from '../components';
import {FormField} from '../components';
import {useState} from 'react';
import {setIsLogin, setUserData} from '../store/authSlice';
import useTheme from '../hooks/useTheme';
import routes from '../navigation/routes';
import {auth} from '../config/firebase';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6, 'Please Enter At Least 6 character'),
});

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const colors = useTheme();

  const [icon, setIcon] = useState('eye-off');
  const [hidePassword, setHidePassword] = useState(true);

  const onIconPress = () => {
    if (hidePassword) {
      setHidePassword(false);
      setIcon('eye');
    } else {
      setHidePassword(true);
      setIcon('eye-off');
    }
  };

  const handleLogin = async values => {
    try {
      const user = await auth.signInWithEmailAndPassword(
        values.email,
        values.password,
      );
      dispatch(setUserData(user));
      dispatch(setIsLogin(true));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Screen additionalStyles={styles.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={values => handleLogin(values)}>
          <View style={{flex: 1}}>
            <View style={styles.upper}>
              <Text
                color={'primary'}
                additionalStyles={{
                  fontSize: 35,
                  fontWeight: '900',
                }}>
                Login
              </Text>
              <ThemeToggleBtn />
            </View>
            <View style={styles.inputContainer}>
              <FormField
                name={'email'}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={'Enter email'}
                textContentType="emailAddress"
              />
              <FormField
                name={'password'}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={'Enter Password'}
                textContentType="emailAddress"
                icon={icon}
                secureTextEntry={hidePassword}
                onIconPress={onIconPress}
              />
              <Pressable
                onPress={() =>
                  alert(
                    "This app is under construction. so, at this time you can't able tu use this feature",
                  )
                }>
                <Text
                  color={'primary'}
                  additionalStyles={{
                    alignSelf: 'flex-end',
                  }}>
                  Forget Password?
                </Text>
              </Pressable>
              <View
                style={{
                  justifyContent: 'space-evenly',
                  flex: 1,
                  marginBottom: 20,
                }}>
                <FormButton title="Login" />
                <Text
                  color={'primaryLight'}
                  additionalStyles={{
                    textAlign: 'center',
                  }}>
                  OR
                </Text>
                <Button
                  title={'Google'}
                  color="primary"
                  bgColor={'secondary'}
                  onPress={() =>
                    alert(
                      "This app is under construction. so, at this time you can't able tu use this feature",
                    )
                  }
                />
              </View>
            </View>
          </View>
        </Formik>
        <View style={styles.bottom}>
          <Text color={'primaryLight'} additionalStyles={{textAlign: 'center'}}>
            Don’t have an account? Let’s{' '}
            <Pressable onPress={() => navigation.navigate(routes.REGISTER)}>
              <Text
                color={'primary'}
                additionalStyles={{
                  textAlign: 'center',
                  textDecorationLine: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationColor: colors.primary,
                }}>
                Register
              </Text>
            </Pressable>
          </Text>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  upper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  inputContainer: {
    paddingTop: 35,
    flex: 1,
  },
  bottom: {
    flexDirection: 'row',
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
