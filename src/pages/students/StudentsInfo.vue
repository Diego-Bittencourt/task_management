<template>
    <section>
        <base-card>
        <div class="btnwrapper">
        <base-button to="/students/list" link>Students List</base-button>
        <base-button to="/students/addstudent" link>Add Students</base-button>
        </div>
        </base-card>
        <router-view></router-view>
    </section>
</template>

<style scoped>
.btnwrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
</style>