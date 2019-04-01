<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <form class="login" @submit.prevent="login">
      <h3 class="mainTitle">Login</h3>
      <input type="email" v-model="user.email" class="loginInput" placeholder="Username">
      <input type="password" v-model="user.password" class="loginInput" placeholder="Password">
      <div class="button-container">
        <input type="submit" value="LOGIN" class="loginButton">
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(user => {
          if (user.email == "admin@gmail.com" && user.password == "123456") {
            this.$router.replace("/admrequests");
          } else {
            this.$router.replace("/maindashboard");
          }
        })
        .catch(e => {
          alert(e.message);
        });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
h3 {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 40px;
  text-align: center;
}
.login {
  margin: 50px auto;
  width: 40%;
  padding: 30px 25px;
  background: #f5f5f5;
  box-shadow: 1px 1px 2px #888888;
}

.loginInput {
  width: 100%;
  height: 50px;
  margin-bottom: 25px;
  padding-left: 10px;
  font-size: 15px;
  background: #fff;
}

.loginInput:focus {
  border-color: #6e8095;
  outline: none;
}

.loginButton {
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

.button-container {
  text-align: center;
}

.loginButton:hover {
  box-shadow: 3px 4px 2px #888888;
}

/* Cellphone */
@media (min-width: 320px) and (max-width: 480px) {
    .login {
        width: 90%;
    }
}

/* Tablet */
@media (min-width: 481px) and (max-width: 1024px) {
    .login {
        width: 70%;
    }
}
</style>


