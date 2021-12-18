<template>
    <div>
        <b-navbar toggleable type="dark" variant="dark">
            <router-link to="/" class="nav-item nav-link"> OWION </router-link>

            <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">
                        <router-link to="/create" class="nav-item nav-link">
                            Utwórz wpis
                        </router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <router-view> </router-view>
    </div>
</template>
<script>
export default {};
</script>
