<script setup>
import { onMounted } from "vue";
import useRoles from "../../composables/roles";
const { role, updateRole, errors, showRole } = useRoles();
const props = defineProps({
    id: {
        required: true,
        type: String
    }
});

onMounted(() => showRole(props.id));
</script>

<template>
    <div class="container mt-5">
        <h3>Edit a role</h3>
        <form @submit.prevent="updateRole($route.params.id)">
            <div class="mb-3">
                <label for="" class="form-label">Role Name</label>
                <input type="text" class="form-control" v-model="role.role_name">
                <div v-if="errors.role_name">
                    <small class="form-text text-danger">{{ errors.role_name[0] }}</small>
                </div>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Description</label>
                <input type="text" class="form-control" v-model="role.description">
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