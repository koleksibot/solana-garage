export default function sleep(ms) {
  return new Promise((res) => {
    setTimeout(res, ms ?? 2000)
  })
}