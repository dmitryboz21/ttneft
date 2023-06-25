$(document).ready(function () {
	$('.dmpage-accordion-head').on('click',/*'.js-dmpage-accordion ',*/function () {
		$(this).closest('.dmpage-accordion').toggleClass('dmpage-accordion--active');
		$(this).siblings('.dmpage-accordion-body').stop(true).slideToggle(500);

	});




	$('.js-dmpage-chart-doughnut').each(function () {
		var wrap = $(this);
		var canv = wrap.find('canvas');
		var id = wrap.attr('id');
		var data = window.dmpageCharts[id];
		var postfix = window.dmpageCharts[id + '-postfix'];
		console.log(data);

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
		new Chart(canv[0], {
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
							if (context.tooltip.dataPoints[0].datasetIndex < 1) {
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
							}
						}
					}
				}
			}
		});


	});





	$('.js-dmpage-chart-bar').each(function () {
		var wrap = $(this);
		var canv2 = wrap.find('canvas');
		var id = wrap.attr('id');
		var data = window.dmpageCharts[id];
		var postfix = window.dmpageCharts[id + '-postfix'];


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
							display:false
						},
						title: {
							display:false
						},
						ticks: {
							display:false
						},
						border: {
							display:false

						}
					},
					x: {
						stacked: true,
						grid: {
							display:false

						},
						title: {
							display:false
						},
						ticks: {
							beginAtZero: true,
							display:false
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
							if (context.tooltip.dataPoints[0].datasetIndex < 1) {
								// Tooltip Element
								let tooltipEl = document.getElementById('dmchartjs-tooltip');

								// Create element on first render
								if (!tooltipEl) {
									tooltipEl = document.createElement('div');
									tooltipEl.id = 'dmchartjs-tooltip';
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
							}
						}
					}
				}
			},
		});


	});



});

