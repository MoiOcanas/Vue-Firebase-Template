<template>
    <div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="container">
        <form @submit.prevent="updateRequest" class="edit">
            <h3>Edit request</h3>
            <input type="text" class="editInput" v-model="newRequest.name"/>
            <input type="text" class="editInput" v-model="newRequest.address" />
            <input type="text" class="editInput" v-model="newRequest.model" />

            <div class="inputContainer">
              <input type="submit" class="editButton" value="Update Request"/>
            </div>
        </form>
    </div>
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

    .edit {
        margin: 50px auto;
        width: 55%;
        padding: 30px 25px;
        background: #F5F5F5;
        box-shadow: 1px 1px 2px #888888;
    }

    .editInput {
        width: 100%;
        height: 50px;
        margin-bottom: 25px;
        padding-left: 10px;
        font-size: 15px;
        background: #fff;
        border: 1px solid #ccc;
    }

    .editInput:focus {
        border-color: #6e8095;
        outline: none;
    }

    .editButton {
        width: 30%;
        height: 50px;
        padding: 0;
        margin: 0 auto;
        font-size: 18px;
        color: #fff;
        text-align: center;
        background-color: #069868;
        border: 0;
        cursor: pointer;
        outline: 0;
        transition: box-shadow 0.5s;
    }

    .editButton:hover {
        box-shadow: 3px 4px 2px #888888;
    }

    .inputContainer {
      text-align: center;
    }
</style>
