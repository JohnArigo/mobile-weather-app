import { Root } from "./WeatherDataConfig";

export type WeatherData = {
  weatherData: Root;
};

export default function Current({ weatherData }: WeatherData) {
  weatherData?.list.filter((data) => {
    const dataDate = new Date(data.dt * 1000);
    console.log(data.dt);
  });
  return (
    <main>
      <div>
        {weatherData?.list.map((data) => {
          return <body>Hello world</body>;
        })}
      </div>
    </main>
  );
}
