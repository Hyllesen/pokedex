import React, { Component } from "react";
import { StyleSheet, Text, Image, FlatList, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    console.log("component did mount");
    this.fetchPokemon();
  }

  async fetchPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon-form/1/");
      const pokemon = await response.json();
      const pokemons = this.state.pokemons;
      pokemons.push(pokemon);
      this.setState({ pokemons });
      console.log(pokemon);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.state.pokemons);
    return (
      <View>
        <Text style={styles.title}>PokéDex</Text>
        <FlatList
          data={this.state.pokemons}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Image
              source={{ uri: item.sprites.front_default }}
              style={{ width: 40, height: 40 }}
            />}
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
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontFamily: "PocketMonk"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
