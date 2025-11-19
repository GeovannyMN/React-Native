import { StyleSheet, Text, View, Image } from 'react-native';

const ArrayUser = [
  {
    nome: 'Jardani',
    profissao: 'Analista'
  },
  {
    nome: 'Gardenne',
    profissao: 'Stakeholder'
  },
  {
    nome: 'Janaina',
    profissao: 'Gerente de Projeto'
  },
  {
    nome: 'Garfi',
    profissao: 'Desenvolvedor'
  },
  
]

export default function App() {

  const _renderCard = ()=>{

    if (ArrayUser.length == 0){
      return <></>
    }
    
    const vet:any = []
    
    for (let i=0; i<ArrayUser.length; i++)
    {
      vet.push(
        <View style={styles.card} key={i}>
          <View style={styles.boxImg}>
            <Image
              resizeMode= 'cover'
              style={{width:'100%', height:'100%'}}
              source={{uri:`https://robohash.org/${i}.png`}}
            />
        </View>
        <View style={styles.box}>
          <Text style={styles.titulo}>  Nome:</Text>
          <Text style={styles.descricao}>    {ArrayUser[i].nome}</Text>
          <Text style={styles.titulo}>  Profissão:</Text>
          <Text style={styles.descricao}>    {ArrayUser[i].profissao}</Text>
        </View>
      </View>
      )

    }

    return vet
  }

  return (
    <View style={styles.container}>
      {_renderCard()}
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
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#aff',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  box: {
    borderWidth:1,
    width: '70%',
    height: '95%',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8.3
  },
  boxImg: {
    borderWidth:1,
    width: '30%',
    height: '95%'
  },
  imgs: {
    
  },
  titulo: {
    color: '#00f'
  },
  descricao: {
    fontWeight: 'bold'
  }
});
