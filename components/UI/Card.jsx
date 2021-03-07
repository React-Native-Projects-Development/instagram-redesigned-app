import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  ImageBackground,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { IconButton } from "react-native-paper";
import SendIcon from "../Icons/SendIcon";
import OptionsIcon from "../Icons/OptionsIcon";
import LikeIcon from "../Icons/LikeIcon";
import ChatIcon from "../Icons/ChatIcon";

const Card = (props) => {
  const carousel = useRef();
  const { width } = Dimensions.get("window");
  const sliderWidth = Math.round(width);
  const itemWidth = Math.round(width);
  const [openModal, setOpenModal] = useState(false);

  const [imageUrl, setImageUrl] = useState("");

  const toggleModal = () => setOpenModal((prevState) => !prevState);

  const images = [
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222966/ig-enhanced-tl-pics/tl-1_k7v6tl.png",
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222957/ig-enhanced-tl-pics/tl-2_e53gwr.jpg",
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222956/ig-enhanced-tl-pics/tl-3_ygwf7g.jpg",
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222957/ig-enhanced-tl-pics/tl-4_ortvgv.jpg",
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222958/ig-enhanced-tl-pics/tl-5_m6l8zj.jpg",
    "https://res.cloudinary.com/bgarcia95/image/upload/v1600222963/ig-enhanced-tl-pics/tl-6_mtwoky.png",
  ];

  const [currentImageIdx, setCurrentIdx] = useState(1);

  const renderItem = ({ item }) => {
    return (
      <>
        <Pressable
          onPress={() => {
            setOpenModal(true);
            setImageUrl(item);
          }}
          style={{
            backgroundColor: "transparent",
            borderRadius: 5,
            height: "100%",
            width: "100%",
            flex: 1,
          }}
        >
          <Image
            source={{
              uri: item,
            }}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </Pressable>
      </>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={images.length}
        activeDotIndex={currentImageIdx - 1}
        containerStyle={{ position: "absolute", bottom: -15 }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "#fff",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: props.profilePicture }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              {props.user}
            </Text>
            <Text style={{ color: "#969696", fontSize: 10 }}>Hace 20 min</Text>
          </View>
          <View
            style={[
              styles.cardHeader,
              {
                flex: 1,
                paddingHorizontal: 0,
                justifyContent: "flex-end",
              },
            ]}
          >
            <View
              style={{
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SendIcon width={20} height={20} />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <OptionsIcon width={15} height={15} />
            </View>
          </View>
        </View>
        {/* Card Header */}

        {/* Card Body */}
        <View
          style={{
            width: "100%",
            height: 200,
            marginVertical: 10,
            alignItems: "center",
            borderColor: "#e8e8e8",
            borderWidth: 1,
            borderRadius: 15,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              zIndex: 2,
              backgroundColor: "#D8167A",
              paddingHorizontal: 15,
              borderRadius: 20,
              height: 35,
              width: 35,
              bottom: 30,
              left: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LikeIcon width={20} height={20} color="#fff" />

            <View
              style={{
                position: "absolute",
                zIndex: 2,
                backgroundColor: "rgba(112,112,112, 0.7)",
                paddingHorizontal: 10,
                borderRadius: 50,
                height: 30,
                width: 70,
                right: -75,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12 }}>4,558</Text>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              zIndex: 2,
              backgroundColor: "rgba(0,0,0, 0.3)",
              borderRadius: 50,
              height: 30,
              paddingVertical: 5,
              paddingHorizontal: 10,
              top: 20,
              right: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12 }}>
              {`${currentImageIdx}/${images.length}`}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              zIndex: 2,
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 50,
              height: 40,
              width: 40,
              top: 265,
              left: 275,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              icon={() => <ChatIcon width={24} height={24} color="#000" />}
              onPress={() => {}}
            />
          </View>
          <Carousel
            ref={carousel}
            data={images}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={(index) => setCurrentIdx(index + 1)}
          />
          {pagination()}
        </View>

        {/* Card Footer */}

        <View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              marginVertical: 2,
            }}
          >
            <Text>
              Les gusta a {""}
              <Text style={{ fontWeight: "bold" }}>
                danieldelax y 4557 personas más
              </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              marginVertical: 2,
            }}
          >
            <Text style={[{ fontWeight: "bold" }]}>FREE | PEACE </Text>
            <Text style={[{ marginLeft: 5 }]}>My ideals</Text>
            <Text></Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              marginVertical: 2,
            }}
          >
            <Text style={[{ color: "#D5D5D5" }]}>Ver los 500 comentarios</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              marginVertical: 2,
            }}
          >
            <Text style={[{ fontWeight: "bold" }]}>perla_nomade</Text>
            <Text style={[{ marginLeft: 5 }]}>Increible!</Text>
          </View>
        </View>
      </View>

      <MediaModal open={openModal} toggleModal={toggleModal} image={imageUrl} />
    </View>
  );
};

const MediaModal = ({ image, open, toggleModal }) => {
  return (
    <Modal
      visible={open}
      transparent
      onRequestClose={toggleModal}
      statusBarTranslucent
    >
      <View style={{ padding: 20, backgroundColor: "rgba(0,0,0,0.75)" }}>
        <ImageBackground
          source={{ uri: image }}
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flex: 1,
    width: "90%",
    marginVertical: 10,
    backgroundColor: "#fff",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
});

export default Card;
