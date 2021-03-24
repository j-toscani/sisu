import Head from "next/head";
import styles from "../styles/Lobbies.module.css";
import Link from "next/link";
import Logo from "../components/logo/Logo";
import BackBtn from "../components/button/BackBtn";
import CreateBtn from "../components/button/CreateBtn";
import LobbyListItem from "../components/misc/LobbyListItem";
import { useRouter } from "next/dist/client/router";

export default function Lobbies() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Lobbies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <Logo size="big" />
          <CreateBtn onClick={() => alert("Lobby create")} />
          <div className={styles.pageItems}>
            <Link href="/user">
              <a>
                <BackBtn />
              </a>
            </Link>
            <ul className={styles.list}>
              <LobbyListItem
                playerCount={7}
                lobbyNr={1}
                onClick={() => router.push("/game")}
                lobbyIsFull={null}
              />
              <LobbyListItem
                playerCount={8}
                lobbyNr={2}
                onClick={() => alert("joined")}
                lobbyIsFull={null}
              />
              <LobbyListItem
                playerCount={0}
                lobbyNr={3}
                onClick={() => alert("joined")}
                lobbyIsFull={null}
              />
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
