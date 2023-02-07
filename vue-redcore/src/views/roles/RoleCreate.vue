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
        <h3>Create a role</h3>
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
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>