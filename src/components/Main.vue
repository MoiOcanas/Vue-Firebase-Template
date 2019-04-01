<template>
  <div>
    <header>
      <div class="title">
        <h3>WELCOME TO MY TEMPLATE</h3>
      </div>
      <div class="button">
        <router-link :to="{ name: 'Login'}" class="btn">GET INSIDE</router-link>
        <router-link :to="{ name: 'Signup'}" class="btn">JOIN US</router-link>
      </div>
    </header>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Main",
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
.it {
  font-size: 18px;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a843cc3b3e1daf127a22d62da90c65e6&auto=format&fit=crop&w=1113&q=80);
  height: 100vh;
  background-size: cover;
  background-position: center;
}

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
  color: #fff;
  padding: 5px 20px;
  border: 1px solid transparent;
  transition: 0.6s ease;
}

ul li a:hover {
  background-color: #fff;
  color: #000;
}

ul li.active a {
  background-color: #fff;
  color: #000;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title h3 {
  color: #fff;
  font-size: 50px;
}

.button {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn {
  border: 1px solid #fff;
  padding: 10px 30px;
  color: #fff;
  text-decoration: none;
  transition: 0.6s ease;
}

.btn:hover {
  background-color: #fff;
  color: #000;
}

@media (min-width: 320px) and (max-width: 480px) {
  .title {
    position: absolute;
    top: 40%;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .button {
    text-align: center;
  }

  .btn {
    margin: 5px;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  .title {
    position: absolute;
    top: 45%;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .button {
    text-align: center;
  }

}
</style>
