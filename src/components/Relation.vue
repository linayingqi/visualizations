<template>
  <div>
    <div>【数据传递信息】</div>
    <div ref="target" class=" w-full h-full"></div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue"
import * as echarts from 'echarts'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
// console.log('props------关系图', props)
const target = ref(null)
let mChart = null
onMounted(() => {
  mChart = echarts.init(target.value)
  randerChart()
})
const randerChart = () => {
  const option = {
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d', // 二维直角坐标系
        symbolSize: 26,
        z: 3,
        edgeLabel: {
          normal: {
            show: true,
            color: '#fff',
            textStyle: {
              fontSize: 14
            },
            formatter: function (params) {
              return params.data.speed
              // let txt = ''
              // if (params.data.speed !== undefined) {
              //   txt = params.data.speed
              // }
              // return txt
            }
          }
        },
        label: {
            normal: {
              show: true,
              position: 'bottom',
              color: '#5e5e5e'
            }
          },
          edgeSymbol: ['none', 'arrow'],
          edgeSymbolSize: 8,
          data: props.data.relations.map(item => {
            if (item.id !== 0) {
              return {
                name: item.name,
                category: 0,
                active: true,
                speed: `${item.speed}kb/s `,
                value: item.value
              }
            } else {
              return {
                name: item.name,
                value: item.value,
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    color: {
                      colorStops: [
                        {
                          offset: 0,
                          color: '#157eff'
                        },
                        {
                          offset: 1,
                          color: '#35c2ff'
                        }
                      ]
                    }
                  }
                },
                label: {
                  normal: {
                    fontSize: '14'
                  }
                }
              }
            }
          }),
          links: props.data.relations.map((item, index) => ({ // 节点间的关系数据
            source: item.source,
            target: item.target,
            speed: `${item.speed}kb/s`,
            lineStyle: {
              normal: {
                color: '#12b5d0',
                curveness: 0.2, // 曲率
              }
            },
            label: {
              show: true,
              position: 'middle',
              offset: [10, 0]
            }
          }))
      },
      {
        type: 'lines',
        coordinateSystem: 'cartesian2d', // 坐标系
        z: 1,
        effect: {
          show: true,
          smooth: false,
          trailLength: 0,
          symbol: 'arrow',
          color: 'rgba(55,155,255, 0.5)',
          symbolSize: 12,
        },
        lineStyle: {
          normal: {
            curveness: 0.2
          }
        },
        // 线的数据级，前后线需要重合，数据固定
        data: [
          // [{ coord: [0, 300] }, { coord: [50, 200] }],
          // [{ coord: [0, 100] }, { coord: [50, 200] }],
          // [{ coord: [50, 200] }, { coord: [100, 100] }],
          // [{ coord: [50, 200] }, { coord: [100, 300] }],
          [{ coord: [0, 300] }, { coord: [50, 200] }],
					[{ coord: [0, 100] }, { coord: [50, 200] }],
					[{ coord: [50, 200] }, { coord: [100, 100] }],
					[{ coord: [50, 200] }, { coord: [100, 300] }]
        ]
      }
    ]
  }
  mChart.setOption(option)
}
watch(() => props.data, randerChart)
</script>
<style scoped>
</style>