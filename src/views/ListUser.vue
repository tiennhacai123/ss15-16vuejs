<template >
    <div>
        <h2>B9</h2>
        <ul v-for="user in users" :key="user.id">
            <li>Id: {{user.id}}</li>
            <li>UserName: {{user.username}}</li>
            <li>Address: {{user.address}}</li>
            <v-btn @click="findUser(user)" color="primary">Xem chi tiet</v-btn>
            <br>
            -------------------------------------
        </ul>
    </div>
</template>
<script setup>
    import {useRouter} from 'vue-router'
    const route = useRouter()
    const users = [
        {
            id:1,
            username:"tien1",
            address:"HN1"
        },
        {
            id:2,
            username:"tien2",
            address:"HN2"
        },{
            id:3,
            username:"tien3",
            address:"HN3"
        },
    ]
    const findUser=(user)=>{
        route.push(`/userdetail/${user.id}`)
    }
    
    
</script>
<style lang="">
    
</style>