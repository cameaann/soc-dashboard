const AdditionalInfo = ({onShowLogs, totalNumber}) => {

    return(
        <div className="additionInfo-container">
        <h4>Total attempts</h4>
        <div className="additionInfo">
          <div className="totalNumberInfo">{totalNumber}</div>
          <button className="show-btn" onClick={onShowLogs}>
            See details
          </button>
        </div>
      </div>
    )
}

export default AdditionalInfo;