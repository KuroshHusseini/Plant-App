/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";
import { checkToken } from "../hooks/APIhooks";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import {
  Title,
  Container,
  Content,
  Text,
  View,
  StyleProvider,
} from "native-base";
import RegisterButton from "../components/RegisterButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import getTheme from "../theme/components";
import materialTwo from "../theme/variables/materialTwo";

const Login = ({ navigation }) => {
  // props is needed for navigation
  const { setIsLoggedIn, setUser, user } = useContext(AuthContext);

  const [showRegistration, setShowRegistration] = useState(true);
  // console.log('Login', isLoggedIn);

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    console.log("token", userToken);
    if (userToken) {
      try {
        const userData = await checkToken(userToken);
        console.log("token valid", userData);
        setIsLoggedIn(true);
        setUser(userData);
      } catch (e) {
        console.log("token check failed", e.message);
      }
      // navigation.navigate('Home');
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  console.log("Login.js", user);

  return (

    <StyleProvider style={getTheme(materialTwo)}>
      <Container>
        <Content padder>
          <Text
            style={{
              fontWeight: "bold",
              paddingLeft: 45,
              marginTop: 5,
              fontSize: 18,
            }}
          >
            Welcome To Plant-App Community
          </Text>
          <Title style={{ marginTop: 10 }}>
            <MaterialCommunityIcons
              name="flower-outline"
              size={160}
              color={"#008000"}
            />
          </Title>


          {showRegistration ? (
            <LoginForm navigation={navigation} />
          ) : (
            <RegisterForm navigation={navigation} />
          )}

          <View style={{ alignItems: "center", margin: 5 }}>
            <Text>OR</Text>
          </View>

          <RegisterButton
            block
            onPress={() => {
              setShowRegistration(!showRegistration);
            }}
          >
            {showRegistration ? "Register" : "Login"}
          </RegisterButton>
        </Content>
      </Container>
    </StyleProvider>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
