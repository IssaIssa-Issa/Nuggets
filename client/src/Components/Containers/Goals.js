import React, { Component } from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-animated-charts'


let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;

export default class Goals extends Component {

    constructor() {
        super()

        this.state = {
            dataY:[10,2,1.2,4.5,3],
            labels:['10k','2k','1.2k','4.5k','3k']
        }
    }

    recalculate = ()=>{
        let values = Array.from({length: 5}, () => Math.round(10*Math.random() * 5)/10)
        this.setState({
            dataY:values,
            labels: values.map(v=>(Math.round(v*10)/10)+'k')
        })
    }
    render() {
        return (
                <View style={styles.container}>
                    <BarChart 
                        labels={this.state.labels} 
                        dataY={this.state.dataY} 
                        color={'#a7bd4f'} 
                        height={HEIGHT * .6}
                        containerStyles={styles.barChart}
                    />
                    <TouchableOpacity onPress={this.recalculate} style={styles.button}>
                        <Text style={styles.buttonText}>Recalculate</Text>
                    </TouchableOpacity>
                </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center"
    },
    button: {
        backgroundColor:"#a7bd4f",
        marginTop:30,
        width:WIDTH*.4,
        height:40, 
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText: {
        color:"white",
        fontSize:18
    },
    barChart: {
        backgroundColor:"transparent",
        height:HEIGHT*.6,
        width:WIDTH,
        marginTop:20
    },
});
