export default function RubiksSide({ sideType }) {
  return (
    <div className={`face ${sideType}`}>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
    </div>
  );
}
