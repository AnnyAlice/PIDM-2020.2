import {StyleSheet} from 'react-native'

const style= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#e9e9e9",
        alignItems:"center",
        justifyContent: "center"
    },
    title:{
        color: '#009186',
        fontSize: 30,
        fontWeight: "bold",
        paddingTop:10
    },
    subTitle:{
        color: '#009186',
        fontSize: 20,
        paddingTop:5
    },
    discTitle:{
        color: '#808080',
        fontSize: 20,
        padding:5
    },
    img:{
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "yellow"
    },
    disciplinas:{
        padding: 10,
        borderWidth:3,
        borderStyle: "dotted",
        borderColor: "#bdbebd",
        marginTop: 10
    }
})

export default style;