import RubiksSide from "./RubiksSide";

export default function RubiksCube() {
  return (
    <div class="box">
      <RubiksSide sideType="top" />
      <RubiksSide sideType="bottom" />
      <RubiksSide sideType="back" />
      <RubiksSide sideType="front" />
      <RubiksSide sideType="left" />
      <RubiksSide sideType="right" />
    </div>
  );
}
