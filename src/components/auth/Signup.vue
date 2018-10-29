<template>
    <div>
        <br><br><br>
        <br><br><br>
        <form class="signup" @submit.prevent="addUser">
            <h3 class="mainTitle">Signup</h3>
            <input type="text" class="signupInput" v-model="user.name" placeholder="Name">
            <input type="email" class="signupInput" v-model="user.email" placeholder="Email">
            <input type="text" class="signupInput" v-model="user.phone" placeholder="Phone Number">
            <input type="password" class="signupInput" v-model="user.password" placeholder="Password">
            <input type="submit" value="SIGNUP" class="signupButton">
        </form>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Signup',
    data () {
        return {
            user: {
                name: '',
                email: '',
                phone: '',
                password:''
            }
        }
    },
    methods: {
        addUser() {
            firebase.auth().createUserWithEmailAndPassword(this.user.email,this.user.password)
                .then((user)=>{
                    this.$router.replace('/login');
                })
                .catch((e)=>{
                alert('oops'+e.message);
            })
        },
        createUser() {
            admin.auth().createUser({
            email: this.user.email,
            emailVerified: false,
            phoneNumber: this.user.phone,
            password: this.user.password,
            displayName: this.user.name,
            photoURL: "",
            disabled: false
            })
            .then(function(userRecord) {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log("Successfully created new user:", userRecord.uid);
            })
            .catch(function(error) {
                console.log("Error creating new user:", error);
            });
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
    .signup {
        margin: 50px auto;
        width: 400px;
        padding: 30px 25px;
        background: #ccc;
    }

    .signupInput {
        width: 100%;
        height: 50px;
        margin-bottom: 25px;
        padding-left: 10px;
        font-size: 15px;
        background: #fff;
        border: 1px solid #ccc;
    }

    .signupInput:focus {
        border-color: #6e8095;
        outline: none;
    }

    .signupButton {
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

    .signupButton:hover {
        color: black;
        background: #fff;
        border: 1px solid black;
    }
</style>


