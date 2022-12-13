import Router from "next/router";
import { createStyles, Text, Image } from '@mantine/core';

const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    background: "linear-gradient(#181857 , #0A0A0C 30%)",
    height: "100vh",
    width: "100%",
  },
  headerText: {
    fontSize: 60,
    color: "white",
    textAlign: "center",
  },
  subtext: {
    color: "white", textAlign: "center"
  },
  logo: {
    alignSelf: "center",
    width: "100px",
    height: "100px",
    marginTop: "20px",
    ":hover": {
      height: "110px",
      width: "110px",
      cursor: "pointer",
      marginTop: "10px",
    },
  }
}))

const LandingPage = () => {

  const { classes } = useStyles();

  return (
  <div
    className={classes.container}
  >
    <Text
    size={60}
    color={"white"}
    align={"center"}
    >
      🤘 Music Metronome 🤘
    </Text>

    <Text color={"white"} align={"center"}>
      Get started by logging in
    </Text>
    <Image
    imageProps={{style: {
      alignSelf: "center",
    width: "100px",
    height: "100px",
    marginTop: "20px",
  }}}
      src="/spotify.png"
      alt="Spotify Logo"
      onClick={() => Router.push("/login")}
    />
  </div>
)}

export default LandingPage;