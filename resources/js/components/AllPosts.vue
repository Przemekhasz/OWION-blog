<template>
    <div>
        <h2 class="text-center">Lista wpisów</h2>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tytuł</th>
                    <th>Opis</th>
                    <!-- <th>Akcje</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.description }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link
                                :to="{ name: 'edit', params: { id: post.id } }"
                                class="btn btn-success"
                                >Edytuj</router-link
                            >
                            <button
                                class="btn btn-danger"
                                @click="deletePost(post.id)"
                            >
                                Usuń
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
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
