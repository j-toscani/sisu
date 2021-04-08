import { Meta } from "@storybook/react/types-6-0";
import CardGrid from "./CardGrid";
import DiscardPile from "./DiscardPile";
import DrawPile from "./DrawPile";
import OpponentCardGrid from "./OpponentCardGrid";
import RoundScoreModal from "./RoundScoreModal";
import RoundCounter from "./RoundCounter";
import Statusbar from "./Statusbar";
import TotalScore from "./TotalScore";
import { SocketContextProvider } from "../../contexts/SocketContext";

export default {
  title: "Common/Gameboard",
} as Meta;

export const drawpile = () => <DrawPile onClick={() => alert("test")} />;
export const discardpile = () => (
  <DiscardPile onPileClick={() => alert("test")} card={null} turnPhase={null} />
);
export const totalscore = () => <TotalScore />;
export const cardgrid = () => (
  <CardGrid
    onCardClick={() => alert("test")}
    cards={null}
    name={"Fred"}
    roundScore={[20]}
  />
);
export const opponentcardgrid = () => (
  <OpponentCardGrid cards={null} name={"Fred"} roundScore={[20]} />
);
export const roundscoremodal = () => <RoundScoreModal />;
export const roundcounter = () => (
  <SocketContextProvider>
    <RoundCounter />
  </SocketContextProvider>
);
export const statusbar = () => <Statusbar activePlayer={null} />;
