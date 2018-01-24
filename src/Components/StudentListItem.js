import React from 'react';
import { StyleSheet, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { 
  ListItem,
  Text,
  Left,
  Icon,
  Button,
  Body,
  View,
  Right
} from 'native-base';

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 0.5,
    borderColor: '#E0E0E0', 
    borderRadius: 3, 
    margin: 5, 
    marginRight: 15 
  },
  text: {
    left: 10,
    fontSize: 22, 
    fontWeight: '100', 
    color: '#424242', 
    fontFamily: 'sans-serif-thin'
  },
  starText: {
      fontFamily: 'sans-serif-thin',
      fontSize: 26,
  },
  rightButton: {
      top: 21, 
      backgroundColor: "#D32F2F"
  }
});

export default lt = ({ children, stars, rate, unRate, remove }) => {
    return (
        <Swipeable 
            rightButtons= {
                [
                    <Button 
                        danger 
                        onPress={() => unRate()}
                        fullwidth
                        style={styles.rightButton}
                    >
                        <Icon 
                            name="ios-star-outline"
                        /> 
                    </Button>
                    ,<Button 
                        danger 
                        onPress={() => remove()}
                        style={styles.rightButton}
                    >
                        <Icon 
                            name="ios-trash-outline"
                        /> 
                    </Button>
                ]
            }
        >
            <ListItem 
                style={styles.listItem}
            >
                <Left>
                    <View>
                        <Text style={styles.text}>
                            {children}
                        </Text>
                    </View>
                    <Right>
                        <Text style={styles.starText}>{stars}</Text>
                    </Right>
                </Left>
                <Right>
                    <Button 
                        transparent 
                        bordered
                        warning
                        onPress = {() => rate()}
                    >
                        <Icon 
                            name="ios-star-outline"
                        /> 
                    </Button>
                </Right>
            </ListItem>
        </Swipeable>
    )
};

