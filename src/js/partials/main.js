if (typeof Array.isArray === 'undefined') {
	Array.isArray = function (obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	}
};


function getScrollBarWidth() {
	var inner = document.createElement('p');
	inner.style.width = "100%";
	inner.style.height = "200px";

	var outer = document.createElement('div');
	outer.style.position = "absolute";
	outer.style.top = "0px";
	outer.style.left = "0px";
	outer.style.visibility = "hidden";
	outer.style.width = "200px";
	outer.style.height = "150px";
	outer.style.overflow = "hidden";
	outer.appendChild(inner);

	document.body.appendChild(outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 == w2) w2 = outer.clientWidth;

	document.body.removeChild(outer);

	return (w1 - w2);
};

$(document).ready(function () {
	window.SBWidth = getScrollBarWidth();


	$('body').on('click', '.dmpage-accordion-head', /*'.js-dmpage-accordion ',*/function () {
		$(this).closest('.dmpage-accordion').toggleClass('dmpage-accordion--active');
		$(this).siblings('.dmpage-accordion-body').stop(true).slideToggle(500);

	});

	function myOpenToolTip(chart, datasetIdx, el_index) {
		/*var mouseMoveEvent, meta, point, rectangle, value;
		meta = myChart.getDatasetMeta(index);
		console.log(meta);
		rectangle = myChart.canvas.getBoundingClientRect();
		point = meta.data[0].getCenterPoint();
		console.log(point);
		mouseMoveEvent = new MouseEvent('mousemove', {
			clientX: rectangle.left + point.x,
			clientY: rectangle.top + point.y
		});
		myChart.canvas.dispatchEvent(mouseMoveEvent);*/

		const tooltip = chart.tooltip;
		//tooltip.setActiveElements([], { x: 0, y: 0 });
		const chartArea = chart.chartArea;
		tooltip.setActiveElements([
			{
				datasetIndex: datasetIdx,
				index: el_index,
			}
		],
			{
				x: (chartArea.left + chartArea.right) / 2,
				y: (chartArea.top + chartArea.bottom) / 2,
			});


		chart.update();

	}

	function myCloseToolTip(chart) {
		const tooltip = chart.tooltip;
		tooltip.setActiveElements([], { x: 0, y: 0 });
		/*var mouseOutEvent = new MouseEvent('mouseout');
		return myChart.canvas.dispatchEvent(mouseOutEvent);*/
	}
	const chartsColors = [
		/*'#038E63',
		'#219C76',
		'#5EB79B',
		'#8BCBB7',
		'#CAE7DE',
		'#D9EEE8',
		'#038E63',
		'#219C76',
		'#5EB79B',
		'#8BCBB7',
		'#CAE7DE',
		'#D9EEE8',
		'#038E63',
		'#219C76',
		'#5EB79B',
		'#8BCBB7',
		'#CAE7DE',
		'#D9EEE8',
		'#038E63',
		'#219C76',
		'#5EB79B',
		'#8BCBB7',
		'#CAE7DE',
		'#D9EEE8',*/
		'#259C75',
		'#38A683',
		'#4DB090',
		'#62BA9F',
		'#93CDBB',
		'#A7D6C8',
		'#D2EBE4',
		'#E8F6F2',
		'#F2F2F2',
		'#E2E2E2',
		'#D3D3D3',
		'#C3C3C3',
		'#B4B4B4',
		'#A4A4A4',
		'#959595',
		'#259C75',
		'#38A683',
		'#4DB090',
		'#62BA9F',
		'#93CDBB',
		'#A7D6C8',
		'#D2EBE4',
		'#E8F6F2',
		'#F2F2F2',
		'#E2E2E2',
		'#D3D3D3',
		'#C3C3C3',
		'#B4B4B4',
		'#A4A4A4',
		'#959595'
	];
	const barChartsColors = [
		'#CAE7DE',
		'#E8F6F2',
		'#F2F2F2',
		'#E2E2E2',
		'#D3D3D3',
		'#C3C3C3',
		'#B4B4B4',
		'#A4A4A4',
		'#959595',
		'#259C75',
		'#38A683',
		'#4DB090',
		'#62BA9F',
		'#93CDBB',
		'#A7D6C8',
		'#D2EBE4',
		'#E8F6F2',
		'#F2F2F2',
		'#E2E2E2',
		'#D3D3D3',
		'#C3C3C3',
		'#B4B4B4',
		'#A4A4A4',
		'#959595'
	];
	function initGraphs() {
		$('.js-dmpage-chart-doughnut').each(function () {
			var wrap = $(this);
			var canv = wrap.find('canvas');
			var id = wrap.attr('id');
			var data = window.dmpageCharts[id];
			var postfix = window.dmpageCharts[id + '-postfix'];
			data.datasets[0].hoverOffset = 0;

			data.datasets[0].backgroundColor = chartsColors;


			data.datasets.push({
				label: '',
				data: [1],
				backgroundColor: [
					'#038E63'
				],
				borderDashOffset: 0,
				borderWidth: 0,
				hoverOffset: 0,
				spacing: 0,
				pointRadius: 0,
				weight: 0.1

			});

			/*data = {
				labels: [
					'Red',
					'Blue',
					'Yellow'
				],
				datasets: [{
					label: 'My First Dataset',
					data: [300, 50, 100, 500, 50, 100],
					backgroundColor: [
						'#038E63',
						'#219C76',
						'#5EB79B',
						'#8BCBB7',
						'#CAE7DE',
						'#D9EEE8'
					],
					hoverOffset: 4
				}]
			};*/
			var this_chart = new Chart(canv[0], {
				type: 'doughnut',
				data: data,
				options: {
					/*scales: {
						y: {
							beginAtZero: true
						}
					}*/
					/*elements: {
						arc: {
							borderWidth: 0,
						},
				},*/
					aspectRatio: 1,

					responsive: true,
					cutout: '76.20%',
					plugins: {
						legend: {
							display: false,
							position: 'right'
							/*labels: {
								color: 'rgb(255, 99, 132)'
							}*/
						},
						tooltip: {
							/* enabled: true,*/ enabled: false,

							external: function (context) {
								if (typeof (context.tooltip.dataPoints[0].datasetIndex) !== 'undefined' && context.tooltip.dataPoints[0].datasetIndex < 1) {
									// Tooltip Element
									let tooltipEl = document.getElementById('dmchartjs-tooltip');

									// Create element on first render
									if (!tooltipEl) {
										tooltipEl = document.createElement('div');
										tooltipEl.id = 'dmchartjs-tooltip';
										tooltipEl.classList = 'dmchartjs-tooltip';
										tooltipEl.innerHTML = '<div class="dmchartjs-tooltip-outer"> </div>';
										document.body.appendChild(tooltipEl);
									}

									// Hide if no tooltip
									const tooltipModel = context.tooltip;
									if (tooltipModel.opacity === 0) {
										tooltipEl.style.opacity = 0;
										return;
									}

									// Set caret Position
									tooltipEl.classList.remove('above', 'below', 'no-transform');
									if (tooltipModel.yAlign) {
										tooltipEl.classList.add(tooltipModel.yAlign);
									} else {
										tooltipEl.classList.add('no-transform');
									}

									function getBody(bodyItem) {
										return bodyItem.lines;
									}

									// Set Text
									if (tooltipModel.body) {
										const titleLines = tooltipModel.title || [];
										const bodyLines = tooltipModel.body.map(getBody);

										let innerHtml = '<div class="dmchartjs-tooltip-inner">';

										titleLines.forEach(function (title) {
											innerHtml += '<div class="dmchartjs-tooltip-title">' + title + ': </div>';
										});
										innerHtml += '';

										bodyLines.forEach(function (body, i) {
											const colors = tooltipModel.labelColors[i];
											let style = 'background:' + colors.backgroundColor;
											const span = '<span class="dmchartjs-tooltip-color" style="' + style + '"></span><span class="dmchartjs-tooltip-value">' + body + (Array.isArray(postfix) ? postfix[context.tooltip.dataPoints[0].datasetIndex] : postfix) + '</span>';
											innerHtml += '' + span + '';
										});
										innerHtml += '</div>';

										let tableRoot = tooltipEl.querySelector('.dmchartjs-tooltip-outer');
										tableRoot.innerHTML = innerHtml;
									}

									const position = context.chart.canvas.getBoundingClientRect();
									const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

									// Display, position, and set styles for font
									tooltipEl.style.opacity = 1;
									tooltipEl.style.position = 'absolute';
									tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
									tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
									tooltipEl.style.font = bodyFont.string;
									tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
									tooltipEl.style.pointerEvents = 'none';
								}
							}
						}
					}
				}
			});

			var legendContainer = wrap.siblings('.dmpage-chd-legend');

			$idx = 0;
			data.labels.forEach(function (legend_name) {
				var legend_color = data.datasets[0].backgroundColor[$idx];
				data.labels
				legendContainer.append('<div class="dmpage-chd-legend-item" data-idx="' + $idx + '"> <div class="dmpage-chd-legend-item__color" style="background-color: ' + legend_color + ';"></div> <div class="dmpage-chd-legend-item__name">' + legend_name + '</div></div>');
				++$idx;
			});
			legendContainer.find('.dmpage-chd-legend-item')
				.on('mouseover', function () {
					var dataidx = parseInt($(this).attr('data-idx'));
					console.log(dataidx);
					myOpenToolTip(this_chart, 0, dataidx);
				}).on('mouseout', function () {
					myCloseToolTip(this_chart);
				});



		});

		$('.js-dmpage-chart-bar').each(function () {
			var wrap = $(this);
			var canv2 = wrap.find('canvas');
			var id = wrap.attr('id');
			var data = window.dmpageCharts[id];

			var postfix = window.dmpageCharts[id + '-postfix'];
			if (data.datasets.length < 2) {
				$idx = 0;
				data.datasets.forEach(element => {
					element.backgroundColor = '#CAE7DE';
					element.barPercentage = .6;
					element.categoryPercentage = 1;
					element.spacing = 0;
					element.borderDashOffset = 0;
					++$idx;
				});
			}
			else {
				$idx = 0;
				data.datasets.forEach(element => {
					if(typeof(element.backgroundColor)==='undefined'){
						element.backgroundColor = barChartsColors[$idx];
					}
					
					element.barPercentage = .6;
					element.categoryPercentage = 1;
					element.spacing = 0;
					element.borderDashOffset = 0;

					++$idx;
				});
			}


			/*data.datasets[0].backgroundColor = '#CAE7DE';
			data.datasets[0].barPercentage = .6;
			data.datasets[0].categoryPercentage = 1;
			data.datasets[0].spacing = 0;
			data.datasets[0].borderDashOffset = 0; */


			var dataset2_data = [];

			//var maxOfArr = Math.max.apply(null, data.datasets[0].data);
			var maxOfArr = -999999;

			data.datasets.forEach(element => {
				maxOfArr = Math.max(maxOfArr, Math.max.apply(null, element.data));
			});


			var valForTopGreenLines = maxOfArr * 0.01;

			var arrLength = data.datasets[0].data.length * data.datasets.length;

			if (arrLength < 13) {
				wrap.addClass('dmpage-chart-bar--' + arrLength);
			}
			else {
				wrap.addClass('dmpage-chart-bar--very-lot');
			}

			//var marginsSize=arrLength*2.77777777778



			data.datasets[0].data.forEach(function (data_item) {
				dataset2_data.push(valForTopGreenLines);
				++$idx;
			});


			if (typeof (data.datasets[0].stack) !== 'undeined') {

				data.datasets.forEach(element => {
					var dataset2 = {
						label: 'disabled',
						data: dataset2_data,
						//hoverOffset: 0,
						backgroundColor: '#038E63',

						borderDashOffset: 0,
						spacing: 0,
						barPercentage: .6,
						categoryPercentage: 1,
					};

					dataset2.stack = element.stack;
					data.datasets.push(dataset2);
				});
				console.log(data.datasets);
			}
			else {
				var dataset2 = {
					label: 'disabled',
					data: dataset2_data,
					//hoverOffset: 0,
					backgroundColor: '#038E63',

					borderDashOffset: 0,
					spacing: 0,
					barPercentage: .6,
					categoryPercentage: 1,
				};

				data.datasets.push(dataset2);
			}



			/*data = {
				labels: ['11','22','33','44','55','66','77'],
				datasets: [{
				label: 'My First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 205, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(201, 203, 207, 0.2)'
				],
				borderColor: [
					'rgb(255, 99, 132)',
					'rgb(255, 159, 64)',
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
					'rgb(54, 162, 235)',
					'rgb(153, 102, 255)',
					'rgb(201, 203, 207)'
				],
				borderWidth: 1
				}]
			};
	*/

			new Chart(canv2[0], {
				type: 'bar',
				data: data,


				options: {

					scales: {
						y: {
							beginAtZero: true,
							stacked: true,
							grid: {
								display: false
							},
							title: {
								display: false
							},
							ticks: {
								display: false
							},
							border: {
								display: false

							}
						},
						x: {
							stacked: true,
							grid: {
								display: false

							},
							title: {
								display: false
							},
							ticks: {
								beginAtZero: true,
								display: false
							}
						}
					},
					aspectRatio: 1.87,

					responsive: true,
					plugins: {
						legend: {
							display: false,
						},
						tooltip: {
							/* enabled: true,*/ enabled: false,

							external: function (context) {
								if (typeof (context.tooltip.dataPoints[0].datasetIndex) !== 'undefined' && context.tooltip.dataPoints[0].dataset.label !== "disabled" /*context.tooltip.dataPoints[0].datasetIndex < 1*/) {
									// Tooltip Element
									let tooltipEl = document.getElementById('dmchartjs-tooltip-vert');

									// Create element on first render
									if (!tooltipEl) {
										tooltipEl = document.createElement('div');
										tooltipEl.id = 'dmchartjs-tooltip-vert';
										tooltipEl.classList = 'dmchartjs-tooltip dmchartjs-tooltip--centred';
										tooltipEl.innerHTML = '<div class="dmchartjs-tooltip-outer"> </div>';
										document.body.appendChild(tooltipEl);
									}

									// Hide if no tooltip
									const tooltipModel = context.tooltip;
									if (tooltipModel.opacity === 0) {
										tooltipEl.style.opacity = 0;
										return;
									}
									else {

										tooltipEl.classList.remove('dmchartjs-tooltip--centred--no-arrow');
									}

									// Set caret Position
									tooltipEl.classList.remove('above', 'below', 'no-transform');
									if (tooltipModel.yAlign) {
										tooltipEl.classList.add(tooltipModel.yAlign);
									} else {
										tooltipEl.classList.add('no-transform');
									}

									function getBody(bodyItem) {
										return bodyItem.lines;
									}

									// Set Text
									if (tooltipModel.body) {
										const titleLines = tooltipModel.title || [];
										const bodyLines = tooltipModel.body.map(getBody);

										let innerHtml = '<div class="dmchartjs-tooltip-inner">';

										titleLines.forEach(function (title) {
											innerHtml += '<div class="dmchartjs-tooltip-title">' + title + ': </div>';
										});
										innerHtml += '';

										bodyLines.forEach(function (body, i) {
											const colors = tooltipModel.labelColors[i];
											let style = 'background:' + colors.backgroundColor;
											const span = '<span class="dmchartjs-tooltip-color" style="' + style + '"></span><span class="dmchartjs-tooltip-value">' + body + (Array.isArray(postfix) ? postfix[context.tooltip.dataPoints[0].datasetIndex] : postfix) + '</span>';
											innerHtml += '' + span + '';
										});
										innerHtml += '</div>';

										let tableRoot = tooltipEl.querySelector('.dmchartjs-tooltip-outer');
										tableRoot.innerHTML = innerHtml;
									}

									const position = context.chart.canvas.getBoundingClientRect();
									const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

									// Display, position, and set styles for font
									tooltipEl.style.opacity = 1;
									tooltipEl.style.position = 'absolute';
									tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
									tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
									tooltipEl.style.font = bodyFont.string;
									tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
									tooltipEl.style.pointerEvents = 'none';

									var $el = $(tooltipEl);
									console.log();
									console.log(window.innerWidth);
									var rightCornerPos = $el.offset().left + $el.outerWidth() + 1;

									if (window.innerWidth < rightCornerPos) {
										$el.addClass('dmchartjs-tooltip--centred--no-arrow');
										tooltipEl.style.left = (position.left + window.pageXOffset + tooltipModel.caretX - (rightCornerPos - window.innerWidth + 1) - window.SBWidth) + 'px';
									}
								}
							}
						}
					}
				},
			});


		});


		$('.js-dmpage-chart-bubbles').each(function () {
			var wrap = $(this);
			var canv2 = wrap.find('canvas');
			var id = wrap.attr('id');
			var data = window.dmpageCharts[id];

			var postfix = window.dmpageCharts[id + '-postfix'];
			var $idx = 0;
			data.datasets.forEach(element => {

				element.hitRadius = 0;
				element.hoverRadius = 0;
				++$idx;
			});

			console.log(data);


			/*if (data.datasets.length < 2) {
				$idx = 0;
				data.datasets.forEach(element => {
					element.backgroundColor = '#CAE7DE';
					element.barPercentage = .6;
					element.categoryPercentage = 1;
					element.spacing = 0;
					element.borderDashOffset = 0;
					++$idx;
				});
			}
			else {
				$idx = 0;
				data.datasets.forEach(element => {
					element.backgroundColor = barChartsColors[$idx];
					element.barPercentage = .6;
					element.categoryPercentage = 1;
					element.spacing = 0;
					element.borderDashOffset = 0;

					++$idx;
				});
			}*/


			/*data.datasets[0].backgroundColor = '#CAE7DE';
			data.datasets[0].barPercentage = .6;
			data.datasets[0].categoryPercentage = 1;
			data.datasets[0].spacing = 0;
			data.datasets[0].borderDashOffset = 0; */

			/*
						var dataset2_data = [];
			
						//var maxOfArr = Math.max.apply(null, data.datasets[0].data);
						var maxOfArr = -999999;
			
						data.datasets.forEach(element => {
							maxOfArr = Math.max(maxOfArr, Math.max.apply(null, element.data));
						});
			*/

			/*var valForTopGreenLines = maxOfArr * 0.01;

			var arrLength = data.datasets[0].data.length * data.datasets.length;

			if (arrLength < 13) {
				wrap.addClass('dmpage-chart-bar--' + arrLength);
			}
			else {
				wrap.addClass('dmpage-chart-bar--very-lot');
			}

			//var marginsSize=arrLength*2.77777777778



			data.datasets[0].data.forEach(function (data_item) {
				dataset2_data.push(valForTopGreenLines);
				++$idx;
			});
*/

			/*if (typeof (data.datasets[0].stack) !== 'undeined') {

				data.datasets.forEach(element => {
					var dataset2 = {
						label: 'disabled',
						data: dataset2_data,
						//hoverOffset: 0,
						backgroundColor: '#038E63',
		
						borderDashOffset: 0,
						spacing: 0,
						barPercentage: .6,
						categoryPercentage: 1,
					};
		
					dataset2.stack = element.stack;
					data.datasets.push(dataset2);
				});
				console.log(data.datasets);
			}
			else {
				var dataset2 = {
					label: 'disabled',
					data: dataset2_data,
					//hoverOffset: 0,
					backgroundColor: '#038E63',

					borderDashOffset: 0,
					spacing: 0,
					barPercentage: .6,
					categoryPercentage: 1,
				};

				data.datasets.push(dataset2);
			}*/


			var this_chart=new Chart(canv2[0], {
				type: 'bubble',
				data: data,

				options: {
					title: {
						display: false,
					},

					aspectRatio: 1,
					scales: {
						y: {
							beginAtZero: true,
							stacked: true,
							grid: {
								display: false
							},
							title: {
								display: false
							},
							ticks: {
								display: false
							},
							border: {
								display: false

							}
						},
						x: {
							// /offset: true,

							stacked: true,
							drawBorder: false,
							border: {
								display: false

							},
							grid: {
								drawBorder: false,
								display: false

							},
							title: {
								display: false
							},
							ticks: {
								beginAtZero: true,
								stepSize: 1,
								//format: new Intl.NumberFormat('es-ES', { style: 'currency', currency: '' })
								//display: false 
								callback: function (value, index, values) {									
									return value;
								}
							}
						}
					},
					responsive: true,
					plugins: {
						legend: {
							display: false,
						},
						tooltip: {
							/* enabled: true,*/ enabled: false,

							external: function (context) {
								if (typeof (context.tooltip.dataPoints[0].datasetIndex) !== 'undefined' && context.tooltip.dataPoints[0].dataset.label !== "disabled" /*context.tooltip.dataPoints[0].datasetIndex < 1*/) {
									// Tooltip Element
									let tooltipEl = document.getElementById('dmchartjs-tooltip-vert-bubble');

									// Create element on first render
									if (!tooltipEl) {
										tooltipEl = document.createElement('div');
										tooltipEl.id = 'dmchartjs-tooltip-vert-bubble';
										tooltipEl.classList = 'dmchartjs-tooltip dmchartjs-tooltip--centred';
										tooltipEl.innerHTML = '<div class="dmchartjs-tooltip-outer"> </div>';
										document.body.appendChild(tooltipEl);
									}

									// Hide if no tooltip
									const tooltipModel = context.tooltip;
									if (tooltipModel.opacity === 0) {
										tooltipEl.style.opacity = 0;
										return;
									}
									else {

										tooltipEl.classList.remove('dmchartjs-tooltip--centred--no-arrow');
									}

									// Set caret Position
									tooltipEl.classList.remove('above', 'below', 'no-transform');
									if (tooltipModel.yAlign) {
										tooltipEl.classList.add(tooltipModel.yAlign);
									} else {
										tooltipEl.classList.add('no-transform');
									}
									"интегральный индекс удовлетворенности: (2 022, 54,25, 68.5)"
									function getBody(bodyItem) { 
										var $idx=0;
										bodyItem.lines.forEach(function(lines_el){
											bodyItem.lines[$idx]=lines_el.replace( new RegExp("(.*)\\(.*,(.*)\\)","gm"),"$1 $2"); 
											++$idx;
										})
										
										return bodyItem.lines;
									}

									// Set Text
									if (tooltipModel.body) {
										const titleLines = tooltipModel.title || [];
										const bodyLines = tooltipModel.body.map(getBody);

										let innerHtml = '<div class="dmchartjs-tooltip-inner">';

										titleLines.forEach(function (title) {
											innerHtml += '<div class="dmchartjs-tooltip-title">' + title + ': </div>';
										});
										innerHtml += '';

										bodyLines.forEach(function (body, i) {
											const colors = tooltipModel.labelColors[i];
											let style = 'background:' + colors.backgroundColor;
											const span = '<span class="dmchartjs-tooltip-color" style="' + style + '"></span><span class="dmchartjs-tooltip-value">' + body + (Array.isArray(postfix) ? postfix[context.tooltip.dataPoints[0].datasetIndex] : postfix) + '</span>';
											innerHtml += '' + span + '';
										});
										innerHtml += '</div>';

										let tableRoot = tooltipEl.querySelector('.dmchartjs-tooltip-outer');
										tableRoot.innerHTML = innerHtml;
									}

									const position = context.chart.canvas.getBoundingClientRect();
									const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

									// Display, position, and set styles for font
									tooltipEl.style.opacity = 1;
									tooltipEl.style.position = 'absolute';
									tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
									tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
									tooltipEl.style.font = bodyFont.string;
									tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
									tooltipEl.style.pointerEvents = 'none';

									var $el = $(tooltipEl);
									console.log();
									console.log(window.innerWidth);
									var rightCornerPos = $el.offset().left + $el.outerWidth() + 1;

									if (window.innerWidth < rightCornerPos) {
										$el.addClass('dmchartjs-tooltip--centred--no-arrow');
										tooltipEl.style.left = (position.left + window.pageXOffset + tooltipModel.caretX - (rightCornerPos - window.innerWidth + 1) - window.SBWidth) + 'px';
									}
								}
							}
						}
					}
				},
			});

			/*var legendContainer = wrap.siblings('.dmpage-chd-legend');

			$idx = 0;
			data.datasets.forEach(function(dset){
				function (legend_name) {
					var legend_color = data.datasets[0].backgroundColor[$idx];
					data.labels
					legendContainer.append('<div class="dmpage-chd-legend-item" data-idx="' + $idx + '"> <div class="dmpage-chd-legend-item__color" style="background-color: ' + legend_color + ';"></div> <div class="dmpage-chd-legend-item__name">' + legend_name + '</div></div>');
					++$idx;
				}
			});
			legendContainer.find('.dmpage-chd-legend-item')
				.on('mouseover', function () {
					var dataidx = parseInt($(this).attr('data-idx'));
					console.log(dataidx);
					myOpenToolTip(this_chart, 0, dataidx);
				}).on('mouseout', function () {
					myCloseToolTip(this_chart);
				});

*/


		});



		/*
		$('.js-dmpage-chart-bar').each(function () {
			var wrap = $(this);
			var canv2 = wrap.find('canvas');
			var id = wrap.attr('id');
			var data = window.dmpageCharts[id];
			var postfix = window.dmpageCharts[id + '-postfix'];

			data.datasets[0].backgroundColor = '#CAE7DE';
			data.datasets[0].barPercentage = .6;
			data.datasets[0].categoryPercentage = 1;
			data.datasets[0].spacing = 0;


			var dataset2_data = [];

			var maxOfArr = Math.max.apply(null, data.datasets[0].data);
			var arrLength= data.datasets[0].data.length;

			wrap.addClass('dmpage-chart-bar--'+arrLength);

			//var marginsSize=arrLength*2.77777777778
			var valForTopGreenLines = maxOfArr*0.01;
			data.datasets[0].data.forEach(function (data_item) {
				dataset2_data.push(valForTopGreenLines);
				++$idx;
			});

			var dataset2 = {
				//label: '',
				data: dataset2_data,
				//hoverOffset: 0,
				backgroundColor: '#038E63',

				borderDashOffset: 0,
				spacing: 0,
				barPercentage: .6,
				categoryPercentage: 1,
			};

			data.datasets.push(dataset2);


			

			new Chart(canv2[0], {
				type: 'bar',
				data: data,


				options: {

					scales: {
						y: {
							beginAtZero: true,
							stacked: true,
							grid: {
								display: false
							},
							title: {
								display: false
							},
							ticks: {
								display: false
							},
							border: {
								display: false

							}
						},
						x: {
							stacked: true,
							grid: {
								display: false

							},
							title: {
								display: false
							},
							ticks: {
								beginAtZero: true,
								display: false
							}
						}
					},
					aspectRatio: 1.87,

					responsive: true,
					plugins: {
						legend: {
							display: false,
						},
						tooltip: {
							 enabled: false,

							external: function (context) {
								if (typeof (context.tooltip.dataPoints[0].datasetIndex) !== 'undefined' && context.tooltip.dataPoints[0].datasetIndex < 1) {
									// Tooltip Element
									let tooltipEl = document.getElementById('dmchartjs-tooltip-vert');

									// Create element on first render
									if (!tooltipEl) {
										tooltipEl = document.createElement('div');
										tooltipEl.id = 'dmchartjs-tooltip-vert';
										tooltipEl.classList = 'dmchartjs-tooltip dmchartjs-tooltip--centred';
										tooltipEl.innerHTML = '<div class="dmchartjs-tooltip-outer"> </div>';
										document.body.appendChild(tooltipEl);
									}

									// Hide if no tooltip
									const tooltipModel = context.tooltip;
									if (tooltipModel.opacity === 0) {
										tooltipEl.style.opacity = 0;
										return;
									}
									else {

										tooltipEl.classList.remove('dmchartjs-tooltip--centred--no-arrow');
									}

									// Set caret Position
									tooltipEl.classList.remove('above', 'below', 'no-transform');
									if (tooltipModel.yAlign) {
										tooltipEl.classList.add(tooltipModel.yAlign);
									} else {
										tooltipEl.classList.add('no-transform');
									}

									function getBody(bodyItem) {
										return bodyItem.lines;
									}

									// Set Text
									if (tooltipModel.body) {
										const titleLines = tooltipModel.title || [];
										const bodyLines = tooltipModel.body.map(getBody);

										let innerHtml = '<div class="dmchartjs-tooltip-inner">';

										titleLines.forEach(function (title) {
											innerHtml += '<div class="dmchartjs-tooltip-title">' + title + ': </div>';
										});
										innerHtml += '';

										bodyLines.forEach(function (body, i) {
											const colors = tooltipModel.labelColors[i];
											let style = 'background:' + colors.backgroundColor;
											const span = '<span class="dmchartjs-tooltip-color" style="' + style + '"></span><span class="dmchartjs-tooltip-value">' + body + postfix + '</span>';
											innerHtml += '' + span + '';
										});
										innerHtml += '</div>';

										let tableRoot = tooltipEl.querySelector('.dmchartjs-tooltip-outer');
										tableRoot.innerHTML = innerHtml;
									}

									const position = context.chart.canvas.getBoundingClientRect();
									const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

									// Display, position, and set styles for font
									tooltipEl.style.opacity = 1;
									tooltipEl.style.position = 'absolute';
									tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
									tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
									tooltipEl.style.font = bodyFont.string;
									tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
									tooltipEl.style.pointerEvents = 'none';

									var $el = $(tooltipEl);
									console.log();
									console.log(window.innerWidth);
									var rightCornerPos = $el.offset().left + $el.outerWidth() + 1;

									if (window.innerWidth < rightCornerPos) {
										$el.addClass('dmchartjs-tooltip--centred--no-arrow');
										tooltipEl.style.left = (position.left + window.pageXOffset + tooltipModel.caretX - (rightCornerPos - window.innerWidth + 1) - window.SBWidth) + 'px';
									}
								}
							}
						}
					}
				},
			});


		});
		*/
	}


	function watitHtml() {
		if ($('.js-dmpage-chart-doughnut, .js-dmpage-chart-bar, .js-dmpage-chart-bubbles').length > 0) {
			initGraphs();
		} else {
			var interval_id = setInterval(function () {
				chekIsGraphsRendered();
			}, 500);

			function chekIsGraphsRendered() {
				if ($('.js-dmpage-chart-doughnut, .js-dmpage-chart-bar, .js-dmpage-chart-bubbles').length > 0) {
					setTtimeout(function () {
						initGraphs();
					}, 500);
					clearInterval(interval_id);
				}
			}
		}
	}

	watitHtml();


});

