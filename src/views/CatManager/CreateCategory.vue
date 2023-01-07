<template>

    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="pt-3">Create a category here</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
            <form>
                <div class="form-group">
                    <label>Name of category</label>
                    <input type="text"  class="form-control" v-model="categoryName" />
                </div>

                <div class="form-group">
                    <label>Description of category</label>
                    <input type="text" class="form-control" v-model="description" />
                </div>

                <div class="form-group">
                    <label>Category Images</label>
                    <input type="text" class="form-control" v-model="imageUrl" />
                </div>

                <button type="button" class="btn btn-secondary" @click="createCategory">Submit</button>

            </form>
            <div class="col-3"></div>

            </div>
           
        </div>
    </div>
</template>

<script>
const axios = require("axios");
const sweetalert = require("sweetalert");

export default {
    name: "CreateCategory",

   data() {
        return {
            categoryName: "",
            description: "",
            imageUrl: "",
        };
   },
   methods: {
        createCategory() {
            console.log(this.name, this.description);
            const newCate = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl
            };

            const homeUrl = "http://localhost:8081";

            axios({
                method: 'post',
                url: `${homeUrl}/category/create`,
                data: JSON.stringify(newCate),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(() =>{
                sweetalert({
                    text: "A category has been created successfully",
                    icon: "success"
                })
            })
            .catch((err) =>{
                console.log(err);
            });
        },
   },
};

</script>

<style scoped></style>