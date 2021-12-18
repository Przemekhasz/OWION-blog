<template>
    <b-container class="bv-example-row bv-example-row-flex-cols">
        <h3 class="text-center">Edytuj wpis</h3>
        <v-row align="center">
            <form @submit.prevent="updatePost">
                <div class="form-group">
                    <label>Tytuł</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="post.title"
                    />
                </div>
                <div class="form-group">
                    <label>Opis</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="post.description"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Edytuj</button>
            </form>
        </v-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            post: {},
        };
    },
    created() {
        this.axios
            .get(`http://localhost:8000/api/posts/${this.$route.params.id}`)
            .then((res) => {
                this.post = res.data;
            });
    },
    methods: {
        updatePost() {
            this.axios
                .patch(
                    `http://localhost:8000/api/posts/${this.$route.params.id}`,
                    this.post
                )
                .then((res) => {
                    this.$router.push({ name: "home" });
                });
        },
    },
};
</script>
