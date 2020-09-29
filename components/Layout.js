import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Right,
  Title,
  Icon,
  Content,
  StyleProvider,
} from "native-base";
import getTheme from "../theme/components/";

const Layout = (props) => {
  console.log("Layout", props);
  const handleBackButtonClick = () => {
    props.navigation.goBack(null);
    return true;
  };

  return (
    <StyleProvider style={getTheme()}>
      <Container>
        <Header>
          <Left>
            {props.backButton && (
              <Button transparent onPress={handleBackButtonClick}>
                <Icon name="arrow-back" />
              </Button>
            )}
          </Left>

          <Body>
            <Title>MyApp</Title>
          </Body>

          <Right></Right>
        </Header>

        <Content padder>{props.children}</Content>
      </Container>
    </StyleProvider>
  );
};

Layout.propTypes = {
  navigation: PropTypes.object,
  children: PropTypes.any,
  backButton: PropTypes.bool,
};

export default Layout;
