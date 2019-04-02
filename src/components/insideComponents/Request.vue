<template>
  <div>
    <br>
    <br>
    <br>
    <form class="request" @submit.prevent="addRequest">
      <h3>Make a request</h3>
      <input type="text" class="requestInput" v-model="newRequest.name" placeholder="Name">
      <input type="text" class="requestInput" v-model="newRequest.email" placeholder="Email">
      <input type="text" class="requestInput" v-model="newRequest.address" placeholder="Address">
      <select class="requestInput" v-model="newRequest.model">
        <option>Select a model</option>
        <option v-for="(car, i) in cars" :key="i">{{ car.Name }}</option>
      </select>
      <div class="form-group">
        <h6>Upload a photo</h6>
        <input type="file" class="form-control-file" id="exampleFormControlFile1">
      </div>
      <div class="button-container">
        <input type="submit" value="SUBMIT" class="requestButton">
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "../../db";
import data from "../api/data";

export default {
  name: "Request",
  firebase: {
    requests: db.ref("requests")
  },
  data() {
    return {
      cars: data,
      newRequest: {
        name: "",
        email: "",
        address: "",
        model: "Select a model"
      }
    };
  },
  methods: {
    addRequest() {
      this.$firebaseRefs.requests.push({
        name: this.newRequest.name,
        email: this.newRequest.email,
        address: this.newRequest.address,
        model: this.newRequest.model
      });
      this.newRequest.name = "";
      this.newRequest.email = "";
      this.newRequest.address = "";
      this.newRequest.model = "";
      alert("Request done!");
      this.$router.replace("/results");
    },

    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
h1 {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 70px;
}

h3 {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 40px;
}

h5 {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 30px;
}

h6 {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
}

.request {
  margin: 50px auto;
  width: 40%;
  padding: 30px 25px;
  background: #f5f5f5;
  box-shadow: 1px 1px 2px #888888;
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

.button-container {
  text-align: center;
}

.requestButton {
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

.requestButton:hover {
  box-shadow: 3px 4px 2px #888888;
}

/* Cellphone */
@media (min-width: 320px) and (max-width: 480px) {
  .request {
    width: 90%;
  }
}

/* Tablet */
@media (min-width: 481px) and (max-width: 1024px) {
  .request {
    width: 70%;
  }
}
</style>


