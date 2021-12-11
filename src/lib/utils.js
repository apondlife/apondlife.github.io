/// join a list of classes
export function cx(...classes) {
  return classes.filter((c) => c).join(" ")
}