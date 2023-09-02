<script>
    import NavBarSide from "$lib/navbar/NavBarSide.svelte";
    import NavBarTop from "$lib/navbar/NavBarTop.svelte";
    import NavBarButton from "$lib/navbar/buttons/NavBarButton.svelte";

    import Check from "svelte-material-icons/Check.svelte";

    export const ssr = false;
</script>

<div>
  test
</div>

<!--<div class="full_window">-->
<!--    <div class="row_flex_container">-->
<!--        <div class="left_flex_container">-->
<!--            <NavBarSide/>-->
<!--        </div>-->

<!--        <div class="right_flex_container">-->
<!--            <div class="top_bar">-->
<!--                <NavBarTop/>-->
<!--            </div>-->
<!--            <div class="content_space">-->
<!--                <slot/>-->
<!--            </div>-->

<!--        </div>-->
<!--    </div>-->
<!--</div>-->

<slot/>

<style>
    .full_window {
        display: flex;
        width: min(100%, 100vw);
        height: min(100%, 100vh);
    }

    .row_flex_container {
        display: flex;
        flex-basis: 100%;
    }

    .left_flex_container {
        display: flex;
        flex-direction: column;
        background-color: black;
    }

    .right_flex_container {
        flex-grow: 999;
        display: flex;
        flex-flow: column;
        background-color: black;
    }

</style>
