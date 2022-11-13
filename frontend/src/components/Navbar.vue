<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-home">
    <div class="container-fluid">
      <router-link :to="{ name: 'Home' }"><img src="src/assets/logo.png" class="header-image"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="pi pi-align-justify" id="icon-left"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <i class="pi pi-home"></i>
                  <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                  </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
              </li>
              <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
              </li>
          </ul>
          <ul class="navbar-nav">
              <li class="nav-item">
                  <i class="pi pi-sign-in"></i>
                  <a class="nav-link" href="#">Login</a>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'Register'}">
                    <i class="pi pi-sign-out"></i>
                    <a class="nav-link" href="">Register</a>
                </router-link>
              </li>
          </ul>
      </div>
    </div>
  </nav> -->
  <div class="container bg-red-900">
        <!-- Navbar -->
        <div class="flex justify-between items-center">
            <router-link :to="{name: 'Home'}" class="flex flex-col gap-[10px]">
                <img src="../assets/logo-orange.png" width="185" height="30" alt="">
            </router-link>
                <ul class="flex items-center gap-[26px] text-white">
                    <li>
                        <router-link :to="{name: 'Home'}" class="auth">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Genre'}" class="auth">
                            Genre
                        </router-link>
                    </li>
                    <!-- create form search in  center -->
                    <li class="flex items
                    -center gap-[10px] mt-[30px]">
                        <form class="d-flex justify-content-end mb-4 form-search" >
                            <input class="form-control me-2" disabled type="search" placeholder="Search">
                            <button class="btn btn-outline-warning me-3" disabled type="submit">Search</button>
                        </form>
                    </li>
                </ul>
            <!-- <div class="flex items-center gap-[26px]"> -->
                <ul class="flex items-center gap-[26px] text-white">
                    <router-link :to="{name: 'Login'}" class="auth">
                        <li>
                            Login
                        </li>
                    </router-link>
                    <router-link :to="{name: 'Register'}" class="auth">
                        <li>
                            Register
                        </li>
                    </router-link>
                </ul>
            <!-- </div> -->
        </div>
        <!-- /Navbar -->
    </div>
</template>

<script>
    import Home from "../views/Index.vue";
    // import Register from "../views/auth/Register.vue";
    export default {
        name: 'Navbar',
    }
</script>

<style>
    .auth:hover {
        color: #CD5C5C;
    }
</style>