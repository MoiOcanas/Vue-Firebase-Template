<template>
    <div>
        <br>
        <br>
        <br>
        <div class="container border-bottom">
            <br>
            <h1>About</h1>
            <br>
            <div class="mainContent">
                <div class="textProps">
                    <h3>What's VUE?</h3>
                    <p class="text-justify">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

                        If you’d like to learn more about Vue before diving in, we created a video walking through the core principles and a sample project.

                        If you are an experienced frontend developer and want to know how Vue compares to other libraries/frameworks, check out the Comparison with Other Frameworks.
                    </p>
                </div>
                <div class="textProps">
                    <img src="https://assets.t3n.sc/news/wp-content/uploads/2016/05/vue.js_2.0_frontend-framework.jpg?auto=compress%2Cformat&fit=crop&fm=jpg&h=347&ixlib=php-1.1.0&q=65&w=620&s=8398eacd030d9955f6805f64df9e66fe" class="imgProps img-fluid" alt="">
                </div>
            </div>
            <div class="mainContent">
                <div class="textProps">
                    <img src="http://i.imgur.com/sArf3QE.png" class="imgProps paddingProp img-fluid" alt="">
                </div>
                <div class="textProps">
                    <h3>VUE Atributes</h3>
                    <p class="text-justify">Here we are encountering something new. The v-bind attribute you are seeing is called a directive. Directives are prefixed with v- to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM. Here, it is basically saying “keep this element’s title attribute up-to-date with the message property on the Vue instance.”
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'About'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Condensed');
    h1 {
        font-family: 'Ubuntu Condensed', sans-serif;
        font-size: 70px;
        margin-left: 25px;
    }

     h3 {
        font-family: 'Ubuntu Condensed', sans-serif;
        font-size: 40px;
    }

    .container {
        background:white;
        border-radius: 3px;
        color: black;
        z-index: 2;
    }

    .mainContent {
        display: grid;
        grid-template-columns: auto auto auto;
    }

    .textProps {
        margin: 15px;
    }

    .imgProps {
        width: 100%;
    }

    .paddingProp {
        padding: 15px;
        border-radius: 3px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        .mainContent {
            display: grid;
            grid-template-columns: auto auto;
        }
    }

    @media (min-width: 481px) and (max-width: 1024px) {
        .mainContent {
            display: grid;
            grid-template-columns: auto;
        }
    }
</style>


