<template>
    <div class="login">
        <h1>
            Login
        </h1>
        <form @submit.prevent="login">
            <input type="text" name="email" id="email" placeholder="Email">
            <input type="password" name="password" id="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
    
</style>