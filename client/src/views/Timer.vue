<template>
<section id="app" class="hero is-info is-fullheight is-bold">
  <div class="hero-body">
    <div class="container has-text-centered">

      <h2 class="title is-6">{{title}}</h2>

      <div id="timer">
        <span id="minutes">{{ minutes }}</span>
        <span id="middle">:</span>
        <span id="seconds">{{ seconds }}</span>
      </div>

      <div id="buttons">
        <!--     Start TImer -->
        <button id="start" class="button is-dark is-large" v-if="!timer" @click="startTimer">
          <i class="far fa-play-circle"></i>
        </button>
        <!--     Pause Timer -->
        <button id="stop" class="button is-dark is-large" v-if="timer" @click="stopTimer">
          <i class="far fa-pause-circle"></i>
        </button>
        <!--     Restart Timer -->
        <button id="reset" class="button is-dark is-large" v-if="resetButton" @click="resetTimer">
          <i class="fas fa-undo"></i>
        </button>
      </div>

    </div>
  </div>
</section>
</template>

<script>
</script>


<style>
#message {
  color: #ddd;
  font-size: 50px;
  margin-bottom: 20px;
}

#timer {
  font-size: 200px;
  line-height: 1;
  margin-bottom: 40px;
}
</style>