import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"

// import Primeiro from './components/Primeiro'
// import Multi, { Comp1, Comp2 } from './components/Multi'
// import MinMax from "./components/MinMax"
// import Aleatorio from "./components/Aleatorio"
// import Titulo from "./components/Titulo"
// import Botao from "./components/Botao"
// import Contador from "./components/Contador"
// import Pai from "./components/direta/Pai"
// import Pai from "./components/indireta/Pai" 
// import ContadorV2 from "./components/contador/ContadorV2"
// import Diferenciar from "./components/Diferenciar"
// import ParImpar from "./components/ParImpar"
// import Familia from "./components/relacao/Familia"
// import Membro from "./components/relacao/Membro"
// import UsuarioLogado from "./components/UsuarioLogado"
// import ListaProdutos from "./components/produtos/ListaProdutos"
// import ListaProdutosV2 from "./components/produtos/ListaProdutosV2"
// import DigiteSeuNome from "./components/DigiteSeuNome"
// import Quadrado from "./components/layout/Quadrado"
// import FlexBoxV1 from "./components/layout/FlexBoxV1"
// import FlexBoxV2 from "./components/layout/FlexBoxV2"
// import FlexBoxV3 from "./components/layout/FlexBoxV3"
// import FlexBoxV4 from "./components/layout/FlexBoxV4"
import Mega from "./components/mega/Mega"

export default () => (
    <SafeAreaView style={style.App}>
        {/* <Primeiro />
        <Multi />
        <Comp1 />
        <Comp2 /> */}

        {/* PASSA O VALOR COMO NÚMERO */}
        {/* <MinMax min={3} max={20}/>  */}
        {/* PASSA O VALOR COMO STRING */}
        {/* <MinMax min="1" max="94"/>  */}

        {/* <Aleatorio min={1} max={60}/>  */}

        {/* <Titulo 
            principal="Cadastro de Produto" 
            secundario="Tela de Cadastro!" 
        /> */}

        {/* <Botao /> */}

        {/* <Contador inicial={10} passos={3}/>
        <Contador /> */}

        {/* <Pai /> */}

        {/* <Pai /> */}

        {/* <ContadorV2 /> */}

        {/* <Diferenciar /> */}

        {/* <ParImpar /> */}

        {/* <Familia>
            <Membro nome="Bia" sobrenome="Arruda"></Membro>
            <Membro nome="Carlos" sobrenome="Arruda"></Membro>
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva"></Membro>
            <Membro nome="Julia" sobrenome="Silva"></Membro>
        </Familia> */}

        {/* <UsuarioLogado usuario={ {nome:'Gui', email:'gui@gui.com'} }/>
        <UsuarioLogado usuario={ {nome:'Ana'} }/>
        <UsuarioLogado usuario={ {email:'carlos@carlos.com'} }/>
        <UsuarioLogado usuario={ {} }/>
        <UsuarioLogado usuario={ null }/> */}

        {/* <ListaProdutos /> */}

        {/* <ListaProdutosV2 /> */}

        {/* <DigiteSeuNome /> */}

        {/* <Quadrado />
        <Quadrado cor='#F00'/>
        <Quadrado cor='#0F0'/>
        <Quadrado cor='#00F'/> */}

        {/* <FlexBoxV1 /> */}

        {/* <FlexBoxV2 /> */}

        {/* <FlexBoxV3 /> */}

        {/* <FlexBoxV4 /> */}

        <Mega qtdNumeros={6} />

    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})