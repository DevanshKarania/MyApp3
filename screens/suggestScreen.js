import React from 'react';
import { TouchableOpacity, Text, View, Image, TextInput, StyleSheet } from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';

export default class SuggestScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            medicineName: "",
        }
    }

    render() {
        return (
            <View>
                <MyHeader title="Suggestions/Enquiries" navigation={this.props.navigation} />
                <View>
                    <TextInput
                        style={styles.formTextInput}
                        label={"Topic"}
                        placeholder={"Suggestion Topic"}
                        containerStyle={{ marginTop: 60 }}
                    //onChangeText={text => this.getBooksFromApi(text)}
                    //onClear={text => this.getBooksFromApi('')}
                    //value={this.state.medicineName}
                    />

                    <TextInput
                        style={styles.textInputBox}
                        label={"Suggestions"}
                        placeholder={"Suggestion/Enquiry"}
                        containerStyle={{ marginTop: 60 }}
                    //onChangeText={text => this.getBooksFromApi(text)}
                    //onClear={text => this.getBooksFromApi('')}
                    //value={this.state.medicineName}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'black' }}>Send Suggestion</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    formTextInput: {
        width: "75%",
        height: 35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    textInputBox: {
        width: "75%",
        height: 350,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    button:{
        width: "25%",
        height: 50,
        marginTop: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#CE8A8A",
        shadowColor: "#DDDCDC",
        shadowOffset: {
            width: 0,
            height: 8
        }
    }
})