
<div>
    <slot></slot>
</div>

<style>


    div {
        border-top: 3px solid black;
        border-bottom: 1px solid transparent;
        border-left: 3px solid black;
        border-right: 1px solid transparent;
        padding: 30px;
        height: 100%;
        max-width: 1200px;
        min-width: 240px;
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        transition: height, border .2s ease;

    }

    div:not(:has(div)) {
    /*    scale: 0.9;*/
        border-bottom: 3px solid black;
        border-top: 1px solid transparent;
        border-right: 3px solid black;
        border-left: 1px solid transparent;
    /**/
    }


</style>