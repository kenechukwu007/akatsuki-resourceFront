<template>
    <div class="card w-100 h-100" style="margin-top: 12px">
        <div>
            <img class="card-img-top" :src="category.imageUrl" alt="Card image cap" />
        </div>
        <div class="card-body">
            <router-link :to="{name: 'CategoryDetail', params: {id: category.id} }">
                <h5 class="card-title">{{category.categoryName}}</h5>

            </router-link>
            <p class="card-text">
                {{category.description}}
            </p>
            <!-- <router-link :to="{name: 'EditCategory', params:{id: category.id}}">
                <button class="btn btn-secondary">Edit</button>
            </router-link> -->
            
        </div>
    </div>
</template>

<script>

export default {
    name: "CateBox",
    props: ["category"],
    methods: {},
}

</script>