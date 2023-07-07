import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import AppInput from '../../../constant/AppInput';
import fonts from '../../../constant/fonts';
import Colors from '../../../constant/Colors';

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
<AppBackground>
    <AppHeader showBackButton title={'Reset Password'}/>
    <Text style={styles.title}>New password should be different from your current password</Text>
    <AppInput 
        placeholder={'Enter your current password'}
        label={'Enter Current Password'}
        // secureTextEntry={true}
    />
    <AppInput 
        placeholder={'Enter new password'}
        label={'Enter new password'}
        // secureTextEntry={true}
    />
    <AppInput 
        placeholder={'Re-enter new password'}
        label={'Confirm New Password'}
        // secureTextEntry={true}
    />
    </AppBackground>
    
  )
}

export default ChangePassword;

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.VisbyCF_Medium,
        // lineHeight: 19,
        letterSpacing: 0.5,
        // marginBottom: 5,
        fontWeight: '500',
        color: Colors.BLACK,
        margin: '5%',
        fontSize: 16,
        textAlign: 'left'
    },
})


// import React, { useState } from 'react';
// import { TextInput, TouchableOpacity, Text, View } from 'react-native';

// const PasswordInput = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState('');

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <View>
//       <TextInput
//         secureTextEntry={!showPassword}
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//       />
//       <TouchableOpacity onPress={toggleShowPassword}>
//         <Text>{showPassword ? 'Hide' : 'Show'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default PasswordInput;