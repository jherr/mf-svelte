<script>
  let count = 0;
  window.addToCart = () => {
    count += 1;
  }
</script>
<style>
  header {
    background: lightblue;
    padding: 1em;
    font-size: xx-large;
    display: grid;
    grid-template-columns: 90% 10%;
  }
</style>
<header>
  <div>My Svelte Header III</div>
  <div>{count}</div>
</header>