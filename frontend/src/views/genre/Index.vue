<template>
    <div v-if="genre" class="text-white">
        <h3 class="text-white">{{genre.name}}</h3>
        <router-link :to="{name: 'Genre'}" class="text-white">Klik</router-link>
        <br>
        <button @click="handleLogout" class="text-white">Logout</button>
    </div>
    <h3 v-if="!genre" class="text-white">You not Customer</h3>
</template>

<script>
    import axios from 'axios'
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    export default {
        data() {
            return {
                genre: null
            }
        },
        async created() {
            const token = localStorage.getItem('token')
            // console.log(token)
            await axios.get('http://localhost:9000/genres/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log(response.data)
                    this.genre = response.data[0]
                })
                .catch(error => {
                    console.log(error)
                })
        },
        methods:{
            handleLogout(){
                // const refreshToken = this.$cookies.get('refreshToken')
                console.log(this.$cookies.get('refreshToken'))
                // localStorage.removeItem('token')
                // this.$router.push({ name: 'Login' })
            }
        }
    }   
</script>