import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';
//state导航列表数据


export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  //action
  const getCategory = async () => {
    const res = await getCategoryAPI()
    // console.log(res);
    categoryList.value = res.data.result
  }

  return {
    categoryList,
    getCategory
  }
})