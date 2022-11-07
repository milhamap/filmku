<template>
    <div class="container">
        <!-- <img :src="'http://localhost:9000/' + image" alt="" class="img-fluid"> -->
        <div class="row">
            <div class="col-2" v-for="film in films" :key="film.id">
                <!-- <div class="card">
                    <img src="../assets/logo.png" alt="" class="card-img-top">
                    <div class="card-body">
                        <span class="card-title">
                            Title
                        </span>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                        </p>
                    </div>
                </div> -->
                <div class="film">
                    <div class="film-img">
                        <img :src="'/images/uploads/' + film.image" alt="" class="img-fluid">
                    </div>
                    <div class="film-body">
                        <span class="film-title text-light">
                            {{ film.title }}
                        </span>
                        <p class="film-text text-light">
                            <!-- date to string -->
                            {{ new Date(film.release_date).toDateString().split(' ')[2] + ' ' + new Date(film.release_date).toDateString().split(' ')[1] + ' ' + new Date(film.release_date).toDateString().split(' ')[3] }}
                            <!-- {{ film.release_date }} -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- {{ films.data }} -->
        <!-- <p>{{films.data}}</p> -->
        <!-- <p v-for="film in films" :key="film.id">{{film}}</p> -->
    </div>
</template>

<script>
    import axios from "axios";
    import { onMounted, ref } from "vue";
    export default {
        setup(){
            // reactive state
            let films = ref([]);
            // let image;
            // console.log(image)
            onMounted(() => {
                // console.log(image);
                // get data from api endpoint
                axios.get('http://localhost:9000/films')
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
                });
            // image = films.value[0].image;
            // image = image.split('..\\frontend\\public\\images\\uploads\\');
            // image = image[1];
            // console.log(image);
            console.log(films);
            return {
                films
            }
        }
    }
    // import { CIcon } from '@coreui/icons-vue';
    // import 'primeicons/primeicons.css';
    // import * as icon from '@coreui/icons';
    // CIcon.style = 'font-size: 1.5rem;';
    // export default {
    //     components: {
    //         CIcon
    //     },
    //     setup() {
    //         return {
    //             icon,
    //         }
    //     }
    // }
</script>

<style>

</style>