const express = require("express");
const axios = require("axios");
const path = require("path");
const cors = require("cors");
const config = require("./config.json");
const apikey = config.apikey;

const app = express();
app.listen(3000);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const TraducaoClima = {
	"Thunderstorm": "Tempestade",
	"thunderstorm with light rain": "Tempestade com Chuva Leve",
	"thunderstorm with rain": "Tempestade com Chuva",
	"thunderstorm with heavy rain": "Tempestade com Chuva Intensa",
	"light thunderstorm": "Tempestade Leve",
	"thunderstorm": "Tempestade",
	"heavy thunderstorm": "Tempestade Intensa",
	"ragged thunderstorm": "Tempestade Irregular",
	"thunderstorm with light drizzle": "Tempestade com Garoa Leve",
	"thunderstorm with drizzle": "Tempestade com Garoa",
	"thunderstorm with heavy drizzle": "Tempestade com Garoa Intensa",
	"Drizzle": "Garoa",
	"light intensity drizzle": "Garoa de Baixa Intensidade",
	"drizzle": "Garoa",
	"heavy intensity drizzle": "Garoa de Alta Intensidade",
	"light intensity drizzle rain": "Chuva Garoando de Baixa Intensidade",
	"drizzle rain": "Chuva Garoando",
	"heavy intensity drizzle rain": "Chuva Garoando de Alta Intensidade",
	"shower rain and drizzle": "Chuva Forte e Garoa",
	"heavy shower rain and drizzle": "Chuva Forte e Garoa Intensa",
	"shower drizzle": "Garoa Forte",
	"Rain": "Chuva",
	"light rain": "Chuva Leve",
	"moderate rain": "Chuva Moderada",
	"heavy intensity rain": "Chuva Intensa",
	"very heavy rain": "Chuva Muito Intensa",
	"extreme rain": "Chuva Extrema",
	"freezing rain": "Chuva Congelante",
	"light intensity shower rain": "Chuva de Baixa Intensidade",
	"shower rain": "Chuva",
	"heavy intensity shower rain": "Chuva de Alta Intensidade",
	"ragged shower rain": "Chuva Irregular",
	"Snow": "Neve",
	"light snow": "Neve Leve",
	"snow": "Neve",
	"heavy snow": "Neve Intensa",
	"sleet": "Aguaceiro",
	"light shower sleet": "Aguaceiro Leve",
	"shower sleet": "Aguaceiro",
	"light rain and snow": "Chuva e Neve Leve",
	"rain and snow": "Chuva e Neve",
	"light shower snow": "Neve e Chuva Leve",
	"shower snow": "Neve e Chuva",
	"heavy shower snow": "Neve e Chuva Intensa",
	"Atmosphere": "Atmosfera",
	"mist": "Névoa",
	"smoke": "Fumaça",
	'haze': "Neblina",
	"sand/dust whirls": "Redemoinhos de Areia/Poeira",
	"fog": "Nevoeiro",
	"sand": "Areia",
	"dust": "Poeira",
	"volcanic ash": "Cinzas Vulcânicas",
	"squalls": "Rajadas",
	"tornado": "Tornado",
	"Clear": "Céu Limpo",
	"clear sky": "Céu Limpo",
	"Clouds": "Nuvens",
	"few clouds": "Poucas Nuvens",
	"scattered clouds": "Nuvens Dispersas",
	"broken clouds": "Nuvens Fragmentadas",
	"overcast clouds": "Nublado",
};

app.get("/climatempo/:cidade", async (req, res) => {
	const city = req.params.cidade;

	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
		);
		if (response.status === 200) {
			const clima =
				TraducaoClima[response.data.weather[0].description] ||
				response.data.weather[0].description;

            const weatherData = {
                Temperatura: response.data.main.temp,
                Umidade: response.data.main.humidity,
                VelocidadeDoVento: response.data.wind.speed,
                Clima: clima
            };
            res.send(weatherData);
        } else {
            res.status(response.status).send({erro: "Erro ao obter dados metereológicos 1"});
            
        }
    } catch (error) {
        res.status(500).send({erro: "Erro ao obter dados metereológicos 2", error})
    } 
});
