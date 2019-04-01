<template>
  <div>
    <br>
    <br>
    <br>
    <div class="container border-bottom">
      <br>
      <h1>Our team</h1>
      <br>

      <div class="index mainContent">
        <div class="textProps">
          <br>
          <div style="text-align: center;">
            <img
              src="https://static.514-billets.com/artist/kan/s1/kanye-west-200x200.jpg"
              alt="..."
              class="rounded-circle"
            >
            <i class="fas fa-angle-right fa-3x ico"></i>
          </div>
        </div>
        <div class="textProps">
          <h5>Kanye West</h5>
          <h6>Vue's creator</h6>
          <p class="text-justify">
            Kanye Omari West, also known as Ye, is an American developer, singer, songwriter, record producer, entrepreneur and fashion designer.
            Born in Atlanta and raised in Chicago, West first became known as a producer for Roc-A-Fella Records in the early 2000s, producing hit singles for recording artists such as Jay-Z,
            Ludacris and Alicia Keys.
          </p>
        </div>
      </div>

      <div class="mainContent">
        <div class="textProps">
          <br>
          <div style="text-align: center;">
            <img src="https://musicmp3.ru/avatars/pic17915.jpg" alt="..." class="rounded-circle">
            <i class="fas fa-angle-right fa-3x ico"></i>
          </div>
        </div>
        <div class="textProps">
          <br>
          <h5>Xavier de Rosnay and Gaspard Auge</h5>
          <h6>Vue's main developers</h6>
          <p class="text-justify">
            Justice is a French developers consisting of Gaspard Augé and Xavier de Rosnay.
            The duo's label is Ed Banger Records which is managed by the label's head, Pedro Winter.
            Justice is known for incorporating a strong rock and indie influence into its music and image.
          </p>
        </div>
      </div>

      <div class="mainContent">
        <div class="textProps">
          <br>
          <div style="text-align: center;">
            <img
              src="https://seonegativo.com/imagen/ernesto-zedillo-perusummit-myid-OIP.9yn-odbKLKZIHJYjs6Xa-AHaHa.jpg"
              alt="..."
              class="rounded-circle"
            >
            <i class="fas fa-angle-right fa-3x ico"></i>
          </div>
        </div>
        <div class="textProps">
          <h5>Ernesto Zedillo</h5>
          <h6>Vue's CEO</h6>
          <p class="text-justify">
            Ernesto Zedillo, also known as Ze, is an American developer, singer, songwriter, record producer, entrepreneur and fashion designer.
            Born in Atlanta and raised in Chicago, West first became known as a producer for Roc-A-Fella Records in the early 2000s, producing hit singles for recording artists such as Jay-Z,
            Ludacris and Alicia Keys.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Ubuntu+Condensed");
h1 {
  font-family: "Ubuntu Condensed", sans-serif;
  font-size: 70px;
  margin-left: 25px;
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
  z-index: 2;
  background: white;
  border-radius: 3px;
  color: black;
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

.ico {
  margin-left: 30px;
}

.ico2 {
  margin-right: 30px;
}

.index {
  z-index: -1;
}

.mainContent {
  display: grid;
  grid-template-columns: auto auto auto;
}

/* Cellphone */
@media (min-width: 320px) and (max-width: 480px) {
  .mainContent {
    display: grid;
    grid-template-columns: auto;
  }
  .mainContent i {
    display: none;
  }
}

/* Tablet */
@media (min-width: 481px) and (max-width: 1024px) {
  .mainContent {
    display: grid;
    grid-template-columns: auto auto;
  }
  .mainContent i {
    display: none;
  }
}
</style>


