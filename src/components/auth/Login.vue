<template>
    <div>
        <br><br><br>
        <br><br><br>
        <form class="login" @submit.prevent="login">
            <h3 class="mainTitle">Login</h3>
            <input type="email" v-model="user.email" class="loginInput" placeholder="Username">
            <input type="password" v-model="user.password" class="loginInput" placeholder="Password">
            <input type="submit" value="LOGIN" class="loginButton">
        </form>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Login',
    data () {
        return {
            user:{
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
             firebase.auth().signInWithEmailAndPassword(this.user.email,this.user.password)
                    .then((user)=>{
                        if (user.email == 'admin@gmail.com' && user.password == '123456' ) {
                            this.$router.replace('/admrequests');
                        } else {
                            this.$router.replace('/maindashboard');
                        }
                })
                .catch((e)=>{
                alert(e.message);
            })
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Condensed');
    h3 {
        font-family: 'Ubuntu Condensed', sans-serif;
        font-size: 40px;
        text-align: center;
    }
    .login {
        margin: 50px auto;
        width: 400px;
        padding: 30px 25px;
        background: #ccc;
    }

    .loginInput {
        width: 100%;
        height: 50px;
        margin-bottom: 25px;
        padding-left: 10px;
        font-size: 15px;
        background: #fff;
        border: 1px solid #ccc;
    }

    .loginInput:focus {
        border-color: #6e8095;
        outline: none;
    }

    .loginButton {
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

    .loginButton:hover {
        color: black;
        background: #fff;
        border: 1px solid black;
    }
</style>


