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
import CardComponent from '../CardComponent';
import ListFriend from '../ListFriend';
import {IMAGE} from '../Constants/Image';
import {Image_InProfile} from '../Constants/Image_InProfile';

var {width, height} = Dimensions.get('window');

export default class ProfileTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  // function change index
  segmentClicked = index => {
    this.setState({
      activeIndex: index,
    });
  };

  // render options 1 in profiles
  renderSectionOne = () => {
    return Image_InProfile.map((Image_InProfile, index) => {
      return (
        <View
          key={index}
          style={[
            {width: width / 3},
            {height: width / 3},
            {marginBottom: 2},
            index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0},
          ]}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={Image_InProfile}
          />
        </View>
      );
    });
  };

  // Render the selection
  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderSectionOne()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardComponent imageSource="1" likes="110" />
          <CardComponent imageSource="2" likes="50" />
          <CardComponent imageSource="3" likes="1000" />
        </View>
      );
    } else if (this.state.activeIndex == 2) {
      return (
        <View>
          <ListFriend imageSource="1" name="Kumar Pratik" />
          <ListFriend imageSource="2" name="Davil Becker" />
          <ListFriend imageSource="3" name="Mutil Donal" />
          <ListFriend imageSource="4" name="Cris Fan" />
          <ListFriend imageSource="5" name="Virus iz" />
        </View>
      );
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        {/* Header */}
        <Header style={styles.headerProfile}>
          <Left style={{flex: 1}}>
            <Icon name="ios-person" style={styles.iconPerson} />
          </Left>
          <Body style={styles.bodyProfile}>
            <Text style={styles.textProfile}>DoctorHamart22</Text>
          </Body>
          <Right style={{flex: 1}}>
            <Icon name="ios-menu" style={styles.iconMenu} />
          </Right>
        </Header>

        {/* Profile_main */}
        <Content>
          <View style={{paddingTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image style={styles.imageAvatar} source={IMAGE.IMAGE_9} />
              </View>
              <View style={{flex: 3}}>
                <View style={styles.infomation}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 18}}>16</Text>
                    <Text style={styles.posts}>Posts</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 18}}>200</Text>
                    <Text style={styles.follower}>Follower</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 18}}>116</Text>
                    <Text style={styles.following}>Following</Text>
                  </View>
                </View>

                <View style={styles.systemProfile}>
                  <Button bordered dark style={styles.buttonEdit}>
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button bordered dark style={styles.buttonSetting}>
                    <Icon name="ios-cog" style={styles.iconSetting} />
                  </Button>
                </View>
              </View>
            </View>

            <View style={{paddingHorizontal: 10}}>
              <Text style={{fontWeight: 'bold'}}>DoctorHamart22</Text>
              <Text>Coder | Designer | CS | Hacker</Text>
              <Text>www.DoctorHamart22Signer.com</Text>
            </View>
          </View>

          {/* tabbar */}
          <View>
            <View style={styles.editTabbar}>
              <Button
                transparent
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex == 0}>
                <Icon
                  name="ios-apps"
                  style={[this.state.activeIndex == 0 ? {} : {color: 'grey'}]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex == 1}>
                <Icon
                  name="ios-list"
                  style={[this.state.activeIndex == 1 ? {} : {color: 'grey'}]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(2)}
                active={this.state.activeIndex == 2}>
                <Icon
                  name="ios-people"
                  style={[this.state.activeIndex == 2 ? {} : {color: 'grey'}]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(3)}
                active={this.state.activeIndex == 3}>
                <Icon
                  name="ios-bookmark"
                  style={[this.state.activeIndex == 3 ? {} : {color: 'grey'}]}
                />
              </Button>
            </View>

            {/* renderImage */}
            {this.renderSection()}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  headerProfile: {backgroundColor: '#1C2833', height: 50},
  iconPerson: {paddingLeft: 10, color: '#fff', fontSize: 35},
  bodyProfile: {flex: 1.5, justifyContent: 'center', alignItems: 'center'},
  textProfile: {color: '#fff', fontSize: 16},
  iconMenu: {paddingRight: 10, color: '#fff', fontSize: 35},
  imageAvatar: {width: 75, height: 75, borderRadius: 50},
  infomation: {flexDirection: 'row', justifyContent: 'space-around'},
  posts: {fontSize: 13, color: 'grey'},
  follower: {fontSize: 13, color: 'grey'},
  following: {fontSize: 13, color: 'grey'},
  systemProfile: {flexDirection: 'row', padding: 10},
  buttonEdit: {
    flex: 3,
    marginLeft: 10,
    justifyContent: 'center',
    height: 30,
    borderRadius: 5,
  },
  buttonSetting: {
    flex: 1,
    marginRight: 10,
    marginLeft: 5,
    justifyContent: 'center',
    height: 30,
    borderRadius: 5,
  },
  iconSetting: {paddingRight: 3, paddingLeft: 3, color: 'black', fontSize: 24},
  editTabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eae5e5',
    marginTop: 10,
  },
});
