<template>
    <div>
        <a :href="href" target="_blank" class="px-3 py-2 rounded border border-red-600 hover:bg-red-500 hover:text-white">Youtube</a>
    </div>
</template>
<script setup>

const props = defineProps({
    href: String,
})

</script>