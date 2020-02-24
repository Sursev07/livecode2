<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="Reviewer" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="['reviewer', { rules: [{ required: true, message: 'Please input your reviewer!' }] }]"
      />
    </a-form-item>
     <a-form-item label="Point" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="['point', { rules: [{ required: true, message: 'Please input score!' }] }]"
      />
    </a-form-item>
    <!-- <a-form-item label="Genre" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-select
        v-decorator="[
          'genre',
          { rules: [{ required: true, message: 'Choose Genre' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="Movies">
          Movies
        </a-select-option>
        <a-select-option value="Series">
          Series
        </a-select-option>
      </a-select>
    </a-form-item> -->
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import axios from 'axios'
export default {
  props:['movieId'],
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          //console.log('Received values of form: ', values);
          this.rateMovie(values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'series' ? 'series' : 'movie'}!`,
      });
    },
    rateMovie(values){
        let movieId = this.$route.params.id;
        axios({
            method: 'POST',
            url: `http://localhost:3000/rate/${movieId}`,
            data:values
        }).then(response => {
            this.$router.push({name:'Detail', param:{id:movieId}})
        });
    }
  },
};
</script>