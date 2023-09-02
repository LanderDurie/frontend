<script>
    // import IconAccessibility from '~icons/carbon/accessibility'
    import NavBarButton from "$lib/navbar/buttons/NavBarButton.svelte";
    import Check from "svelte-material-icons/Check.svelte";


    // const topButtonsAdmin = [
    //     {id: '0', text: 'Planner', href: '/scheduler', icon: IconAccessibility},
    //     {id: '1', text: 'Live Routes', href: '/live_routes', icon: IconAccessibility},
    //     {id: '2', text: 'Gebruikers', href: '/users', icon: IconAccessibility},
    //     {id: '3', text: 'Routes', href: '/routes', icon: IconAccessibility},
    //     {id: '4', text: 'Gebouwen', href: '/buildings', icon: IconAccessibility}
    // ];
</script>


<div class="side_bar_top"></div>
<div class="scrollable">
    <div class="side_bar_mid">
        <NavBarButton name="dashboard" path="" icon={Check}/>
        <NavBarButton name="status" path="status" icon={Check}/>
        <NavBarButton name="prometheus" path="engine" icon={Check}/>
        <NavBarButton name="wallets" path="wallets" icon={Check}/>
    </div>
</div>
<div class="side_bar_bot">

</div>

<style>
    .scrollable {
        display: flex;
        overflow-y: auto;
        overflow-x: hidden;
        flex-direction: column;
        margin: 40px 0 8px;
        flex: 999;
    }

    .side_bar_mid {
        background-color: yellow;
        display: flex;
        flex-flow: column;
        gap: 8px;
        padding: 0 16px 0 16px;
        flex: 999;
    }

    .side_bar_top {
        display: flex;
        flex-basis: 56px;
        background-color: yellow;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 144px;
    }

    .side_bar_bot {
        display: flex;
        flex-flow: column;
        flex: 1;
        gap: 8px;
        padding: 50px 16px 40px 16px;
        background-color: yellow;
    }
</style>
