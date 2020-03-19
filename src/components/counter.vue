<template>
    <div>
        子组件计数器：
        <!-- {{$store.state.total}} -->
        {{$store.state.counter.total}}
    </div>
</template>

<script>
export default {
  name: "counter",
}
</script>

<style>

</style>