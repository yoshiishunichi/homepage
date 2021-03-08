<template>
  <section>
    <h5>{{ title }}</h5>
    <p>{{ date }}</p>
    <img v-if="source" :src="source" />
    <p>{{ description }}</p>
  </section>
</template>
