<template>
    <header>
        <nav>
            <img src="../assets/top.png">
            <ul>
                <router-link to="/tasklist"><li><h1>Tasks</h1></li></router-link>
                <router-link to="/messages"><li><h1>Messages</h1></li></router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
header {
    width: 100%;
    background-color: #006172;
    color: #e6e6e6;
    padding: 1rem;
    
}

nav {
    display: flex;
    flex-direction: row;
}

img {
    width: 200px;
    height: auto;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex: auto;
    font-size: 2rem;
}
</style>