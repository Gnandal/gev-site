import React from 'react';
import { StyleSheet,  View, Text } from 'react-native-web';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex : 1,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor: "#222222",
    },
    text:{
      color: "white"
    }
})

export default App;
