import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, Form, View } from "native-base";
import { AuthContext } from "../contexts/AuthContext";

const CommentForm = () => {
  const { setIsComment, setEnteredComment } = useContext(AuthContext);
  const [comments, setComments] = useState([]);

  return (
    <View style={styles.container}>

      <View style={styles.inputButton}>
        <TextInput
          placeholder="What is you opinion :)"
          onChangeText={commentInputHandler}
          value={setIsComment}
        />
        <Button title="Comment" />
        <View></View>
        {comments.Map((commentti) => (
          <Text key={commentti}>{commentti}</Text>
        ))}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

});

export default CommentForm;
