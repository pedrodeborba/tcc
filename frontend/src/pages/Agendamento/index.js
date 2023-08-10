import React from 'react';
import { FontAwesome5 } from 'react-native-vector-icons';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default function Agendar() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.textTopView}>Agendamento</Text>
            </View>

            <View style={styles.section}>
                <View>
                    <TouchableOpacity style={styles.buttonData}>
                        <View>
                            <FontAwesome5 name="calendar" size={25} color="#203F6B" />
                        </View>
                        <View>
                            <Text style={styles.textData}>Julho</Text>
                        </View>
                        <View>
                            <FontAwesome5 name="chevron-down" size={25} color="#203F6B" />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.datas}>
                        <View style={styles.lineDatas}>
                            {/* Adicionar as datas (segunda, terça, quarta) */}
                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>01</Text>
                                </View>
                                <View>
                                    <Text style={styles.day}>Segunda</Text>
                                </View>
                            </View>

                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>02</Text>
                                </View>
                                <View>
                                    <Text style={styles.day}>Terça</Text>
                                </View>
                            </View>

                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>03</Text>
                                </View>
                                <View>
                                    <Text style={styles.day}>Quarta</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.lineDatas}>
                            {/* Adicionar as datas (quinta, sexta, sabado) */}
                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>04</Text>
                                </View>
                                <View>
                                    <Text style={styles.day}>Quinta</Text>
                                </View>
                            </View>

                            <View style={styles.data}>
                                <View>
                                <Text style={styles.number}>05</Text>
                                </View>
                                <View>
                                    <Text style={styles.day}>Sexta</Text>
                                </View>
                            </View>

                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>06</Text>
                                </View>
                                <View>
                                    <Text style={styles.day}>Sábado</Text>
                                </View>
                            </View>                            
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 5}}>
                    <Text style={{ color: "#203F6B", textDecorationLine: 'underline' }}>
                        Ver mais datas
                    </Text>
                </View>
            </View>

            {/* Section 2 */}
            <View style={styles.section2}>
                <View>
                    <TouchableOpacity style={styles.buttonHora}>
                        <View>
                            <FontAwesome5 name="calendar" size={25} color="#203F6B" />
                        </View>
                        <View>
                            <Text style={styles.textData}>Hora</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.datas}>
                        <View style={styles.lineDatas}>
                            {/* Adicionar as datas (segunda, terça, quarta) */}
                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>08:00</Text>
                                </View>
                            </View>

                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>09:00</Text>
                                </View>
                            </View>

                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>10:00</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.lineDatas}>
                            {/* Adicionar as datas (quinta, sexta, sabado) */}
                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>16:00</Text>
                                </View>
                            </View>

                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>17:00</Text>
                                </View>
                            </View>

                            <View style={styles.data}>
                                <View>
                                    <Text style={styles.number}>18:00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.divAgendar}>
                    <TouchableOpacity style={styles.buttonAgendar}>
                        <FontAwesome5 name="check" size={23} color="#fff" style={{marginLeft:45}} />
                        <Text style={styles.textAgendar}>Agendar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        height: "10%",
        width: '100%',
        backgroundColor: "#6F7BF7",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        rowGap: 20,
        paddingTop: 20,
    },
    textTopView: {
        fontSize: 25,
        color: "#fff",
    },
    body:{
        height: "100%",
        width: "100%",
    },
    section: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    section2: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 60
    },
    buttonData: {
        width: 150,
        height: 40,
        backgroundColor: "#EDEFFF",
        flexDirection: "row",
        gap: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonHora:{
        width: 120,
        height: 40,
        backgroundColor: "#EDEFFF",
        flexDirection: "row",
        gap: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textData: {
        color: "#203F6B",
    },
    datas: {
        width: "80%",
        height: 160,
        backgroundColor: "#fff",
        marginTop: 10,
        borderRadius: 10,
    },
    lineDatas: {
        height: 80,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    data: {
        height: 80,
        width: "30%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginLeft: 5
    },
    number: {
        fontSize: 20,
        color: "#203F6B"
    },
    day: {
        fontSize: 15,
        color: "#203F6B"
    },
    divAgendar:{
        width: "100%",
        height: 50,
        alignItems: "center",
        marginTop: 10
    },
    buttonAgendar:{
        width: "60%",
        height: 50,
        alignItems: "center",
        paddingLeft: 20,
        gap: 10,
        backgroundColor: "#6F7BF7",
        borderRadius: 20,
        flexDirection: "row"
    },
    textAgendar:{
        color: "#fff",
        fontSize: 20
    },

});