const Result = ({ called, error, loading, data }) => {
  if (called && loading)
    return (
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
    );
  if (error) return <p>Errorrrr</p>;
  if (!data) return null;
  if (data.getCityByName === null) return <p>City not found!</p>;

  return (
    <div id="result">
      <p>City ID: {data.getCityByName.id}</p>
      <p>City: {data.getCityByName.name}</p>
      <p>Country: {data.getCityByName.country}</p>
      <p>Weather: {data.getCityByName.weather.summary.description} </p>{" "}
      <img
        src={`http://openweathermap.org/img/wn/${data.getCityByName.weather.summary.icon}@2x.png`}
      />
    </div>
  );
};

export default Result;
