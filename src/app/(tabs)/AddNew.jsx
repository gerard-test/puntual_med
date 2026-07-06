import { StyleSheet, Text, View } from 'react-native';

export default function AddNewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AÑADIR NUEVO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});