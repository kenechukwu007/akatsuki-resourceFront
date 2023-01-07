<template>
    <div>
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: "adminLogin",
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username == "kene@afc.com" && this.input.password == "mohawk") {
                    this.$router.push({name:"adminPanel"});
                } else {
                    console.log("The username and / or password is incorrect");
                }
            }
        }
    }
</script>

<style scoped></style>