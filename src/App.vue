<template >
  <div>
    
    <h2>B6</h2>
    <router-link to="/">Home</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/contact">Contact</router-link>
    
    <h2>B7</h2>
    <nav>
    <router-link to="/" active-class="active-link">
      Home
    </router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/product" active-class="active-link">
      Product
    </router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/detail" active-class="active-link">
      Detail
    </router-link>
  </nav>
  <nav>
    <h2>B8</h2>
    <router-link to="/dashboard" active-class="active-linkB8">Dashboard</router-link>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <router-link to="/account" active-class="active-linkB8">Account</router-link>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <router-link to="/product" active-class="active-linkB8">Product</router-link>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


  </nav>
  <router-view></router-view>
  </div>
</template>
<script>
</script>
<style scoped>
  .active-link {
  font-weight: bold; 
  color: red; 
}
.active-linkB8{
  background-color: blue;
  color: #fff;
  font-weight: 1000;
}
</style>