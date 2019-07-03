const portfolioData = { 
	"imageUrl": 'http://localhost:3000/',
	"logo": "images/app-logo.svg",
	"logoWhite": "images/app-logo-white.svg",
	"name": 'James Russel C. Bautista',
	"role": 'Front-end Developer',
	"intro": "Let's keep building amazing stuff.",
	"projects": [
		{
			"id": 1,
			"title": "Hataw Ecommerce Website",
			"imageUrl": "images/portfolio/hataw-thumbnail.png",
			"link": "https://hataw.ph/",
			"codeLink": "",
			"description": "Hataw is an Ecommerce website that I was the one who do front-end stuff.",
			"technology": ["HTML/CSS", "SASS(SCSS)", "Javascript", "Zepto Js / Jquery"],
		},

		{
			"id": 3,
			"title": "Portfolio using React ",
			"imageUrl": "images/portfolio/react-portfolio-thumbnail.png",
			"link": "",
			"codeLink": "https://github.com/jrussumbrella/react-portfolio",
			"description": "My personal portfolio showcasing my projects that was written in React.",
			"technology": ["HTML",  "SASS/SCSS", "React"]				
		},
		{
			"id": 4,			
			"title": "Paper Todo App using React",
			"imageUrl": "images/portfolio/react-todo-thumbnail.png",
			"link": "",
			"codeLink": "https://github.com/jrussumbrella/react-paper-todo",
			"description": "Simple to do app that uses local storage to save to do list.",
			"technology": ["HTML", "Paper CSS", "React"]			
		},
		{
			"id": 5,
			"title": "MHI 2K18 Web based Tabulation System Demo",
			"imageUrl": "images/portfolio/mhi-thumbnail.jpg",
			"link": "",
			"codeLink": "https://github.com/jrussumbrella/mhi-web-based-tabulation",
			"description": "It is a network based system that I developed to easily tabulate the scored of certain candidates per judge.",
			"technology": ["HTML/CSS", "Bootstrap", "Javascript/Jquery", "Mysql", "PHP" ]				
		},
		{
			"id": 6,			
			"title": "Online Registration using Laravel",
			"imageUrl": "images/portfolio/attendance-thumbnail.png",
			"link": "http://doitpsualaminos.herokuapp.com/",
			"codeLink": "",
			"description": "Online Registration for certain activities in our school.",
			"technology": ["HTML/CSS", "Bootstrap", "Javascript/Jquery", "Laravel"]				
		},
		{
			"id": 7,
			"title": "Java Made Easy Android App",
			"imageUrl": "images/portfolio/java-made-app.jpg",
			"link": "",
			"codeLink": "https://github.com/jrussumbrella/java-made-easy",
			"description": "This projects was my thesis that aimed to help those students especially IT students or those people who wants to learn java programming language.",
			"technology": ["XML","Java"]				
		},								
		],
	"skills": [
		{
			"name": "HTML/CSS",
			"percentage": 80
		},
		{
			"name": "SASS/ SCSS",
			"percentage": 70
		},	
		{
			"name": "Javascript",
			"percentage": 80
		},							
		{
			"name": "Jquery",
			"percentage": 80
		},

		{
			"name": "REACT",
			"percentage": 50
		},
		{
			"name": "PHP (LARAVEL)",
			"percentage": 50
		},						
	],
	"workExp": [
		{
			"title": "Front-end Developer",
			"date" : 'June 2018 - June 2019',
			"description": "Converting mockup designs into web pages, making sure it's mobile responsive and cross browser compatible. Maintaing and improving website.",
			"company": 'E-Creations Inc.'
		},
		{
			"title": "IT Instructor",
			"date" : 'June 2017 - June 2018',
			"company": 'STI Alaminos',
			"description": "Teached web  and mobile programming."
		},
		{
			"title": "Junior Software Engineer (Intern)",
			"date" : 'January 2017 - May 2017',
			"company": 'Advanced Techinnovations Systems',
			"description": " Works as junior software engineer and help senior developer in developing the Hanap Trabaho web application."
		},				
	]	
 
}

export default portfolioData;