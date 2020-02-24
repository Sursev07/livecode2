<template>
    <a-card size="small" :title="rate.reviewer" style="width: 300px">
        <a slot="extra" @click="deleteRate(rate.id)">Delete</a>
        <p>{{rate.point}}</p>
    </a-card>
</template>
<script>
import axios from 'axios';
export default {
    props: ['rate'],
    methods:{
        deleteRate(id){
            axios({
                method: 'DELETE',
                url: `http://localhost:3000/rate/${id}`
            }).then(response => {
                console.log('delete')
                this.$emit("rateRemoved", {id:id})
            })
        }
    }
}
</script>