<template>
    <div class="container">
        <form @submit.prevent="updateRequest" class="request">
            <h3>Edit request</h3>
            <input type="text" class="requestInput" v-model="newRequest.name"/>
            <input type="text" class="requestInput" v-model="newRequest.address" />
            <input type="text" class="requestInput" v-model="newRequest.model" />

            <input type="submit" class="requestButton" value="Update Item"/>
        </form>
    </div>
</template>

<script>
import { db } from '../../db';

export default {
  components: {
      name: 'Edit'
  },
  firebase: {
    requests: db.ref('requests'),
    requestsObj: {
      source: db.ref('requests'),
      asObject: true
    }
  },
  data () {
    return {
      newRequest: {}
    }
  },
  created() {
     let request = this.requestsObj[this.$route.params.id]
     this.newRequest = {
       name: request.name,
       email: request.email,
       address: request.address,
       model: request.model
     }
  },
  methods: {
    updateRequest() {
    console.log('Ya entro mi amor?')
      this.$firebaseRefs.requests.child(this.$route.params.id).set(this.newRequest);
      this.$router.push('/results')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Condensed');
    h1 {
        font-family: 'Ubuntu Condensed', sans-serif;
        font-size: 70px;
    }

    h3 {
        font-family: 'Ubuntu Condensed', sans-serif;
        font-size: 40px;
    }

    h5 {
        font-family: 'Ubuntu Condensed', sans-serif;
        font-size: 30px;
    }

    h6 {
        font-family: 'Ubuntu Condensed', sans-serif;
        font-size: 20px;
    }

    .request {
        margin: 50px auto;
        width: 500px;
        padding: 30px 25px;
        background: #ccc;
    }

    .requestInput {
        width: 100%;
        height: 50px;
        margin-bottom: 25px;
        padding-left: 10px;
        font-size: 15px;
        background: #fff;
        border: 1px solid #ccc;
    }

    .requestInput:focus {
        border-color: #6e8095;
        outline: none;
    }

    .requestButton {
        width: 100%;
        height: 50px;
        padding: 0;
        font-size: 18px;
        color: #fff;
        text-align: center;
        background: black;
        border: 0;
        cursor: pointer;
        outline: 0;
        border-radius: 3px;
    }
</style>
