import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View,Button } from 'react-native';
import Chatbot from './Chatbot';
import Formulaire1 from './Formulaire1'
import Formulaire2 from './Formulaire2'


export default function Services({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>باش تقدم مطلب النفاذ الى المعلومة</Text>
        </TouchableHighlight>
        
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>بش تقدم شكوى</Text>
        </TouchableHighlight>
        
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible2(true);
          }}>
          <Text style={styles.textStyle}>اسئلة سريعة</Text>
        </TouchableHighlight>
      
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <TouchableHighlight
              style={styles.openButton2}
              onPress={() => {
                setModalVisible3(true);
                setModalVisible(!modalVisible);
                }}>
          <Text style={styles.textStyle}>شخص عادي</Text>
        </TouchableHighlight>
        <TouchableHighlight
              style={styles.openButton2}
              onPress={() => {
                setModalVisible4(true);
                setModalVisible(!modalVisible);
                }}>
          <Text style={styles.textStyle}>شخص معنوي</Text>
        </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}>
          <View style={styles.centeredView}>
            <View style={styles.modalView2}>
              <Formulaire1/>
              <Button title="ارسل" onPress={() => {setModalVisible3(!modalVisible3);}}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible4}>
          <View style={styles.centeredView}>
            <View style={styles.modalView2}>
              <Formulaire2/>
              <Button title="ارسل" onPress={() => {setModalVisible4(!modalVisible4);}}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Chatbot/>
              <Button title="اغلق" onPress={() => {setModalVisible2(!modalVisible2);}}></Button>
            </View>
          </View>
        </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom:0,
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    margin:0,
    flex: 1,
    bottom:0,
  },
  modalView: {
    margin: 0,
    backgroundColor: 'white',
    height:630,
    borderRadius: 20,
    padding: 70,
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  modalView2: {
    margin:30,
    backgroundColor: '#FFFF',
    borderRadius: 20,
    padding: 70,
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  openButton: {
    backgroundColor: '#448830',
    borderRadius: 20,
    padding: 45,
    margin:35  },
  openButton2: {
      backgroundColor: '#448830',
      borderRadius: 20,
      padding: 20,
      margin:15  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
  },
});