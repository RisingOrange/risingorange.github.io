<template>
  <div
    @click="onClick($event)"
    @contextmenu="onClick($event)"
    class="click-area noselect"
    :style="{ color: clickNumberColor }"
  >
    {{ clickAmount }}
  </div>
  <div style="font-size: xx-large; padding: 20px; text-align: center">
    {{ lastCpsResult }} cps
  </div>
  <div
    style="text-align:center; padding:10px;"
  >{{ testDurationSecs }} second(s)
  </div>
  <input
    v-model="testDurationSecs"
    v-if="!isTestRunning"
    type="range" min="1" max="15" step="1"
    style="display:block; margin:auto;"
  >
</template>

<script>
import Swal from 'sweetalert2'

function rgb (r, g, b) {
  return `rgb(${r},${g},${b})`
}

function round (value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

function disableContextMenu () {
  document.addEventListener(...contextMenuDisabler)
}

function enableContextMenu () {
  document.removeEventListener(...contextMenuDisabler)
}

const contextMenuDisabler = [
  'contextmenu',
  (e) => { e.preventDefault() }
]

export default {
  name: 'App',
  data: function () {
    return {
      isTestRunning: false,
      clickAmount: 0,
      testDurationSecs: 8,
      lastCpsResult: 0
    }
  },
  methods: {
    onClick (e) {
      // preventing right-click contextmenu from showing up
      e.preventDefault()

      if (!this.isTestRunning) {
        this.isTestRunning = true
        this.clickAmount = 0
        setTimeout(() => this.onTestEnd(), this.testDurationSecs * 1000)
      }
      this.clickAmount += 1
    },
    onTestEnd () {
      this.isTestRunning = false

      const clicksPerSecond = round(this.clickAmount / this.testDurationSecs, 2)
      this.lastCpsResult = clicksPerSecond
      this.clickAmount = 0

      this.showResultAlert(clicksPerSecond)
    },
    showResultAlert (clicksPerSecond) {
      disableContextMenu() // disables contextmenu
      Swal.fire({
        text: `${clicksPerSecond} CPS`,
        confirmButtonText: 'Ok',
        allowOutsideClick: false,
        willClose: enableContextMenu // reenables contextmenu
      })
    }
  },
  computed: {
    clickNumberColor () {
      return rgb(this.clickAmount * 8, 0, 0)
    }
  },
  setup () {
    // disable zooming, because fast tapping on mobile triggers it
    const meta = [...document.getElementsByTagName('meta')].filter(x => x.name === 'viewport')[0]
    meta.content = 'width=device-width, user-scalable=no'
  }
}
</script>

<style scoped>
.click-area {
  width:95%;
  height:500px;
  border:10px solid #000;
  font-size:1500%;
  text-align:center;
  vertical-align:middle;
  line-height:500px;
  margin:auto;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
