<div>
    <slot></slot>
</div>

<style>
    div {
        border: 3px solid palegoldenrod;
        padding: 30px;
        height: 100%;
        max-width: 1800px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>