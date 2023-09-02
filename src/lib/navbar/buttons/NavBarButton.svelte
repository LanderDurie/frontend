<script>
  import { goto } from '$app/navigation';
  import { page } from "$app/stores";

    export let name;
    export let path;
    export let icon;

    $: isButtonActive = $page.url.pathname.split("/").at(1) === path

    function clicked() {
      if(!isButtonActive) {
        goto(`/${path}`, { replaceState: false })
      }
    }
</script>


<nav>
  <button id="button" class={isButtonActive ? "button_selected" : "button_default"} title={name} on:click={() => clicked()}>
    <div class="button_container">
      <div class="icon_container">
        <div class="icon">
          <svelte:component this={icon} />
        </div>
      </div>
      <div class="button_text">
        {name}
      </div>
    </div>
  </button>
</nav>


<style lang="postcss">

    @media screen and (min-width:900px) {
        #button {
            font-size: 14px;
            text-align: left;
            height: 30px;
            min-width: 190px;
        }
    }
    @media screen and (max-width:900px) {
        #button {
            /* Hide the text. */
            font-size: 0;
            height: 30px;
            max-width: 30px;
        }
    }

    #button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;

        border-radius: 8px;
        border-width: 0;
    }

    .button_default {
        background-color: #212121;
        color: #F96743;
        transition: background-color 0.2s, min-width 0.02s, font-size 0.02s;
    }

    .button_default:hover {
        transition: background-color 0.07s, min-width 0.02s, font-size 0.02s;
        background-color: #1A1A1A;
    }

    .button_selected {
        color: #1A1A1A;
        background-color: #F96743;
        transition: background-color 0.1s, min-width 0.02s, font-size 0.02s;
    }

    .button_container {
      display: flex;
        flex-flow: row;
    }

    .icon_container {
        width: 30px;
        height: 30px;
    }

    .icon {
        position: relative;
        left: 6px;
        top: 6px;
    }

    .button_text {
      margin: auto 0;
    }

</style>
