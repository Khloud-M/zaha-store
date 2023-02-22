<template>
    <footer class="mt-3">
      <div class="footer-content">
        <div class="container">
          <div class="row d-flex">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <img
                src="@/assets/image/logo.0b6d3ab.svg"
                alt="logo"
                width="120"
                height="100"
              />
              <ul class="p-0 m-0 mt-3">
                <li>As Sulay, Riyadh Saudi Arabia</li>
                <li>sales@zahaaksa.com</li>
                <li>966599910168</li>
                <li>966599910168</li>
              </ul>
              <ul class="d-flex gap-2 m-0 p-0 mt-3 icon-social">
                <li>
                  <a href="#">
                    <img
                      src="@/assets/image/Facebook_icon.svg.png"
                      width="30"
                      height="30"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="@/assets/image/Gmail.png" width="30" height="30" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="@/assets/image/twitter.jpg" width="30" height="30" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="@/assets/image/Instagram-Icon.png"
                      width="30"
                      height="30"
                  /></a>
                </li>
              </ul>
              <!-- icon-social-->
            </div>
            <!-- first colum -->
            <div class="second-colum d-flex col-lg-5 col-md-6 col-sm-12">
              <div>
                <h5>INFORMATION</h5>
                <ul class="m-0 p-0 mt-3">
                  <li><a href="#">Terms & Conditions </a></li>
                  <li><a href="#">Privacy & Policy </a></li>
                  <li><a href="#">Return & Exchange </a></li>
                  <li><a href="#">Shipping & Delivery </a></li>
                </ul>
              </div>
              <div>
                <h5>QUICK LINKS</h5>
                <ul class="m-0 p-0 mt-3">
                  <li><a href="#"> My Account </a></li>
                  <li><a href="#">FAQS</a></li>
                </ul>
              </div>
            </div>
            <!-- second colum -->
            <div class="col-lg-4 col-md-6 col-sm-12">
              <h5>Newsletter</h5>
              <div class="subscribe">
                <input
                  class="form-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  v-model="useremail"
                />
                <bace-button @click="sendEmail"> subscribe </bace-button>
              </div>
              <!-- subscribe-->
              <div class="download-title">Download The App</div>
              <!-- download-title-->
              <div class="image">
                <img
                  src="@/assets/image/apple-store.542a9c8.svg"
                  alt=""
                  width="150"
                  height="50"
                />
                <img
                  src="@/assets/image/google-play.7eb8447.svg"
                  alt=""
                  width="150"
                  height="50"
                />
              </div>
            </div>
          </div>
          <div class="content-by py-4">
            Copyright © 2022 All Rights Reserved | Made With
            <img
              src="@/assets/image/heart.png"
              alt="heart"
              width="25"
              height="25"
            />
            <a href="#">Alalmiya Alhura </a>
          </div>
        </div>
        <!-- container-->
      </div>
      <!--footer-content -->
    </footer>
  </template>
  <script>
  export default {
    data() {
      return {
        useremail: "",
      };
    },
    methods: {
      sendEmail() {
        this.useremail = "";
      },
    },
  };
  </script>
  <style lang="scss" scoped>
  .footer-content {
    padding-block: 30px;
    background-color: var(--lighter_gray_clr);
    font-weight: 300;
    color: var(--main_theme_clr);
    h5 {
      border-bottom: 1px solid var(--main_theme_clr);
      width: max-content;
      font-size: 18px;
      font-weight: 500;
  
    }
    .row {
      li {
        font-weight: 300;
        transition: color 0.4s linear;
        padding-top: 7px;
      }
      & > :nth-child(1) {
        font-size: 15px;
        .icon-social li {
          transition: transform 0.4s linear;
        }
        .icon-social li:hover {
          transform: rotate(15deg);
        }
      }
      .second-colum {
        gap: 50px;
        li {
          font-size: 18px;
        }
      }
      & > :nth-child(3) {
        font-weight: 300;
        font-size: 18px;
  
        h5 {
          border-bottom: none;
        }
        .subscribe {
          display: flex;
          align-items: center;
          align-items: stretch;
          height: 55px;
          min-width: 300px;
          overflow: hidden;
          margin-top: 7px;
          margin-bottom: 13px;
          .form-input {
            height: 55px;
          }
          input {
            padding-block: 0;
            border: none;
            outline: none;
            box-shadow: none;
            color: var(--light_gray_clr);
            border-radius: 4px;
            background-color: var(--white_clr);
            display: block;
            width: 100%;
            padding: 0.375rem 0.75rem;
            line-height: 1.5;
            background-clip: padding-box;
            border: 1px solid #ced4da;
  
            appearance: none;
            border-radius: 0.375rem;
            transition: border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          }
        }
        input::placeholder {
          font-size: 18px;
          font-weight: 300;
          padding-block: 0;
          border: none;
          outline: none;
          box-shadow: none;
          color: var(--light_gray_clr);
          border-radius: 4px;
          background-color: var(--white_clr);
        }
      }
      .image {
        margin-top: 10px;
        display: flex;
        align-items: center;
        // justify-content: flex-start;
        column-gap: 25px;
        img {
          margin-left: 0;
          margin-right: 0;
        }
      }
    }
    /** content by */
    .content-by {
    color: gray;
    width: fit-content;
    margin: auto;
    a {
      color: var(--main_theme_clr);
    }
  }
  }
  
  </style>