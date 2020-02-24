<template>
  <div class="home">
    <center>
      <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :data="movie" />
      </center>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      movies:[]
    }
  },
  components: {
    MovieCard,
  },
  created() {
    this.getMovie();
  },
  methods: {
    getMovie(){
      axios({
        method: 'GET',
        url: 'http://localhost:3000/movies',
      }).then(response => {
        console.log(response.data);
        this.movies = response.data;
      });
    }
  },
};
</script>
