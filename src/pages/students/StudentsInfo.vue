<template>
    <section>
        <base-card>
        <base-button to="/students/list" link>Students List</base-button>
        <base-button to="/students/addstudent" link>Add Students</base-button>
        </base-card>
        <router-view></router-view>
    </section>
</template>