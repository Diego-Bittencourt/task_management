<template>
    <header>
        <nav>
            <img src="../assets/top.png">
            <ul>
                <li><h2>Tasks</h2></li>
                <li><h2>Messages</h2></li>
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
    align-content: space-around;
}
</style>