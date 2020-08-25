//��ʼ��echarts��ָ��ͼ�������IDΪ'china_chart'��������
var china_chart = echarts.init(document.getElementById('china_chart'));
//����ͼ���е���ɫ
var COLORS = ["#ffffff", "#fdf368", "#fdad4b", "#fb5173", "#bb3937", "#772526", "#480f10"];
china_chart.setOption({				//���齫�ò���ֱ�ӷ��뵽 get�У�������ܳ������ݼ��ز�����������
		    title:[{				//Ч��ͼ�������
                text: "Novel\n",
                left: "4%",
                y: "10%",
                textStyle: {
                    fontSize: 70
                }
            }, {
                text: "Coronavirus\n",
                left: "4%",
                y: "22%",
                textStyle: {
                    fontSize: 70
                },
            },{
                text: "2019",
                left: "4%",
                y: "34%",
                textStyle: {
                    fontSize: 70
                },
            },{
                text:"��������",
                left: "4%",
                y: "42%",
                textStyle: {
                    color: '#99cc33',
                    fontSize: 70
                },
            },{
                text: "DATA SOURCES:",
                left: "4%",
                y: "51%",
                textStyle: {
                    fontSize: 36
                },
            },
                {
                    text: "DXY��DX DOCTOR",
                    left: "4%",
                    y: "58%",
                    textStyle: {
                        fontSize: 24
                    },
                }, {
                    text: "CCTV NEWS",
                    left: "4%",
                    y: "64%",
                    textStyle: {
                        fontSize: 24
                    },
                }, {
                    text: "CHINA DAILY\n",
                    left: "4%",
                    y: "70%",
                    textStyle: {
                        fontSize: 24
                    },
                },
                {
                    text: "National Health Commission of the PRC",
                    left: "4%",
                    y: "76%",
                    textStyle: {
                        fontSize: 24
                    },
                },
            ],
            tooltip: {
                    formatter:function(params){//��ʾ�򸡲����ݸ�ʽ����֧���ַ���ģ��ͻص�����������ʽ��
                        return params.seriesName+'<br />'+params.name+'��'+params.value
                    }//���ݸ�ʽ��
                },
            visualMap: {//visualMap ���Ӿ�ӳ����������ڽ��С��Ӿ����롻��Ҳ���ǽ�����ӳ�䵽�Ӿ�Ԫ�أ��Ӿ�ͨ������
                type: 'piecewise',//�ֶ����Ӿ�ӳ�����
                pieces: [{//�Զ��塺�ֶ�ʽ�Ӿ�ӳ���������ÿһ�εķ�Χ���Լ�ÿһ�ε����֣��Լ�ÿһ�ε��ر����ʽ��
                    value: 0, color: COLORS[0]	//������ֵΪ0ʱչ�ֵ���ɫ
                }, {
                    min: 1, max: 9, color: COLORS[1]	//������ֵ[1,9]ʱ����ɫ
                }, {
                    min: 10, max: 99, color: COLORS[2]	
                }, {
                    min: 100, max: 499, color: COLORS[3]
                }, {
                    min: 500, max: 999, color: COLORS[4]
                }, {
                    min: 1000, max: 10000, color: COLORS[5]
                }, {
                    min: 10000, color: COLORS[6]
                }],
                inRange: {
                    color:COLORS //ȡֵ��Χ����ɫ
                },

                show:false//����ͼע�Ƿ���ʾ
            },
            geo: {				//��������ϵ������ڵ�ͼ�Ļ���
                map: 'china',	//���õ�ͼΪ�й�
                roam: false,	//���������ź�ƽ��
                zoom:1.23,		//�ӽ����ű���
                label: {		//��ͼ����ʵ�����ֱ�ǩ
                    normal: {
                        show: false,	//����Ϊ����ʾ
                        fontSize:'10',
                        color: 'rgba(0,0,0,0.7)'
                    }
                },
                itemStyle: {
                    normal: {	// ��ͨ״̬�µ���ʽ
                        borderColor: '#333333',
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 5
                    },
                    emphasis:{
                        areaColor: '#F3B329',//���ѡ��������ɫ
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    }
                },
                label:{
                    emphasis: {
                        show: false
                    }
                },
                left:"auto",              //������������ľ���,�ٷֱ��ַ�������������
                top:65,                   //����������ϲ�ľ��룬�ٷֱ��ַ�������������
                right:"6%",               //����������Ҳ�ľ���,�ٷֱ��ַ�������������
                bottom:95,
             },
            series : [//ϵ���б���ͼ��
                {
                    name: '�ִ�ȷ������',
                    type: 'map',//ͼ������
                    geoIndex: 0,
                    data:d//ͼ�������
                }
            ]
        })
