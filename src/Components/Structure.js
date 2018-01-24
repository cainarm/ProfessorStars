import React from 'react';
import { StyleSheet, Platform} from 'react-native';
import { 
  Container, 
  Header, 
  Left,
  Title, 
  Subtitle,
  Content, 
  Button,
  Icon, 
  Right, 
  Body
} from 'native-base';


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0277BD', 
    height: 85
  },
  body: {
    paddingTop: 15
  },
  title: {
    fontFamily: 'Roboto',
    color: '#fff',
  },
  subtitle: {
    color: '#fff',
    marginLeft: 5
  },
  titleWithBackButton: {
    color: '#fff',
    marginLeft: -20
  },
  subTitleWithBackButton: {
    color: '#fff',
    marginLeft: -15,
  },
  content: {
    backgroundColor: "#FAFAFA"
  },
  backButton: {
    left: 5,
    top: 5
  }

});

export default Structure = ({children, title, subtitle , fab, style, hasBackButton = false, backButtonAction}) => {
    return (
      <Container>
        <Header style={styles.header}>
          {hasBackButton &&
              <Left>
                <Button transparent style={styles.backButton} onPress={() => backButtonAction()}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
          }
          <Body style={styles.body}>
            <Title style={!hasBackButton? styles.title : styles.titleWithBackButton}> {title} </Title>
            <Subtitle style={!hasBackButton? styles.subtitle : styles.subTitleWithBackButton}>{subtitle}</Subtitle>
          </Body>
           <Right/>
        </Header>
        <Content styles ={styles.content} {...style}>
            { 
                children
            }
        </Content>
        {fab && fab}
      </Container>
    )
};

