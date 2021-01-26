import React, { useState } from 'react';

import { StyleSheet, TextInput, View } from 'react-native';
import { Text, ScrollView } from 'react-native';

import states from '../states.json';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, RadioButton, Switch } from 'react-native-paper';

function FormScreen(props) {
    const [selectedState, setselectedState] = useState("");
    const [selectedDistrict, setselectedDistrict] = useState();
    const [selectedIrrigation, setselectedIrrigation] = useState(false);
    const stateArray = [];
    states.states.map(item => {
        stateArray.push(item['state'])
    });
    let districtArray = [];
    if (selectedState) {
        states.states.map(item => {
            if (selectedState === item.state) {
                districtArray.push(...item.districts)
            }
        })

        console.log("this is districts", districtArray)
    }
    console.log(selectedState)

    const onToggleSwitch = () => {
        setselectedIrrigation(!selectedIrrigation);
        console.log("true");
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Name:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your name"
                    />
                </View>
                <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 18, paddingBottom: 10 }}>State:</Text>
                    <DropDownPicker
                        items={stateArray}
                        placeholder="Select an State"
                        containerStyle={{ height: 40, width: "100%" }}
                        onChangeItem={(item) => {
                            console.log(item);
                            setselectedState(item)
                        }}
                        placeholderStyle={{
                            color: "gray",
                            fontSize: 18
                        }}
                    />
                </View>
                {selectedState ? (
                    <View style={{ width: "100%", paddingVertical: 10 }}>
                        <Text style={{ fontSize: 16, paddingBottom: 10 }}>District:</Text>
                        <DropDownPicker
                            items={districtArray}
                            placeholder="Select an District"
                            containerStyle={{ height: 40, width: "100%" }}
                            onChangeItem={(item) => {
                                console.log(item);
                                setselectedDistrict(item)
                            }}
                            style={{
                                color: 'black'
                            }}
                            placeholderStyle={{
                                color: "gray",
                                fontSize: 18
                            }}
                        />
                    </View>
                ) : null

                }

                <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Farm Acreage:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="ex. 12.5"
                    />
                </View>
                <View style={{ width: "100%", paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Drip Irrigation:</Text>
                    <Switch value={selectedIrrigation} onValueChange={onToggleSwitch} />
                </View>

                <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Soil Type:</Text>
                    <RadioButton.Group>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",

                            alignItems: "center"
                        }}>
                            <RadioButton
                                value="Sandy Loam"
                            />
                            <Text>Sandy Loam</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",

                            alignItems: "center"
                        }}>
                            <RadioButton
                                value="Clay Loam"
                            />
                            <Text>Clay Loam</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",

                            alignItems: "center"
                        }}>
                            <RadioButton
                                value="Silt Loam"
                            />
                            <Text>Silt Loam</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",

                            alignItems: "center"
                        }}>
                            <RadioButton
                                value="Sandy Clay"
                            />
                            <Text>Sandy Clay</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",

                            alignItems: "center"
                        }}>
                            <RadioButton
                                value="Silty Clay"
                            />
                            <Text>Clay Loam</Text>
                        </View>
                    </RadioButton.Group>
                </View>
                <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Survey Number:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your Survey Number"
                    />
                </View>
                <View style={{ width: "100%", paddingVertica: 10 }}>
                    <Button color="white" style={{ width: "100%", backgroundColor: "#239023", }}>Next</Button>
                </View>


            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: "100%",
        fontSize: 18,
        paddingHorizontal: 10
    }
})

export default FormScreen;