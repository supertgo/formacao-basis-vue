<template>
    <div>
        <svgIcon type="mdi" :path="mdiCartOutline" size=40 />
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCartOutline } from '@mdi/js'

export default {
    components: {
        SvgIcon
    },
    setup() {
        return {
            SvgIcon,
            mdiCartOutline
        }
    },
}
</script>