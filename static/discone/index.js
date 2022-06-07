// -- props --
/// the character image
let m_Character = null

// -- commands --
function Run() {
  // set props
  m_Character = document.getElementById("character")

  // fix height of page wrapper to make it scrollable again
  const page = document.getElementById("page")
  const game = document.getElementById("game")
  const height = game.getBoundingClientRect().height
  page.style.height = `${height}px`

  // scroll container to bottom of page
  window.scrollTo(0, height)
}

function Jump(initialSpeed = 4, gravity = 0.01) {
  // possibly a parameter
  let speed = initialSpeed

  let initialPos = window.scrollY
  let pos = initialPos
  let lastTime = performance.now() -16

  function doJump(time) {
    const delta = time - lastTime
    lastTime = time

    pos -= speed * delta
    speed -= gravity * delta

    window.scrollTo({
      top: pos,
      left: 0,
    })

    console.log("jumping", speed, pos, delta)

    if (pos > initialPos) {
      pos = initialPos
      console.log("end jump")
    } else {
      window.requestAnimationFrame(doJump)
    }
  }

  doJump(performance.now())
}

window.Jump = Jump

// -- bootstrap --
Run()