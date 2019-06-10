import spectrofy from '../assets/spectrofy-4.png'
import mazerLazer from '../assets/mazer-lazer.png'
import localForecast from '../assets/local-weather.png'
import allGreek from '../assets/all-greek.png'

// use 'screencase' syntax for global variables
const PROJECTS = [
	{
		id: 1,
		title: "Spectrofy",
		description: "A fullstack application that allows users to fetch track audio analysis data from Spotify's Web API and see it whimiscally visualized.",
		link: "https://spectrofy.herokuapp.com",
		image: spectrofy
	},
	{
		id: 2,
		title: "Mazer Lazer",
		description: "A retro maze game built with jQuery that utilizes protoypical inheritance to manage room navigation.",
		link: "https://mazer-lazer.herokuapp.com",
		image: mazerLazer
	},
	{
		id: 3,
		title: "Local Weather App",
		description: "A simple local weather app that displays local weather conditions in Fahrenheit or Celsius using JSON data from the openweathermap API.",
		link: "https://s.codepen.io/tri-be/debug/eZLqzW/mWMoNxVpEQLk",
		image: localForecast
	},
	{
		id: 4,
		title: "Random Generator - It's All Greek to Me",
		description: "An app I made for the freeCodeCamp curriculum that randomly generates different translations of the idiom 'It's all Greek to me' and their transliterations. For this app many people used third-party APIs to source their random quotes, but I thought it would be more interesting to create my own object of translated idioms instead and randomly generate the idiom in different langauges.",
		link: "https://s.codepen.io/tri-be/debug/groJby/LQkExKGOONEA",
		image: allGreek
	}
];

export default PROJECTS