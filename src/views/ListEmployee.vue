<template>
  <div>
    <p>Danh sach nhan vien</p>
    <ul v-for="employee in employees" :key="employee.id">
        <li>Id: {{employee.id}}</li>
        <li>Name: {{employee.name}}</li>
        <li>Role: {{employee.role}}</li>
    </ul>
  </div>
</template>
<script setup>
    const employees = [
        {
            id:1,
            name:"Dien Tien",
            role:"Director"
        },
        {
            id:2,
            name:"Van Minh",
            role:"Labor"
        },
        {
            id:3,
            name:"Min Hin",
            role:'Trasher',
        }
        
    ]
</script>
<style>

</style>
