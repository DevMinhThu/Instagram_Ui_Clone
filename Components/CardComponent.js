import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,
  Right,
} from 'native-base';
import {IMAGE} from '../Components/Constants/Image';

export default class CardComponent extends Component {
  render() {
    const images = {
      '1': IMAGE.IMAGE_8,
      '2': IMAGE.IMAGE_2,
      '3': IMAGE.IMAGE_3,
    };

    return (
      <Card style={styles.styleCard}>
        <TouchableOpacity>
          <CardItem>
            <Left>
              <Thumbnail source={IMAGE.IMAGE_8} />
              <Body>
                <Text style={{fontWeight: 'bold'}}>Mr MT</Text>
                <Text>Jan 12, 2020</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableOpacity>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={styles.imageContent}
          />
        </CardItem>
        <CardItem style={{height: 45}}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart" style={{color: 'red'}} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{color: 'blue'}} />
            </Button>
          </Left>
          <Right>
            <Text style={{fontWeight: 'bold'}}>{this.props.likes} likes</Text>
          </Right>
        </CardItem>
        <TouchableOpacity>
          <CardItem>
            <Body>
              <Text>
                <Text style={{fontWeight: 'bold'}}> Xin chào!</Text>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Text>
            </Body>
          </CardItem>
        </TouchableOpacity>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  styleCard: {
    borderRadius: 25,
  },
  imageContent: {
    height: 200,
    width: null,
    flex: 1,
  },
});
