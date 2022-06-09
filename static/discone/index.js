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

  grounds = []

  // -- init --
  Start() {
    const m = this

    // set props
    m.window = window
    m.character = document.getElementById("character")

    // fix height of page wrapper to make it scrollable again the height
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
    m.character.addEventListener("touchstart", (e) => e.preventDefault())
    m.character.addEventListener("contextmenu", (e) => e.preventDefault())

    // randomize dialog box positions
    const descriptions = document.querySelectorAll(".Pitch-description")
    const min = 0
    const max = 50

    for (const d of descriptions) {
      const pos = lerp(min, max, Math.random())
      if (!d.style.left) {
        d.style.left = `${pos}%`
      }
    }

    // make all divs ground
    const charFeet = m.character.getBoundingClientRect().bottom
    const grounds = document.querySelectorAll(".Ground")
    for (const g of grounds) {
      const top = g.getBoundingClientRect().top
      m.grounds.push(height + top - charFeet)
      dbg(height + top)
    }
    m.grounds.sort().reverse()
    dbg(m.grounds)


    m.pos = document.documentElement.scrollTop  || document.body.scrollTop
    m.ground = m.ground[0]
    dbg(m.ground)
    m.Update(m.time)
  }

  Update(time) {
    const m = this
    const delta = time - m.time
    m.time = time

    // squish
    if(m.jumpDown >= 0) {
      const jumpTime = m.time - m.jumpDown
      const scale = clamp(1 - (jumpTime / 10000.0) * 0.7, 0.7, 1)
      m.character.style.transform = `scaleY(${scale})`
    } else {
      m.character.style.transform = `scaleY(${1})`
    }

    // update y position
    if(!m.isGrounded) {
      m.jumpDown = -1

      m.pos -= m.speed * delta
      m.speed -= m.gravity * delta

      dbg(`[jump] pos ${m.pos} speed ${m.speed} ${delta}`)
      m.window.scrollTo({ top: m.pos, left: 0, })

      // if going up "raycast" to find closes ground
      if(m.speed > 0) {
        // find nearest ground below
        for(let i = 0; i < m.grounds.length; i++) {
          if(m.pos > m.grounds[i]) break;
          m.ground = m.grounds[i]
          dbg(`ground break!, ${m.ground}`)
        }
      } else {
        // if going down, stop when hitting ground
        if (m.pos > m.ground) {
          m.pos = m.ground
          m.isGrounded = true
          dbg("[jump] end")
        }
      }
    }

    m.window.requestAnimationFrame(m.Update.bind(m))
  }

  // -- commands --
  Jump(initialSpeed = 4.0, gravity = 0.01) {
    const m = this
    console.log("jump")

    m.ground = m.window.scrollY
    m.speed = initialSpeed
    m.gravity = kGravity
    m.isGrounded = false
    return
  }

  // -- events -
  /// when any key is pressed
  OnKeyUp = (evt) => {
    if (evt.keyCode == k_Space) {
      this.OnJumpUp(evt)
    }
  }

  /// when any key is released
  OnKeyDown = (evt) => {
    if (evt.keyCode === k_Space) {
      this.OnJumpDown(evt)
    }
  }

  /// when a jump input fires
  OnJumpUp = (evt) => {
    evt.preventDefault()
    if(this.jumpDown < 0) return
    this.Jump()
  }

  OnJumpDown = (evt) => {
    evt.preventDefault()

    if (this.jumpDown < 0) {
      this.jumpDown = this.time
    }
  }
}

// -- bootstrap --
new Game().Start()

// -- lib --
function dbg(msg) {
  if (k_Debug) {
    console.log(msg)
  }
}

function lerp(a, b, t) {
  if(Array.isArray(a)) {
    console.assert(Array.isArray(b), "if arrays, both should be arrays")
    console.assert(a.length == b.length, "if arrays both should be same length")
    const r = new Array(a.length)
    for (let i = 0; i < a.length; i++) {
      r[i] = lerp(a[i], b[i], t)
    }
    return r
  }

  return a + (a-b) * t
}

function clamp(a, min=0, max=1) {
  return Math.max(Math.min(a, max), min)
}

function hex2rgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null
}

function rgb2hex(rgb) {
    return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)
}

function rgb2hsl(color) {
  const r = color[0]/255
  const g = color[1]/255
  const b = color[2]/255

  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max == min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = (l > 0.5 ? d / (2 - max - min) : d / (max + min))
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  return [h, s, l]
}

function hsl2rgb(color) {
  let l = color[2]

  if (color[1] == 0) {
    l = Math.round(l*255)
    return [l, l, l]
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1/6) return p + (q - p) * 6 * t
      if (t < 1/2) return q
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
      return p
    }

    const s = color[1]
    const q = (l < 0.5 ? l * (1 + s) : l + s - l * s)
    const p = 2 * l - q
    const r = hue2rgb(p, q, color[0] + 1/3)
    const g = hue2rgb(p, q, color[0])
    const b = hue2rgb(p, q, color[0] - 1/3)
    return [Math.round(r*255), Math.round(g*255), Math.round(b*255)]
  }
}