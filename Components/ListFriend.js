import React, {Component} from 'react';
import {
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {IMAGE} from '../Components/Constants/Image';

export default class ListAvatarExample extends Component {
  render() {
    const images = {
      '1': IMAGE.IMAGE_8,
      '2': IMAGE.IMAGE_2,
      '3': IMAGE.IMAGE_3,
      '4': IMAGE.IMAGE_7,
      '5': IMAGE.IMAGE_4,
    };

    return (
      <Content>
        <List>
          <ListItem avatar>
            <Left>
              <TouchableOpacity onPress={() => {}}>
                <Thumbnail source={images[this.props.imageSource]} />
              </TouchableOpacity>
            </Left>
            <Body>
              <TouchableOpacity onPress={() => {}}>
                <Text>{this.props.name}</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </TouchableOpacity>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    );
  }
}
