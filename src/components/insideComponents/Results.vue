<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="container">
      <h3>Requests</h3>
      <table class="table tableConfig">
        <thead class="thead">
          <tr>
            <th scope="col">Name</th>

            <th scope="col">Address</th>
            <th scope="col">Model</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="req of requests" :key="req['.key']">
            <th scope="row">{{ req.name }}</th>

            <td>{{ req.address }}</td>
            <td>{{ req.model}}</td>
            <td>
              <input
                type="button"
                @click="deleteItem(req['.key'])"
                class="deleteButton"
                value="X"
              >
              <router-link :to="{ name: 'Edit', params: {id: req['.key']} }" class="editButton">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Ed v-if="showModal" @close="showModal = false">
      <h3 slot="header">custom header</h3>
    </Ed>
  </div>
</template>

<script>
import { db } from "../../db";
import firebase from "firebase";
export default {
  name: "Results",
  data() {
    return {
      requests: []
    };
  },
  firebase: {
    requests: db.ref("requests")
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.requests.child(key).remove();
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var ref = db.ref("https://vuedb-11076.firebaseio.com/");
        ref
          .child("requests")
          .orderByChild("email")
          .equalTo(user.email)
          .on("value", function(snapshot) {
            console.log(snapshot.val());
            snapshot.forEach(function(data) {
              console.log(data.key);
            });
          });
      } else {
        // No user is signed in.
      }
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Ubuntu+Condensed");
h1 {
  font-family: "Ubuntu Condensed", sans-serif;
  font-size: 70px;
}

h3 {
  font-family: "Ubuntu Condensed", sans-serif;
  font-size: 40px;
}

h5 {
  font-family: "Ubuntu Condensed", sans-serif;
  font-size: 30px;
}

h6 {
  font-family: "Ubuntu Condensed", sans-serif;
  font-size: 20px;
}

.container {
  background: white;
  border-radius: 3px;
  color: black;
}

.tableConfig {
  background-color: #f5f5f5;
  box-shadow: 1px 1px 2px #888888;
}

.deleteButton {
  width: 30%;
  height: 50px;
  padding: 0;
  margin: 0 auto;
  font-size: 18px;
  color: #fff;
  text-align: center;
  background-color: #b60d0d;
  border: 0;
  cursor: pointer;
  outline: 0;
  transition: box-shadow 0.5s;
}

.editButton {
  width: 30%;
  height: 50px;
  padding: 14px;
  margin: 0 auto;
  font-size: 18px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #0d9bb6;
  border: 0;
  cursor: pointer;
  outline: 0;
  transition: box-shadow 0.5s;
}

.deleteButton:hover,
.editButton:hover {
  box-shadow: 3px 4px 2px #888888;
}

/* Cellphone */
@media (min-width: 320px) and (max-width: 480px) {
  .deleteButton {
    margin-bottom: 15px;
    width: 55px;
  }

  .editButton {
      margin-bottom: 15px;
  }
}

/* Tablet */
@media (min-width: 481px) and (max-width: 1024px) {
  .deleteButton {
    margin-bottom: 15px;
    width: 55px;
  }

   .editButton {
      margin-bottom: 15px;
  }
}
</style>


