// -- constants --
/// if in debug mode
const k_Debug = true

/// the spacebar keycode
const k_Space = 32

// -- impls --
class Game {
  // -- props --
  /// the window
  window = null

  /// the character image
  character = null

  // -- init --
  Run() {
    const m = this

    // set props
    m.window = window
    m.character = document.getElementById("character")

    // fix height of page wrapper to make it scrollable again
    const page = document.getElementById("page")
    const game = document.getElementById("game")
    const height = game.getBoundingClientRect().height
    page.style.height = `${height}px`

    // scroll container to bottom of page
    m.window.scrollTo(0, height)

    // bind events
    m.window.addEventListener("keypress", m.OnKeyPress)
    m.character.addEventListener("click", m.OnJump)



    // randomize dialog boxes positions
  }

  // -- commands --
  Jump(initialSpeed = 4.0, gravity = 0.01) {
    const m = this

    let initialPos = m.window.scrollY

    let speed = initialSpeed
    let pos = initialPos
    let lastTime = performance.now() - 16.0

    function doJump(time) {
      const delta = time - lastTime
      lastTime = time

      pos -= speed * delta
      speed -= gravity * delta

      dbg(`[jump] pos ${pos} speed ${speed} ${delta}`)
      m.window.scrollTo({ top: pos, left: 0, })

      if (pos > initialPos) {
        pos = initialPos
        dbg("[jump] end")
      } else {
        m.window.requestAnimationFrame(doJump)
      }
    }

    doJump(performance.now())
  }

  // -- events -
  /// when any key is pressed
  OnKeyPress = (evt) => {
    if (evt.charCode == k_Space) {
      this.OnJump(evt)
    }
  }

  /// when a jump input fires
  OnJump = (evt) => {
    evt.preventDefault()
    this.Jump()
  }
}

// -- helpers --
function dbg(msg) {
  if (k_Debug) {
    console.log(msg)
  }
}

// -- bootstrap --
new Game().Run()