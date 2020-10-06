import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, Form, View } from "native-base";
import { AuthContext } from "../contexts/AuthContext";
import useCommentForm from "../hooks/CommentHooks";

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
      setInputs((inputs) => {
        return {
          ...inputs,
          file_id: fileId,
        };
      });
      const userToken = await AsyncStorage.getItem("userToken");
      const commentData = await postComment(inputs, userToken);
      console.log("user comment success:", commentData);
    } catch (e) {
      console.log("login error", e.message);
    }
    // navigation.navigate('Home');
  };

  const fetchComments = async () => {
    setComments(await useCommentForm(setComments.file_id));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <View>
      <View >
        <TextInput
          placeholder="What is you opinion :)"
          onChangeText={handleInputChange}
          value={inputs}
        />
        <Button title="Comment" onPress={doComment} />
        <View>
          {comments.Map((commentti) => (
            <Text key={commentti}>{commentti}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};



export default CommentForm;
