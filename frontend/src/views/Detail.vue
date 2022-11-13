<template>
    <div class="mx-auto max-w-screen hidden lg:block">
        <Navbar/>
    </div>
    <div class="mx-auto max-w-screen flex flex-row">
        <!-- START: Content -->
        <div class="pl-[50px] overflow-hidden w-4/6">
            <div class="py-[70px] flex flex-col gap-[70px]">
                <!-- Navbar -->
                
                <!-- /Navbar -->

                <!-- Details -->
                <div class="flex gap-14 items-start">
                    <router-link :to="{name: 'Home'}">
                        <img src="../../public/images/ic_arrow-left-normal.svg" alt="">
                    </router-link>
                    <div class="flex flex-col gap-10">
                        <!-- Thumbnail -->
                        <!-- <p class="text-white">
                            {{films.actors}}
                        </p> -->
                        <div class="w-full relative overflow-hidden group">
                            <!-- <p class="text-white">
                                {{films}}
                            </p> -->
                            <img :src="'/images/uploads/' + films.film.image" class="object-cover rounded-[30px] w-[1200px] h-[550px]" alt="">
                            <!-- <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <img src="../../public/images/ic_play.svg" width="80" alt="">
                            </div> -->
                            <a href="#" class="inset-0 absolute z-50"></a>
                        </div>

                        <!-- Judul & Rating -->
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-warning">
                                    Harga tiket masuk {{formatRupiah(films.film.price)}} di {{films.film.users.name}}
                                </div>
                                <div class="text-white font-medium text-[28px] capitalize display-flex">
                                    {{films.film.title}} 
                                </div>
                                <p class="text-white opacity-80 text-[14px] mt-[6px]">
                                    <div class="flex">
                                        <p>Waktu Tayang:</p>
                                        <p class="text-warning ml-[10px]">{{formatShowtime(films.film.showtimes)}}</p>
                                    </div>
                                </p>
                                <p class="text-white opacity-80 text-[14px] mt-[6px]">
                                    <div class="flex">
                                        <p>Actor:</p>
                                        <p class="text-warning ml-[10px]">{{formatActor(films.film.actors)}}</p>
                                    </div>
                                </p>
                                <p class="text-white opacity-60 text-base mt-[6px]">
                                    {{films.film.genres.name}} - Release at {{ new Date(films.film.release_date).toDateString().split(' ')[2] + ' ' + new Date(films.film.release_date).toDateString().split(' ')[1] + ' ' + new Date(films.film.release_date).toDateString().split(' ')[3] }}
                                </p>
                            </div>
                            <div class="inline-flex items-center gap-[6px]">
                                <div v-if="films.rating == 0">
                                    <i class="pi pi-star text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                </div>
                                <div v-if="films.rating > 0 && films.rating <= 1">
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                </div>
                                <div v-if="films.rating > 1 && films.rating <= 2">
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                </div>
                                <div v-if="films.rating > 2 && films.rating <= 3">
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                </div>
                                <div v-if="films.rating > 3 && films.rating <= 4">
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star text-warning"></i>
                                </div>
                                <div v-if="films.rating > 4 && films.rating <= 5">
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star-fill text-warning"></i>
                                    <i class="pi pi-star-fill text-warning"></i>
                                </div>
                                <div class="text-base text-white ml-[6px]">
                                    {{formatRating(films.rating)}}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- ./Details -->

            </div>
        </div>
        <!-- END: Content -->
        <aside class="w-2/6 bg-stream-dark p-5">
            <!-- Synopsis -->
            <div class="py-[50px] text-white">
                <div class="text-xl ">About</div>
                <p class="max-w-[700px] mt-[10px] text-stream-gray text-base leading-8">
                    {{films.film.description}}
                </p>
                <!-- <p class="max-w-[700px] mt-[10px] text-stream-gray text-base leading-8">
                    Georgia mengambil gambar secara berurutan dengan Infinity War, dan berakhir pada Januari
                    2018. Pembuatan film tambahan dilakukan di wilayah Metro dan Pusat Kota Atlanta dan New
                    York. Judul resmi terungkap pada Desember 2018.
                </p> -->
            </div>
        </aside>
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
    import { ref} from "vue"
    import { useRoute } from "vue-router"
    import Navbar from "../components/Navbar.vue";
    // import Rating_0 from '/rating/rating0'

    export default {
        components: {
            Navbar
        },
        // get data detail film with
        data(){
            return {
                films: ref(null)
            }
        },
        beforeCreate(){
            const route = useRoute()
            const random = route.params.id;
            // console.log(random);
            axios.get('http://localhost:9000/films/' + route.params.id)
                .then((response) => {
                    this.films = response.data.data
                    console.log(this.films)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        setup(){
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
                    actors += item.actor + ', '
                })
                return actors
            }
            const formatShowtime = (value) => {
                let showtimes = '';
                let temp = [];
                value.map((item) => {
                    temp = item.showtimes.split(':');
                    showtimes += temp[0] + ':' + temp[1] + ', ' 
                    console.log(item.showtimes.split(':'))
                    // showtimes += item.showtimes + ', '
                })
                return showtimes
            }
            return {
                formatRupiah,
                formatRating,
                formatActor,
                formatShowtime
            }
        }
        // create format rupiah
        // methods: {
        //     formatRupiah: function (value) {
        //         var number_string = value.toString(),
        //             sisa = number_string.length % 3,
        //             rupiah = number_string.substr(0, sisa),
        //             ribuan = number_string.substr(sisa).match(/\d{3}/g);
        //         if (ribuan) {
        //             separator = sisa ? "." : "";
        //             rupiah += separator + ribuan.join(".");
        //         }
        //         return rupiah;
        //     },
        // },

        // setup() {
        //     let films = ref();
        //     const route = useRoute()
        //     axios.get('http://localhost:9000/films/' + route.params.id)
        //         .then((response) => {
        //             // console.log(response.data.data)
        //             films.value = response.data.data
        //             // console.log(films.image)
        //         })
        //         .catch((error) => {
        //             console.log(error.response)
        //         })
        //     console.log(films)
        //     return {
        //         films
        //     }
        // },
        // beforeCreate(() => {
        // });
    }
</script>