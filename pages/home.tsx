import { GetServerSideProps } from "next";
import { Navbar } from "../components/Navbar";
import { UserDashboard } from "../components/UserDashboard";
import { spotify, getSpotifyTokens } from "../services/spotify"

interface IHome {
  authProfile: SpotifyApi.CurrentUsersProfileResponse;
  displayName: string;
  topTunes: SpotifyApi.TrackObjectFull[];
}

const Home = ({ authProfile }: IHome) => {
  return (
    <UserDashboard {...{ displayName: authProfile.display_name }}>
      <Navbar profile={authProfile} />
    </UserDashboard>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const spotifyParams = {
    spotifyAuthCode: context.query.code || "",
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID || "",
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET || "",
    SPOTIFY_REDIRECT_URL: process.env.SPOTIFY_REDIRECT_URL || "",
  };

  try {
    const tokens = await getSpotifyTokens(spotifyParams);
    if (tokens?.accessToken) spotify.setAccessToken(tokens.accessToken);
    
    const { body: authProfile } = await spotify.getMe();
    const { display_name: displayName } = authProfile;


      return {
        props: {
          authProfile,
          displayName,
        },
      };
    }

 catch (e) {
    return {
      props: {},
    };
  }
}


export default Home;