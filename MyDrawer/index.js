// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ArtisBox2 from '../src/ArtisBox2';
import Icon from 'react-native-vector-icons/Ionicons';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import S from './style'



function HomeScreen(props) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 20 }}>Home Screen</Text> */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          width: 200,
          height: 50,
          backgroundColor: '#ff5204',
          padding: 10,
          alignItems: 'center',
          borderRadius: 5,
        }}
        onPress={() => props.navigation.navigate('Perfil')}>
        <Text>Ir a Perfil</Text>
      </TouchableOpacity>
      <ArtisBox2 />

    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Perfil Screen</Text>
    </View>
  );
}

function NotificacionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Notificación Screen</Text>
    </View>
  );
}

function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={()=> props.navigation}>
      <View style={S.menuContainer}>
        <View style={S.iconoContainer}>
          <Icon size={17} name={props.iconName} />
        </View>
        <View style={S.tituloContainer}>
          <Text style={S.tituloTxt}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

function Menu(props) {
  return (
    <View style={S.container}>
      <View style={S.bgContainer}>
        <TouchableOpacity>
          <View style={S.userContainer}>
            <Image style={S.userImagen} source={require('./logo-brainapps.png')} />
            <View style={S.camaraContainer}>
              <Image style={S.camaraIcon} source={require('./photo-camera.png')} />
            </View>
          </View>
          <View style={S.userNombre}>
            <Text style={S.userTitulo}>BrainApp</Text>
            <Text style={S.userSubTitulo}>Ver Perfil</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <DrawerItemList {...props} /> */}
      <DrawerMenu iconName='home' titleName='Home' navigation={()=>props.navigation.navigate('Home')}/>
      <DrawerMenu iconName='person-circle-outline' titleName='Perfil' navigation={()=>props.navigation.navigate('Perfil')}/>
      <DrawerMenu iconName='notifications-outline' titleName='Notificación' navigation={()=>props.navigation.navigate('Notificacion')}/>
      {/* <DrawerMenu iconName='user' titleName='Perfil'/> */}
    </View>
  )
}
// const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
        <Drawer.Screen name="Notificacion" component={NotificacionScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 500,
    backgroundColor: 'lightgray',
    // paddingTop: 70,
  }
});

export default MyDrawer;
