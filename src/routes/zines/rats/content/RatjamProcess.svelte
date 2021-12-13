
<template>
        <p class="Sidenote" style="margin-top: 00px;">you can click & hold for the rat to chase the cheese</p>
        <p class="Sidenote" style="margin-top: 30px;">the rat loves the cheesee</p>
        <p class="Sidenote" style="margin-top: 80px;">
          use the muscles in your head to rotate your eyes into different positions. this will allow you to look at different
          parts of the painting
        </p>
        <p class="Sidenote" style="margin-top: 60px;">the rat loves painting</p>


  <br/>


  <div class="positioner">
    <h1>how the rat gets made</h1>

    <p>a variety of materials, tools, and processes were used to make this piece</p>
    <p>the labor can be divided rougly into two parts: 1) making the painting, and 2) 2) making the rat</p>
    <p></p>

    <h2>the painting</h2>

    <p> TODO: ask mut and ali about the process <p>


    <h2>the rat</h2>

    <p>on October 16, while waiting for a C train that took more than an hour to come, I (fran) recorded a few videos of rats in the station. I will include a couple of them here</p>


    TODO: videos here


    <p>there seemed to be two rats, a larger one and a smaller one. i like to believe it was a momma rat and her baby</p>
    <p>i was lucky enough to have the momma rat skitter past me in that last video. this last video is what was eventually used as the source material for the animated rat in the piece</p>

    <p>originally, i'd recorded these because i was working on a one-week RTS prototype TODO: LINK and wanted to some rat assets for it</p>
    <p>mut saw this prototype and i mentioned that i'd wished the rats were animated, but it was too much work to figure it out</p>
    <p>later that night, mut DM'd me asking for the video</p>
    <p>and cropped out a little loop of animation</p>
    <p>i started updating the game with the gif, but that ended up getting deprioritized for other work</p>
    <p>about a month later, pondlife decided to make this zine, and we decided the theme would be rats</p>
    <p>we were sitting in the room that we do work, like we did on tuesday and thursday afternoons. i think mut had the idea that we should all work on a game together in realtime. mut set up a 10-minute timer on his computer, and we each got to have hands on keyboard and mouse for 10 minutes. when the timer ran out, we handed over to control to someone else. the rest of us sat around and watched and were free to comment or work on something else</p>
    <p>i forget exactly how we arrived on the idea of rotoscoping the rat gif</p>
    <p>mut started, and immediately started coding, but quickly switched to bringing the rat gif into blender and frame-by-frame tracing it. he only got a few frames in before he handed off the work to someone else who continued to trace every frame. we continued like this for about an hour until we traced all the frames</p>
    <p>different people had different tracing styles, which was interesting. at some point ali gave the rat a mickey mouse tatto on its butt</p>
    <p>ali was working on a website experiment, and the rest of us would take turns helping her while we weren't tracing the rat</p>
    <p>when we were done tracing, we switched back to coding. we wrote some quick javascript that would loop over all the frames and animate the rat. and some code to make the rat follow the cursor, and eventually made the cursor a cheese emoji</p>
    <p>i left at around this point while the rest of pondlife kept working. the next day i saw they'd added this painting as a background</p>

  </div>

</template>

<style>
  /* copy some zine styles */

  .positioner{
     width: 80%;
     margin-left: 20px;
  }

  /* get back the normal spacings */
  h1, h2, h3 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h1, h2, h3, p {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  /* -- e/sidenote */
  .Sidenote {
    box-sizing: content-box;
    position: relative;
    width: 100px;
    margin-left: 30px;
    padding-left: 20px;
    border-left: 1px dashed var(--fg-color-dark);
  }

</style>
