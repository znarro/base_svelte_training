<script>
  import Button from "../../lib/button/Button.svelte";
</script>

<div class="wrapper">
  <main>
    <Button on:click={() => console.log("Empieza!")}>Listo</Button>
  </main>
</div>

<style>
  .wrapper {
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
