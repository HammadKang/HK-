import { StyleSheet,Dimensions } from "react-native";

const styles=StyleSheet.create({
    carcontainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    titles: {
        marginTop:'20%',
        width:'100%',
        alignItems:'center',
    
    },
    title:{
        fontSize: 36,
        fontWeight:"500",
    
    },
    subtitleCTA:{
        textDecorationLine:'underline',
    },
    subtitle:{
        fontSize: 16,
        color:'black'
    
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode: 'cover',
        position:'absolute',
    },
    buttonContainer:{
        position:'absolute',
        bottom: 40,
        width:'100%',
    },
});

export default styles;