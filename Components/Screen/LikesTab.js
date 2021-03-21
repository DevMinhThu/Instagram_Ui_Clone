import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';

export default class ProfileTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        {/* Header */}
        <Header style={styles.headerProfile}>
          <Left style={{flex: 1}}>
            <Text style={styles.title}>Activate</Text>
          </Left>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  headerProfile: {backgroundColor: '#1C2833', height: 50},
  title: {color: '#fff', fontSize: 20},
});
