import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Params from './src/Params';
import MineField from './src/components/MineField';
import { 
  createMinedBoard 
} from './src/Functions';

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = Params.getColumnsAmount()
    const rows = Params.getRowsAmount()

    return Math.ceil(cols * rows * Params.difficultLevel)
  }

  createState = () => {
    const cols = Params.getColumnsAmount()
    const rows = Params.getRowsAmount()

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Iniciando o Mines!</Text>
        <Text>Tamanho da grade: {Params.getRowsAmount()} X {Params.getColumnsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'red'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})