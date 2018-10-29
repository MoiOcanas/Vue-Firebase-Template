<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import  Nav from './components/Nav';
export default {
  name: 'App',
  components: {
    Nav
  },
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

header {
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a843cc3b3e1daf127a22d62da90c65e6&auto=format&fit=crop&w=1113&q=80);
    height: 100vh;
    background-size: cover;
    background-position: center;
}


.logo img{
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

.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.title h1 {
 color: #fff;
 font-size: 70px;
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

</style>

