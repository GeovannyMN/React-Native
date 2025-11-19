import { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView} from 'react-native';
import api from './src/services/api';

export default function App() {
  const [cats, setCats] = useState<any>([])

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(()=>{
    chamarAPI()
  },[])

  async function chamarAPI()
  {
    try{
      setLoading(true)
      const result = await api.get('https://api.thecatapi.com/v1/images/search?limit=10')
      setCats(result.data)
    }catch (error){
      console.log("Não foi possível se conectar a API corretamente")
    }finally{
      setLoading(false)
    }
  }

  const _renderCats = () => {
    const vet:any = []

    cats.map((item: any, index: number) => {
      vet.push(
        <View style={styles.cardCats} key={index} >
          <Image style={styles.imgCats}
            source={{uri: item.url}}
            height={400}
            width={400}
          />
        </View>
      )
    })

    return vet
  }

  return (
    <View style={styles.container}>
      
        <ScrollView>
          {_renderCats()}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abf',
    alignItems: 'center',
    paddingVertical:60
  },
  cardCats: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgCats: {
    marginVertical: 5,
    borderRadius: 10
  }
});
