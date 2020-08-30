<script>
  const onClick = () => {
    window.addToCart();
  }
</script>
<div>This is the consumer</div>
<button on:click={onClick}>
  Add to cart!
</button>