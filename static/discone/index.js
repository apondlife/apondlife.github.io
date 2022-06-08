// -- constants --
/// if in debug mode
const k_Debug = true

/// the spacebar keycode
const k_Space = 32

/// the page height
const k_PageHeight = 42069

const kGravity = 0.01
const slowGravity = 0.001

// -- impls --
class Game {
  // -- props --
  /// the window
  window = null

  /// the character image
  character = null

  time = -16

  jumpDown = -1
  speed = 0
  gravity = kGravity
  isGrounded = true
  pos = 0
  ground = 0

  // -- init --
  Run() {
    const m = this

    // set props
    m.window = window
    m.character = document.getElementById("character")

    // fix height of page wrapper to make it scrollable again; the height
    // could be calculated from #game height
    const page = document.getElementById("page")
    const height = k_PageHeight
    page.style.height = `${height}px`

    // scroll container to bottom of page
    m.window.scrollTo(0, height)

    // bind events
    m.window.addEventListener("keydown", m.OnKeyDown)
    m.window.addEventListener("keyup", m.OnKeyUp)
    m.character.addEventListener("pointerdown", m.OnJumpDown)
    m.character.addEventListener("pointerup", m.OnJumpUp)

    // randomize dialog box positions
    const descriptions = document.querySelectorAll(".Pitch-description");
    const min = 0
    const max = 50

    for (const d of descriptions) {
      const pos = Math.random() * (max-min) + min;
      if (!d.style.left) {
        d.style.left = `${pos}%`
      }
    }

    m.pos = height
    this.Update(m.time)
  }

  Update(time) {
    const m = this
    const delta = time - m.time
    this.time = time

    const scale = Math.min(Math.max(0, 1 - (m.jumpDown / 2000.0) * 0.7), 1)
    m.character.style.transform = `scaleY(${scale})`

    // update y position
    if(!m.isGrounded) {
      m.jumpDown = -1;

      m.pos -= m.speed * delta
      m.speed -= m.gravity * delta

      dbg(`[jump] pos ${m.pos} speed ${m.speed} ${delta}`)
      m.window.scrollTo({ top: m.pos, left: 0, })

      if (m.pos > m.ground && m.speed < 0) {
        m.pos = m.ground
        m.isGrounded = true;
        dbg("[jump] end")
      }
    }

    m.window.requestAnimationFrame(m.Update.bind(m))
  }

  // -- commands --
  Jump(initialSpeed = 4.0, gravity = 0.01) {
    const m = this

    m.ground = m.window.scrollY
    m.speed = initialSpeed
    m.gravity = kGravity
    m.isGrounded = false
    return;
  }

  // -- events -
  /// when any key is pressed
  OnKeyUp = (evt) => {
    if (evt.keyCode == k_Space) {
      this.OnJumpUp(evt)
    }
  }

  OnKeyDown = (evt) => {
    if (evt.keyCode == k_Space) {
      this.OnJumpDown(evt)
    }
  }

  /// when a jump input fires
  OnJumpUp = (evt) => {
    evt.preventDefault()
    this.Jump()
  }

  OnJumpDown = (evt) => {
    evt.preventDefault()
    this.jumpDown = performance.now()-this.time
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