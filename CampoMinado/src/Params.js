import { Dimensions } from "react-native";

const Params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //Proporção do cabeçalho da tela
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const heigh = Dimensions.get('window').height
        const boardHeight = heigh * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default Params