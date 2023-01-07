<template>
    <div class="container">
        <div class="row">
            <div class="col-11 text-center pt-4">
                <!-- logo here-->
            </div>
        </div>
        <div class="row">
            <div class="col-11 text-center pt-4">
                <div id="register-con" class="flex-item-border">
                    <h3 class="pt-3 pl-3">Create User Account</h3>
                    <form  @submit="register" class="pt-3 pl-3 pr-4">
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label>First name</label>
                                    <input type="text" class="form-control" v-model="firstName" required />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label>Last name</label>
                                    <input type="text" class="form-control" v-model="lastName" required />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="Username">Username</label>
                            <input type="email" class="form-control" v-model="username" required />
                        </div>
                        <div class="form-group">
                            <label for="Username">Password</label>
                            <input type="text" class="form-control" v-model="password" required />
                        </div>
                        <div class="form-group">
                            <label for="Username ">Confirm Password</label>
                            <input type="text" class="form-control" v-model="verifyPassword" required />
                        </div>
                        <button class="btn btn-secondary" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>


    </div>
</template>


<script>

import axios from 'axios';
import swal from 'sweetalert';

    export default{

        name: "RegisterPage",
        props: ["homeUrl"],

        data() {
            return {

                firstName: null,
                lastName: null,
                password: null,
                username: null,
                verifyPassword: null
            }
        },

        methods: {
            async register(e) {
                e.preventDefault();
                if(this.password === this.verifyPassword){
                    const appUser = {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        username: this.username,
                        password: this.password,
                        verifyPassword: this.verifyPassword
                        
                    
                    };

                    await axios.post(`${this.homeUrl}/user/register`, appUser)
                    .then(()=>{
                        this.$router.replace("/");
                        swal({
                            text: "Account has been created successfully!",
                            icon: "success"
                        });
                    }).catch((err) =>{
                        console.log(err);
                    });
              

                } else {
                    // show error
                    swal({
                        text: "the passwords don't match, try again",
                        icon: "error"
                    });
                }

            },
        },

    };

</script>

<style scoped>
.btn-secondary {
    background-color: black;
}

</style>