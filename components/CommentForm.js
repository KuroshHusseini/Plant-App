import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, TextInput, Form, View, Button, Text } from "native-base";
import { AuthContext } from "../contexts/AuthContext";
import useCommentForm from "../hooks/CommentHooks";
import FormTextInput from "./FormTextInput";
import AsyncStorage from "@react-native-community/async-storage";
import { postComment, getComments } from "../hooks/APIhooks";
const CommentForm = ({ fileId }) => {
  const [comments, setComments] = useState([]);
  const {
    handleInputChange,
    validateOnSend,
    inputs,
    loginErrors,
    setInputs,
  } = useCommentForm();

  const doComment = async () => {
    if (!validateOnSend()) {
      console.log("validate on send failed");
      return;
    }
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      const commentData = await postComment(inputs, userToken);
      console.log("user comment success:", commentData);
    } catch (e) {
      console.log("comment error", e.message);
    }
    // navigation.navigate('Home');
  };

  const fetchComments = async () => {
    setInputs((inputs) => {
      return {
        ...inputs,
        file_id: fileId,
      };
    });

    try {
      setComments(await getComments(fileId));
    } catch (e) {
      console.log("comment error", e.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);
  console.log("rivi 51", comments);
  return (
    <View>
      <View>
        <FormTextInput
          placeholder="What is you opinion :)"
          onChangeText={(txt) => handleInputChange("comment", txt)}
          value={inputs.comment}
        />
        <Button title="Comment" onPress={doComment}>
          <Text>Comment</Text>
        </Button>
        <View>
          {comments.map((commentti) => (
            <Text key={commentti.comment_id}>{commentti.comment}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default CommentForm;
