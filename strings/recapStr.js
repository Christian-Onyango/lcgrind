const crop = (message, maxLength) => {
  if (maxLength > message.length) return message
  const part = message.substring(0, maxLength + 1)
  return part.substring(0, part.lastIndexOf(" "))
}
console.log(crop("Codility We test coders", 14))
