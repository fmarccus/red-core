import { ref } from "vue"
import axios from 'axios'

export default function useUsers() {
    const users = ref([]);

    const indexUsers = async() => {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/users");
        users.value = response.data.data;
        console.log(users.value);
    }

    return {
        users,
        indexUsers
    }
}