import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  edges: {alignItems: 'center', justifyContent: 'center', flex: 1, padding: 5},
  nameAddress: {flexDirection: 'column', flex: 6},
  address: {color: 'grey'},
  row: {flexDirection: 'row'},
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});
