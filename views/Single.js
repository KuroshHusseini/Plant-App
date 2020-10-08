/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import {
  Card,
  CardItem,
  Left,
  Icon,
  Text,
  Content,
  Container,
  StyleProvider,
  Right,
} from 'native-base';
import {Video} from 'expo-av';
import {getUser} from '../hooks/APIhooks';
import AsyncStorage from '@react-native-community/async-storage';
import * as ScreenOrientation from 'expo-screen-orientation';
import material from '../theme/variables/material';
import getTheme from '../theme/components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CommentForm from '../components/CommentForm';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = ({route}) => {
  const [error, setError] = useState(false);
  const [owner, setOwner] = useState({});
  const [videoRef, setVideoRef] = useState(null);

  const [likes, setLikes] = useState(0);
  const {file} = route.params;

  const handleLikes = () => {
    setLikes((prevLike) => prevLike + 1);
  };

  const handleVideoRef = (component) => {
    setVideoRef(component);
  };

  const showVideoInFullscreen = async () => {
    // console.log('svifs', videoRef);
    try {
      await videoRef.presentFullscreenPlayer();
    } catch (e) {
      console.log('svifs error', e.message);
    }
  };

  const unlock = async () => {
    await ScreenOrientation.unlockAsync();
  };

  const lock = async () => {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP,
    );
  };

  const fetchOwner = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    setOwner(await getUser(file.user_id, userToken));
  };

  useEffect(() => {
    unlock();
    fetchOwner();

    const orientSub = ScreenOrientation.addOrientationChangeListener((evt) => {
      console.log('orientation', evt);
      if (evt.orientationInfo.orientation > 2) {
        showVideoInFullscreen();
      }
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(orientSub);
      lock();
    };
  }, [videoRef]);

  console.log('kuva', mediaUrl + file.filename);
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Icon name={'image'} />
                <Text style={{fontSize: 23}}>{file.title}</Text>
              </Left>
              <Right>
                <TouchableOpacity
                  onPress={handleLikes}
                  //   onPress={
                  //     async ()=>{
                  //     const userToken = await AsyncStorage.getItem('userToken');
                  //     addFavorite(file.file_id, userToken );
                  //   }

                  // }
                >
                  <Text>
                    <Icon name="heart"> {likes}</Icon>
                  </Text>
                </TouchableOpacity>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <>
                {file.media_type === 'image' ? (
                  <Image
                    source={{uri: mediaUrl + file.filename}}
                    style={{height: 250, width: null, flex: 1}}
                  />
                ) : (
                  <Video
                    ref={handleVideoRef}
                    source={{
                      uri: error ?
                        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' :
                        mediaUrl + file.filename,
                    }}
                    style={{height: 250, width: null, flex: 1}}
                    useNativeControls={true}
                    resizeMode="cover"
                    posterSource={{uri: mediaUrl + file.screenshot}}
                    usePoster={true}
                    posterStyle={{height: 250, width: null}}
                    onError={(err) => {
                      console.log('video error', err);
                      setError(true);
                    }}
                  />
                )}
              </>
            </CardItem>

            <CardItem style={{flexDirection: 'row', alignContent: 'center'}}>
              <Text style={{fontSize: 18}}>{file.description}</Text>
              <Text style={{fontSize: 18}}> By: {owner.username}</Text>
            </CardItem>
          </Card>
          <CommentForm fileId={file.file_id} />
        </Content>
      </Container>
    </StyleProvider>
  );
};

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
