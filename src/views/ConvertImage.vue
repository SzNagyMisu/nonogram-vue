<script setup>
import { computed, ref } from 'vue';
import SetSize from '../components/SetSize.vue';

const imageRef = ref(null);
const canvasRef = ref(null);
const width = ref(0);
const height = ref(0);

const copyImageToCanvas = () => {
    canvasRef.value.width = width.value;
    canvasRef.value.height = height.value;

    const ctx = canvasRef.value.getContext("2d", { willReadFrequently: true });
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(imageRef.value, 0, 0, width.value, height.value);
}

const convertToTable = () => {
    const pixels = [];
    for (let rowIdx = 0; rowIdx < height.value; rowIdx++) {
        pixels[rowIdx] = [];
        for (let colIdx = 0; colIdx < width.value; colIdx++) {
            const pixelData = ctx.getImageData(colIdx, rowIdx, 1, 1).data;
            pixels[rowIdx][colIdx] = pixelData.every(colorComponent => colorComponent === 255) ? null : "black";
        }
    }
    console.log(pixels);
};

const imageWidth = computed(() => imageRef.value.width);
const imageHeight = computed(() => imageRef.value.height);

const setWidth = (value) => {
    width.value = value;
    height.value = Math.floor(value / imageWidth.value * imageHeight.value);
    copyImageToCanvas();
};

const setHeight = (value) => {
    height.value = value;
    width.value = Math.floor(value / imageHeight.value * imageWidth.value);
    copyImageToCanvas();
};
</script>

<template>
    <SetSize
        :rowCount="height"
        :colCount="width"
        @setRowCount="setHeight"
        @setColCount="setWidth"
    />

    <img src="pixel-rose.png" ref="imageRef" @load="copyImageToCanvas" />
    <canvas ref="canvasRef"></canvas>
</template>

<style scoped>
</style>
