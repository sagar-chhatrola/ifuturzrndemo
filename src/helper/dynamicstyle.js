import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic'


const dynamicStyles = new DynamicStyleSheet({
   
    text: {
        color: new DynamicValue('black', 'black'),
        
    },
})

export default dynamicStyles