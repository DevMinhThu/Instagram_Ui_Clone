import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {
  Icon,
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Body,
  Right,
} from 'native-base';
import CardComponent from '../CardComponent';
import {IMAGE} from '../Constants/Image';

export default class HomeTab extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          {/* Header */}
          <Header style={styles.header}>
            <Left style={{flex: 1}}>
              <Icon name="ios-camera" style={styles.iconCamera} />
            </Left>
            <Body style={styles.titleApp}>
              <Text style={styles.textTitle}>Instagram</Text>
            </Body>
            <Right style={{flex: 1}}>
              <Icon name="ios-send" style={styles.iconSend} />
            </Right>
          </Header>

          {/* Stories */}
          <View style={{height: 100}}>
            <View style={styles.stories}>
              <Text style={{fontWeight: 'bold'}}>Stories</Text>
              <View style={styles.iconWatch}>
                <Image style={{marginRight: 2}} source={IMAGE.ICON_PLAY} />
                <Text style={{fontWeight: 'bold'}}>Watch All</Text>
              </View>
            </View>
            <View style={{flex: 3}}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={styles.avatarIcon}>
                <View style={styles.iconAvatar}>
                  <Thumbnail
                    style={styles.thumnailPerson}
                    source={IMAGE.IMAGE_6}
                  />
                  <Text>Davil</Text>
                </View>
                <View style={styles.iconAvatar}>
                  <Thumbnail
                    style={styles.thumnailPerson}
                    source={IMAGE.IMAGE_5}
                  />
                  <Text>Donal</Text>
                </View>
                <View style={styles.iconAvatar}>
                  <Thumbnail
                    style={styles.thumnailPerson}
                    source={IMAGE.IMAGE_9}
                  />
                  <Text>Crist</Text>
                </View>
                <View style={styles.iconAvatar}>
                  <Thumbnail
                    style={styles.thumnailPerson}
                    source={IMAGE.IMAGE_4}
                  />
                  <Text>Geak</Text>
                </View>
                <View style={styles.iconAvatar}>
                  <Thumbnail
                    style={styles.thumnailPerson}
                    source={IMAGE.IMAGE_3}
                  />
                  <Text>Tomart</Text>
                </View>
                <View style={styles.iconAvatar}>
                  <Thumbnail
                    style={styles.thumnailPerson}
                    source={IMAGE.IMAGE_2}
                  />
                  <Text>Frank</Text>
                </View>
                <View style={styles.iconAvatar}>
                  <Thumbnail
                    style={styles.thumnailPerson}
                    source={IMAGE.IMAGE_1}
                  />
                  <Text>Ricker</Text>
                </View>
              </ScrollView>
            </View>
          </View>

          {/* post */}
          <CardComponent imageSource="1" likes="110" />
          <CardComponent imageSource="2" likes="50" />
          <CardComponent imageSource="3" likes="1000" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {backgroundColor: '#1C2833', height: 50},
  iconCamera: {paddingLeft: 10, color: '#fff', fontSize: 35},
  titleApp: {flex: 1.5, justifyContent: 'center', alignItems: 'center'},
  textTitle: {color: '#fff', fontSize: 20},
  iconSend: {paddingRight: 10, color: '#fff', fontSize: 35},
  stories: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
  },
  iconWatch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {alignItems: 'center', paddingStart: 5},
  iconAvatar: {justifyContent: 'center', alignItems: 'center'},
  thumnailPerson: {
    marginHorizontal: 5,
    borderColor: 'grey',
    borderWidth: 2,
  },
});
