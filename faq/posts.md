# posts

to add a post, create a file in [`src/routes/write/posts`](/src/routes/write/posts) with a name like:

```
21-12-14-23-30-my-very-good-post.svelte
```

that's the year (2 digits), the month, the day, the hour (24-hour time), the minute, and the name. the date is important, it must be exactly this format. the name is not important, it's just to help us identify the file.

inside the file, you can write a post using this structure (copy this snippet into the file if you want):

```html
<script>
  import Post from "./elements/Post.svelte"
</script>

<Post
  name="<name>"
  author="<your name>"
>
  <p>this is my very good post...</p>
</Post>
```

inside the `<Post>` tag, you can add any html or svelte stuff you want. the svelte `<style>` won't work, so don't use that. we can try and find a better css solution, but for now you can add styles to [app.css](/static/app.css) if you need custom styles for something.

## metadata

except for `name`, every attribute on `Post` is collected into a metadata object, but none of it is used atm. feel free to add any other metadata attributes.
