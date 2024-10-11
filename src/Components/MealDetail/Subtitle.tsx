import {StyleSheet, Text, View} from 'react-native';

function Subtitle({children} : any) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#131111',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 8,
    marginHorizontal: 14,
    marginVertical: 6,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
});

export default Subtitle;
