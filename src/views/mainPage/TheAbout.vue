<template>
  <section class="about">
    <landing-page />
    <div class="container">
      <div class="content_about">
        <div class="col-md-6 col-sm-12">
          <h4>Zaha application:</h4>
          <p>
            is an online shopping platform that enables you to search and browse
            comfortably and easily among the latest models of abayas and
            galabiyas, where you can order what you think of the largest
            exclusive selection of abayas and jalabiyas with home delivery
            service.
          </p>
          <p>
            The application aims to serve our customers in the entire Kingdom of
            Saudi Arabia and some Gulf countries, where the application enables
            you to choose the appropriate model of the abaya or galabiya, then
            put it in the shopping cart, choose the shipping address and pay by
            the appropriate means in order to, And then wait for the shipment to
            reach your door
          </p>
          <p>
            At Zaha store, we care about the smallest details in choosing the
            material and quality of fabrics to make a product that suits you and
            is worth buying. We use the latest tools, means and designs to keep
            pace with the fashion world in a professional and attractive way. We
            also care about packaging the products very carefully until they
            reach you as you deserve and without any notes.
          </p>
          <p>
            Enjoy the entire process of completing the order with ease and
            speed, and buy your favorite items within very few minutes. Orders
            are delivered across the Kingdom within 3:5 business days. Choose
            between payment methods (cash on receipt - credit card / debit card
            - Visa - MasterCard) in Zaha application, you can follow our return
            and exchange policy.
          </p>
        </div>
        <div class="col-md-5 col-sm-12 image">
          <img src="@/assets/image/logo.0b6d3ab.svg" width="70%" />
        </div>
      </div>
      <!-- end content_about -->
    </div>
    <!-- end container-->
  </section>
</template>
<style scoped>
.container {
  margin: var(--marginTopBottom) auto;
}
.content_about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.image img {
  display: block;
  margin: auto;
  
}
h4 {
  font-size: 30px;
  text-align: justify;
  color: var(--main_theme_clr);
  margin: 40px 0;
}
p {
  color: gray;
  font-size: 17px;
  text-align: justify;
}
</style>