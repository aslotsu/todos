<div>
    <slot></slot>
</div>

<style>
    div {
        border: 3px solid rgb(238, 232, 170);
        padding: 30px;
        height: 100%;
        max-width: 1800px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
    }

    div:not(:has(div)) {
        border: 3px solid rgb(238, 232, 170);
        width: 40vw;
        margin-left: 30vw;
        padding: 10px;
    }
</style>