<template>
    <div>
        <center>
        <a-row style="margin:">
      <a-col :span="12">
          <MovieCard :data="movie" :list="list"/>
        </a-col>
      <a-col :span="12">
          <RateCard v-for="rate in filteredRates" :key="rate.id" :rate="rate" @rateRemoved="removeRate"/>
          <p><router-link :to="{name:'Rate', params:{id:movie.id}}">Rate</router-link></p>
      </a-col>
    </a-row>
    </center>
  </div>
</template>
<script>
import axios from 'axios';
import MovieCard from '@/components/MovieCard.vue';
import RateCard from '@/components/RateCard.vue';
export default {
    props:[],
    components:{
        MovieCard,
        RateCard
    },
    data() {
        return{
            movie:[],
            rates:[],
            list:true
        }
    },
    computed:{
        filteredRates(){
            console.log('masuk computed', this.rates)
            let result = []
            for (let i = 0; i < this.rates.length; i++){
                    result.push(this.rates[i])
            }
            return result;
        }
    },
    created(){
        this.getOneMovie(this.$route.params.id)
    },
    methods:{
        getOneMovie(id){
            axios({
                method: 'GET',
                url: `http://localhost:3000/movies/${id}`,
            }).then(response => {
                this.movie = response.data.movie;
                this.rates = response.data.rates;
                console.log(this.rates, response.data)
            });
        },
        removeRate(newRate){console.log(newRate);
            this.rates = this.rates.filter(rate => rate.id !== newRate.id)
        }
    }
}
</script>