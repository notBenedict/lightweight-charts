const chartOptions = {
	localization: {
		dateFormat: "yyyy-MM-dd",
	},
	layout: {
		backgroundColor: "#242424",
		textColor: "#d1d4dc",
		fontSize: 13,
		fontFamily: "Calibri",
	},
	grid: {
		vertLines: {
			color: "rgba(70, 130, 180, 0.5)",
			style: 1,
			visible: true,
		},
		horzLines: {
			color: "rgba(70, 130, 180, 0.5)",
			style: 1,
			visible: true,
		},
	},
	rightPriceScale: {
		mode: 1,
		autoScale: true,
		alignLabels: false,
		borderVisible: false,
		borderColor: "#555ffd",
		scaleMargins: {
			top: 0.3,
			bottom: 0.25,
		},
	},
	timeScale: {
		rightOffset: 60,
		barSpacing: 15,
		fixLeftEdge: false,
		lockVisibleTimeRangeOnResize: false,
		rightBarStaysOnScroll: true,
		borderVisible: false,
		borderColor: "#ff7700",
		visible: true,
		timeVisible: true,
		secondsVisible: true,
	},
	handleScroll: {
		mouseWheel: true,
		pressedMouseMove: true,
	},
	handleScale: {
		axisPressedMouseMove: true,
		mouseWheel: true,
		pinch: true, // on touch devices
	},
};

const seriesOptions = {
	overlay: true,
	topColor: "rgba(76, 175, 80, 0.56)",
	bottomColor: "rgba(76, 175, 80, 0.04)",
	lineColor: "rgba(76, 175, 80, 1)",
	lineWidth: 2,
	crosshairMarkerVisible: false,
};

const chart = LightweightCharts.createChart(
	document.getElementById("container"),
	chartOptions
);
const areaSeries = chart.addAreaSeries(seriesOptions);


areaSeries.setData(data); // set the data
areaSeries.setMarkers([
	{
		time: data[data.length - 1].time,
		position: "inBar",
		// color: "green",
		shape: "userBet",
		text: "asdasds",
		betData: {
			user: {
				image:
					"https://www.scmagazine.com/wp-content/uploads/sites/2/2019/01/Ryuk-860x466.jpg",
			},
			up: true,
		},
	},
	{
		time: data[data.length - 2].time,
		position: "inBar",
		// color: "red",
		shape: "userBet",
		text: "asd",
		betData: {
			user: {
				image:
					"https://www.scmagazine.com/wp-content/uploads/sites/2/2019/01/Ryuk-860x466.jpg",
			},
			up: false,
		},
	},
	{
		time: data[data.length - 3].time,
		position: "inBar",
		// color: "green",
		shape: "userBet",
		text: "asdasds",
		betData: {
			user: {
				image:
					"https://www.scmagazine.com/wp-content/uploads/sites/2/2019/01/Ryuk-860x466.jpg",
			},
			up: true,
		},
	},
]);

const interval = setInterval(() => {
	const newItem = data[data.length - 1];
	newItem.time = newItem.time + 1000;
	areaSeries.update(newItem);
	data.push(newItem);
}, 1000);

setTimeout(function () {
	clearInterval(interval);
}, 5000);
