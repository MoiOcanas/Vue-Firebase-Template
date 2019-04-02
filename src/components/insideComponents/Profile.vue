<template>
    <div>
        <br>
        <div class="container">
            <h3>This is the Profile page</h3>
            <div class="row">
                <div class="col-6">
                    <br><br>
                    <div>
                        <h6>Welcome: {{ currentUser }}!</h6>
                    </div>
                </div>
                <div class="col-6"></div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Profile',
    data() {
        return {
            currentUser: null
        }
    },
    created () {
        var user = firebase.auth().currentUser;
        var email;

        if (user != null) {
            console.log(user)
            email = user.email;
            this.currentUser = email;
        }
    },
    methods: {
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

    .container {
        background:white;
        border-radius: 3px;
        color: black;
    }
</style>
