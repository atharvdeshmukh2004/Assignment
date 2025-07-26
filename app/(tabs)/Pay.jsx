import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button } from "@react-navigation/elements";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { SnowIcon } from "@hugeicons/core-free-icons";

import { faker } from "@faker-js/faker";

const mastercardCreditCard = faker.finance.creditCardNumber("mastercard");
console.log("Mastercard Credit Card Number:", mastercardCreditCard);

export default function Pay() {
  const VerticalCardNumber = ({ number }) => {
    const groups = number.split("-");
    return (
      <View>
        {groups.map((group, index) => (
          <Text key={index} style={styles.text}>
            {group}
          </Text>
        ))}
      </View>
    );
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: 14,
      fontWeight: "bold",
      marginVertical: 4,
      letterSpacing: 2,
      color: "white",
    },
  });

  const [freeze, setfreeze] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0D0D0D",
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          marginTop: 44,
          marginLeft: 16,
          fontSize: 24,
          fontWeight: "600",
        }}
      >
        select payment mode
      </Text>

      <Text
        style={{
          color: "white",
          marginTop: 32,
          marginLeft: 16,
          fontSize: 14,
          fontWeight: "400",
        }}
      >
        choose your preferred payment method to make payment.
      </Text>

      <View
        style={{
          flexDirection: "row",
          gap: 8,
          marginTop: 20,
          marginLeft: 16,
        }}
      >
        <Button
          style={{
            backgroundColor: "black",
            width: 96,
            borderWidth: 1,
            borderColor: "white",
            shadowColor: "white",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            pay
          </Text>
        </Button>

        <Button
          style={{
            backgroundColor: "black",
            width: 96,
            borderWidth: 1,
            borderColor: "red",
            shadowColor: "red",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            card
          </Text>
        </Button>
      </View>

      <Text
        style={{
          color: "white",
          opacity: 0.6,
          marginTop: 48,
          marginLeft: 16,
          fontSize: 14,
        }}
      >
        YOUR DIGITAL DEBIT CARD
      </Text>

      {freeze ? (
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              marginTop: 20,
              marginLeft: 18,
            }}
          >
            <Image
              source={require("./../../assets/images/Design_Layer.png")}
              style={{
                width: 196,
                height: 296,
                borderRadius: 10,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 100,
              marginLeft: 8,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#0D0D0D",
                borderRadius: 50,
              }}
              onPress={() => setfreeze(false)}
            >
              <Image source={require("./../../assets/images/snowfall.png")} />
            </TouchableOpacity>
            <Text
              style={{
                color: "red",
                opacity: 0.7,
                marginTop: 2,
                marginLeft: 6,
              }}
            >
              unfreeze
            </Text>
          </View>
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "#00000066",
              width: 186,
              height: 296,
              borderRadius: 10,
              marginTop: 20,
              marginLeft: 16,
              shadowColor: "white",
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                paddingVertical: 8,
              }}
            >
              <Image source={require("./../../assets/images/logo.png")} />
              <Image source={require("./../../assets/images/yesBank.png")} />
            </View>

            <View
              style={{
                marginLeft: 14,
                flex: 1,
                flexDirection: "column",
                gap: 5,
              }}
            >
              <VerticalCardNumber const number={mastercardCreditCard} />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginRight: 24,
              }}
            >
              <View style={{ marginTop: 15, marginRight: 30 }}>
                <Text style={{ color: "white", opacity: 0.5 }}>expiry</Text>
                <Text style={{ color: "red" }}>01|28</Text>
              </View>

              <Text
                style={{
                  color: "white",
                  opacity: 0.5,
                  marginTop: 20,
                  marginRight: 44,
                }}
              >
                cvv
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  gap: 5,
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("./../../assets/images/star.png")}
                  style={{ marginTop: 4 }}
                />
                <Image source={require("./../../assets/images/eye.png")} />
              </View>
            </View>

            <View
              style={{
                marginTop: 60,
                flexDirection: "row",
                marginLeft: 16,
              }}
            >
              <Image source={require("./../../assets/images/u_copy.png")} />
              <Text style={{ color: "red" }}>Copy details</Text>
              {/* <Image
                source={require("./../../assets/images/copy.png")}
                style={{ marginTop: 5 }}
              /> */}
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "colum",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                padding: 6,
              }}
            >
              <Image source={require("./../../assets/images/Rupay.png")} />
            </View>
          </View>
          <View
            style={{
              marginTop: 100,
              marginLeft: 8,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#0D0D0D",
                borderRadius: 50,
              }}
              onPress={() => setfreeze(true)}
            >
              <Image source={require("./../../assets/images/freeze.png")} />
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                opacity: 0.7,
                marginTop: 2,
                marginLeft: 9,
              }}
            >
              freeze
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
