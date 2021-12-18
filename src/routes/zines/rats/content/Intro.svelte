<template>
  <article class="Intro">
    <p>
      welcome to our first webzine, <strong>rats</strong>.
    </p>

    <p>
      in here, you will encounter <span class="Rats" /> & things about rats & things concerning
      rats. we chose the theme "rats" somewhat arbitrarily: b/c we love <span class="Rats" />
      & b/c we wanted to make a bunch of small games (<span class="Arts" />) together & b/c
      we hoped it would allow us to cohere our explorations of our divergent interests & b/c
      we're trying to figure how to make <span class="Arts" /> sustainably in every sense of
      the word.
    </p>

    <p>
      this is one long scrolling page. you can keep scrolling down to see more stuff. if you
      don't like the thing on screen, you might find something you do once you scroll down a
      little farther. there are things to play & things to read & things to look at, &c. all
      sorts of things.
    </p>

    <p>
      thanks for visiting,
      <br>
      pondlife
    </p>

    <p>
      p.s. (you will find the table of contents below)
    </p>
  </article>
</template>

<style>
  .Intro {
    font-size: 1.3em;
  }

  .Intro p + p {
    margin-top: 20px;
  }

  .Rats::before {
    content: "rats";
  }

  .Rats:hover::before {
    content: "arts";
  }

  .Arts::before {
    content: "arts";
  }

  .Arts:hover::before {
    content: "rats";
  }
</style>
