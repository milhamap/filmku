<template>
    <div class="mx-auto max-w-screen hidden lg:block">
        <!-- START: Sidebar -->
        <aside class="fixed z-50 w-[360px] bg-stream-dark">
            <div class="flex flex-col p-12 border-r border-softpur overflow-y-hidden h-screen">
                <a href="/">
                    <img src="../../../public/images/stream.svg" alt="">
                </a>
                <div class="links flex flex-col mt-16 gap-2">
                    <router-link :to="{name: 'Bioskop.Dashboard'}" class="side-link active bg-sky-800 font-semibold text-white flex items-center w-full p-3 rounded-2xl gap-[10px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 17L12 22L22 17" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        My Film
                    </router-link>
                    <router-link :to="{name: 'Transaction.Customer'}" class="side-link flex items-center font-normal text-stream-gray text-base w-full p-3 rounded-2xl gap-[10px] transition-all text-white">
                        <i class="pi pi-history fs-5"></i>
                        Transaction Customer
                    </router-link>
                    <router-link :to="{name: 'Room.Bioskop'}" class="side-link flex items-center font-normal text-stream-gray text-base w-full p-3 rounded-2xl gap-[10px] transition-all text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Rooms
                        <span
                            class="bg-[#6EC2DF] text-[#1E5062] text-base rounded-full font-semibold text-center px-[7px] py-[1px]">6</span>
                    </router-link>
                    <a href="#!" class="side-link flex items-center font-normal text-stream-gray text-base w-full p-3 rounded-2xl gap-[10px] transition-all text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 7L16 12L23 17V7Z" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Playlist
                    </a>
                    <a href="#!" class="side-link flex items-center font-normal text-stream-gray text-base w-full p-3 rounded-2xl gap-[10px] transition-all text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12V22H4V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 7H2V12H22V7Z" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 22V7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Your Gifts
                    </a>
                    <div class="flex border-t border-softpur"></div>
                    <a href="#!" class="side-link flex items-center font-normal text-stream-gray text-base w-full p-3 rounded-2xl gap-[10px] transition-all text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 10H23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Subscription
                    </a>
                    <a href="#!" class="side-link flex items-center font-normal text-stream-gray text-base w-full p-3 rounded-2xl gap-[10px] transition-all text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Account Settings
                    </a>
                    <button @click="logout" class="side-link flex items-center font-normal text-stream-gray text-base w-full p-3 rounded-2xl gap-[10px] transition-all text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.36 6.64001C19.6184 7.8988 20.4753 9.50246 20.8223 11.2482C21.1693 12.994 20.9909 14.8034 20.3096 16.4478C19.6284 18.0921 18.4748 19.4976 16.9948 20.4864C15.5148 21.4752 13.7749 22.0029 11.995 22.0029C10.2151 22.0029 8.47515 21.4752 6.99517 20.4864C5.51519 19.4976 4.36164 18.0921 3.68036 16.4478C2.99909 14.8034 2.82069 12.994 3.16772 11.2482C3.51475 9.50246 4.37162 7.8988 5.63 6.64001"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 2V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Log Out
                    </button>
                </div>
            </div>
        </aside>
        <!-- END: Sidebar -->

        <!-- START: Content -->
        <div class="ml-[410px] pr-[50px] overflow-hidden">
            <div class="py-[70px] flex flex-col gap-[50px]">
                <!-- Navbar -->
                <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-[10px]">
                        <div class="font-bold text-[32px] text-white">
                            Watch Today
                        </div>
                        <p class="mb-0 text-stream-gray text-base">Our selected movies for your mood</p>
                    </div>
                    <div class="flex items-center gap-[26px]">
                        <span class="text-white text-base">Welcome, {{user.name}}</span>
                        <!-- user avatar -->
                        <div class="collapsible-dropdown flex flex-col gap-2 relative">
                            <a href="#!"
                                class="outline outline-2 outline-stream-gray p-[6px] rounded-full w-[60px] dropdown-button"
                                data-target="#dropdown-stream">
                                <img src="../../../public/images/photo.webp" class="rounded-full object-cover w-full"
                                    alt="stream" />
                            </a>
                            <div class="bg-white rounded-2xl text-stream-dark font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                                id="dropdown-stream">
                                <a href="#" class="transition-all hover:bg-sky-100 p-3">My Film</a>
                                <a href="#!" class="transition-all hover:bg-sky-100 p-3">Settings</a>
                                <a @click="logout" class="transition-all hover:bg-sky-100 p-3 cursor-pointer">Sign Out</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Navbar -->

                <!-- Details -->
                <div class="flex gap-14 items-start">
                    <!-- <a href="#"> -->
                    <router-link :to="{name: 'Bioskop.Dashboard'}">
                        <img src="../../../public/images/ic_arrow-left-normal.svg" alt="">
                    </router-link>
                    <!-- </a> -->
                    <div class="flex flex-col gap-10">
                        <!-- Thumbnail -->
                        <div class="w-full relative overflow-hidden group">
                            <img :src="'/images/uploads/' + movie.film.image" class="object-cover rounded-[30px] w-[1200px] h-[530px]" alt="">
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <img src="../../../public/images/ic_play.svg" width="80" alt="">
                            </div>
                            <a href="#" class="inset-0 absolute z-50"></a>
                        </div>

                        <!-- Judul & Rating -->
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-warning">
                                    Harga tiket masuk {{formatRupiah(movie.film.price)}} di {{movie.film.users.name}}
                                </div>
                                <div class="text-white font-medium text-[28px] capitalize display-flex">
                                    {{movie.film.title}} 
                                </div>
                                <p class="text-white opacity-80 text-[14px] mt-[6px]">
                                    <div class="flex">
                                        <p>Waktu Tayang:</p>
                                        <p class="text-warning ml-[10px]">{{formatShowtime(movie.film.showtimes)}}</p>
                                    </div>
                                </p>
                                <p class="text-white opacity-80 text-[14px] mt-[6px]">
                                    <div class="flex">
                                        <p>Actor:</p>
                                        <p class="text-warning ml-[10px]">{{formatActor(movie.film.actors)}}</p>
                                    </div>
                                </p>
                                <p class="text-white opacity-60 text-base mt-[6px]">
                                    {{movie.film.genres.name}} - Release at {{ new Date(movie.film.release_date).toDateString().split(' ')[2] + ' ' + new Date(movie.film.release_date).toDateString().split(' ')[1] + ' ' + new Date(movie.film.release_date).toDateString().split(' ')[3] }} - {{ new Date(movie.film.expire_date).toDateString().split(' ')[2] + ' ' + new Date(movie.film.expire_date).toDateString().split(' ')[1] + ' ' + new Date(movie.film.expire_date).toDateString().split(' ')[3] }}
                                </p>
                            </div>
                            <div class="inline-flex items-center gap-[6px]">
                                <div class="display-block">
                                    <div class="flex">
                                        <div v-if="movie.rating == 0">
                                            <i class="pi pi-star text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                        </div>
                                        <div v-if="movie.rating > 0 && movie.rating <= 1">
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                        </div>
                                        <div v-if="movie.rating > 1 && movie.rating <= 2">
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                        </div>
                                        <div v-if="movie.rating > 2 && movie.rating <= 3">
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                        </div>
                                        <div v-if="movie.rating > 3 && movie.rating <= 4">
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star text-warning"></i>
                                        </div>
                                        <div v-if="movie.rating > 4 && movie.rating <= 5">
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star-fill text-warning"></i>
                                            <i class="pi pi-star-fill text-warning"></i>
                                        </div>
                                        <div class="text-base text-white ml-[6px]">
                                            {{formatRating(movie.rating)}}
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <!-- <router-link :to="{name: 'Dashboard'}"> -->
                                            <button class="btn btn-outline-warning show-modal">Edit Film!</button>

                                            <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden">
                                                <!-- modal -->
                                                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                                                    <!-- Modal content -->
                                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                        <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white close-modal">
                                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                            <span class="sr-only">Close modal</span>
                                                        </button>
                                                        <div class="py-6 px-6 lg:px-8">
                                                            <form @submit.prevent="updateMovie">
                                                                <!-- <span class="text-dark">{{movie.film.title}}</span> -->
                                                                <div class="flex flex-col">
                                                                    <label class="text-dark" for="title">Title</label>
                                                                    <input type="text" id="title" class="border border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:border-indigo-500" v-model="title">
                                                                </div>
                                                                <div class="flex flex-col">
                                                                    <label class="text-dark" for="description">Description</label>
                                                                    <input type="text" id="description" class="border border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:border-indigo-500" v-model="description">
                                                                </div>
                                                                <div class="row">
                                                                    <div class="flex flex-col col-6">
                                                                        <label class="text-dark" for="price">Price</label>
                                                                        <input type="number" id="price" class="border border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:border-indigo-500" v-model="price">
                                                                    </div>
                                                                    <div class="flex flex-col col-6">
                                                                        <label class="text-dark" for="duration">Duration</label>
                                                                        <input type="number" id="duration" class="border border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:border-indigo-500" v-model="duration">
                                                                    </div>
                                                                    <div class="flex flex-col col-6">
                                                                        <label class="text-dark" for="showtimes">Showtimes</label>
                                                                        <input type="time" id="showtimes" class="border border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:border-indigo-500" v-model="showtimes">
                                                                    </div>
                                                                    <div class="flex flex-col col-6">
                                                                        <label class="text-dark" for="genre_id">Genre</label>
                                                                        <select v-model="genre_id" id="genre_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 font-bold text-center text-uppercase block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1">
                                                                            <!-- <option selected>movie.film.genres.name</option> -->
                                                                            <option v-for="genre in genres" :key="genre.id" v-bind:value="genre.id">{{genre.name}}</option>
                                                                        </select>
                                                                    </div>
                                                                    <!-- <div class="flex flex-col col-6">
                                                                        <label class="text-dark" for="room_name">Rooms</label>
                                                                        <select v-model="room_name" id="room_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 font-bold text-center text-uppercase block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1">
                                                                            <option v-for="room in rooms" :key="room.id" v-bind:value="room.name">{{room.name}}</option>
                                                                        </select>
                                                                    </div> -->
                                                                    <!-- <div class="flex flex-col col-6">
                                                                        <label class="text-dark" for="actors">Actors</label>
                                                                        <input type="text" id="actors" class="border border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:border-indigo-500" v-model="actors">
                                                                    </div> -->
                                                                    <div class="flex flex-col col-6">
                                                                        <label class="text-dark" for="release_date">Release Date</label>
                                                                        <input v-model="release_date" id="release_date" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
                                                                    </div>
                                                                    <div class="flex flex-col col-6">
                                                                        <label class="text-dark" for="expire_date">Expire Date</label>
                                                                        <input v-model="expire_date" id="expire_date" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
                                                                    </div>
                                                                </div>
                                                                <button class="w-25 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mt-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 checkout">Update</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <!-- </router-link> -->
                                    </div>
                                    <div class="mt-2">
                                        <button class="btn btn-outline-danger" @click="deleteMovie(movie.film.random)">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Synopsis -->
                        <div>
                            <div class="text-xl text-white">About</div>
                            <p class="max-w-[700px] mt-[10px] text-white text-base leading-8">
                                {{movie.film.description}}
                            </p> 
                        </div>
                    </div>
                </div>
                <!-- ./Details -->

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

