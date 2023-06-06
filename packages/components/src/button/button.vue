<template>
    <div :class="className">
        <slot></slot>
    </div>
</template>
<script  lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: "WButton",
    setup() {
        const className = computed(() => {
            return [
                'w-button'
            ]
        })
        return {
            className
        }
    }
})

</script>