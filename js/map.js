$(function() {
	//中国地图
	var myChart = echarts.init(document.getElementById('china-map'));
	var option = {
		title: {
			x: 'center'
		},
		tooltip: { //提示框组件。
			trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
			formatter: function(params) {
				var info = '<span class="cityList">新疆</span><span class="cityList">新疆</span></div>'
				return info;
			},
			backgroundColor: "#ffffff", //提示标签背景颜色
			textStyle: {
				color: "#B72427"
			}, //提示标签字体颜色
			borderColor: "#C9555A",
			borderWidth: "1"
		},
		legend: {
			// orient:'horizontal',
			x: 'center',
			top: 0
		},
		visualMap: { //颜色的设置  dataRange
			orient: 'horizontal',
			x: 'center',
			y: 'top',
			splitList: [{
				start: 1500,
				color: 'rgb(253,217,217)'
			}, {
				start: 900,
				end: 1500,
				color: 'rgb(253,217,217)'
			}, {
				start: 310,
				end: 1000,
				color: 'rgb(253,217,217)'
			}, {
				start: 200,
				end: 300,
				color: 'rgb(253,217,217)'
			}, {
				start: 20,
				end: 20,
				label: '10 到 200（自定义label）',
				color: 'rgb(253,217,217)'
			}, {
				start: 10,
				end: 10,
				color: 'rgb(253,217,217)'
			}, {
				start: 5,
				end: 5,
				label: '5（自定义特殊颜色）',
				color: 'rgb(253,217,217)'
			}, {
				start: 0,
				end: 0,
				color: '#DDDDDD'
			}],
			text: ['高', '低'] // 文本，默认为数值文本
		},
		roamController: { //控制地图的上下左右放大缩小 图上没有显示
			show: true,
			x: 'right',
			mapTypeControl: {
				'china': true
			}
		},
		series: [{
			type: 'map',
			mapType: 'china',
			roam: false, //是否开启鼠标缩放和平移漫游
			itemStyle: { //地图区域的多边形 图形样式
				normal: { //是图形在默认状态下的样式
					label: {
						show: true, //是否显示标签
						textStyle: {
							color: "#333333"
						}
					},
					borderWidth: .5, //区域边框宽度
					borderColor: '#009fe8', //区域边框颜色
				},
				emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
					label: {
						show: true
					},
					borderWidth: .5,
					borderColor: '#4b0082',
					areaColor: "#ffdead",
				}
			},
			top: "3%", //组件距离容器的距离
			data: [{
				name: '北京',
				value: 0
			}, {
				name: '天津',
				value: 0
			}, {
				name: '重庆',
				value: 0
			}, {
				name: '河北',
				value: 0
			}, {
				name: '河南',
				value: 0
			}, {
				name: '云南',
				value: 0
			}, {
				name: '辽宁',
				value: 0
			}, {
				name: '黑龙江',
				value: 0
			}, {
				name: '湖南',
				value: 0
			}, {
				name: '安徽',
				value: 0
			}, {
				name: '山东',
				value: 0
			}, {
				name: '新疆',
				value: 0
			}, {
				name: '江苏',
				value: 0
			}, {
				name: '浙江',
				value: 0
			}, {
				name: '江西',
				value: 0
			}, {
				name: '湖北',
				value: 0
			}, {
				name: '广西',
				value: 0
			}, {
				name: '甘肃',
				value: 0
			}, {
				name: '山西',
				value: 0
			}, {
				name: '内蒙古',
				value: 0
			}, {
				name: '陕西',
				value: 0
			}, {
				name: '吉林',
				value: 0
			}, {
				name: '福建',
				value: 0
			}, {
				name: '贵州',
				value: 0
			}, {
				name: '广东',
				value: 0
			}, {
				name: '青海',
				value: 0
			}, {
				name: '西藏',
				value: 0
			}, {
				name: '四川',
				value: 0
			}, {
				name: '宁夏',
				value: 0
			}, {
				name: '海南',
				value: 0
			}, {
				name: '台湾',
				value: 0
			}, {
				name: '香港',
				value: 0
			}, {
				name: '澳门',
				value: 0
			}]
		}]
	};
	myChart.setOption(option);
	myChart.on('click', function(params) {
		var dataIndex = params.dataIndex;
		alert(params);
	});

});