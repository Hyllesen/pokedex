import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  Image,
  FlatList,
  View,
  ActivityIndicator,
  LayoutAnimation
} from "react-native";

import PokemonWindow from "./PokemonWindow.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      loading: true
    };
  }

  componentDidMount() {
    console.log("component did mount");
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.fetchPokemon();
  }

  async fetchPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon-form/1/");
      const pokemon = await response.json();
      const pokemons = this.state.pokemons;
      pokemons.push(pokemon);
      this.setState({ pokemons, loading: false });
      console.log(pokemon);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.state.pokemons);
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.titleBackground}>
          <Text style={styles.title}>PokéDex</Text>
        </View>
        <ActivityIndicator
          size="large"
          color="#2C71B8"
          animating={this.state.loading}
        />
        <FlatList
          data={this.state.pokemons}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <PokemonWindow style={styles.pokemonWindow} image={item.sprites.front_default} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E10031"
  },
  title: {
    fontSize: 45,
    textAlign: "center",
    margin: 15,
    fontFamily: "PocketMonk",
    color: "#FFCB05",
    textShadowColor: "#2C71B8",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
    width: 300
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  listItem: {
    borderWidth: 2,
    flex: 1,
    backgroundColor: "#98CB98",
    borderRadius: 15
  },
  itemName: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  itemPic: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 15
  },
  itemNameText: {
    fontFamily: "PokemonGB",
    fontSize: 25
  },
  itemPicStyle: {
    width: 250,
    height: 200,
    alignSelf: "center"
  },
  whiteframe: {
    borderWidth: 50,
    borderColor: "#FFFFFF",
    borderRadius: 50
  },
  pokemonWindow: {
    borderWidth: 3,
    backgroundColor: "white"
  }
});
