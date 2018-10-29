<template>
    <div>
      <i class="fab fa-angrycreative fa-5x" style="margin-left: 30px;"></i>
      <ul>
        <li v-if="!authUser"><router-link :to="{ name: 'Main'}">HOME</router-link></li>
        <li v-if="!authUser"><router-link :to="{ name: 'About'}">ABOUT</router-link></li>
        <li v-if="!authUser"><router-link :to="{ name: 'Contact'}">CONTACT</router-link></li>
        <li v-if="!authUser"><router-link :to="{ name: 'Login'}">LOGIN</router-link></li>
        <li v-if="!authUser"><router-link :to="{ name: 'Signup'}">SIGNUP</router-link></li>
        <li v-if="authUser"><router-link :to="{ name: 'Profile'}">PROFILE</router-link></li>
        <li v-if="authUser"><router-link :to="{ name: 'Request'}">REQUEST</router-link></li>
        <li v-if="authUser"><router-link :to="{ name: 'Results'}">RESULTS</router-link></li>
        <li v-if="authUser"><a @click="logout" id="logOut">LOGOUT</a></li>
      </ul>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Nav",
  data() {
    return {
      authUser: null
    };
  },
  watch: {
    $route: "setAuthUser"
  },

  methods: {
    setAuthUser() {
      this.authUser = firebase.auth().currentUser;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/main");
        })
        .catch(e => {
          alert(e.message);
        });
    }
  },
  created() {
    this.setAuthUser();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

ul {
  list-style-type: none;
  float: right;
  margin-top: 25px;
}

ul li {
  display: inline-block;
}

ul li a {
  text-decoration: none;
  color: black;
  padding: 5px 20px;
  border: 1px solid transparent;
  transition: 0.6s ease;
  border-radius: 3px;
}

ul li a:hover {
  background-color: black;
  color: white;
}

#logOut {
  text-decoration: none;
  color: black;
  padding: 5px 20px;
  border: 1px solid transparent;
  transition: 0.6s ease;
  border-radius: 3px;
}

#logOut:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}

.logo img {
  float: left;
  width: 150px;
  height: auto;
}

.main {
  max-width: 1200px;
  margin: auto;
}

ul li.active a {
  background-color: #fff;
  color: #000;
}
</style>
