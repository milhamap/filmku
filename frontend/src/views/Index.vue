<template>
    <!-- <Navbar /> -->
    <!-- <div class="container my-4">
        <div class="row">
            <div class="col-6"></div>
            <div class="col-6">
                <form class="d-flex justify-content-end mb-4 form-search" @submit.prevent="search()">
                    <input class="form-control me-2" type="search" v-model="transaction.title" placeholder="Search">
                    <button class="btn btn-outline-danger me-3" type="submit">Search</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-2" v-for="film in films" :key="film.id">
                <div class="film">
                    <div class="film-img">
                        <img :src="'/images/uploads/' + film.image" alt="" class="images-film">
                    </div>
                    <div class="film-body">
                        <router-link class="film-title" :to="{name: 'genre.index'}">
                            <span>
                                {{ film.title }}
                            </span>
                        </router-link>
                        <div class="film-genre d-flex mt-1">
                            <p class="mb-0">
                                {{ film.genres.name }} - {{film.duration}}
                            </p>
                        </div>
                        <div class="film-showtimes row mt-1">
                            <p class="mb-0 bg-secondary col-3 mx-1 mb-1 text-center rounded-2">
                                {{ film.showtimes }}
                            </p>
                            <p class="mb-0 bg-secondary col-3 mx-1 mb-1 text-center rounded">
                                {{ film.showtimes }}
                            </p>
                            <p class="mb-0 bg-secondary col-3 mx-1 mb-1 text-center rounded">
                                {{ film.showtimes }}
                            </p>
                            <p class="mb-0 bg-secondary col-3 mx-1 mb-1 text-center rounded">
                                {{ film.showtimes }}
                            </p>
                        </div>
                        <div class="film-rating d-flex mt-1">
                            <i class="pi pi-star-fill"> </i>
                            <p class="mb-0 text-light">{{ film.rating }}</p>
                        </div>
                        <p class="film-date mt-1 text-light">
                            {{ new Date(film.release_date).toDateString().split(' ')[2] + ' ' + new Date(film.release_date).toDateString().split(' ')[1] + ', ' + new Date(film.release_date).toDateString().split(' ')[3] }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <div class="mx-auto max-w-screen hidden lg:block">
        <!-- START: Content -->
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
                            <form class="d-flex justify-content-end mb-4 form-search" @submit.prevent="search()">
                                <input class="form-control me-2" type="search" v-model="transaction.title" placeholder="Search">
                                <button class="btn btn-outline-warning me-3" type="submit">Search</button>
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
        <div class="container overflow-hidden">
            <!-- <div class="row">
                <div class="col-6"></div>
                <div class="col-6">
                    <form class="d-flex justify-content-end mb-4 form-search" @submit.prevent="search()">
                        <input class="form-control me-2" type="search" v-model="transaction.title" placeholder="Search">
                        <button class="btn btn-outline-danger me-3" type="submit">Search</button>
                    </form>
                </div>
            </div> -->
            <div class="py-[70px] flex flex-col gap-[50px]">
                <!-- Featured -->
                <!-- <p class="text-white">{{searchings}}</p> -->
                <div v-if="searchings">
                    <!-- <div class="font-semibold text-[22px] text-white mb-[18px]">On Going</div> -->
                    <div class="grid grid-cols-5 gap-5 xl:gap-12">
                        <div v-for="searching in searchings" :key="searching.id" class="col-span-1 relative overflow-hidden group">
                            <!-- <router-link :to="{name: 'Detail', params: {id: searching.id}}"> -->
                                <img :src="'/images/uploads/' + searching.image" class="object-cover rounded-[30px] w-full h-[300px] w-[240px]" alt="">
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px] z-10 translate-y-0 group-hover:translate-y-[300px] transition ease-in-out duration-500 group-hover:bg-transparent">
                                    <div class="px-7 pb-7">
                                        <div class="font-medium text-xl text-white">{{ searching.title }}</div>
                                        <p class="mb-0 text-white text-base mt-[10px] opacity-60">
                                            {{ new Date(searching.release_date).toDateString().split(' ')[2] + ' ' + new Date(searching.release_date).toDateString().split(' ')[1] + ', ' + new Date(searching.release_date).toDateString().split(' ')[3] }}
                                        </p>
                                    </div>
                                </div>
                            <!-- </router-link> -->
                            <div class="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500">
                                <img src="../../public/images/ic_play.svg" class="" width="80" alt="">
                            </div>
                            <router-link :to="{name: 'Detail', params: {id: searching.random}}" class="inset-0 absolute z-50"></router-link>
                        </div>
                    </div>
                </div>
                <div v-if="films">
                    <div class="font-semibold text-[22px] text-white mb-[18px]">On Going</div>
                    <div class="grid grid-cols-5 gap-5 xl:gap-12">
                        <div v-for="film in films" :key="film.id" class="col-span-1 relative overflow-hidden group">
                            <!-- <router-link :to="{name: 'Detail', params: {id: film.id}}"> -->
                                <img :src="'/images/uploads/' + film.image" class="object-cover rounded-[30px] w-full h-[300px] w-[240px]" alt="">
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px] z-10 translate-y-0 group-hover:translate-y-[300px] transition ease-in-out duration-500 group-hover:bg-transparent">
                                    <div class="px-7 pb-7">
                                        <div class="font-medium text-xl text-white">{{ film.title }}</div>
                                        <p class="mb-0 text-white text-base mt-[10px] opacity-60">
                                            {{ new Date(film.release_date).toDateString().split(' ')[2] + ' ' + new Date(film.release_date).toDateString().split(' ')[1] + ', ' + new Date(film.release_date).toDateString().split(' ')[3] }}
                                        </p>
                                    </div>
                                </div>
                            <!-- </router-link> -->
                            <div class="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500">
                                <img src="../../public/images/ic_play.svg" class="" width="80" alt="">
                            </div>
                            <router-link :to="{name: 'Detail', params: {id: film.random}}" class="inset-0 absolute z-50"></router-link>
                        </div>
                    </div>
                </div>
                <div v-if="comings">
                    <div class="font-semibold text-[22px] text-white mb-[18px]">Coming Soon</div>
                    <div class="grid grid-cols-5 gap-5 xl:gap-12">
                        <div v-for="coming in comings" :key="coming.id" class="col-span-1 relative overflow-hidden group">
                            <!-- <router-link :to="{name: 'Detail', params: {id: coming.id}}"> -->
                                <img :src="'/images/uploads/' + coming.image" class="object-cover rounded-[30px] w-full h-[300px] w-[240px]" alt="">
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px] z-10 translate-y-0 group-hover:translate-y-[300px] transition ease-in-out duration-500 group-hover:bg-transparent">
                                    <div class="px-7 pb-7">
                                        <div class="font-medium text-xl text-white">{{ coming.title }}</div>
                                        <p class="mb-0 text-white text-base mt-[10px] opacity-60">
                                            {{ new Date(coming.release_date).toDateString().split(' ')[2] + ' ' + new Date(coming.release_date).toDateString().split(' ')[1] + ', ' + new Date(coming.release_date).toDateString().split(' ')[3] }}
                                        </p>
                                    </div>
                                </div>
                            <!-- </router-link> -->
                            <div class="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500">
                                <img src="../../public/images/ic_play.svg" class="" width="80" alt="">
                            </div>
                            <router-link :to="{name: 'Detail', params: {id: coming.random}}" class="inset-0 absolute z-50"></router-link>
                        </div>
                    </div>
                </div>
                <!-- /Featured -->
            </div>
        </div>
        <!-- END: Content -->
    </div>

    <div class="mx-auto px-4 w-full md:w-7/12 h-screen block lg:hidden flex">
        <div class="text-white text-2xl text-center leading-snug font-medium my-auto">
            Sorry, this page only supported on 1024px screen or above
        </div>
    </div>
