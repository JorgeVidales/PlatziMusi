import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {getArtists} from './api-client';

export default class ArtisList extends Component {
  state = {
    artists: null,
  };

  componentDidMount() {
    getArtists().then(artists =>{ 
      this.setState({artists});
  });
  }

  render() {
    const artistas = this.state.artists;
    // console.warn("lista",artistas);  
    
    // console.warn('prueba', this.state.artists)
    return (
      <View style={styles.container}>
        {/* <ArtisList /> */}
        <FlatList
          data={artistas}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.artisBox}>
              <TouchableOpacity>
              <Image style={styles.imagen} source={{uri: item.image}} />
              </TouchableOpacity>
              <View style={styles.info}>
                <Text style={styles.nombre}>{item.name}</Text>
                <View style={styles.row}>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity>
                    <Icon name="heart-outline" size={30} color="gray" />
                    </TouchableOpacity>
                    <Text style={styles.count}>{item.likes}</Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity>
                    <Icon name="chatbox-outline" size={30} color="gray" />
                    </TouchableOpacity>
                    <Text style={styles.count}>{item.comments}</Text>
                  </View>
                </View>
              </View>
            </View>
            // <ArtisBox2/>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  artisBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: {width: -2, height: 1},
    elevation: 20,
  },
  imagen: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  nombre: {
    fontSize: 20,
    marginTop: 10,
  },
  row: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  count: {
    color: 'gray',
  },
});