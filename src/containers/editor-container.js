/**
 * @flow
 */

'use strict';

import React, { PureComponent } from 'react';
import { View, StatusBar } from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
} from 'native-base';
import { connect } from 'react-redux';
import GravatarAPI from '../services/api-gravatar';

class EditorContainer extends PureComponent {
  componentDidMount() {
    GravatarAPI.test('doraemonfanclub@gmail.com', 'phamvanquan');
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header iosBarStyle="light-content">
          <StatusBar backgroundColor="#d32f2f" barStyle="light-content" />
          <Left>
            <Button title="" transparent onPress={() => navigate('DrawerOpen')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Test</Title>
          </Body>
        </Header>
        <View style={{ flex: 1, marginTop: 24, backgroundColor: '#fff' }}>
          <Button onPress={() => null} title="Learn More" color="#841584" />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { nav, common, post } = state;
  return {
    nav,
    common,
    post,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);
