import spectrofy from '../assets/spectrofy-4.png'
import mazerLazer from '../assets/mazer-lazer.png'
import localForecast from '../assets/local-weather.png'
import allGreek from '../assets/all-greek.png'
import wordbud from '../assets/wordbud-sample.png'

// use 'screencase' syntax for global variables
const PROJECTS = [
	{
		id: 1,
		title: "Wordbud",
		description: ```An cross-platform mobile app built with Flutter 
		that provides personlized English learning for Chinese speakers. 
		Due to an NDA I am not able to show the github for this application, 
		and it is still in the beta stages, 
		so I have shared a screenshot of one section of the app. 
		I plan on adding detail pages for each project so I can add screenshots and 
		more details on how I used Flutter to build features in the app during my years at Wordbud.```,
		link: "https://www.wordbud.com/",
		image: wordbud
	},
	{
		id: 2,
		title: "Spectrofy",
		description: "An application that allows users to search for songs and see generative bubble visuals based on the song's audio analysis data from Spotify's Web API.",
		link: "https://spectrofy.netlify.app/",
		image: spectrofy
	},
	{
		id: 3,
		title: "Mazer Lazer",
		description: "A retro maze game built with jQuery that utilizes protoypical inheritance to manage room navigation.",
		link: "https://mazer-lazer.herokuapp.com",
		image: mazerLazer
	},
	// {
	// 	id: 3,
	// 	title: "Local Weather App",
	// 	description: "A simple local weather app that displays local weather conditions in Fahrenheit or Celsius using JSON data from the openweathermap API.",
	// 	link: "https://cdpn.io/tri-be/debug/eZLqzW/yoMZEOmLDoyk",
	// 	image: localForecast
	// },
	// {
	// 	id: 4,
	// 	title: "Random Generator - It's All Greek to Me",
	// 	description: "An app I made for the freeCodeCamp curriculum that randomly generates different translations of the idiom 'It's all Greek to me' and their transliterations. For this app many people used third-party APIs to source their random quotes, but I thought it would be more interesting to create my own object of translated idioms instead and randomly generate the idiom in different langauges.",
	// 	link: "https://cdpn.io/tri-be/debug/groJby/XBkGRqwnWXVA",
	// 	image: allGreek
	// }
];

export default PROJECTS
