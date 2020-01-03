<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let current;
  export let ri;
  export let si;

  const click = () => {
    if (current.isFlagged) return;
    current.isOpen = true;
    dispatch("slotClicked", { ...current, ri, si });
  };

  const contextmenu = e => {
    e.preventDefault();
    current.isFlagged = !current.isFlagged;
    dispatch("slotRightClicked", { ...current, ri, si });
  };
</script>

<style>
  td {
    font-size: 2em;
  }

  td:hover,
  td:focus {
    cursor: pointer;
  }

  .color1 {
    color: blue;
  }
  .color2 {
    color: green;
  }
  .color3 {
    color: red;
  }
  .color4 {
    color: purple;
  }
  .color5 {
    color: burlywood;
  }
</style>

{#if !current.isOpen && !current.isFlagged}
  <td
    on:mouseup={click}
    on:mousedown={() => dispatch('slotDown')}
    on:contextmenu={contextmenu}>
    🤔
  </td>
{:else}
  <td>
    {#if current.isFlagged}
      🚩
    {:else if current.isBomb}
      💣
    {:else if current.isNearbyBomb}
      <span class="color{current.numberOfBombsNearby}">
        {current.numberOfBombsNearby}
      </span>
    {/if}
  </td>
{/if}
