import { ref } from "vue"
import axios from 'axios'

export default function useRoles() {
    const roles = ref([]);

    const indexRoles = async() => {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/roles");
        roles.value = response.data.data;
        console.log(roles.value);
    }

    return {
        roles,
        indexRoles
    }
}