</template>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<script>
    import axios from "axios";
    import { onMounted, ref, reactive } from "vue";
    // import { useRouter } from "vue-router";
    import Navbar from "../components/Navbar.vue";
    export default {
        name: "Home",
        components: {
            Navbar
        },
        setup(){
            let films = ref([]);
            let comings = ref([]);
            let searchings = ref([]);
            //get data with title
            //get data without title
            // const getFilms = async () => {
            //     let response = await axios.get('http://localhost:8000/api/films');
            //     films.value = response.data;
            // }
            onMounted(() => {
                // get data from api endpoint
                axios.get('http://localhost:9000/films/on-going')
                    .then(response => {
                        films.value = response.data.data;
                        // console.log(response.data.data);
                        // console.log(image);
                        // image = image.split('\\').join('/');
                        // image = "http://localhost:9000/" + image;
                        // console.log(films.value[0].image);
                    })
                    .catch(error => {
                        console.log(error.response);
                    })
                    // console.log(image);
                    axios.get('http://localhost:9000/films/coming-soon')
                        .then(response => {
                            comings.value = response.data.data;
                            // console.log(response.data.data);
                            // console.log(image);
                            // image = image.split('\\').join('/');
                            // image = "http://localhost:9000/" + image;
                            // console.log(films.value[0].image);
                        })
                        .catch(error => {
                            console.log(error.response);
                        })
                });
                    // console.log(image);
            let transaction = reactive({
                title: ''
            })
            const search = async () => {
                let response = await axios.get('http://localhost:9000/films?title=' + transaction.title);
                searchings.value = response.data.data;
                console.log(searchings.value.data.genres.name);
            }
            // image = films.value[0].image;
            // image = image.split('..\\frontend\\public\\images\\uploads\\');
            // image = image[1];
            // console.log(image);
            // console.log(filmku);
            return {
                films,
                comings,
                transaction,
                search,
                searchings
            }
        }
    }
</script>

<style>
    .auth:hover {
        color: #CD5C5C;
    }
    .film-title {
        font-size: 1.2rem;
        color: #ffffff;
        font-weight: bold;
        opacity: 0.9;
        text-decoration: none;
    }
    /* color red contras black*/
    .film-title:hover {
        color: #CD5C5C;
        cursor: pointer;
    }
    .film-showtimes {
        font-size: 0.9rem;
        opacity: 0.9;
        color: #ffffff;
    }
    .film-genre {
        font-size: 0.9rem;
        opacity: 0.9;
        color: #ffffff;
    }
    .film-date {
        color: #ffffff;
        opacity: 0.5;
        font-size: 0.8rem;
    }
    .film-img {
        width: 185px;
        height: 277px;
    }
    .film-rating {
        font-size: 1rem;
    }
    .film-rating p {
        font-size: 0.9rem;
        margin-left: 0.5rem;
    }
    .film-rating i {
        color: #f2c94c;
    }
    /* image following div */
    .film-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2rem;
    }
</style>