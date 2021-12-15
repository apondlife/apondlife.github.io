# posts

to add a post, create a file in [`src/routes/write/posts`](/src/routes/write/posts).

## name

the filename must be in this format, for now:

```sh
year-month-day-hour-minute-name.svelte
# e.g.
21-12-14-23-30-my-very-good-post.svelte
```

the year is 2 digits, the hour is in 24-hour time. the date format is important, it must be exactly this. the name is not important, it's only there to help us identify the file.

## content

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

inside the `<Post>` tag, you can add any html or svelte things you'd like. the svelte `<style>` tag won't work, so don't use that. js probably won't either. we can try and find a better css/js solution, but for now you can add styles to [app.css](/static/app.css) or use the `style` property if you need custom styles for something.

## metadata

except for `name`, every property on `Post` is collected into a metadata obj, but none of it is used atm. feel free to add any other metadata properties.
