<template>
    <div v-if="user" class="text-white">
        <h3 class="text-white">{{user.name}}</h3>
        <router-link :to="{name: 'genre.index'}" class="text-white">Klik</router-link>
        <button @click="Logout" class="text-white">Logout</button>
    </div>
    <h3 v-if="!user" class="text-white">You not Customer</h3>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                user: null
            }
        },
        async created() {
            // const token = localStorage.getItem('token')
            const token = this.$cookies.get('refreshToken')
            console.log(token)
            // console.log(this.$cookies.get('refreshToken'))
            await axios.get('http://localhost:9000/auth/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log(response)
                    this.user = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        methods:{
            async Logout () {
                try {
                    // const token =localStorage.getItem('token');
                    // console.log(this.$cookies.get('refreshToken'))
                    await axios.delete('http://localhost:9000/auth/logout')
                    .then(response => {
                        console.log(response)
                        this.$cookies.remove('refreshToken')
                        // localStorage.removeItem('token')
                        // this.$router.push({ name: 'Login' })
                    })
                    // console.log('Logout')
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }   
</script>