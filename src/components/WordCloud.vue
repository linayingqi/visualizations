<template>
  <div>
    <div>【关键词条】</div>
    <div ref="target" class=" w-full h-full"></div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue"
import * as echarts from 'echarts'
import 'echarts-wordcloud'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
// console.log('props----',props)
const target = ref(null)
let mChart = null
onMounted(() => {
  mChart = echarts.init(target.value)
  randerChart()
})
const randomRGB = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}
const randerChart = () => {
  const option = {
    series: [
      {
        type: 'wordCloud',
        sizeRange: [8, 46],
        rotationRange: [0, 0],
        gridSize: 0,
        layoutAnimation: true,
        textStyle: {
          color: randomRGB
        },
        emphasis: {
          textStyle: {
            fontWight: 'bold',
            color: '#000'
          }
        },
        data: props.data.datas
      }
    ]
  }
  mChart.setOption(option)
}
watch(() => props.data, randerChart)
</script>
<style scoped>
</style>