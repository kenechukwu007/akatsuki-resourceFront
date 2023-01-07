<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Navbar content -->
    <!--    Logo-->
    <router-link class="navbar-brand" :to="{ name: 'home' }">
      <img id="logo" src="../../public/logo.png" height="70px" />
    </router-link>
    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>
      <!-- dropdown for browse -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarAccount"
            data-toggle="dropdown"
          >
            Menu
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <router-link class="dropdown-item" :to="{ name: 'home' }"
              >Home
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'ProductPage' }"
              >Product
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'CategoryPage' }"
              >Category
            </router-link>
            <router-link class="dropdown-item" :to="{name: 'adminlogin'}">
              AdminLogin
            </router-link>
          </div>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  href="#"
            id="navbarAccount"
            data-toggle="dropdown">Users</a>
          <div class="dropdown-menu" aria-labelledby="navbarAccount" >
            <router-link class="dropdown-item" :to="{ name: 'RegisterPage' }">Register</router-link>
            <router-link class="dropdown-item" :to="{ name: 'LoginPage' }">Log-in</router-link>
          </div>
        </li> -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarAccount"
            data-toggle="dropdown"
          >
            Accounts
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <router-link
              v-if="!token"
              class="dropdown-item"
              :to="{ name: 'RegisterPage' }"
              >Register
            </router-link>
            <router-link
              v-if="!token"
              class="dropdown-item"
              :to="{ name: 'LoginPage' }"
              >Log in
            </router-link>
            <a class="dropdown-item" v-if="token" href="#" @click="logOut"
              >Log out
            </a>
          </div>
        </li>
        <li class="nav-item">
          <div id="cart" style="position:relative">
             <span id="cart-count">{{ count }}</span> -->
            <router-link class="text-light" :to="{ name: 'ShoppingCart' }">
              <i class="fa fa-shopping-cart" style="font-size:36px"></i>
            </router-link>
          </div>
        </li>
      </ul>
      <!-- dropdown for account -->
    </div>
  </nav>
</template>
<script>
import swal from 'sweetalert';


export default {
  name: "Navbar",
  props: ["count"],
  data(){
    return {
      token: null
    }
  },
  methods: {
    logOut(){
      localStorage.removeItem("token");
      this.token = null
      swal({
        text: 'Sad to see you go, come again!',
        icon: 'success'
      })
      this.$emit("resetCount");
      this.$router.push({name: "home"})
    }
  },

  mounted(){
    this.token = localStorage.getItem("token");
  }
}


</script>

<style>
#cart-count{
  background-color: brown;
  color: whitesmoke;
  border-radius: 50%;
  font-size: 15px;
  align-items: center;
  display: flex;
  position: absolute;
  justify-content: center;
  margin-left: 11px;
  height: 15px;
  width: 15px
}

.v-toolbar__title{
    font-size: 1rem !important;
}
.v-badge__badge{
    font-size: 12px !important;
    height: 20px !important;
    min-width: 20px !important;
}

.nav-link {
    color: wheat;
}

</style>