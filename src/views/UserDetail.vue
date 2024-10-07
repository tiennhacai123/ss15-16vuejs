<template >
    <div>
        <h2>B9</h2>
        <p>Thong tin chi tiet</p>
        <p>Id: {{findUserById().id}}</p>
        <p>UserName: {{findUserById().username}}</p>
        <p>Address: {{findUserById().address}}</p>

    </div>
</template>
<script setup>
    import {useRoute} from 'vue-router' 
    const route = useRoute();
    console.log(route.params);
    const {id} = route.params
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
    const findUserById = ()=>{
        return users.find(item=>item.id==id)
    }
</script>
<style lang="">
    
</style>