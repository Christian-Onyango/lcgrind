var Logger = function () {
  this.printed = new Map()
}

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.printed.has(message)) {
    const last = this.printed.get(message)
    if (timestamp - last < 10) {
      return false
    } else {
      this.printed.set(message, timestamp)
      return true
    }
  }
  this.printed.set(message, timestamp)
  return true
}
