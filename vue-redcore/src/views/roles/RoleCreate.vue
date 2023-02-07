<script setup>
import { reactive } from "vue";
import useRoles from "../../composables/roles";
const { storeRole, errors } = useRoles();
const form = reactive({
    "role_name": "",
    "description": ""
});

</script>

<template>
    <div class="container mt-5">
        <RouterLink :to="{ name: 'RoleIndex' }" class="btn btn-light mb-3">Back</RouterLink>
        <h3>Create a new role</h3>
        <div class="row">
            <div class="col-sm-9">
                <div class="card border-light">
                    <div class="card-body">
                        <form @submit.prevent="storeRole(form)">
                            <div class="mb-3">
                                <label for="" class="form-label">Role Name</label>
                                <input type="text" class="form-control" v-model="form.role_name">
                                <div v-if="errors.role_name">
                                    <small class="form-text text-danger">{{ errors.role_name[0] }}</small>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Description</label>
                                <input type="text" class="form-control" v-model="form.description">
                                <div v-if="errors.description">
                                    <small class="form-text text-danger">{{ errors.description[0] }}</small>
                                </div>
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="btn btn-secondary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>