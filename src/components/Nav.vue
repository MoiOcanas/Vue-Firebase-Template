<template>
  <div>
    <ul id="navTo">
      <!-- <i class="fab fa-vuejs fa-3x icon-vue"></i> -->
      <router-link v-if="!authUser" :to="{ name: 'Login'}"><span @click="showNav()">LOGIN</span></router-link>
      <router-link v-if="!authUser" :to="{ name: 'Signup'}"><span @click="showNav()">SIGNUP</span></router-link>
      <router-link v-if="!authUser" :to="{ name: 'About'}"><span @click="showNav()">ABOUT</span></router-link>
      <router-link v-if="!authUser" :to="{ name: 'Contact'}"><span @click="showNav()">OUR TEAM</span></router-link>
      <router-link v-if="!authUser" :to="{ name: 'Main'}"><span @click="showNav()">HOME</span></router-link>

      <!-- If user login -->
      <router-link v-if="authUser" :to="{ name: 'Profile'}"><span @click="showNav()">PROFILE</span></router-link>
      <router-link v-if="authUser" :to="{ name: 'Request'}"><span @click="showNav()">REQUEST</span></router-link>
      <router-link v-if="authUser" :to="{ name: 'Results'}"><span @click="showNav()">RESULTS</span></router-link>
      <a @click="logout" v-if="authUser" id="logOut">LOGOUT</a>
      <li>
        <a href="javascript:void(0);" @click="showNav()" class="icon">
          <i class="fas fa-bars"></i>
        </a>
      </li>
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
    },
    showNav() {
      let x = document.getElementById("navTo");
      if (x.className === "main-navbar") {
        x.className += " responsive";
      } else {
        x.className = "main-navbar";
      }
    },
    closeNav() {
      let x = document.getElementById('navTo');
      if (x.className === "responsive") {
        x.className = "main-navbar";
      }
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
  margin: 0;
  padding: 6px 0px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-bottom: 3px solid #069868;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}

ul a {
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: background-color 0.6s ease, color 0.6s ease;
  float: right;
  margin: 8px;
}

ul a:hover {
  color: #fff;
  background-color: #3b3c3c;
}

ul .icon {
  display: none;
}

.icon-vue {
  margin: 15px 15px 0px 25px;
}

#logOut {
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: background-color 0.6s ease, color 0.6s ease;
}

#logOut:hover {
  color: #fff;
  background-color: #3b3c3c;
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

/* Cellphone */
@media (min-width: 320px) and (max-width: 480px) {
  ul a {
    display: none;
  }

  ul a.icon {
    float: right;
    display: block;
  }
}

/* Cellphone */
@media (min-width: 320px) and (max-width: 480px) {
  ul.responsive {
    position: relative;
  }

  ul.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  ul.responsive a {
    float: none;
    display: block;
    text-align: center;
  }
}
</style>
