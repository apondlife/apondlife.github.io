# -- helpers --
# if this tool is managed by asdf
def asdf?(name)
  return !system("asdf current #{name} > /dev/null 2>&1")
end

# -- deps --
# for running the build tool (www)
brew "deno" unless asdf?("deno")