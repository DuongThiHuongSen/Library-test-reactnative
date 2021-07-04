// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import styled from 'styled-components';
// import { InputComponent as Input } from './src/components/InputComponent';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './AppNavigator';

// export default function App() {
//   const [value, setValue] = useState(0);
//   const [lenght, setLenght] = useState(0);
//   const [width, setWidth] = useState(0);
//   const ValuePress = () => {
//     const result = width * lenght;
//     setValue(result);
//   }
//   return (
//     // <ContainerView>
//     //   <View style={{ flex: 0.1, alignItems: 'center', paddingTop: 50 }}>
//     //     <Title>Tính diện tích hình chữ nhật
//     //     </Title>
//     //   </View>
//     //   <View style={{ flex: 0.5, paddingTop: 50 }}>
//     //     <Input title={'Nhập chiều dài'} value={lenght} onChangeValue={(text) => setLenght(text)}></Input>
//     //     <Input title={'Nhập chiều rộng'} value={width} onChangeValue={(text) => setWidth(text)}></Input>
//     //     <Title>kết quả : {value}
//     //     </Title>
//     //   </View>

//     //   <View style={{ flex: 0.4, justifyContent: 'space-between', }}>
//     //     <ButtonStyled onPress={ValuePress} >
//     //       <Text style={{color:'white'}}>Thực hiện </Text>
//     //     </ButtonStyled>
//     //     <StatusBar style="auto" />
//     //   </View>
//     // </ContainerView>
//     <NavigationContainer>
//       <ContainerView>
//         <StatusBar barStyle="dark-content" />
//         <AppNavigator />
//       </ContainerView>
//     </NavigationContainer>
//   );
// }

// const ContainerView = styled.View`
// flex: 1;
// background: #fff;
// justifyContent: center;
// marginHorizontal: 30;
// `;
// const Title = styled.Text`
// font-size: 16px;
// color: black;
// font-weight: 400;
// `;
// const ButtonStyled = styled.TouchableOpacity`
// height : 40px;
// background: palevioletred;
// justifyContent: center;
// alignItems: center;
// borderRadius: 3;
// `;
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
