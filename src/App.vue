<template>
  <div class=" bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden" v-if="data">
    <!-- 左 -->
    <div class=" flex-1 mr-5 bg-opacity-50 bg-slate-500 p-3 flex flex-col">
      <!-- 横向柱状图 -->
      <HorizontalBar class="h-1/3 box-border pb-4" :data="data.regionData "/>
      <!-- 雷达图 -->
      <RadarBar :data="data.riskData" class="h-1/3 box-border pb-4"/>
      <!-- 关系图 -->
      <Relation class="h-1/3" :data = data.relationData />
    </div>
    <!-- 中 -->
    <div class=" w-1/2 mr-5 flex flex-col">
      <!-- 数据总览图 -->
      <TotalData :data="data.totalData" class=" bg-opacity-50 bg-slate-800 p-3"/>
      <!-- 地图可视化 -->
      <MapChart :data="data.mapData" class=" bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1"/>
    </div>
    <!-- 右 -->
    <div class=" flex-1 bg-opacity-50 bg-slate-500 p-3 flex flex-col">
      <!-- 竖向柱状图 -->
      <VerticalBar :data="data.serverData" class="h-1/3 box-border pb-4"/>
      <!-- 环形图 -->
      <RingBar class="h-1/3 box-border pb-4" :data = data.abnormalData />
      <!-- 文档云图 -->
      <WordCloud class="h-1/3" :data = data.wordCloudData />
    </div>
  </div>
</template>
<script setup>
import HorizontalBar from './components/HorizontalBar.vue'
import MapChart from './components/MapChart.vue'
import RadarBar from './components/RadarBar.vue'
import Relation from './components/Relation.vue'
import RingBar from './components/RingBar.vue'
import TotalData from './components/TotalData.vue'
import WordCloud from './components/WordCloud.vue'
import VerticalBar from './components/VerticalBar.vue'

import { ref } from 'vue'
// import { getVisualization } from '@/api/vusualization.js'
import { getVisualization } from '@/api/vusualization.js'
const data = ref(null)
const loadData = async () => {
  data.value = await getVisualization()
  console.log('----', data.value)
}
setInterval(() => {
  loadData()
}, 3000)
</script>
<style scoped>
</style>
``