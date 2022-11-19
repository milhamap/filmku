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
                    <router-link :to="{name: 'Dashboard.History'}" class="side-link flex items-center font-normal text-stream-gray text-base w-full p-3 rounded-2xl gap-[10px] transition-all text-white">
                        <i class="pi pi-history fs-5"></i>
                        History
                    </router-link>
                    <router-link :to="{name: 'Dashboard.Favorite'}" class="side-link flex items-center font-normal text-stream-gray text-base w-full p-3 rounded-2xl gap-[10px] transition-all text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        My Favorites
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
                            My Film
                        </div>
                        <p class="mb-0 text-stream-gray text-base">Our selected movies for your mood</p>
                    </div>
                    <div class="flex items-center gap-[26px]">
                        <span class="text-white text-base">
                            Welcome, <span class="font-bold">{{user.name}}</span>
                        </span>
                        <!-- user avatar -->
                        <div class="collapsible-dropdown flex flex-col gap-2 relative">
                            <button
                                class="outline outline-2 outline-stream-gray p-[6px] rounded-full w-[60px] dropdown-button"
                                data-target="#dropdown-stream">
                                <img src="../../../public/images/photo.webp" class="rounded-full object-cover w-full"
                                    alt="stream" />
                            </button>
                            <div class="bg-white rounded-2xl text-stream-dark font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                                id="dropdown-stream">
                                <a href="dashboard.html" class="transition-all hover:bg-sky-100 p-3">Watch</a>
                                <a href="#!" class="transition-all hover:bg-sky-100 p-3">Settings</a>
                                <a @click="logout" class="transition-all hover:bg-sky-100 p-3 cursor-pointer">Sign Out</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Navbar -->

                <!-- Featured -->
                <div>
                    <div class="font-semibold flex justify-between text-[22px] text-white mb-[18px]">
                        <div>My Films</div>
                        <router-link :to="{name: 'BioskopDashboard.Create'}" class="btn btn-outline-warning">Add Film</router-link>
                    </div>
                    <div class="grid grid-cols-2 gap-5 xl:gap-12">
                        <div v-for="movie in movies.film" :key="movie.id" class="col-span-1 relative overflow-hidden group cursor-pointer">
                            <img :src="'/images/uploads/' + movie.image" class="object-cover rounded-[30px] w-full h-[320px]" alt="">
                            <div
                                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px] z-10 translate-y-0 group-hover:translate-y-[300px] transition ease-in-out duration-500 group-hover:bg-transparent">
                                <div class="px-7 pb-7">
                                    <div class="font-medium text-xl text-white">{{movie.title}}</div>
                                    <p class="mb-0 text-white opacity-60 text-base mt-[10px]">
                                        {{ new Date(movie.release_date).toDateString().split(' ')[2] + ' ' + new Date(movie.release_date).toDateString().split(' ')[1] + ', ' + new Date(movie.release_date).toDateString().split(' ')[3] }}
                                    </p>
                                </div>
                            </div>
                            <div class="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500">
                                <img src="../../../public/images/ic_play.svg" class="" width="80" alt="">
                            </div>
                            <router-link :to="{name: 'BioskopDashboard.Detail', params: {id: movie.random}}" class="inset-0 absolute z-50"></router-link>
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
    import axios from "axios"
    import { ref } from "vue"
    import { useToast } from "vue-toastification";
    export default {
        data(){
            return {
                user: ref(null),
                movies: ref([])
            }
        },
        setup(){
            const toast = useToast();
            return {
                toast
            }
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
            axios.get('http://localhost:9000/films/bioskop', {
                headers: {
                    Authorization: `Bearer ${this.$cookies.get("token")}`
                }
            })
            .then((response) => {
                this.movies = response.data.data
                // console.log(this.movies.film)
            })
            .catch((error) => {
                console.log(error)
            })
        },
        beforeCreate() {
            axios.get("http://localhost:9000/auth/", {
                headers: {
                    Authorization: `Bearer ${this.$cookies.get("token")}`
                }
            }).then(res => {
                this.user = res.data.data
                // console.log(this.user);
            })
            .catch(err => {
                this.toast.error("Please login first");
                console.log(err);
            })
        },
        methods: {
            async logout() {
                await axios.delete('http://localhost:9000/auth/logout')
                .then(response => {
                    // use toast and refresh page
                    this.toast.success("Logout Success");
                    // console.log(response)
                    this.$cookies.remove('token')
                    this.$router.push({ name: 'Home' })
                    // localStorage.removeItem('token')
                    // this.$router.push({ name: 'Login' })
                })
                .catch(error => {
                    this.toast.error(error.response.data.message);
                    console.log(error)
                })
            }
        }
    }
</script>