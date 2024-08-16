document.addEventListener("DOMContentLoaded", function (event) {

  basehtml = `
	
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-M0SCB1X0YP"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		
		gtag('config', 'G-M0SCB1X0YP');
	</script>
	<style>
		#topbar {
			background-color: #101010;
			position: fixed;
			width: 100%;
			height: 8vh;
			left: 0;
			top: 0;
		}
		#topbar img {
			position: absolute;
			padding-top: 1.2vh;
			padding-left: 1.2vh;
			height: 80%;
		}
		#topbar #title {
			color: lightgray;
			text-align: center;
			padding-top: 0.8vh;
			font-size: 6.7vh;
			font-family: consolas;
		}
		#contents {
			position: absolute;
			text-align: left;
			color: lightgray;
			font-family: "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
			font-size: 20px;
			width: calc(79% - 3px);
			left: 20%;
			padding-top: 15vh;
			padding-left: 1%;
			text-wrap: wrap;
			border-left: 3px solid gray;
			min-height: 85vh;
			z-index: -1;
			top: 0px;
		}
		#sidebar {
			text-align: left;
			color: white;
			font-family: "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
			font-size: 10px;
			width: 20%;
			margin: 0px;
			padding-top: 10px;
			text-wrap: wrap;
			border: none;
			position: fixed;
			top: 12vh;
			left: 0%;
		}
		#sidebar h1 {
			margin: 0px;
			padding-left: 20px;
			margin-bottom: 10px;
			border-bottom: 3px solid aqua;
		}
		#sidebar details {
			font-size: 20px;
		}
		#sidebar details summary a {
			margin-left: -5px;
		}
		#sidebar details summary {
			list-style-image: url("/Images/Collapsed.png");
		}
		#sidebar details[open] summary {
			list-style-image: url("/Images/Expanded.png");
		}
		#sidebar details summary[hidebutton] {
			list-style: none;
			margin-left: 23px;
		}
		#sidebar details ul {
			list-style: none;
			margin-top: 0px;
			margin-bottom: 10px;
			margin-left: -5px;
		}
		p {margin: 10px;}
		h1 {margin: 0px;margin-top: 10px;margin-bottom: 10px;}
		h2 {margin: 0px;margin-top: 10px;margin-bottom: 10px;}
		a {
			color: #0969da;
			text-decoration: none;
		}
		code {
			display: block;
			font-family: monospace;
			border-radius: 5px;
			border-color: gray;
			border-style: solid;
			border-width: 1px;
			background-color: rgb(59, 59, 59);
			text-align: left;
			padding: 5px;
			white-space: pre;
			width: fit-content;
		}
		inline-code {
			font-family: monospace;
			border-radius: 5px;
			border-color: gray;
			border-style: solid;
			border-width: 1px;
			background-color: rgb(59, 59, 59);
			text-align: left;
			padding: 0px;
			margin: 0px;
		}
		note {
			display: inline-block;
			border: 0.25em solid;
			border-color: #0969da;
			padding: 5px;
			border-collapse: collapse;
		}
	</style>
	<div id="topbar">
		<img src="/Images/Hudder.webp" alt="Back to main wiki page" />
		<div id="title">Hudder Wiki</div>
	</div>
	<div id="sidebar">
		<h1>Explore</h1>
		<details>
		<summary hidebutton>
			<a href="/wiki/base.html">Base.html</a>
		</summary>
		</details>
		<details>
		<summary><a href="/wiki/home.html">Tutorial</a></summary>
		<ul>
			<li><a href="/wiki/home.html#text">Normal text</a></li>
			<li><a href="/wiki/home.html#color">Character escaping and Color Codes</a></li>
			<li><a href="/wiki/home.html#sections">Text sections</a></li>
			<li><a href="/wiki/home.html#variables">Basic variables</a></li>
			<li><a href="/wiki/home.html#conditions">Basic conditions</a></li>
			<li><a href="/wiki/home.html#adv_variables">Advanced Variables</a></li>
			<li><a href="/wiki/home.html#methods">Inventory management and methods</a></li>
		</ul>
		</details>
	</div>
	<div id="contents">
	</div>
	`;
	contents = document.body.innerHTML;
	document.body.innerHTML = basehtml;
	document.getElementById("contents").innerHTML = contents;
	document.body.style = "background-color: #202020";
	
	//var code_blocks = document.getElementsByTagName('code');
	//console.log(code_blocks);
	
	calchash();
});
var prevelem;
function calchash() {
	if (prevelem) {
		prevelem.style.background = "none";
		prevelem.style.filter = "none";
		prevelem = null;
	}
	if (window.location.hash) {
		var elem = document.getElementById(window.location.hash.substring(1));
		window.scrollTo({ top: elem.offsetTop-110});
		elem.style.background = "#202020";
		elem.style.filter = "invert(100%)";
		prevelem = elem;
	}
}
addEventListener("hashchange", (event) => {});
onhashchange = (event) => { calchash(); };
