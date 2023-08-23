<script>
  import { onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";

  // Props
  export let type = "button";
  export let variant = "primary";

  let buttonElement;

  onMount(() => {
    const buttonRipple = new MDCRipple(buttonElement);
  });
</script>

<div class="mdc-touch-target-wrapper mdc-menu-surface--anchor">
  <button
    bind:this={buttonElement}
    class="mdc-button mdc-button--touch mdc-button--raised"
    {type}
    on:click
  >
    <span class="mdc-button__ripple" />

    <span class="mdc-button__touch" />
    <span class="mdc-button__label bs-button">
      <slot />
    </span>
  </button>
</div>

<style src="./button.scss"></style>
