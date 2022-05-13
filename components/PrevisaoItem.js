import {
    Image, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import React from 'react'
import Cartao from './Cartao'

const PrevisaoItem = () => {
  return (
   <Cartao 
   estilos={styles.cartao}>
       <View style={styles.tela}>
            <image
              style={styles.imagem}
              source={{
                  uri: ''
              }}  
            />
       </View>
   </Cartao>
  )
}

export default PrevisaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 4
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    }
})