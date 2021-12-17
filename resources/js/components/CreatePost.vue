<template>
    <div>
        <h3 class="text-center">Stwórz wpis</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addPost">
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
                    <button type="submit" class="btn btn-primary">
                        Stwórz
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {},
        };
    },
    methods: {
        addPost() {
            this.axios
                .post("http://localhost:8000/api/posts", this.post)
                .then((response) => this.$router.push({ name: "home" }))
                .catch((err) => console.log(err))
                .finally(() => (this.loading = false));
        },
    },
};
</script>
