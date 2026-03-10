import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

// import components
import NavButton from "../components/NavButton";
import Header from "../components/Header";

// import constants
import Cards from "../constants/cards";

// function to generate random cards
function generateRandomBetween(min, max, exclude) {
  const cardKeys = Object.keys(Cards);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  const cardName = cardKeys[rndNum];

  if (exclude.includes(cardName)) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return cardName;
  }
}

// -----------
// Game Screen
// -----------

function GameScreen(props) {
  // set safe area screen boundaries
  const inset = useSafeAreaInsets();

  // ----------
  // Game Logic
  // ----------

  // set state variables for drawn cards
  const [drawnCards, setDrawnCards] = useState([]);
  const [userHand, setUserHand] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [numUserHand, setNumUserHand] = useState(0);
  const [computerHand, setComputerHand] = useState([]);
  const [computerScore, setComputerScore] = useState(0);
  const [userFinished, setUserFinished] = useState(false);

  // handler functions

  // ------
  // PLAYER
  // ------

  function drawUserCardHandler() {
    // generate a random card name
    let userCard = generateRandomBetween(0, 52, drawnCards);

    // set the card as drawn from the deck
    setDrawnCards((prevDrawnCards) => {
      return [userCard, ...prevDrawnCards];
    });

    // set the card in the user hand
    setUserHand((prevUserCards) => {
      return [userCard, ...prevUserCards];
    });

    // set the number of cards in player's hand
    setNumUserHand(userHand.length);

    // calculate the new score for the user to see if the card will make the player bust
    if (Cards[userCard].value + userScore > 21) {
      // if new card makes the player bust, check to see if they have any aces
      // ace of clubs
      if (userHand.includes("aceClubs")) {
        // change to low ace
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceClubs")] = "lowAceClubs";
          return newUserCards;
        });

        // change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });

        // ace of spades
      } else if (userHand.includes("aceSpades")) {
        // change to low ace
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceSpades")] = "lowAceSpades";
          return newUserCards;
        });

        // change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });

        // ace of hearts
      } else if (userHand.includes("aceHearts")) {
        // change to low ace
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceHearts")] = "lowAceHearts";
          return newUserCards;
        });

        // change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });

        // ace of diamonds
      } else if (userHand.includes("aceDiamonds")) {
        // change to low ace
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceDiamonds")] = "lowAceDiamonds";
          return newUserCards;
        });

        // change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });

        // no aces
      } else {
        // if the player has no aces then add score and bust
        setUserScore((prevUserScore) => {
          return prevUserScore + Cards[userCard].value;
        });
      }
    } else {
      // if the player won't bust, add score like normal
      setUserScore((prevUserScore) => {
        return prevUserScore + Cards[userCard].value;
      });
    }
  }

  // --------
  // COMPUTER
  // --------
  function drawComputerCardHandler() {
    // generate a random card
    let computerCard = generateRandomBetween(0, 52, drawnCards);

    // set the card as drawn from the deck
    setDrawnCards((prevDrawnCards) => {
      return [computerCard, ...prevDrawnCards];
    });

    // set the card in the computer's hand
    setComputerHand((prevComputerCards) => {
      return [computerCard, ...prevComputerCards];
    });

    // calculate the new score for the computer to see if the card will make the player bust
    if (Cards[computerCard].value + computerScore > 21) {
      // if new card makes the computer bust, check to see if they have any aces
      // ace of clubs
      if (computerHand.includes("aceClubs")) {
        // change to low ace
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceClubs")] =
            "lowAceClubs";
          return newComputerCards;
        });

        // change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });

        // ace of spades
      } else if (computerHand.includes("aceSpades")) {
        // change to low ace
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceSpades")] =
            "lowAceSpades";
          return newComputerCards;
        });

        // change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });

        // ace of hearts
      } else if (computerHand.includes("aceHearts")) {
        // change to low ace
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceHearts")] =
            "lowAceHearts";
          return newComputerCards;
        });

        // change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });

        // ace of diamonds
      } else if (computerHand.includes("aceDiamonds")) {
        // change to low ace
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceDiamonds")] =
            "lowAceDiamonds";
          return newComputerCards;
        });

        // change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });

        // no aces
      } else {
        // if the computer has no aces then add score and bust
        setComputerScore((prevComputerScore) => {
          return prevComputerScore + Cards[computerCard].value;
        });
      }
    } else {
      // if the computer won't bust, add score like normal
      setComputerScore((prevComputerScore) => {
        return prevComputerScore + Cards[computerCard].value;
      });
    }
  }

  // function that handles the user finishing the game and adding cards to computer's hand
  function stayHandler() {
    // set user finished to true
    setUserFinished(true);

    // attempt to add up to 10 cards to the computer's hand
    if (computerScore <= 16) {
      // wait for the draw handler to complete before continuing the loop
      drawComputerCardHandler();
    }
  }

  // hook that will occur only when the page is added to the ui
  useEffect(() => {
    setUserHand([]);
    setComputerHand([]);
    setDrawnCards([]);
    setNumUserHand(0);
    setUserScore(0);
    setComputerScore(0);
    setUserFinished(false);

    // draw initial 2 cards for user and computer
    drawComputerCardHandler();
    drawComputerCardHandler();
    drawUserCardHandler();
    drawUserCardHandler();
  }, []); // since no dependencies only resolves when gamescreen is added to ui

  // hook that will trigger when the user score changes to see if the user busts
  useEffect(() => {
    if (userScore > 21) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userScore]); // dependent on userScore and will activate when user score changes

  // hook that will trigger when user finished
  useEffect(() => {
    if (userFinished === true && computerScore > 16) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userFinished, computerScore]);

  // -----------------
  // Window Dimensions
  // -----------------
  const { width, height } = useWindowDimensions();

  // ---------------
  // Dynamic Display
  // ---------------

  // PORTRAIT
  let content = (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
          paddingLeft: inset.left,
          paddingRight: inset.right,
        },
      ]}
    >
      {/*COMPUTER*/}
      <View style={[styles.headerContainer, { height: height * 0.15 }]}>
        <Header>Computer's Hand</Header>
      </View>
      <View style={styles.computerImageContainer}>
        <Image
          style={[styles.computerImage, { width: width * 0.25 }]}
          source={require("../assets/images/cardback1.png")}
        />
        <View style={{ marginLeft: -15 }}>
          <Image
            style={[styles.computerImage, { width: width * 0.25 }]}
            source={
              computerHand.length === 0
                ? require("../assets/images/cardback1.png")
                : Cards[computerHand[1]].picture
            }
          />
        </View>
      </View>

      {/*PLAYER*/}
      <View style={[styles.headerContainer, { height: height * 0.15 }]}>
        <Header>Player's Hand</Header>
      </View>
      <View style={styles.playerImageContainer}>
        {userHand.map((index) => {
          return (
            <View key={index} style={{ marginLeft: -15 * (numUserHand + 1) }}>
              <Image
                style={[styles.playerImage, { width: width * 0.25 }]}
                source={
                  userHand.length === 0
                    ? require("../assets/images/cardback1.png")
                    : Cards[index].picture
                }
              />
            </View>
          );
        })}
      </View>

      <View style={[styles.buttonsContainer, { height: height * 0.25 }]}>
        <NavButton onPress={drawUserCardHandler}>Hit Me</NavButton>
        <NavButton onPress={stayHandler}>Stay</NavButton>
      </View>
    </View>
  );

  // LANDSCAPE
  if (width > height) {
    content = (
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: inset.top,
            paddingBottom: inset.bottom,
            paddingLeft: inset.left,
            paddingRight: inset.right,
          },
        ]}
      >
        <View style={styles.rowContainer}>
          {/*COMPUTER*/}
          <View style={styles.innerRowContainer}>
            <View style={[styles.headerContainer, { height: height * 0.15 }]}>
              <Header>Computer's Hand</Header>
            </View>
            <View style={styles.computerImageContainer}>
              <Image
                style={[styles.computerImage, { width: width * 0.15 }]}
                source={require("../assets/images/cardback1.png")}
              />
              <View style={{ marginLeft: -15 }}>
                <Image
                  style={[styles.computerImage, { width: width * 0.15 }]}
                  source={
                    computerHand.length === 0
                      ? require("../assets/images/cardback1.png")
                      : Cards[computerHand[1]].picture
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.innerRowContainer}>
            {/*PLAYER*/}
            <View style={[styles.headerContainer, { height: height * 0.15 }]}>
              <Header>Player's Hand</Header>
            </View>
            <View style={styles.playerImageContainer}>
              {userHand.map((index) => {
                return (
                  <View
                    key={index}
                    style={{ marginLeft: -15 * (numUserHand + 1) }}
                  >
                    <Image
                      style={[styles.playerImage, { width: width * 0.15 }]}
                      source={
                        userHand.length === 0
                          ? require("../assets/images/cardback1.png")
                          : Cards[index].picture
                      }
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        <View style={[styles.buttonsContainer, { height: height * 0.25 }]}>
          <NavButton onPress={drawUserCardHandler}>Hit Me</NavButton>
          <NavButton onPress={stayHandler}>Stay</NavButton>
        </View>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/images/blackjack_felt.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      {content}
    </ImageBackground>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.35,
  },

  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1
  },
  innerRowContainer: {
    flex: 1
  },

  computerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  computerImage: {
    resizeMode: "contain",
  },

  playerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  playerImage: {
    resizeMode: "contain",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
