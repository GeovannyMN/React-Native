import { View, FlatList, StyleSheet} from 'react-native';
import { ArrayUser } from './src/assets/global/constantes';
import Card from './src/componentes/Card'

export default function App() {

  const _renderCard = ()=>{
    if(ArrayUser.length == 0)
    {
      return <></>
    }

    const vet:any = []

    ArrayUser.map((item, index) => {
        vet.push(
          <Card
            item = {item}
            index = {index}
          />
        )
      })
    return vet;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data = {ArrayUser}
        keyExtractor = {(item, index) => index.toString()}
        renderItem = {({item, index}) => {
          return (
            <Card item={item} index={index}/>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abf',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40
  }
});
