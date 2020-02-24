<template>
  <a-card hoverable style="width: 300px;margin-bottom:20px;" :title="data.title">
    <img
      :alt="data.title"
      :src="data.poster"
      slot="cover"
    />
    <a :href="'https://www.imdb.com/title/'+data.imdbID" slot="extra" target="_blank">IMDB</a>
    <p>{{data.year}}</p>
    <p v-if="list == true"><router-link :to="{name:'Detail', params:{id:data.id}}" :list="isList">Detail</router-link></p>

    
  </a-card>
</template>
<script>
export default {
  props: ['data', 'list'],
  data(){
      return {
          isList:false
      }
  }
};
</script>
