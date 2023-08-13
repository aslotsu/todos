<script>
    const getUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicoder.com/users")
        const text = await res.json()
        if (res.ok) {
            return text
        }
        else {
            throw new Error('can`t get users from text')
        }
    }

    let promise = getUsers()

</script>

{#await promise}
    <p>loading...</p>
    {:then users}
    {#each users as user}
        <p>{user.name}</p>
        {/each}
    {:catch error}
        <p>Unsuccessful await, {error}</p>
{/await}
