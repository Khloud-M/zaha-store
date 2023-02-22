<template>
    <button>
        <slot></slot>
    </button>
</template>
<style scoped>
button , a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  padding: 10px 15px;
  color: #ffe000;
  border-radius: 4px;
  width: max-content;
  margin: 0;
  border: 1px solid var(--main_theme_clr);
  background-color: var(--main_theme_clr); 

  background-image: linear-gradient(50deg, transparent 50%, white 50%);
  background-size: 250%;
  transition: all 0.6s ease-in-out;
}


a:hover,
a:active,
button:hover,
button:active {
  color: var(--main_theme_clr);
  background-position: 100%;
  

}

</style>