import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomModal from './src/modals/CustomModal';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleModalClose = (value: string) => {
    setSelectedValue(value);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <CustomModal visible={modalVisible} onClose={handleModalClose} />
      {selectedValue && <Text>Selected Value: {selectedValue}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});