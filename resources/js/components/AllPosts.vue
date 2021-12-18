<template>
    <b-container class="bv-example-row bv-example-row-flex-cols">
        <h2 class="text-center">Lista wpisów</h2>
        <v-row align="center" v-for="post in posts" :key="post.id">
            <br />
            <b-card
                no-body
                style="max-width: 20rem"
                img-src="https://placekitten.com/380/200"
                img-alt="Image"
                img-top
            >
                <template #header>
                    <h4 class="mb-0">{{ post.title }}</h4>
                </template>

                <b-card-body>
                    <b-card-text>
                        {{ post.description }}
                    </b-card-text>
                </b-card-body>

                <b-card-body>
                    <router-link
                        :to="{
                            name: 'edit',
                            params: { id: post.id },
                        }"
                        class="btn btn-success"
                        >Edytuj</router-link
                    >
                    <button class="btn btn-danger" @click="deletePost(post.id)">
                        Usuń
                    </button>
                </b-card-body>
            </b-card>
        </v-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
        };
    },
    created() {
        this.axios.get("http://localhost:8000/api/posts/").then((response) => {
            this.posts = response.data;
        });
    },
    methods: {
        deletePost(id) {
            this.axios
                .delete(`http://localhost:8000/api/posts/${id}`)
                .then((response) => {
                    let i = this.posts.map((data) => data.id).indexOf(id);
                    this.posts.splice(i, 1);
                });
        },
    },
};
</script>
