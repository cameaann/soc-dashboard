const AdditionalInfo = ({ onShowLogs, totalNumber, text }) => {
  return (
    <div className="additionInfo-container">
      <h4>{text}</h4>
      <div className="additionInfo">
        <div className="totalNumberInfo">{totalNumber}</div>
        <button className="show-btn" onClick={onShowLogs}>
          See details
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfo;
