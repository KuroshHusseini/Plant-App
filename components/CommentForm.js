import React, { useState, useEffect } from "react";
import { View, Button, Text } from "native-base";
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
    // fetchOwner();
  }, []);
  console.log("rivi 51", comments);
 

  return (
    <View style={{ padding: 5 }}>
      <View style={{ padding: 5, flexDirection: "row" }}>
        <View
          style={{
            width: "80%",
            height: 45,
            marginLeft: -5,
            marginRight: 5,
            borderColor: "#006400",
            borderRadius: 10,
            borderWidth: 2,
          }}
        >
          <FormTextInput
            placeholder="Write your opinion... :)"
            onChangeText={(txt) => handleInputChange("comment", txt)}
            value={inputs.comment}
            style={{
              padding: 10,
            }}
          />
        </View>

        <Button
          title="Comment"
          onPress={doComment}
          style={{ width: 85, borderRadius: 10 }}
        >
          <Text style={{ fontSize: 12 }}>Comment</Text>
        </Button>
      </View>
      <View
        style={{
          justifyContent: "space-around",
          paddingVertical: 5,
          borderRadius: 10,
        }}
      >
        <View>
          {comments.map((commentti) => (
            <View
              key={commentti.comment_id}
              style={{
                padding: 5,
                height: 45,
                borderColor: "#006400",
                borderWidth: 2,
                borderRadius: 10,
              }}
            >
              <Text>{commentti.comment}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default CommentForm;
