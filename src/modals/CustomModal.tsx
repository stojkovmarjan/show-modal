import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

interface CustomModalProps {
  visible: boolean;
  onClose: (value: string) => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => onClose('')}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text>Do you want to proceed?</Text>
          <View style={styles.buttonContainer}>
            <Button title="Yes" onPress={() => onClose('Yes')} />
            <Button title="No" onPress={() => onClose('No')} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default CustomModal;