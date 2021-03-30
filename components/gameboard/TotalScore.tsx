import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../contexts/SocketContext";
import styles from "./Score.module.css";

type ScoreListProps = {
  name: string;
  score: number;
};

function TotalScore() {
  const { socket } = useContext(SocketContext);
  const [scoreList, setScoreList] = useState<ScoreListProps[]>([]);

  const renderScoreList = scoreList.map((player) => {
    return (
      <li key={player.name} className={styles.playerListItem}>
        <span className={styles.playerName}>{player.name}</span>{" "}
        <span className={styles.playerScore}>{player.score}</span>
      </li>
    );
  });

  useEffect(() => {
    if (!socket) {
      return;
    }
    function handleDisplayScores(scores) {
      setScoreList(scores);
    }

    socket.on("display scores", handleDisplayScores);
    socket.emit("get scores to display", socket.id);
  }, [socket, renderScoreList]);

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.totalScoreHeadline}>Total Score</h2>
        <ul>{renderScoreList}</ul>
      </section>
    </>
  );
}

export default TotalScore;
