import React, { Component } from "react";
import PropTypes from "prop-types";
import { WindowPath } from "./PokemonWindowPath";
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from "react-native-svg";

import { Image, View, StyleSheet } from "react-native";

export default class PokemonWindow extends Component {
  render() {
    console.log(WindowPath);
    return (
      <Svg height="500" width="500" stroke="yellow">
        {/* Black shadow for frame */}
        <Path
          d="M409,341.9C409,341.9,435,341.9,435,341.9C435,341.9,521,341.9,521,341.9C521,341.9,536,341,536,341C536,341,553,341,553,341C553,341,568,342,568,342C568,342,584,341,584,341C584,341,768,341,768,341C768,341,857,341,857,341C875.37,341.09,880.97,352.2,881,369C881,369,881,679,881,679C881,679,881,734,881,734C881,743.06,881.88,754.96,876.99,763C872.04,771.14,861.82,772.99,853,773C853,773,456,773,456,773C444.78,772.98,442.72,767.72,435,760C435,760,402,727,402,727C402,727,383,708,383,708C374.42,699.41,370.02,698.51,370,686C370,686,370,453,370,453C370,453,370,363,370,363C370.02,351.42,373.63,345.33,385,341.9C393.35,340.03,400.71,341.98999999999995,409,341.9Z"
          fill="#656565"
          x="-65"
          y="-12"
          scale="0.405"
          stroke="#252525"
        />
        {/* Gray frame */}
        <Path
          d="M409,341.9C409,341.9,435,341.9,435,341.9C435,341.9,521,341.9,521,341.9C521,341.9,536,341,536,341C536,341,553,341,553,341C553,341,568,342,568,342C568,342,584,341,584,341C584,341,768,341,768,341C768,341,857,341,857,341C875.37,341.09,880.97,352.2,881,369C881,369,881,679,881,679C881,679,881,734,881,734C881,743.06,881.88,754.96,876.99,763C872.04,771.14,861.82,772.99,853,773C853,773,456,773,456,773C444.78,772.98,442.72,767.72,435,760C435,760,402,727,402,727C402,727,383,708,383,708C374.42,699.41,370.02,698.51,370,686C370,686,370,453,370,453C370,453,370,363,370,363C370.02,351.42,373.63,345.33,385,341.9C393.35,340.03,400.71,341.98999999999995,409,341.9Z"
          fill="#B0B0B0"
          x="-57"
          y="-12"
          scale="0.4"
          stroke="#252525"
        />
        <Rect
          x="115"
          y="140"
          width="160"
          height="120"
          fill="#98CB98"
          strokeWidth="1"
          stroke="rgb(0,0,0)"
        />
        <Image style={styles.image} source={{ uri: this.props.image }} />
      </Svg>
    );
  }
}

PokemonWindow.propTypes = {
  image: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  imageFrame: {
    backgroundColor: "white",
    width: 300,
    height: 300
  },
  image: {
    position: "absolute",
    right: 200,
    top: 100,
    height: 200,
    width: 200
  }
});