<!-- <style src="vue-multiselect/dist/vue-multiselect.min.css"></style> -->

<script>
// import Multiselect from 'vue-multiselect'
import axios from "axios"
import { ref} from "vue"
import { useRoute } from "vue-router"
import { useToast } from "vue-toastification"
    export default {
        data() {
            return {
                user: ref(null),
                movie: ref(null),
                forms: ref(null),
                selected: ref(null),
                favorites: ref([]),
                // rooms: ref([]),
                // room_name: '',
                genre_id: '',
                showtimes: '',
                duration: '',
                booking_date: '',
                genres: ref([])
                // range: {
                //     start: new Date(2022, 11, 5),
                //     end: new Date(2022, 11, 16),
                // }
            }
        },
        setup() {
            // const route = useRoute()
            const toast = useToast()
            return { toast }
        },
        mounted() {
            $(document).ready(function () {
                // toggle navbar mobile
                $(".mobile-menu-button").each(function (_, navToggler) {
                    var target = $(navToggler).data("target");
                    $(navToggler).on("click", function () {
                        $(target).animate({
                            height: "toggle",
                        })
                    })
                })
                // user avatar dropdown
                var dd_btn = $(".dropdown-button")
                var dd_stream = $("#dropdown-stream")
                dd_btn.click(function () {
                    dd_btn.each(function () {
                        if (dd_stream.hasClass("hidden")) {
                            dd_stream.removeClass("hidden").addClass("block");
                        } else if (dd_stream.hasClass("block")) {
                            dd_stream.removeClass("block").addClass("hidden");
                        }
                    })
                })
            })
            axios.get('http://localhost:9000/genres', {
                headers: {
                    Authorization: `Bearer ${this.$cookies.get('token')}`
                }
            })
            .then((response) => {
                this.genres = response.data
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
            // const datepicker = document.getElementById('datetime');
            // new DateRangePicker(datepicker)
            // axios.get('http://localhost:9000/rooms/', {
            //     headers: {
            //         Authorization: `Bearer ${this.$cookies.get("token")}`
            //     }
            // })
            // .then(res => {
            //     this.rooms = res.data.data;
            //     // console.log(res.data.data);
            // })
            // .catch(err => {
            //     console.log(err);
            // })
            const modal = document.querySelector(".modal");

            const showModal = document.querySelector(".show-modal")
            const closeModal = document.querySelector(".close-modal")
            const checkout = document.querySelector(".checkout")

            showModal.addEventListener("click", function () {
                modal.classList.remove("hidden");
            })
            closeModal.addEventListener("click", function () {
                modal.classList.add("hidden");
            })
            // checkout.addEventListener("click", function () {
            //     modal.classList.add("hidden");
            // })
            },
        beforeCreate() {
            axios.get('http://localhost:9000/transactions/' + this.$route.params.id, {
                headers: {
                    'Authorization': 'Bearer ' + this.$cookies.get('token')
                }
            })
                .then(response => {
                    this.forms = response.data.data
                    // console.log(response.data.data)
                })
                .catch(error => {
                    console.log(error)
                })
            axios.get("http://localhost:9000/auth/", {
                headers: {
                    Authorization: `Bearer ${this.$cookies.get("token")}`
                }
            }).then(res => {
                this.user = res.data.data
                // console.log(this.user);
            })
            .catch(err => {
                console.log(err);
            })
            const route = useRoute()
            axios.get('http://localhost:9000/films/' + route.params.id)
                .then((response) => {
                    this.movie = response.data.data
                    this.duration = this.formatDuration(this.movie.film.duration)
                    this.title = this.movie.film.title
                    this.description = this.movie.film.description
                    this.price = this.movie.film.price
                    this.actors = this.formatActor(this.movie.film.actors)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        setup() {
            // create format rupiah
            const formatRupiah = (value) => {
                let val = (value/1).toFixed(0).replace('.', ',')
                return 'Rp. ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
            // mengambil satu angka dibelakang koma
            const formatRating = (value) => {
                let val = (value/1).toFixed(1).replace('.', ',')
                return val.toString()
            }
            const formatActor = (value) => {
                let actors = '';
                value.map((item) => {
                    actors += item.name + ', '
                })
                return actors
            }
            const formatShowtime = (value) => {
                let showtimes = '';
                let temp = [];
                value.map((item) => {
                    temp = item.showtimes.split(':');
                    showtimes += temp[0] + ':' + temp[1] + ', ' 
                    // console.log(item.showtimes.split(':'))
                    // showtimes += item.showtimes + ', '
                })
                return showtimes
            }
            const formatDuration = (value) => {
                let showtime = [];
                showtime = value.split(' ')
                return showtime[0]
            }
            const route = useRoute()
            const id = route.params.id
            console.log(id)
            return {
                formatRupiah,
                formatRating,
                formatActor,
                formatShowtime,
                formatDuration
            }
        },
        methods: {
            
            async logout() {
                const toast = useToast()
                await axios.delete('http://localhost:9000/auth/logout')
                .then(response => {
                    // console.log(response)
                    toast.success("Logout Success")
                    this.$cookies.remove('token')
                    this.$router.push({ name: 'Home' })
                    // localStorage.removeItem('token')
                    // this.$router.push({ name: 'Login' })
                })
                .catch(error => {
                    console.log(error)
                })
            },
            async deleteMovie (random) {
                const toast = useToast()
                await axios.delete('http://localhost:9000/films/' + random, {
                    headers: {
                        Authorization: `Bearer ${this.$cookies.get("token")}`
                    }
                })
                .then(response => {
                    toast.success('Film Berhasil Dihapus')
                    this.$router.push({ name: 'Bioskop.Dashboard' })
                })
                .catch(error => {
                    console.log(error)
                })
            },
            async updateMovie () {
                const toast = useToast()
                // console.log(this.$route.params.id)
                await axios.put('http://localhost:9000/films/' + this.$route.params.id, {
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    duration: this.duration,
                    // actors: this.actors,
                    genre_id: this.genre_id,
                    showtimes: this.showtimes,
                    expire_date: this.expire_date,
                    // rooms: this.room_name,
                    release_date: this.release_date
                }, {
                    headers: {
                        Authorization: `Bearer ${this.$cookies.get("token")}`
                    }
                })
                .then(response => {
                    toast.success('Film Berhasil Diubah')
                    this.$router.push({ name: 'Bioskop.Dashboard' })
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>