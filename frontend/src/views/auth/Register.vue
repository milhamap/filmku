<template>
    <!-- <Navbar /> -->
    <div class="relative">
        <div class="lg:block fixed sidebar-img">
            <img src="../../../public/images/saga.jpg" width="400" class="image-side" alt="stream" />
        </div>
    </div>

    <div class="grid md:grid-cols-12 font-poppins relative pb-20 pt-8 mx-auto max-w-screen overflow-hidden">

        <!-- Ornament -->
        <span class="fixed -z-10 top-0">
            <img src="../../../public/images/pricing_ornament.svg" class="h-screen w-screen" alt="stream" />
        </span>
        <!-- ./ -->

        <div class="col-span-12 col-start-1 lg:col-start-2 xl:col-start-4">
            <div class="pt-[30px] relative">
                <!-- Logo -->
                <router-link :to="{name: 'Home'}" class="text-white ml-[70px]">
                    <i class="pi pi-backward fs-5"></i>
                </router-link>                
                <div class=" flex flex-row justify-center items-center">
                    <a href="/" class="block">
                        <img src="../../assets/logo-orange.png" width="240" height="45" alt="stream" />
                    </a>
                </div>

                <div class="pt-[65px] flex flex-col items-center gap-5 px-3">
                    <p class="text-sky-300 text-base font-semibold">
                        START SIGN UP
                    </p>
                    <!-- <div class="font-bold text-white text-4xl lg:text-[45px] text-center capitalize leading-snug">
                        Order Movies
                    </div> -->

                    <!-- Form login -->
                    <section class="w-11/12 max-w-[460px]">
                        <form @submit.prevent="handlerRegister" class="mt-[70px] flex flex-col bg-white p-[30px] rounded-2xl gap-6">
                            <div class="row">
                                <!-- <p v-if="message" class="text-dark">{{message}}</p> -->
                                <div class="col-12 form-input flex flex-col gap-3 mt-2">
                                    <label for="name" class="text-base font-medium text-stream-dark">Name</label>
                                    <input type="text" v-model="name"
                                        class="rounded-full py-3 pr-3 pl-6 text-stream-dark placeholder:text-stream-gray placeholder:font-normal font-medium outline outline-stream-gray outline-1 text-base focus:outline-indigo-600 input-stream"
                                        placeholder="Your complete name" />
                                </div>
                                <div class="col-12 form-input flex flex-col gap-3 mt-2">
                                    <label for="phone" class="text-base font-medium text-stream-dark">Phone</label>
                                    <input type="text" v-model="phone"
                                        class="rounded-full py-3 pr-3 pl-6 text-stream-dark placeholder:text-stream-gray placeholder:font-normal font-medium outline outline-stream-gray outline-1 text-base focus:outline-indigo-600 input-stream"
                                        placeholder="Your complete name" />
                                </div>
                                <div class="col-12 form-input flex flex-col gap-3 mt-2">
                                    <label for="email" class="text-base font-medium text-stream-dark">Email Address</label>
                                    <input type="email" v-model="email"
                                        class="rounded-full py-3 pr-3 pl-6 text-stream-dark placeholder:text-stream-gray placeholder:font-normal font-medium outline outline-stream-gray outline-1 text-base focus:outline-indigo-600 input-stream"
                                        placeholder="Your email address" />
                                </div>
                                <div class="col-12 form-input flex flex-col gap-3 mt-2">
                                    <label for="password" class="text-base font-medium text-stream-dark">Password</label>
                                    <input type="password" v-model="password"
                                        class="rounded-full py-3 pr-3 pl-6 text-stream-dark placeholder:text-stream-gray placeholder:font-normal font-medium outline-stream-gray outline outline-1 text-base focus:outline-indigo-600 input-stream"
                                        placeholder="Your password" />
                                </div>
                                <div class="col-12 form-input flex flex-col gap-3 mt-2">
                                    <label for="password" class="text-base font-medium text-stream-dark">Confirm Password</label>
                                    <input type="password" v-model="confirmPassword"
                                        class="rounded-full py-3 pr-3 pl-6 text-stream-dark placeholder:text-stream-gray placeholder:font-normal font-medium outline-stream-gray outline outline-1 text-base focus:outline-indigo-600 input-stream"
                                        placeholder="Your password" />
                                </div>
                                <button type="submit" class="bg-indigo-600 rounded-full py-3 mt-4 text-center hover:bg-indigo-300">
                                    <span class="font-semibold text-white text-base">Register</span>
                                </button>
                                <router-link :to="{name: 'Login'}" class="bg-indigo-600 rounded-full py-3 mt-4 text-center hover:bg-indigo-300">
                                    <span class="font-semibold text-white text-base">Login</span>
                                </router-link>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
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
    import { useToast } from "vue-toastification";
    export default {
        data() {
            return {
                name: "",
                phone: "",
                email: "",
                password: "",
                confirmPassword: "",
            }
        },
        setup() {
            const toast = useToast();
            return { toast };
        },
        beforeCreate() {
            if (this.$cookies.isKey("token"))
                this.$router.go(-1);
        },
        methods: {
            async handlerRegister() {
                // let message = ""
                await axios.post("http://localhost:9000/auth/register", {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                })
                    .then((response) => {
                        this.toast.success(response.data.message)
                        // message = response.data.message
                        this.$router.push({ name: "Login" })
                    })
                    .catch((error) => {
                        this.toast.error(error.response.data.message)
                        this.$router.push({ name: "Register" })
                    })
                return message
                // console.log(message)
            }
        }
    }
</script>