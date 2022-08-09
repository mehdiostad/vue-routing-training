<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name: 'jobs'}">Jobs</router-link> 
    
  </nav>
  <router-view/>
  <button @click="backward">Go Backward</button>
  <button @click="redirect">Redirect</button>
  <button @click="forward">Go Forward</button>
</template>
<script>
export default {
  methods:{
    backward(){
      this.$router.go(-1);
    },
    redirect(){
      this.$router.push({name: 'home'})
    },
    forward(){
      console.log('clicked')
       this.$router.go(1);

    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

}

nav a.router-link-exact-active {
  background: crimson;;
  text-decoration: none;
  color: white;
  padding: 10px;
  border-radius: 7px;
}
button{
  margin:10px;
  padding: 10px;
  background: #ddd;
  border-radius: 7px;
  border: none;
  cursor: pointer;
}
button:hover{
  background: crimson;
  color: white;

}
</style>
