import { useRouter } from "next/router";
import Link from "next/link";
import  {Button, Flex, Image} from "@mantine/core"

export const Navbar = ({ profile }) => {
  const {
    images: [displayPicture],
  } = profile;
  const router = useRouter();
  return (
      <Flex
      direction={"row"}
      >
          <Button className="btn-logo" onClick={() => router.push("/")}>
            Music Metronome
          </Button>
          <Link href={"/dmannguy"}>
            <Button sx={{ marginLeft: 20 }}>Check out duncs profile!!</Button>
          </Link>
        {displayPicture && (
            <Image src={displayPicture.url} alt={"profilePic"}/>
        )}
      </Flex>
  )}
